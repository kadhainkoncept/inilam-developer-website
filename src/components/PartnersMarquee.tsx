"use client";

import React from "react";

export function PartnersMarquee() {
  const partners = [
    {
      name: "Brandleap",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="currentColor">
          <g>
            {/* Hexagonal linked cube mark */}
            <path
              d="M10 4L18 8.5V17.5L10 22L2 17.5V8.5L10 4Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M10 13L18 17.5V26.5L10 31L2 26.5V17.5L10 13Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M18 8.5L26 13V22L18 26.5L10 22V13L18 8.5Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <text
              x="34"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="17"
              fontWeight="800"
              letterSpacing="-0.5"
            >
              Brandleap
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "DigiNerve",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 130 32" fill="currentColor">
          <g>
            {/* Antenna star node mark */}
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="16" cy="6" r="1.5" />
            <circle cx="12" cy="16" r="2.5" />
            <path d="M8 8L12 16M16 6L12 16" stroke="currentColor" strokeWidth="1.2" />
            <text
              x="22"
              y="22"
              fontFamily="serif"
              fontSize="18"
              fontWeight="700"
              letterSpacing="0.2"
            >
              DigiNerve
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "Grovia",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 120 32" fill="currentColor">
          <g>
            {/* Triple layered upward chevron mark */}
            <path
              d="M12 4L3 13H7.5L12 8.5L16.5 13H21L12 4Z"
              fill="currentColor"
            />
            <path
              d="M12 11L4.5 18.5H9L12 15.5L15 18.5H19.5L12 11Z"
              fill="currentColor"
            />
            <path
              d="M12 18L6 24H10.5L12 22.5L13.5 24H18L12 18Z"
              fill="currentColor"
            />
            <text
              x="28"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="18"
              fontWeight="800"
              letterSpacing="-0.4"
            >
              Grovia
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "HexaLabs",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 135 32" fill="currentColor">
          <g>
            {/* Skyline bar structure mark */}
            <rect x="2" y="14" width="3.5" height="12" rx="0.8" fill="currentColor" />
            <rect x="7.5" y="8" width="3.5" height="18" rx="0.8" fill="currentColor" />
            <rect x="13" y="12" width="3.5" height="14" rx="0.8" fill="currentColor" />
            <path
              d="M9.25 4V8M9.25 4H15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <text
              x="22"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="17"
              fontWeight="700"
            >
              HexaLabs
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "Hustlo",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 115 32" fill="currentColor">
          <g>
            {/* Orbital disc & smiling bowl mark */}
            <circle cx="10" cy="9" r="3" fill="currentColor" />
            <path
              d="M3 15C3 19 6.5 23 10 23C13.5 23 17 19 17 15C17 15 13.5 17.5 10 17.5C6.5 17.5 3 15 3 15Z"
              fill="currentColor"
            />
            <text
              x="24"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="18"
              fontWeight="800"
              letterSpacing="-0.2"
            >
              Hustlo
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "Ignitix",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 120 32" fill="currentColor">
          <g>
            {/* Modular interlocking discs */}
            <rect x="2" y="10" width="12" height="12" rx="2" fill="currentColor" />
            <circle cx="14" cy="10" r="4.5" fill="currentColor" />
            <circle cx="6" cy="22" r="2.5" fill="white" />
            <text
              x="22"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="18"
              fontWeight="600"
              letterSpacing="0.2"
            >
              Ignitix
            </text>
          </g>
        </svg>
      ),
    },
    {
      name: "NovaSpark",
      icon: (
        <svg className="h-6 w-auto" viewBox="0 0 145 32" fill="currentColor">
          <g>
            {/* Pixel mosaic block icon */}
            <rect x="2" y="8" width="6" height="6" fill="currentColor" />
            <rect x="9" y="4" width="4.5" height="4.5" fill="currentColor" />
            <rect x="9" y="9.5" width="4.5" height="4.5" fill="currentColor" />
            <rect x="2" y="15" width="4.5" height="4.5" fill="currentColor" />
            <text
              x="20"
              y="22"
              fontFamily="var(--font-dm-sans), sans-serif"
              fontSize="17"
              fontWeight="800"
              letterSpacing="-0.3"
            >
              NovaSpark
            </text>
          </g>
        </svg>
      ),
    },
  ];

  // Duplicate list to form a seamless infinite loop
  const marqueeList = [...partners, ...partners, ...partners];

  return (
    <section className="w-full bg-white border-y border-[#EEEEF1] py-8 sm:py-10 relative overflow-hidden">
      {/* Left Gradient Fade Mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Right Gradient Fade Mask */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Scrolling Marquee Container */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center space-x-12 sm:space-x-16 lg:space-x-20">
          {marqueeList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center text-[#19191B]/60 hover:text-[#19191B] transition-colors duration-200 cursor-pointer flex-shrink-0 select-none group"
              title={partner.name}
            >
              <div className="opacity-75 group-hover:opacity-100 transition-opacity">
                {partner.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
