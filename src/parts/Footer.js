import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            © {currentYear} Walter B.G Aluman. Crafted with  React
          </p>
          <div className="flex items-center gap-6">
            <button className="text-gray-500 dark:text-gray-500 text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </button>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Made in 🇮🇩 Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
