import React from "react";

// Reusable skill card for technologies
export default function SkillCard({ name, icon, gradientColor = "from-red-600 to-red-900" }) {
    return (
        <div className="skill-card group cursor-pointer">
            {/* Icon Container */}
            <div className="relative mb-4">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradientColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <img
                        src={icon}
                        alt={name}
                        className="w-12 h-12 object-contain dark:filter dark:brightness-0 dark:invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Skill Name */}
            <p className="text-gray-600 dark:text-gray-400 font-medium text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                {name}
            </p>

            {/* Glow line */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${gradientColor} group-hover:w-3/4 transition-all duration-300 rounded-full`}></div>
        </div>
    );
}
