export interface Property {
  id: string;
  title: string;
  tagline: string;
  price: number;
  formattedPrice: string;
  type: "Villa" | "Penthouse" | "Mansion" | "Estate";
  location: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  garage: number;
  pool: boolean;
  yearBuilt: number;
  badge: "Exclusive" | "Featured" | "New Listing" | "Under Contract" | "Architectural Icon";
  description: string;
  amenities: string[];
  placeholderLabel: string;
  placeholderDimensions: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "The Solstice Waterfront Villa",
    tagline: "Ultra-modern architectural estate with private yacht marina access",
    price: 18500000,
    formattedPrice: "$18,500,000",
    type: "Villa",
    location: "Miami Beach, Florida",
    address: "4420 Star Island Drive, Miami Beach, FL",
    beds: 6,
    baths: 8,
    sqft: 9850,
    garage: 4,
    pool: true,
    yearBuilt: 2024,
    badge: "Exclusive",
    description:
      "A transcendent waterfront masterpiece crafted with limestone, floor-to-ceiling motorized glass facades, infinity edge lap pool, temperature-controlled 1,200 bottle wine cellar, and private 100ft deep-water dock.",
    amenities: [
      "Deep Water Dock (100ft)",
      "Infinity Edge Pool & Spa",
      "Rooftop Sunset Terrace",
      "Private Wellness Sauna & Steam",
      "Smart Home Automation (Crestron)",
      "Sub-Zero & Gaggenau Kitchen",
    ],
    placeholderLabel: "The Solstice Waterfront Villa Exterior & Pool Deck",
    placeholderDimensions: "1600 x 1060",
  },
  {
    id: "prop-2",
    title: "The Horizon Sky Penthouse",
    tagline: "Panoramic 360-degree city skyline & ocean view duplex residence",
    price: 24000000,
    formattedPrice: "$24,000,000",
    type: "Penthouse",
    location: "Tribeca, New York",
    address: "56 Leonard St, Penthouse 54, New York, NY",
    beds: 5,
    baths: 6,
    sqft: 8200,
    garage: 3,
    pool: true,
    yearBuilt: 2023,
    badge: "Architectural Icon",
    description:
      "Hovering above the Manhattan skyline, this architectural triplex penthouse features 24ft cantilevered ceilings, private sky terrace with plunge pool, dedicated private elevator, and bespoke Italian Calacatta marble finishes.",
    amenities: [
      "Private Elevator Access",
      "Heated Sky Terrace Plunge Pool",
      "Bespoke Italian Boffi Kitchen",
      "24/7 White-Glove Doorman & Concierge",
      "Private 3-Car Automated Vault",
      "Acoustic Dolby Atmos Screening Room",
    ],
    placeholderLabel: "The Horizon Sky Penthouse Glass Facade & Sky Lounge",
    placeholderDimensions: "1600 x 1060",
  },
  {
    id: "prop-3",
    title: "Bel-Air Belvedere Estate",
    tagline: "Grand neoclassical modern mansion nestled on 2 private hilltop acres",
    price: 32500000,
    formattedPrice: "$32,500,000",
    type: "Mansion",
    location: "Bel-Air, Los Angeles",
    address: "10771 Bellagio Road, Los Angeles, CA",
    beds: 8,
    baths: 11,
    sqft: 14500,
    garage: 6,
    pool: true,
    yearBuilt: 2024,
    badge: "Featured",
    description:
      "Unrivaled tranquility in the most prestigious enclave of Bel-Air. Includes an indoor Olympic swimming pavilion, championship tennis court, 20-seat Dolby Atmos cinema, guest pavilion, and cascading manicured Italian gardens.",
    amenities: [
      "2-Acre Hilltop Gated Grounds",
      "Championship Regulation Tennis Court",
      "Indoor Olympic Lap Pool",
      "20-Seat Custom Cinema",
      "Security Gatehouse & Staff Quarters",
      "Commercial Catering Prep Wing",
    ],
    placeholderLabel: "Bel-Air Belvedere Estate Aerial Grounds & Main Manor",
    placeholderDimensions: "1600 x 1060",
  },
  {
    id: "prop-4",
    title: "Villa Luminescence Palm Jumeirah",
    tagline: "Bespoke custom beachfront villa on the prestigious Frond N",
    price: 21800000,
    formattedPrice: "$21,800,000",
    type: "Villa",
    location: "Palm Jumeirah, Dubai",
    address: "Frond N, Villa 18, Palm Jumeirah, Dubai, UAE",
    beds: 6,
    baths: 7,
    sqft: 11200,
    garage: 4,
    pool: true,
    yearBuilt: 2025,
    badge: "New Listing",
    description:
      "Direct private beach access along the Arabian Gulf. Designed by award-winning architects with double-height marble foyers, cascading water features, Poggenpohl kitchen, private elevator, and rooftop entertainment lounge.",
    amenities: [
      "Direct Private Beach Access",
      "Infinity Glass Swimming Pool",
      "Panoramic Dubai Marina Views",
      "Private Elevator to All Levels",
      "Full Solar & Sustainable Smart Grid",
      "Marble & Onyx Master Suite",
    ],
    placeholderLabel: "Villa Luminescence Palm Jumeirah Beachfront View",
    placeholderDimensions: "1600 x 1060",
  },
  {
    id: "prop-5",
    title: "The Aspen Alpine Sanctuary",
    tagline: "Ski-in/ski-out contemporary mountain estate with heated courtyard",
    price: 16900000,
    formattedPrice: "$16,900,000",
    type: "Estate",
    location: "Aspen, Colorado",
    address: "720 Red Mountain Road, Aspen, CO",
    beds: 5,
    baths: 7,
    sqft: 7900,
    garage: 3,
    pool: true,
    yearBuilt: 2023,
    badge: "Featured",
    description:
      "Perched on Red Mountain with direct slopeside access. Constructed from reclaimed timber, board-formed concrete, and blackened steel. Features outdoor heated plunge spa, ski prep room, and 4 cozy radiant fireplaces.",
    amenities: [
      "Direct Ski-In / Ski-Out Access",
      "Radiant Heated Driveway & Terrace",
      "Outdoor Cedar Barrel Sauna & Hot Tub",
      "Custom Ski & Snowboard Prep Room",
      "Double Sided Stone Fireplaces",
      "Temperature Controlled Wine Wall",
    ],
    placeholderLabel: "The Aspen Alpine Sanctuary Slopeside Architectural View",
    placeholderDimensions: "1600 x 1060",
  },
  {
    id: "prop-6",
    title: "Kensington Royal Mews Manor",
    tagline: "Historic Grade II listed Georgian mansion fully modernized with private garden",
    price: 28750000,
    formattedPrice: "£28,750,000",
    type: "Mansion",
    location: "Kensington, London",
    address: "14 Palace Green, Kensington, London W8",
    beds: 6,
    baths: 8,
    sqft: 9400,
    garage: 2,
    pool: true,
    yearBuilt: 2022,
    badge: "Exclusive",
    description:
      "A grand Georgian facade concealing state-of-the-art basement leisure complex with 15-metre swimming pool, private gymnasium, subterranean car lift, and landscaped private courtyard garden in central London.",
    amenities: [
      "Subterranean 15m Pool & Spa",
      "Underground Automated Car Stacker",
      "Private Landscaped English Garden",
      "Air Filtration & Climate Zoning",
      "Separate Staff Accommodation",
      "Heritage Preservation Detailing",
    ],
    placeholderLabel: "Kensington Royal Mews Modernized Georgian Exterior",
    placeholderDimensions: "1600 x 1060",
  },
];

