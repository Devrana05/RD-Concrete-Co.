"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import dynamic from "next/dynamic";
import UDrainLandingPage from "@/components/UDrainLandingPage";
import { motion, AnimatePresence } from "framer-motion";


const categoryDetails = {
  pavers: { name: "Pavers", desc: "Paver blocks are pre-cast concrete units used for creating strong, decorative outdoor flooring. They are made by mixing cement, sand, aggregates, and pigments, then molding under high vibration and pressure for strength. Applications include driveways, walkways, patios, parking areas, and landscaping projects." },
  blocks: { name: "Blocks", desc: "Concrete blocks are standard-sized rectangular building blocks used in construction. Our blocks offer excellent load-bearing capabilities, acoustic insulation, and fire resistance." },
  tiles: { name: "Terrazzo", desc: "Terrazzo is a composite material poured in place or precast, which is used for floor and wall treatments. It consists of chips of marble, quartz, granite, glass, or other suitable material." },
  "cool-roof": { name: "Cool Roof Tile", desc: "Specially designed tiles that reflect more sunlight and absorb less heat than a standard roof. Reduce energy bills, improve indoor comfort, and decrease roof temperature." },
  drainage: { name: "Kerb & Drains", desc: "High-strength precast kerb stones and drainage covers designed for road infrastructure and civil projects. Built to withstand heavy traffic and severe weather conditions." },
  parking: { name: "Parking Tile", desc: "Heavy-duty outdoor tiles specifically engineered for high vehicular traffic and parking areas. These tiles are highly durable, slip-resistant, and can withstand immense pressure." },
  heritage: { name: "Heritage Tile", desc: "Classic and rustic styled tiles that bring traditional aesthetics to modern spaces. Perfect for courtyards, heritage properties, and elegant pathways." },
  granito: { name: "Granito Stone", desc: "Premium aggregate stone finishes offering the luxurious look of natural granite with the exceptional strength and versatility of precast concrete." }
};

