"use client";

import React from "react";

export function HomeDeserveSection() {
  return (
    <section className="relative w-full min-h-[540px] sm:min-h-[620px] lg:min-h-[700px] flex flex-col justify-end overflow-hidden bg-black pb-8 sm:pb-12 lg:pb-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="/Assets/video/home-deserve-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle Top & Bottom Gradient Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-[1] pointer-events-none" />

      {/* Full Width Translucent Glass Strip without border or shadow */}
      <div className="relative z-10 w-full bg-black/60 backdrop-blur-md py-7 sm:py-9 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-2.5 sm:space-y-3">
          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight">
            The Home You Deserve
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-white/85 font-light leading-relaxed max-w-5xl">
            Craft your perfect haven with iNilam. Our exclusive plots are designed to transform your
            dreams into reality – where serenity meets sophistication and every inch echoes
            timeless elegance. Step into a life of comfort, luxury and unmatched quality – because
            you deserve nothing less.
          </p>
        </div>
      </div>
    </section>
  );
}
