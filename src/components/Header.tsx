"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onOpenSchedule?: () => void;
}

export function Header({ onOpenSchedule }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const propertyLinks = [
    { title: "All Properties", desc: "Browse full global portfolio", href: "#properties" },
    { title: "Waterfront Villas", desc: "Private beaches & oceanfront living", href: "#waterfront" },
    { title: "Penthouse Suites", desc: "Panoramic skyline views & sky gardens", href: "#penthouses" },
    { title: "Modern Mansions", desc: "Architectural masterworks & estates", href: "#mansions" },
  ];

  const pagesLinks = [
    { title: "About Us", desc: "The heritage and vision of INilam", href: "#about" },
    { title: "Bespoke Services", desc: "Acquisition, advisory & concierge", href: "#services" },
    { title: "Private Advisors", desc: "Meet our global luxury experts", href: "#advisors" },
    { title: "Journal & Insights", desc: "Luxury real estate market trends", href: "#journal" },
    { title: "FAQ", desc: "Common acquisition questions", href: "#faq" },
  ];

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] !fixed"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            >
              <div className="relative h-10 w-36 sm:h-11 sm:w-44">
                <Image
                  src="/Assets/i-nilam-main.png"
                  alt="INilam Luxury Real Estate"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Right Side: Navigation Links & Get In Touch Button */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <nav className="flex items-center space-x-1 lg:space-x-2">
              {/* Home */}
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-white hover:text-[#FFAC0A] transition-colors duration-200"
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="#about"
                className="px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200"
              >
                About
              </Link>

              {/* Property Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("property")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 group cursor-pointer"
                >
                  <span>Property</span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:text-white ${
                      activeDropdown === "property" ? "rotate-180 text-[#FFAC0A]" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Property Menu Panel */}
                {activeDropdown === "property" && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-[#19191B]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {propertyLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-sm font-medium text-white group-hover:text-[#FFAC0A] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Pages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("pages")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200 group cursor-pointer"
                >
                  <span>Pages</span>
                  <svg
                    className={`w-3.5 h-3.5 text-white/70 transition-transform duration-200 group-hover:text-white ${
                      activeDropdown === "pages" ? "rotate-180 text-[#FFAC0A]" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Pages Menu Panel */}
                {activeDropdown === "pages" && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-[#19191B]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/15 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {pagesLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-3.5 py-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-sm font-medium text-white group-hover:text-[#FFAC0A] transition-colors">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="#contact"
                className="px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Get In Touch Button */}
            <button
              type="button"
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-[#19191B] bg-[#EFECE6] hover:bg-white active:scale-95 transition-all duration-200 shadow-md border border-white/20 cursor-pointer whitespace-nowrap"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/15 bg-[#19191B]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 text-white">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-white hover:bg-white/10"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-white/80 hover:bg-white/10"
          >
            About
          </Link>

          {/* Mobile Property Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileSubmenu("property")}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-base font-medium text-white/80 hover:bg-white/10"
            >
              <span>Property</span>
              <svg
                className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                  mobileExpanded["property"] ? "rotate-180 text-[#FFAC0A]" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileExpanded["property"] && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-xl my-1 border border-white/10">
                {propertyLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-2 text-sm text-white/90 hover:text-[#FFAC0A]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Pages Accordion */}
          <div>
            <button
              type="button"
              onClick={() => toggleMobileSubmenu("pages")}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-base font-medium text-white/80 hover:bg-white/10"
            >
              <span>Pages</span>
              <svg
                className={`w-4 h-4 text-white/70 transition-transform duration-200 ${
                  mobileExpanded["pages"] ? "rotate-180 text-[#FFAC0A]" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileExpanded["pages"] && (
              <div className="pl-4 pr-2 py-1 space-y-1 bg-white/5 rounded-xl my-1 border border-white/10">
                {pagesLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 px-2 text-sm text-white/90 hover:text-[#FFAC0A]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-xl text-base font-medium text-white/80 hover:bg-white/10"
          >
            Contact
          </Link>

          {/* Mobile Get in Touch Button */}
          <div className="pt-4 mt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule?.();
              }}
              className="w-full text-center py-3 rounded-full text-sm font-semibold bg-[#EFECE6] text-[#19191B] hover:bg-white transition-colors"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