const subCategoryDetails = {
  "Grass Pavers": "Paver blocks are pre-cast concrete units used for creating strong, decorative outdoor flooring. They are made by mixing cement, sand, aggregates, and pigments, then molding under high vibration and pressure for strength. Applications include driveways, walkways, patios, parking areas, and landscaping projects."
};

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSubCategory = searchParams.get("subcategory") || "all";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubCategory, setSelectedSubCategory] = useState(initialSubCategory);
  const [selectedUDrainProduct, setSelectedUDrainProduct] = useState(null);
  const [selectedManholeProduct, setSelectedManholeProduct] = useState(null);
  const [selectedRetainingProduct, setSelectedRetainingProduct] = useState(null);
  const [selectedJerseyProduct, setSelectedJerseyProduct] = useState(null);
  const [selectedGardenBenchProduct, setSelectedGardenBenchProduct] = useState(null);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
      setSelectedSubCategory(searchParams.get("subcategory") || "all");
    } else {
      setSelectedCategory("all");
    }
    setSelectedUDrainProduct(null);
    setSelectedManholeProduct(null);
    setSelectedRetainingProduct(null);
    setSelectedJerseyProduct(null);
    setSelectedGardenBenchProduct(null);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory, selectedSubCategory, selectedUDrainProduct, selectedManholeProduct, selectedRetainingProduct, selectedJerseyProduct, selectedGardenBenchProduct]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubCategory("all");
    setSelectedUDrainProduct(null);
    setSelectedManholeProduct(null);
    setSelectedRetainingProduct(null);
    setSelectedJerseyProduct(null);
    setSelectedGardenBenchProduct(null);
  };

  const handleSubCategoryChange = (subcat) => {
    setSelectedSubCategory(subcat);
  };

  const isVisualHub = selectedCategory === "all";

  const renderContent = () => {
    if (isVisualHub) {
      return (
        <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2">
              <button 
                onClick={() => window.location.href = '/'} 
                className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-12 hover:bg-concrete-light transition-colors uppercase tracking-wider cursor-pointer"
              >
                &lt; Home
              </button>
              <h2 className="font-display font-300 text-3xl md:text-5xl lg:text-6xl text-ink leading-tight tracking-wide">
                Enhancing<br />
                <strong className="font-700">Outdoor Spaces</strong><br />
                <span className="text-[#a0a0a0] text-2xl md:text-4xl mt-2 block tracking-wider">with our <strong className="text-[#B93A27] font-700">PRODUCTS</strong></span>
              </h2>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center items-center">
              <video 
                src="/prod-video-1.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[500px] object-contain drop-shadow-xl" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { id: "u-drain", name: "DRAINS & UTILITY DUCTS", image: "/img12.png", desc: "Heavy-duty precast U drain for highways, industrial zones, and high-flow areas.", imageScale: "scale-150" },
              { id: "culvert", name: "BOX CULVERT", image: "/prod4.1.png", desc: "Robust precast concrete box culverts designed for effective water management and civil infrastructure." },
              { id: "retaining-wall", name: "EARTH RETAINING WALL", image: "/earth-wall.png", desc: "Precast concrete earth retaining walls engineered for maximum stability and soil retention." },
              { id: "jersey-barrier", name: "JERSEY BARRIER", image: "/prod9.jpg", desc: "Durable concrete barriers for highway safety, traffic control, and perimeter security." },
              { id: "garden-benches", name: "RCC GARDEN BENCHES", image: "/benches.png", desc: "High-quality precast concrete garden benches for parks, residential complexes, and public spaces." },
              { id: "pavers", name: "PAVERS", image: "/prod2.jpg", desc: "Premium concrete paver blocks for heavy-duty paving, landscaping, and commercial driveways." },
              { id: "drainage", name: "KERB STONE & SAUCER DRAIN", image: "/prod6.png", desc: "Precast concrete kerb stones for road edges, pavement borders, and pedestrian safety." },
              { id: "tiles", name: "CHEQUERED TILES", image: "/prod3.png", desc: "Anti-skid chequered tiles ideal for footpaths, parking lots, and high-traffic pedestrian areas." },
              { id: "cool-roof", name: "MANHOLE COVER & FRAME", image: "/prod7.png", desc: "Heavy-duty precast manhole covers and frames built to withstand heavy traffic loads." },
              { id: "manhole-chamber", name: "PRECAST CONCRETE MANHOLE", image: "/prod15.png", desc: "Comprehensive precast manhole chambers for efficient underground sewage and drainage systems." },
              { id: "heritage", name: "RAILWAY COPING STONE", image: "/prod10.png", desc: "Specialized precast coping stones designed to railway standards for platform edges." },
              { id: "parking", name: "SFRC RAILING", image: "/railing2.jpeg", desc: "Steel Fiber Reinforced Concrete (SFRC) railings for enhanced durability and aesthetics." },
              { id: "granito", name: "RCC SIGN BOARD & PLOT INDICATOR", image: "/prod11.png", desc: "Precast concrete sign boards and plot indicators for clear, long-lasting property marking." },
              { id: "drain-cover", name: "CONCRETE DRAIN COVER", image: "/drain-cover.jpeg", desc: "High-quality precast concrete drain covers for urban infrastructure and public safety." },
              { id: "sewer-chamber", name: "CIRCULAR HOUSE SEWER CONNECTION CHAMBER", image: "/prod15.png", desc: "High-quality precast circular house sewer connection chambers for residential and municipal drainage." },
            ].map((cat) => (
              <button 
                key={cat.id}
                onClick={() => {
                  handleCategoryChange(cat.id);
                }}
                className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden"
              >
                <div className="w-full h-72 md:h-80 overflow-hidden relative bg-white flex items-center justify-center p-6 md:p-8">
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className={`w-full h-full object-contain mix-blend-multiply ${cat.imageScale || ''}`}
                    />
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                  <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight">{cat.name}</h3>
                  <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {cat.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                    VIEW MORE
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedCategory === "u-drain") {
    if (!selectedUDrainProduct) {
      return (
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <button 
              onClick={() => handleCategoryChange('all')} 
              className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-8 hover:bg-concrete-light transition-colors tracking-wider cursor-pointer"
            >
              &lt; Back to Categories
            </button>

            <div className="mb-12">
              <h1 className="font-display font-300 text-4xl md:text-5xl lg:text-6xl text-ink m-0 mb-6 tracking-wide uppercase">
                Drains & Utility Ducts
              </h1>
              <p className="font-body text-sm md:text-base text-[#707070] leading-relaxed max-w-4xl">
                Heavy-duty precast RCC drain channels and utility ducts engineered for high-volume stormwater discharge and safe cable routing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { id: "T25", name: "U-Drain T25", image: "/img1.png", desc: "Heavy-duty precast U-drain capable of withstanding T25 load class for high-traffic areas. Grade : M-30 to M-60" },
                { id: "T6", name: "U-Drain T6", image: "/t6-1.1.png", desc: "Medium-duty U-drain ideal for pedestrian pathways and light vehicular traffic zones. Grade : M-30 to M-60" },
                { id: "FT", name: "FT FLUME", image: "/ft-4.png", desc: "Specialized flume drain designed for effective open-channel water flow management. Grade : M-30 to M-60" }
              ].map((drain) => (
                <button 
                  key={drain.id}
                  onClick={() => {
                    setSelectedUDrainProduct(drain.id);
                  }}
                  className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden"
                >
                  <div className="w-full h-64 overflow-hidden relative bg-white flex items-center justify-center p-8">
                    <img 
                      src={drain.image} 
                      alt={drain.name} 
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                    <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight">{drain.name}</h3>
                    <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                      {drain.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                      VIEW MORE
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        <button 
          onClick={() => setSelectedUDrainProduct(null)} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType={selectedUDrainProduct} />
      </div>
    );
  }

  if (selectedCategory === "culvert") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="CULVERT" />
      </div>
    );
  }

  if (selectedCategory === "drain-cover") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="DRAIN_COVER" />
      </div>
    );
  }

  if (selectedCategory === "parking") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="SFRC_RAILING" />
      </div>
    );
  }

  if (selectedCategory === "manhole-chamber") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="MANHOLE_CHAMBER" />
      </div>
    );
  }
  if (selectedCategory === "jersey-barrier") {
    if (!selectedJerseyProduct) {
      return (
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <button 
              onClick={() => handleCategoryChange('all')} 
              className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-8 hover:bg-concrete-light transition-colors tracking-wider cursor-pointer"
            >
              &lt; Back to Categories
            </button>

            <div className="mb-12">
              <h1 className="font-display font-300 text-4xl md:text-5xl lg:text-6xl text-ink m-0 mb-6 tracking-wide uppercase">
                Jersey Barrier & Crash Barrier
              </h1>
              <p className="font-body text-sm md:text-base text-[#707070] leading-relaxed max-w-4xl">
                Heavy-duty precast concrete barriers designed for highway safety, traffic management, and severe vehicular impacts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {[
                { id: "JERSEY_BARRIER", name: "JERSEY BARRIER", image: "/jersey.jpeg", desc: "High-quality jersey barrier suitable for various infrastructure projects." },
                { id: "CRASH_BARRIER", name: "PRECAST CRASH BARRIER", image: "/crash-barrier-1.jpeg", desc: "High-quality precast crash barrier suitable for various infrastructure projects." }
              ].map((product) => (
                <button 
                  key={product.id}
                  onClick={() => {
                    setSelectedJerseyProduct(product.id);
                  }}
                  className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden"
                >
                  <div className="w-full h-72 overflow-hidden relative bg-white flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                    <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight">{product.name}</h3>
                    <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                      {product.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                      VIEW DETAILS
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        <button 
          onClick={() => setSelectedJerseyProduct(null)} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType={selectedJerseyProduct} />
      </div>
    );
  }

  if (selectedCategory === "drainage") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="KERB_STONE" />
      </div>
    );
  }

  if (selectedCategory === "retaining-wall") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="RETAINING_WALL" />
      </div>
    );
  }

  if (selectedCategory === "cool-roof") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="MANHOLE_COVER" />
      </div>
    );
  }
  if (selectedCategory === "tiles") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="CHEQUERED_TILES" />
      </div>
    );
  }

  if (selectedCategory === "heritage") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="RAILWAY_COPING_STONE" />
      </div>
    );
  }

  if (selectedCategory === "sewer-chamber") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="SEWER_CHAMBER" />
      </div>
    );
  }

  if (selectedCategory === "granito") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType="SIGN_BOARD" />
      </div>
    );
  }

  if (selectedCategory === "garden-benches") {
    if (!selectedGardenBenchProduct) {
      return (
        <div className="bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
            <button 
              onClick={() => handleCategoryChange('all')} 
              className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-8 hover:bg-concrete-light transition-colors tracking-wider cursor-pointer"
            >
              &lt; Back to Categories
            </button>

            <div className="mb-12">
              <h1 className="font-display font-300 text-4xl md:text-5xl lg:text-6xl text-ink m-0 mb-6 tracking-wide uppercase">
                GARDEN BENCHES
              </h1>
              <p className="font-body text-sm md:text-base text-[#707070] leading-relaxed max-w-4xl">
                High-quality precast concrete garden benches for parks, residential complexes, and public spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
              {[
                { id: "RDGF-03", name: "ROUND TABLE WITH FOUR BENCH", image: "/circle-1.png", desc: "High-quality round table with four bench suitable for various infrastructure projects." },
                { id: "RDGF-04", name: "SQUARE TABLE WITH 4 BENCH", image: "/square-2.png", desc: "High-quality square table with 4 bench suitable for various infrastructure projects." },
                { id: "RDGF-01", name: "CHAIR BENCH WITH BACK REST", image: "/back-1.png", desc: "High-quality chair bench with back rest suitable for various infrastructure projects." },
                { id: "RDGF-02", name: "CHAIR BENCH WITH HAND REST", image: "/hand-1.png", desc: "High-quality chair bench with hand rest suitable for various infrastructure projects." }
              ].map((bench) => (
                <button 
                  key={bench.id}
                  onClick={() => {
                    setSelectedGardenBenchProduct(bench.id);
                  }}
                  className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden"
                >
                  <div className="w-full h-80 overflow-hidden relative bg-white flex items-center justify-center p-8">
                    <img 
                      src={bench.image} 
                      alt={bench.name} 
                      className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                    <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight">{bench.name}</h3>
                    <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                      {bench.desc}
                    </p>
                    <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                      VIEW DETAILS
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="relative">
        <button 
          onClick={() => setSelectedGardenBenchProduct(null)} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back to Hub
        </button>
        <UDrainLandingPage productType={selectedGardenBenchProduct} />
      </div>
    );
  }

  const categoryProducts = products.filter((p) => p.category === selectedCategory);
  const subCategories = Array.from(new Set(categoryProducts.map((p) => p.sub_category))).filter(Boolean);
  const hasSubCategories = subCategories.length > 0;

  const isSubCategoryHub = hasSubCategories && selectedSubCategory === "all";

  const getSubcategoryImage = (subcatName) => {
    if (subcatName === "Grass Pavers") return "/grass.png";
    if (subcatName === "Interlocking Pavers") return "/paver10.png";
    if (subcatName === "Brick Pavers") return "/brick.jpg";
    if (subcatName === "Combi Pavers") return "/combi.jpeg";
    if (subcatName === "Cobble Stone Pavers") return "/cobble.png";
    const product = categoryProducts.find(p => p.sub_category === subcatName);
    return product && product.images && product.images.length > 0 
      ? product.images[0] 
      : "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80";
  };

  if (isSubCategoryHub) {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          
          <button 
            onClick={() => handleCategoryChange('all')} 
            className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-8 hover:bg-concrete-light transition-colors tracking-wider cursor-pointer"
          >
            &lt; Back to Categories
          </button>

          <div className="mb-12">
            <h1 className="font-display font-300 text-4xl md:text-5xl lg:text-6xl text-ink m-0 mb-6 tracking-wide capitalize">
              {categoryDetails[selectedCategory]?.name || selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
            </h1>
            <p className="font-body text-sm md:text-base text-[#707070] leading-relaxed max-w-4xl">
              {categoryDetails[selectedCategory]?.desc || `Select a ${categoryDetails[selectedCategory]?.name || "product"} type to view available products, sizes, and variations.`}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subCategories.map((subcat) => (
              <button 
                key={subcat}
                onClick={() => {
                  handleSubCategoryChange(subcat);
                }}
                className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden"
              >
                <div className="w-full h-64 overflow-hidden relative bg-white flex items-center justify-center p-4 md:p-6">
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    {(() => {
                      const mediaSrc = getSubcategoryImage(subcat);
                      return mediaSrc.endsWith('.mp4') ? (
                        <video
                          src={mediaSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      ) : (
                        <img 
                          src={mediaSrc} 
                          alt={subcat} 
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      );
                    })()}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                  <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight capitalize">{subcat}</h3>
                  <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    Explore our premium selection of {subcat.toLowerCase()} designed for durability and performance.
                  </p>
                  <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                    VIEW MORE
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedSubCategory === "Interlocking Pavers") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleSubCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back
        </button>
        <UDrainLandingPage productType="INTERLOCKING_PAVERS" />
      </div>
    );
  }

  if (selectedSubCategory === "Grass Pavers") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleSubCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back
        </button>
        <UDrainLandingPage productType="GRASS_PAVER" />
      </div>
    );
  }

  if (selectedSubCategory === "Brick Pavers") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleSubCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back
        </button>
        <UDrainLandingPage productType="BRICK_PAVER" />
      </div>
    );
  }

  if (selectedSubCategory === "Combi Pavers") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleSubCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back
        </button>
        <UDrainLandingPage productType="COMBI_PAVER" />
      </div>
    );
  }

  if (selectedSubCategory === "Cobble Stone Pavers") {
    return (
      <div className="relative">
        <button 
          onClick={() => handleSubCategoryChange('all')} 
          className="absolute top-2 left-2 md:top-8 md:left-8 z-30 border border-ink text-ink bg-white/80 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 font-mono text-[10px] md:text-xs uppercase tracking-wider hover:bg-ink hover:text-white transition-colors cursor-pointer shadow-md"
        >
          &lt; Back
        </button>
        <UDrainLandingPage productType="COBBLE_STONE" />
      </div>
    );
  }

  // Product Grid View
  const finalProducts = hasSubCategories 
    ? categoryProducts.filter((p) => p.sub_category === selectedSubCategory)
    : categoryProducts;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        <button 
          onClick={() => hasSubCategories ? handleSubCategoryChange('all') : handleCategoryChange('all')} 
          className="border border-[#707070] text-[#707070] font-body text-xs px-3 py-1 mb-8 hover:bg-concrete-light transition-colors tracking-wider cursor-pointer"
        >
          &lt; Back
        </button>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="font-display font-300 text-4xl md:text-5xl lg:text-6xl text-ink m-0 mb-6 capitalize tracking-wide">
            {selectedSubCategory !== "all" ? selectedSubCategory : (categoryDetails[selectedCategory]?.name || selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1))}
          </h1>
          <p className="font-body text-sm md:text-base text-[#707070] leading-relaxed max-w-4xl">
            {selectedSubCategory !== "all" 
              ? (subCategoryDetails[selectedSubCategory] || `Explore our range of ${selectedSubCategory} with various sizes, shapes, and color options.`)
              : (categoryDetails[selectedCategory]?.desc || "Browse our premium selection of products designed for durability and aesthetics.")}
          </p>
        </div>

        {/* Product Grid */}
        {finalProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {finalProducts.map((product) => (
              <Link 
                href={`/products/${product.id}`}
                key={product.id} 
                className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full text-left h-full overflow-hidden no-underline"
              >
                <div className="w-full h-64 overflow-hidden relative bg-white flex items-center justify-center p-4 md:p-6">
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    {product.glb ? (
                      <ModelViewer url={product.glb} />
                    ) : (
                      <img 
                        src={product.images && product.images.length > 0 ? product.images[0] : "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"} 
                        alt={product.name} 
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    )}
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col border-t border-gray-50 bg-white">
                  <h3 className="font-display font-900 text-[#002b49] text-xl tracking-wide mb-4 whitespace-pre-wrap leading-tight">{product.name}</h3>
                  <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-8 flex-grow">
                    {product.short_description || `High-quality ${product.name.toLowerCase()} suitable for various infrastructure projects.`}
                  </p>
                  <div className="flex items-center gap-2 text-[#0066B3] font-700 text-sm tracking-widest uppercase group-hover:text-blue-800 transition-colors mt-auto">
                    VIEW DETAILS
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-concrete-light rounded-xl">
            <p className="text-graphite font-body">No products found in this category yet.</p>
          </div>
        )}
      </div>
    </div>
    );
  };
  const viewKey = `${selectedCategory}-${selectedSubCategory}-${selectedUDrainProduct || ''}-${selectedManholeProduct || ''}-${selectedRetainingProduct || ''}-${selectedJerseyProduct || ''}`;

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={viewKey}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <span className="font-mono text-sm text-graphite">Loading catalog...</span>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
