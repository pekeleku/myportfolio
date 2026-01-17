import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { scrollto } from "../utils/scroll";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "../components/reusable/Icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Projects", target: "portfolio" },
    { name: "Skills", target: "advantage" },
    { name: "About", target: "me" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "navbar-fixed py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
                W
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-700 to-red-900 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollto(link.target)}
                className="nav-link"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label="Toggle theme"
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* CTA Button */}
            {/* <a
              href="https://www.linkedin.com/in/walter-aluman/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow text-sm px-6 py-3 hidden sm:flex items-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a> */}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
                isMenuOpen
                  ? "bg-red-500/10"
                  : "bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
            >
              <div className={`${isMenuOpen ? "hamburger-active" : ""}`}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mobile-nav rounded-2xl p-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollto(link.target);
                  setIsMenuOpen(false);
                }}
                className="w-full text-left py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all duration-300 block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
              </button>
            ))}
            <div className="gradient-divider my-3"></div>

            {/* Theme toggle in mobile menu */}
            <button
              onClick={toggleTheme}
              className="w-full text-left py-3 px-4 text-gray-600 dark:text-gray-300 hover:text-red-700 dark:hover:text-red-500 rounded-xl transition-all duration-300 flex items-center gap-3"
            >
              {isDarkMode ? (
                <>
                  <SunIcon className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            {/* <a
              href="https://www.linkedin.com/in/walter-aluman/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow w-full text-center text-sm py-3 mt-2 block"
            >
              Let's Talk
            </a> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
