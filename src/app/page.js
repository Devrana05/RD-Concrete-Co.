import Link from "next/link";
import HeroVideoCarousel from "@/components/HeroVideoCarousel";

export default function HomePage() {

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:h-[80vh] md:min-h-[600px] flex items-center bg-ink overflow-hidden py-16 md:py-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 md:from-ink/50 md:via-ink/20 to-transparent z-10 pointer-events-none" />
        <HeroVideoCarousel />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-[95%] sm:max-w-xl md:max-w-3xl">
            <h1 className="font-display font-800 text-2xl sm:text-4xl md:text-7xl lg:text-8xl tracking-wide text-white leading-[1.05] mb-2 md:mb-6 drop-shadow-xl">
              Designed for the outdoors, <br/> Built to last.
            </h1>
            <p className="font-body text-xs sm:text-sm md:text-xl text-white/90 max-w-[90%] md:max-w-xl mb-0 md:mb-10">
              Manufacturer of quality precast concrete products. Trusted across the region since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Impact Statement */}
      <section className="bg-ink py-20 md:py-28 text-center border-t border-rebar/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-700 text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] text-white uppercase mb-3">
            PREMIER HARDSCAPE COMPANY
          </h2>
          <p className="font-body text-graphite-light text-base md:text-lg mb-12 max-w-2xl mx-auto tracking-wide">
            Discover the beauty and durability of our concrete products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left mt-8">
            {/* Left: Years Badge */}
            <div className="flex items-center gap-5 justify-center md:justify-start">
              <div className="bg-rebar rounded px-3 py-2 flex flex-col items-center justify-center flex-shrink-0 leading-none">
                <span className="font-display font-800 text-4xl text-white leading-none">21</span>
                <span className="font-display font-700 text-xs text-white tracking-wider uppercase -mt-0.5">YEARS</span>
              </div>
              <div>
                <p className="font-display font-600 text-xl text-white tracking-wide">Building Memories</p>
                <p className="font-body text-graphite-light text-sm">for 21 years</p>
              </div>
            </div>

            {/* Right: Description */}
            <div>
              <p className="font-body text-white text-lg md:text-xl font-medium mb-4">
                <span className="text-rebar font-bold">R.D. Concrete Co.</span> has been building memories for over 21 years!
              </p>
              <p className="font-body text-graphite-light text-sm leading-relaxed">
                At R.D. Concrete Co., we prioritize uncompromising quality and offer world-class products that elevate your outdoor spaces. Since 2005, our exceptional pavers and concrete products have set the standard in the region. Trust us to deliver excellence that makes a lasting impression!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Overview Section */}
      <section className="bg-concrete-light py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <h2 className="font-display font-600 text-4xl md:text-5xl text-rebar mb-8 tracking-wider uppercase">
                Overview
              </h2>
              <div className="font-body text-ink/80 space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  We are experts in manufacturing RCC Garden Benches, Chequered Tiles, PreCast U-Drain, Kerb Stones, and more.
                </p>
                <p>
                  Over the past 21 years, we've proudly served over 500+ projects, providing top-tier products to contractors, builders, and developers. With 15+ product lines across multiple categories, our products are installed across the entire region.
                </p>
                <p>
                  "At R.D. Concrete Co., we don't just manufacture concrete products — we build the foundation for enduring quality, value, and trust."
                </p>
                
                <ul className="space-y-4 mt-8">
                  <li className="font-display font-800 text-ink text-xl tracking-wide flex items-start gap-3">
                    <span className="text-rebar">#</span> ISI-CERTIFIED PRODUCTS
                  </li>
                  <li className="font-display font-800 text-ink text-xl tracking-wide flex items-start gap-3">
                    <span className="text-rebar">#</span> IN-HOUSE MANUFACTURING
                  </li>
                  <li className="font-display font-800 text-ink text-xl tracking-wide flex items-start gap-3">
                    <span className="text-rebar">#</span> CUSTOM SIZES AVAILABLE
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <Link href="/about" className="inline-flex items-center justify-center bg-rebar text-white font-body font-600 px-10 py-4 hover:bg-rebar-dark transition-colors no-underline">
                  About Us &nbsp; &gt;
                </Link>
              </div>
            </div>
            
            {/* Right Video / Image */}
            <div className="lg:col-span-7 relative w-full lg:w-[115%] xl:w-[125%] max-w-none z-10 rounded-lg overflow-hidden shadow-2xl bg-concrete flex items-center justify-center">
              <img src="/overview.jpeg" alt="R.D. Concrete Co. Overview" className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
      </section>




      {/* 7. Problem / Solution Section */}
      <section className="bg-concrete-light py-24 border-t border-concrete">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-16 lg:gap-24">
            
            {/* Left Header */}
            <div className="md:w-1/3 relative pl-6 border-l-4 border-rebar">
              <p className="font-mono text-sm tracking-widest text-graphite uppercase mb-2">
                SEARCHING THE RIGHT PRODUCT
              </p>
              <h2 className="font-display font-400 text-4xl md:text-5xl text-rebar uppercase leading-none">
                BUT WORRIED ABOUT
              </h2>
            </div>
            
            {/* Right Features */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-rebar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                </div>
                <h3 className="font-body font-400 text-lg text-ink">
                  Choosing the right tiles for your project
                </h3>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-rebar">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
                </div>
                <h3 className="font-body font-400 text-lg text-ink">
                  Quick support during critical times
                </h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
