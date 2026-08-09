import React from "react";
import { IconButton } from "@/components/reusable/Button";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/reusable/Icons";

export default function Sosmed() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/pekeleku",
      icon: <GitHubIcon className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/walter-aluman/",
      icon: <LinkedInIcon className="w-5 h-5" />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/wollly__/",
      icon: <InstagramIcon className="w-5 h-5" />
    },
  ];

  return (
    <div className="flex flex-row items-center gap-3">
      {socials.map((social, index) => (
        <IconButton
          key={index}
          href={social.url}
          title={social.name}
          className="w-12 h-12" // Slightly smaller for hero
        >
          {social.icon}
        </IconButton>
      ))}
    </div>
  );
}
