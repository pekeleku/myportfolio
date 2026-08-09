import React from "react";

// Primary gradient button with glow effect
export function GlowButton({ children, href, onClick, className = "", size = "md" }: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: string;
}) {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const baseClasses = `btn-glow inline-flex items-center justify-center gap-2 ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}

// Outline button with glow on hover
export function OutlineButton({ children, href, onClick, className = "", size = "md" }: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    size?: string;
}) {
    const sizeClasses = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const baseClasses = `btn-outline-glow inline-flex items-center justify-center gap-2 ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}

// Icon button (for social links, theme toggle, etc.)
export function IconButton({ children, href, onClick, className = "", title = "" }: {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    title?: string;
}) {
    const baseClasses = `social-link text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
                title={title}
            >
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses} title={title}>
            {children}
        </button>
    );
}
