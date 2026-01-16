import React from "react";

// Reusable glass card with blur effect
export default function GlassCard({ children, className = "", hover = true }) {
    return (
        <div className={`glass-card ${hover ? "" : "hover:transform-none hover:shadow-none"} ${className}`}>
            {children}
        </div>
    );
}
