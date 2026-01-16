import React from "react";
import SectionHeader from "../components/reusable/SectionHeader";
import ProjectCard from "../components/reusable/ProjectCard";
import { OutlineButton } from "../components/reusable/Button";
import { ExternalLinkIcon } from "../components/reusable/Icons";

export default function Projects() {
  const projects = [
    {
      title: "Luxspace",
      description: "Premium furniture e-commerce platform with cart system and product catalog",
      image: "./img/projects/p1.JPG",
      link: "https://luxspace-pwa-mu.vercel.app/",
      tags: ["React.js", "Express.js", "TailwindCSS"],
      featured: true
    },
    {
      title: "Lacaza Coffee",
      description: "Coffee ordering application with menu management and order tracking",
      image: "./img/projects/p2.PNG",
      link: "https://lacazacoffe.vercel.app/",
      tags: ["React.js", "Express.js", "TailwindCSS"],
      featured: false
    },
    {
      title: "Store Gaming",
      description: "Gaming store with product showcase and shopping features",
      image: "./img/projects/p3.JPG",
      link: "https://stret.vercel.app/",
      tags: ["Next.js", "Express.js", "CSS Modules"],
      featured: false
    }
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
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <OutlineButton href="https://github.com/pekeleku">
            <span>View All on GitHub</span>
            <ExternalLinkIcon className="w-5 h-5" />
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
