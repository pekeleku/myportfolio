"use client";

import { useState } from "react";
import SectionHeader from "@/components/reusable/SectionHeader";
import ProjectCard from "@/components/reusable/ProjectCard";
import { OutlineButton } from "@/components/reusable/Button";
import { ExternalLinkIcon } from "@/components/reusable/Icons";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("professional");

  const professionalProjects = [
    {
      title: "Integrated Command Center (Backoffice)",
      description:
        "A dynamic and customizable dashboard built to monitor and manage operational data in real time through a flexible interface.",
      image: "./img/projects/p6.png",
      link: "#",
      tags: ["Next.js", "TailwindCSS", "Bootstrap"],
      featured: true,
    },
    {
      title: "Integrated Command Center (Dashboard)",
      description:
        "Real-time control and monitoring with a comprehensive and accurate dashboard.",
      image: "./img/projects/p7.png",
      link: "#",
      tags: ["Next.js", "TailwindCSS", "Bootstrap"],
      featured: true,
    },
    {
      title: "Prodia",
      description:
        "An internal CMS designed to manage company content with role-based access and structured data flow.",
      image: "./img/projects/p8.png",
      link: "#",
      tags: ["Next.js", "TailwindCSS"],
      featured: true,
    },
    {
      title: "LMS Garuda Indonesia",
      description:
        "Interactive Learning Management System for Garuda Indonesia, delivering engaging and interactive learning experiences.",
      image: "./img/projects/p9.png",
      link: "#",
      tags: ["Next.js", "TailwindCSS", "shadcn/ui", "TypeScript", "TanStack Query"],
      featured: false,
    },
    {
      title: "DNX (PT Dyno Nobel Indonesia)",
      description:
        "Custom module derived from the VMS product, tailored for PT Dyno Nobel Indonesia with reliable data fetching.",
      image: "./img/projects/p10.png",
      link: "#",
      tags: ["Next.js", "TailwindCSS", "Bootstrap", "TanStack Query"],
      featured: false,
    },
  ];

  const personalProjects = [
    {
      title: "Luxspace",
      description:
        "Premium furniture e-commerce platform with cart system and product catalog",
      image: "./img/projects/p1.JPG",
      link: "https://luxspace-pwa-mu.vercel.app/",
      tags: ["React.js", "Express.js", "TailwindCSS"],
      featured: false,
    },
    {
      title: "Lacaza Coffee",
      description:
        "Coffee ordering application with menu management and order tracking",
      image: "./img/projects/p2.PNG",
      link: "https://lacazacoffe.vercel.app/",
      tags: ["React.js", "Express.js", "TailwindCSS"],
      featured: false,
    },
    {
      title: "Store Gaming",
      description: "Gaming store with product showcase and shopping features",
      image: "./img/projects/p3.JPG",
      link: "https://stret.vercel.app/",
      tags: ["Next.js", "Express.js", "CSS Modules"],
      featured: false,
    },
  ];

  const tabs = [
    { key: "professional", label: "Professional" },
    { key: "personal", label: "Personal" },
  ];

  const projects = activeTab === "professional" ? professionalProjects : personalProjects;
  const isPrivate = activeTab === "professional";

  return (
    <section className="py-24 relative" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="My Work"
          badgeColor="red"
          title="Featured"
          highlightedText="Projects"
          subtitle="A collection of projects I've built with passion and precision"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-12" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-red-700 to-red-900 text-white shadow-lg"
                  : "text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-red-700/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - keyed by tab so it re-mounts & replays the fade on switch */}
        <div key={activeTab} className="tab-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                tags={project.tags}
                featured={project.featured}
                isPrivate={isPrivate}
              />
            ))}
          </div>

          {/* Coming Soon - only in Professional tab */}
          {activeTab === "professional" && (
            <div className="text-center mt-12">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Other professional projects will be displayed soon.
              </p>
            </div>
          )}

          {/* View All Button - only in Personal tab */}
          {activeTab === "personal" && (
            <div className="text-center mt-12">
              <OutlineButton href="https://github.com/pekeleku">
                <span>View Public Projects on GitHub</span>
                <ExternalLinkIcon className="w-5 h-5" />
              </OutlineButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
