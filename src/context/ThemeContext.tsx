"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
  mounted: boolean;
} | undefined>(undefined);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    const isDarkMode = theme === 'dark';

    // Sync theme from localStorage on mount (avoids hydration mismatch)
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        if (saved) {
            setTheme(saved);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
        setMounted(true);
    }, []);

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
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, mounted }}>
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