export const SERVICES = [
  {
    id: "service-1",
    number: "01",
    title: "Prime Property Acquisition",
    description:
      "Unlocking rare off-market estates, architectural icons, and ultra-prime residences through our confidential global advisory network.",
    features: [
      "Access to private off-market listings",
      "Targeted property sourcing & valuation",
      "Discreet negotiation & transaction shielding",
    ],
    icon: "building",
  },
  {
    id: "service-2",
    number: "02",
    title: "Private Villa & Asset Management",
    description:
      "White-glove estate oversight ensuring your property remains in immaculate condition year-round, from security to maintenance.",
    features: [
      "24/7 dedicated property concierge",
      "Preventative maintenance & vendor management",
      "High-security protocol coordination",
    ],
    icon: "key",
  },
  {
    id: "service-3",
    number: "03",
    title: "Architecture & Interior Advisory",
    description:
      "Connecting clients with world-renowned architects, interior decorators, and landscape masters to create timeless living spaces.",
    features: [
      "Top-tier architect & designer matchmaking",
      "Project management & bespoke renovation",
      "Art curation & spatial planning",
    ],
    icon: "pencil",
  },
  {
    id: "service-4",
    number: "04",
    title: "Global Investment & Portfolio Growth",
    description:
      "Strategic cross-border real estate advisory focused on capital preservation, high-yield luxury appreciation, and tax-efficient structures.",
    features: [
      "Yield optimization & trend forecasting",
      "Cross-border transaction structuring",
      "Institutional-grade market intelligence",
    ],
    icon: "chart",
  },
];

