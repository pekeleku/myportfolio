"use client";
import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "../Icons";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Calculate 60% of the total scrollable height
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const threshold = scrollHeight * 0.6; // 60% threshold as requested

            if (window.pageYOffset > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-[99] p-3 rounded-xl bg-white dark:bg-dark-200 border border-border-color shadow-lg transition-all duration-500 group overflow-hidden ${isVisible
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <ChevronUpIcon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-red-700 dark:group-hover:text-red-500 transition-all duration-300 group-hover:-translate-y-1" />
        </button>
    );
}
