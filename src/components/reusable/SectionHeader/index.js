import React from "react";

// Reusable section header with badge, title, and subtitle
export default function SectionHeader({
    badge,
    badgeColor = "red",
    title,
    highlightedText,
    subtitle,
    centered = true,
    highlightType = "gradient"
}) {
    const badgeColors = {
        red: "bg-red-500/5 border-red-500/10 text-red-700 dark:text-red-500",
        slate: "bg-slate-500/10 border-slate-500/20 text-slate-600 dark:text-slate-400",
        blue: "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400",
    };

    const highlightClasses = "gradient-text";

    return (
        <div className={`mb-16 ${centered ? "text-center" : ""}`}>
            {badge && (
                <span className={`inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4 ${badgeColors[badgeColor] || badgeColors.red}`}>
                    {badge}
                </span>
            )}
            <h2 className="section-title text-gray-900 dark:text-white">
                {title} {highlightedText && <span className={highlightClasses}>{highlightedText}</span>}
            </h2>
            {subtitle && (
                <p className={`section-subtitle text-gray-600 dark:text-gray-400 mt-4 ${centered ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
