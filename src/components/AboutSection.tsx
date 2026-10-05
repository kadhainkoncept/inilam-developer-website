"use client";

import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  onReadMore?: () => void;
}

export function AboutSection({ onReadMore }: AboutSectionProps) {
  const advisors = [
    {
      name: "Alexander Wright",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Sophia Chen",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Marcus Vance",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    },
    {
      name: "Elena Rostova",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-20 sm:py-28 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text, CTA & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-12">
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#19191B] font-body">
                <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                  <span className="bg-[#FFAC0A] rounded-[1px]" />
                  <span className="bg-[#19191B] rounded-[1px]" />
                  <span className="bg-[#19191B] rounded-[1px]" />
                  <span className="bg-[#FFAC0A] rounded-[1px]" />
                </span>
                <span>About Us</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#19191B] font-display leading-[1.15]">
                Where Luxury Feels
                <br />
                Effortless
              </h2>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-[#71717A] leading-relaxed max-w-xl font-body font-normal">
                INilam connects discerning clients with exceptional properties, combining refined
                expertise, personalized service, and timeless design to create seamless real estate
                experiences defined by trust, elegance, and lasting value.
              </p>

              {/* Read More Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onReadMore}
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-semibold text-white bg-[#19191B] hover:bg-[#FFAC0A] hover:text-[#19191B] active:scale-95 transition-all duration-200 shadow-md cursor-pointer font-body"
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Bottom Numbers / Stats */}
            <div className="pt-6 grid grid-cols-2 gap-8 sm:gap-12 border-t border-transparent">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#19191B] tracking-tight">
                  658+
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#71717A] mt-1.5 font-body">
                  Properties Sold
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#19191B] tracking-tight">
                  97%
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#71717A] mt-1.5 font-body">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Boxes Layout */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Top Rectangle: Large Horizontal Image Box */}
            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-lg bg-[#EFECE6] group">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury Villa Terrace with Pool"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Bottom Row: 2 Side-by-Side Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Bottom-Left Box: Dining Patio Image */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-[#EFECE6] group">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Dining & Glass Pavilion"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Bottom-Right Box: Charcoal Accent Card with Agent Avatars */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-[#19191B] text-white p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-lg group hover:border-[#FFAC0A]/40 border border-transparent transition-all duration-300">
                {/* Overlapping Avatars */}
                <div className="flex items-center -space-x-2.5 mb-4">
                  {advisors.map((advisor, i) => (
                    <div
                      key={advisor.name}
                      className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-[#19191B] shadow-sm bg-neutral-700"
                      style={{ zIndex: advisors.length - i }}
                    >
                      <Image
                        src={advisor.img}
                        alt={advisor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-tight mb-1.5">
                  95% Expert Agents
                </h3>

                {/* Card Subtext */}
                <p className="text-xs text-white/70 font-body font-light tracking-wide">
                  Expertise. Trust. Luxury. Results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
