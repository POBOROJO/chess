import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="logo.jpeg"
              alt="Chess Academy Logo"
              className="h-8 w-8 lg:h-10 lg:w-10 rounded-full mr-2 lg:mr-3 object-cover border border-emerald-400"
            />
            <span className="font-display text-lg lg:text-xl font-bold text-white tracking-tight">
              Talent Chess Academy
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center space-x-4 lg:space-x-8">
            <a
              href="#about"
              className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
            >
              About
            </a>
            <a
              href="#services"
              className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
            >
              Services
            </a>
            <a
              href="#process"
              className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
            >
              Process
            </a>
            <a
              href="#testimonials"
              className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button
            onClick={scrollToContact}
            className="hidden sm:block font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 tracking-wide text-sm lg:text-base"
          >
            Book a Free Lesson
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden text-white p-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
            <nav className="flex flex-col space-y-4 p-4">
              <a
                href="#about"
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a
                href="#testimonials"
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToContact();
                }}
                className="font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 tracking-wide text-center mt-2"
              >
                Book a Free Lesson
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
