"use client";

import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { PropertyList } from "../components/PropertyList";
import { HomeDeserveSection } from "../components/HomeDeserveSection";
import { Footer } from "../components/Footer";

export default function Home() {
  const handleOpenSchedule = () => {
    console.log("Open schedule modal");
  };

  const handleExploreClick = () => {
    const el = document.getElementById("properties");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReadMore = () => {
    console.log("Read more clicked");
  };

  return (
    <main className="min-h-screen bg-white text-[#19191B] flex flex-col font-sans">
      {/* Header */}
      <Header onOpenSchedule={handleOpenSchedule} />

      {/* Hero Section */}
      <Hero onExploreClick={handleExploreClick} />

      {/* About Us Section */}
      <AboutSection onReadMore={handleReadMore} />

      {/* Partners Infinite Marquee */}
      <PartnersMarquee />

      {/* Property List Section */}
      <PropertyList />

      {/* The Home You Deserve Video Section */}
      <HomeDeserveSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}







