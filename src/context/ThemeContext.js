import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // Determine initial state: 
    // 1. Check localStorage ('theme' key)
    // 2. Fallback to OS preference
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme');
            if (saved) return saved;

            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            return mql.matches ? 'dark' : 'light';
        }
        return 'light'; // Default for SSR
    });

    const isDarkMode = theme === 'dark';

    useEffect(() => {
        const root = window.document.documentElement;

        // Sync class with state
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Save to localStorage whenever it changes
        localStorage.setItem('theme', theme);
    }, [theme, isDarkMode]);

    // Listen for OS theme changes (only if user hasn't set a manual override in this session's state)
    useEffect(() => {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            // Only auto-update if there's no manual preference in localStorage
            // or if we want it to always sync (here we respect manual override until cleared)
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        mql.addEventListener('change', handleChange);
        return () => mql.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
