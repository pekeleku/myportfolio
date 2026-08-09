"use client";
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState, useMemo } from "react";
import { GlowButton, OutlineButton } from "@/components/reusable/Button";
import GlassCard from "@/components/reusable/GlassCard";
import Sosmed from "./Sosmed";
import { MailIcon, CodeIcon } from "@/components/reusable/Icons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const roles = useMemo(() => ["Frontend Developer", "Frontend Engineer"], []);
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate years of experience from Sept 2023
  const experienceYears = useMemo(() => {
    const startDate = new Date(2023, 8, 14); // September 14, 2023
    const today = new Date();
    const diffInMs = today.getTime() - startDate.getTime();
    const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));
    return `${years}+ Years`;
  }, []);

  // Typing animation effect
  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (isTyping) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRole, roles]);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
      {/* Floating Orbs Background */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      <div className="grid-pattern"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div
            className={`lg:w-1/2 order-last lg:order-first transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/5 border border-red-500/10 mb-6">
              <span className="text-2xl">👋</span>
              <span className="text-red-700 dark:text-red-500 font-medium">Hello, I'm</span>
            </div>

            {/* Name */}
            <h1 className="text-gray-900 dark:text-white font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-4">
              Walter B.G
              <span className="block gradient-text">Aluman</span>
            </h1>

            {/* Animated Role */}
            <div className="h-12 mb-8">
              <span className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-red-700 ml-1 animate-pulse"></span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
              Building performant web applications with a strong focus on clean architecture and maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <GlowButton href="mailto:alumanwalter@gmail.com">
                <MailIcon className="w-5 h-5" />
                <span>Hire Me</span>
              </GlowButton>
              <OutlineButton
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </OutlineButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 dark:text-gray-500 text-sm">Follow me</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gray-400 dark:from-gray-600 to-transparent"></div>
              <Sosmed />
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`lg:w-1/2 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-900/10 via-red-800/10 to-slate-900/10 rounded-3xl blur-2xl"></div>

              {/* Main Image Container */}
              <div className="relative">
                <div className="image-glow">
                  <img
                    src="./img/profile.jpg"
                    alt="Walter B.G Aluman"
                    className="w-full max-w-md h-auto rounded-3xl object-cover"
                  />
                </div>

                {/* Floating Tags */}
                <GlassCard className="absolute -left-6 top-8 px-4 py-3 flex items-center gap-2 fade-in-left delay-500">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-gray-900 dark:text-white text-sm font-medium">WFH/WFO</span>
                </GlassCard>

                <GlassCard className="absolute -right-4 bottom-20 px-4 py-3 fade-in-right delay-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center">
                      <CodeIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white text-sm font-semibold">{experienceYears}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">Experience</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="absolute -left-8 bottom-8 px-4 py-3 fade-in-left delay-900">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚛️</span>
                    <span className="text-gray-900 dark:text-white text-sm font-medium">React/Next.js</span>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-gray-400 dark:text-gray-500 text-sm">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
