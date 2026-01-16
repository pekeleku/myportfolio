import React from "react";

// Reusable project card
export default function ProjectCard({
    title,
    description,
    image,
    link,
    tags = [],
    featured = false
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card group ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-3xl">
                <img
                    src={image}
                    alt={title}
                    className="project-card-image"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* View Project Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <span className="btn-glow text-sm px-6 py-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project
                    </span>
                </div>

                {/* Featured Badge */}
                {featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-red-700 to-red-900 text-white text-xs font-semibold z-10 shadow-lg">
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-700 dark:group-hover:text-red-500 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="tech-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Border Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-800 to-red-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
        </a>
    );
}
