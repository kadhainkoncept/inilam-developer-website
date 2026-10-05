"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3500);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Project", href: "#properties" },
    { label: "Blog Post", href: "#journal" },
  ];

  const resourceLinks = [
    { label: "FAQs", href: "#faq" },
    { label: "Agent", href: "#advisors" },
    { label: "Career", href: "#career" },
    { label: "Support", href: "#contact" },
    { label: "Single Post", href: "#journal" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ];

  return (
    <footer className="w-full flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* Left Column: Inilam Charcoal Side */}
      <div className="w-full lg:w-5/12 bg-[#19191B] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-12">
        <div className="space-y-6">
          {/* Logo */}
          <Link href="/" className="inline-block group">
            <div className="relative h-10 w-40 sm:h-11 sm:w-48">
              <Image
                src="/Assets/i-nilam-main.png"
                alt="INilam Luxury Real Estate"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Description */}
          <p className="text-xs sm:text-sm text-white/80 font-body font-light leading-relaxed max-w-md">
            Curating exceptional properties and refined living experiences for those who seek
            elegance, exclusivity, and lasting value.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 pt-2 text-xs sm:text-sm text-white/80 font-body">
            {/* Address */}
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#FFAC0A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>25 Avenue Montaigne, 75008 Paris</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#FFAC0A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(+098) 765 432 10</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-[#FFAC0A] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>inilam.info@mail.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Box */}
        <div className="space-y-3 pt-4">
          <h4 className="text-base sm:text-lg font-semibold font-display text-white tracking-tight">
            Subscribe Our Newsletter
          </h4>

          <form onSubmit={handleSubscribe} className="relative max-w-md font-body">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Add Email"
              required
              className="w-full bg-white text-[#19191B] placeholder-[#71717A] text-sm rounded-full py-3.5 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-[#FFAC0A] shadow-md"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#19191B] text-white flex items-center justify-center hover:bg-[#FFAC0A] hover:text-[#19191B] transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-[#FFAC0A] animate-in fade-in duration-200 font-body">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Right Column: Warm Beige Side */}
      <div className="w-full lg:w-7/12 bg-[#EFECE6] text-[#19191B] p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-12">
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Quick Link */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold font-display text-[#19191B] tracking-tight">
              Quick Link
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#19191B]/80 font-body font-normal">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FFAC0A] hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-bold font-display text-[#19191B] tracking-tight">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#19191B]/80 font-body font-normal">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FFAC0A] hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-base sm:text-lg font-bold font-display text-[#19191B] tracking-tight">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#19191B]/80 font-body font-normal">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FFAC0A] hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA & Copyright */}
        <div className="space-y-6 pt-6">
          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-base sm:text-lg font-bold font-display text-[#19191B] max-w-md tracking-tight">
              Begin Your Journey Toward Exceptional Luxury Living Today
            </h3>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#19191B] hover:bg-[#FFAC0A] hover:text-[#19191B] transition-all duration-200 active:scale-95 shadow-md whitespace-nowrap self-start sm:self-auto font-body"
            >
              Get Started
            </Link>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-[#19191B]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A] font-body font-normal">
            <div>Copyright © 2026 inilam</div>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-[#19191B] transition-colors">
                Term of Services
              </Link>
              <Link href="/privacy" className="hover:text-[#19191B] transition-colors">
                Privacy & Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
