"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  status: string;
  description: string;
  imageUrl: string;
}

interface PropertyListProps {
  onSelectProperty?: (property: Property) => void;
}

export function PropertyList({ onSelectProperty }: PropertyListProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const properties: Property[] = [
    {
      id: "sunshore-heights",
      title: "Sunshore Heights",
      location: "Los Angeles, CA",
      price: "$1,550,000",
      beds: 5,
      baths: 2,
      sqft: "4,100 sq ft",
      status: "For Sale",
      description:
        "Sunshore Heights blends contemporary coastal architecture, ocean views, private amenities, and refined comfort within an exclusive setting.",
      imageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "greenleaf-villas",
      title: "GreenLeaf Villas",
      location: "Phoenix Hil 23, AZ",
      price: "$980,000",
      beds: 4,
      baths: 2,
      sqft: "2,200 sq ft",
      status: "For Sale",
      description:
        "GreenLeaf Villas combines modern architecture, lush gardens, private amenities, and serene spaces for refined, nature-inspired luxury living.",
      imageUrl:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "azure-bay-residence",
      title: "Azure Bay Residence",
      location: "Malibu, CA",
      price: "$2,850,000",
      beds: 4,
      baths: 3,
      sqft: "3,800 sq ft",
      status: "For Sale",
      description:
        "Private panoramic oceanfront estate with infinity pool, glass-wrapped living spaces, and bespoke artisanal finishes crafted for discerning owners.",
      imageUrl:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "the-grand-horizon",
      title: "The Grand Horizon",
      location: "Aspen, CO",
      price: "$3,200,000",
      beds: 5,
      baths: 4,
      sqft: "4,600 sq ft",
      status: "For Sale",
      description:
        "Alpine architectural masterwork offering vaulted timber beams, private spa, and floor-to-ceiling panoramic vistas in an ultra-exclusive enclave.",
      imageUrl:
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleCardClick = (prop: Property) => {
    setSelectedProperty(prop);
    onSelectProperty?.(prop);
  };

  return (
    <section id="properties" className="w-full bg-[#FCFCFD] py-20 sm:py-28 lg:py-32 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#19191B] font-body">
            <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <span className="bg-[#FFAC0A] rounded-[1px]" />
              <span className="bg-[#19191B] rounded-[1px]" />
              <span className="bg-[#19191B] rounded-[1px]" />
              <span className="bg-[#FFAC0A] rounded-[1px]" />
            </span>
            <span>Property List</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-[#19191B] tracking-tight leading-[1.15]">
            Explore Our Exclusive
            <br />
            Properties
          </h2>
        </div>

        {/* 2-Column Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-3xl border border-[#EEEEF1] p-3.5 sm:p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-[#FFAC0A]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#EFECE6] mb-5">
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* For Sale Pill Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#19191B] bg-white/95 backdrop-blur-md shadow-sm font-body">
                    {property.status}
                  </span>
                </div>

                {/* Specs Bottom Overlay Bar */}
                <div className="absolute bottom-3 inset-x-3 z-10">
                  <div className="bg-[#19191B]/75 backdrop-blur-md rounded-xl px-4 py-2.5 text-white flex items-center justify-between text-xs sm:text-sm font-medium border border-white/10 font-body">
                    {/* Bedrooms */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#FFAC0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.beds} Bedrooms</span>
                    </div>

                    {/* Bathrooms */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#FFAC0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>{property.baths} Bathrooms</span>
                    </div>

                    {/* Area */}
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-[#FFAC0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body Info */}
              <div className="px-1.5 space-y-4">
                {/* Title & Price Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#19191B] tracking-tight group-hover:text-[#FFAC0A] transition-colors">
                    {property.title}
                  </h3>
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#19191B] tracking-tight">
                    {property.price}
                  </div>
                </div>

                {/* Location */}
                <div className="text-xs sm:text-sm font-medium text-[#71717A] -mt-2 font-body">
                  {property.location}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#71717A] font-body font-normal leading-relaxed line-clamp-2">
                  {property.description}
                </p>

                {/* View Detail Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleCardClick(property)}
                    className="w-full py-3.5 rounded-full text-sm font-semibold text-white bg-[#19191B] hover:bg-[#FFAC0A] hover:text-[#19191B] active:scale-[0.99] transition-all duration-200 shadow-md cursor-pointer text-center font-body"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Property Quick View Modal */}
      {selectedProperty && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200 font-sans"
          onClick={() => setSelectedProperty(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EEEEF1] p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src={selectedProperty.imageUrl}
                alt={selectedProperty.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex justify-between items-baseline">
              <h4 className="text-2xl font-bold font-display text-[#19191B]">
                {selectedProperty.title}
              </h4>
              <span className="text-2xl font-bold font-display text-[#FFAC0A]">
                {selectedProperty.price}
              </span>
            </div>
            <p className="text-xs text-[#71717A] font-body">{selectedProperty.location}</p>
            <p className="text-sm text-[#71717A] font-body">{selectedProperty.description}</p>
            <div className="flex justify-between text-xs font-semibold text-[#19191B] pt-2 border-t border-gray-100 font-body">
              <span>{selectedProperty.beds} Beds</span>
              <span>{selectedProperty.baths} Baths</span>
              <span>{selectedProperty.sqft}</span>
            </div>
            <button
              onClick={() => setSelectedProperty(null)}
              className="w-full py-3 rounded-full bg-[#19191B] text-white hover:bg-[#FFAC0A] hover:text-[#19191B] font-semibold text-sm transition-colors font-body cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