export const ADVISORS = [
  {
    id: "adv-1",
    name: "Alexander Sterling",
    role: "Senior Partner & Prime Broker",
    location: "New York & London",
    deals: "$1.4B+ Closed Volume",
    experience: "16 Years Experience",
    bio: "Specializing in ultra-prime penthouses and off-market Manhattan and Mayfair properties for international family offices.",
    placeholderLabel: "Portrait: Alexander Sterling (Partner)",
  },
  {
    id: "adv-2",
    name: "Elena Rostova",
    role: "Director of Mediterranean Estates",
    location: "Monaco & French Riviera",
    deals: "$980M+ Closed Volume",
    experience: "12 Years Experience",
    bio: "Renowned for sourcing extraordinary waterfront villas in Saint-Tropez, Cap d'Antibes, and Monaco's Golden Square.",
    placeholderLabel: "Portrait: Elena Rostova (Director)",
  },
  {
    id: "adv-3",
    name: "Marcus Vance",
    role: "Head of West Coast Acquisitions",
    location: "Los Angeles & Aspen",
    deals: "$1.2B+ Closed Volume",
    experience: "14 Years Experience",
    bio: "Advising Hollywood executives, tech pioneers, and institutional investors on architectural trophy assets in Bel-Air and Beverly Hills.",
    placeholderLabel: "Portrait: Marcus Vance (Head of Acquisitions)",
  },
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    quote:
      "INilam secured our family's dream waterfront villa off-market with total discretion and unmatched professionalism. Their understanding of luxury architecture is peerless.",
    author: "Jonathan & Claire Vance",
    role: "Private Equity Executive, Geneva",
    property: "Star Island Waterfront Villa",
  },
  {
    id: "test-2",
    quote:
      "The entire process from the private helicopter viewing to the final turnkey handover was seamless. INilam truly lives up to their motto: where luxury feels effortless.",
    author: "Sir Harrison Cole",
    role: "Technology Entrepreneur & Art Collector, London",
    property: "Tribeca Triplex Penthouse",
  },
  {
    id: "test-3",
    quote:
      "Having worked with top luxury brokerages in London and Dubai, INilam's bespoke attention to detail and market access sets a completely new benchmark.",
    author: "Dr. Al-Mansoor",
    role: "International Real Estate Investor, Dubai",
    property: "Palm Jumeirah Signature Estate",
  },
];

export const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "The Rise of Biophilic Architecture in Ultra-Prime Mansions",
    date: "May 2026",
    category: "Architecture & Design",
    readTime: "5 min read",
    excerpt:
      "How contemporary architects are seamlessly integrating organic foliage, natural light wells, and cascading water features into ultra-luxury residences.",
    placeholderLabel: "Editorial: Modern Biophilic Villa Architecture",
  },
  {
    id: "blog-2",
    title: "Global Real Estate Outlook 2026: Trophy Asset Safe Havens",
    date: "April 2026",
    category: "Market Insights",
    readTime: "7 min read",
    excerpt:
      "An in-depth analysis of prime luxury enclaves in New York, London, Miami, and Dubai remaining resilient amidst global economic shifts.",
    placeholderLabel: "Editorial: Global Skyline & Prime Market Trends",
  },
  {
    id: "blog-3",
    title: "Inside the Private Art Galleries of the World's Finest Penthouses",
    date: "April 2026",
    category: "Lifestyle & Luxury",
    readTime: "4 min read",
    excerpt:
      "Designing climate-shielded display salons and museum-grade lighting systems for high-net-worth art collectors at home.",
    placeholderLabel: "Editorial: Luxury Penthouse Private Art Gallery",
  },
];
