import React from "react";
import { scrollto } from "@/utils/scroll";
import { IconButton } from "@/components/reusable/Button";
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon, LocationIcon } from "@/components/reusable/Icons";

export default function Sitemap() {
  return (
    <section id="me" className="py-24 relative">
      <div className="gradient-divider mb-16"></div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center font-bold text-white text-lg">
                W
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">My</span>
                <span className="text-gray-900 dark:text-white">Portfolio</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Frontend developer passionate about creating beautiful,
              performant web applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollto("portfolio")}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 text-sm hover:translate-x-2 transform transition-all duration-300 inline-block"
                >
                  → Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollto("advantage")}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 text-sm hover:translate-x-2 transform transition-all duration-300 inline-block"
                >
                  → Skills
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/pekeleku"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 text-sm hover:translate-x-2 transform transition-all duration-300 inline-block"
                >
                  → GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Contact</h5>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:alumanwalter@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-700 dark:hover:text-red-500 text-sm flex items-center gap-2 transition-colors duration-300"
                >
                  <MailIcon className="w-4 h-4" />
                  alumanwalter@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                  <LocationIcon className="w-4 h-4" />
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-gray-900 dark:text-white font-semibold text-lg mb-6">Follow Me</h5>
            <div className="flex gap-3">
              <IconButton
                href="https://github.com/pekeleku"
                title="GitHub"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/walter-aluman/"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/wollly__/"
                title="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
