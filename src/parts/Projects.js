import React from "react";
import SectionHeader from "../components/reusable/SectionHeader";
import ProjectCard from "../components/reusable/ProjectCard";
import { OutlineButton } from "../components/reusable/Button";
import { ExternalLinkIcon } from "../components/reusable/Icons";

export default function Projects() {
  const projects = [
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

        {/* Projects Grid */}
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
              isPrivate={index < projects.length - 3}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <OutlineButton href="https://github.com/pekeleku">
            <span>View Public Projects on GitHub</span>
            <ExternalLinkIcon className="w-5 h-5" />
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
