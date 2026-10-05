"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  onExploreClick?: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  const pillars = [
    {
      num: "01.",
      text: "Exclusive properties selected for you.",
    },
    {
      num: "02.",
      text: "Strategic marketing for exceptional properties.",
    },
    {
      num: "03.",
      text: "Smart opportunities for long-term value.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-transparent text-white flex flex-col justify-between overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="/Assets/video/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Dark Gradient Overlay for optimal contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 z-[1] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12 w-full flex-1 flex flex-col justify-between">
        {/* Top & Middle Section: Headline & CTA */}
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display mb-8 drop-shadow-sm">
            Exceptional Homes,
            <br />
            Extraordinary Living
          </h1>

          {/* CTA & Subtitle Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 max-w-3xl">
            {/* Explore Button */}
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-[#19191B] bg-white hover:bg-[#EFECE6] active:scale-95 transition-all duration-200 shadow-xl cursor-pointer whitespace-nowrap self-start font-body"
            >
              Explore Our Homes
            </button>

            {/* Subtitle description */}
            <p className="text-sm sm:text-base text-white/85 font-body font-normal leading-relaxed drop-shadow-sm">
              Discover exceptional properties crafted for refined living, timeless elegance, and an
              extraordinary lifestyle in the world&apos;s most prestigious destinations.
            </p>
          </div>
        </div>

        {/* Bottom Section: 3 Pillars + Bottom Right Image Card */}
        <div className="pt-16 sm:pt-20 lg:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left / Middle: 3 Pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="border-b border-white/25 pb-4 space-y-2 group"
              >
                <div className="text-sm font-semibold text-white/95 font-display">
                  {pillar.num}
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-body font-normal leading-snug">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Bottom: Luxury Image Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="w-full sm:w-80 aspect-[16/10] rounded-2xl border-4 border-[#EFECE6]/90 shadow-2xl overflow-hidden relative group transition-transform duration-300 hover:scale-[1.02] bg-[#2A2A2E]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Modern Architecture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
