"use client";

import SectionHeader from "@/components/reusable/SectionHeader";
import SkillCard from "@/components/reusable/SkillCard";
import CustomSlider from "@/components/reusable/CustomeSlider/CustomSlider";

export default function Advantage() {
  const skills = [
    {
      name: "ReactJS",
      icon: "./img/advantage/react.svg",
      color: "from-red-600 to-red-800",
    },
    {
      name: "Next.js",
      icon: "./img/advantage/icon-nextjs.svg",
      color: "from-slate-600 to-slate-800",
    },
    {
      name: "TailwindCSS",
      icon: "./img/advantage/tailwind.svg",
      color: "from-red-800 to-red-950",
    },
    {
      name: "TypeScript",
      icon: "./img/advantage/ts.svg",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Figma",
      icon: "./img/advantage/figma.svg",
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "Sass",
      icon: "./img/advantage/sass.svg",
      color: "from-red-700 to-red-900",
    },
    {
      name: "Bootstrap",
      icon: "./img/advantage/bootstrap.svg",
      color: "from-slate-500 to-slate-700",
    },
  ];

  const additionalSkills = [
    "TypeScript",
    "JavaScript",
    "Git",
    "REST APIs",
    "VS Code",
    "Jira (Agile / Scrum)",
  ];

  return (
    <section id="advantage" className="py-24 relative">
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          badge="What I Use"
          badgeColor="red"
          title="My"
          highlightedText="Super Powers"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Skills Slider */}
        <CustomSlider
          settings={{
            centerMode: false,
            pauseOnHover: false,
            autoplaySpeed: 1500,
          }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="px-2">
              <SkillCard
                name={skill.name}
                icon={skill.icon}
                gradientColor={skill.color}
              />
            </div>
          ))}
        </CustomSlider>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
