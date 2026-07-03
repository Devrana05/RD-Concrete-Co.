"use client";

import { useState } from "react";
import Link from "next/link";
import SpecCard from "@/components/SpecCard";
import InquiryModal from "@/components/InquiryModal";

export default function ProductDetailClient({ product, relatedProducts }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const isInStock = product.stockQty > 0;

  // Pricing and bulk logic removed as per request to hide prices

  const categoryLabels = {
    cement: "Cement",
    steel: "Steel",
    bricks: "Bricks & Blocks",
    tiles: "Tiles",
    aggregates: "Sand & Aggregates",
  };

  const getEmoji = () => {
    switch (product.category) {
      case "cement": return "🏗️";
      case "steel": return "⚙️";
      case "bricks": return "🧱";
      case "tiles": return "🔲";
      case "aggregates": return "⛰️";
      default: return "📦";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* ── BREADCRUMBS ── */}
      <nav className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-graphite mb-8">
        <Link href="/" className="hover:text-ink transition-colors no-underline">Home</Link>
        <span>/</span>
        <Link href={`/products?category=${product.category}`} className="hover:text-ink transition-colors no-underline">
          {categoryLabels[product.category]}
        </Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* ── LEFT: IMAGE ── */}
        <div>
          {/* Main Image Placeholder */}
          <div className="bg-concrete-dark/30 aspect-square flex items-center justify-center relative overflow-hidden border border-concrete-dark">
            <div className="text-9xl opacity-60 transition-transform duration-500 hover:scale-110">
              {getEmoji()}
            </div>
            
            {/* Grade stamp top-left */}
            <div className="absolute top-0 left-0">
              <span className="grade-stamp !text-lg !px-4 !py-2 border-b border-r border-ink/10">{product.id}</span>
            </div>

            {/* Blueprint corner accent */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-blueprint/10" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
          </div>
        </div>

        {/* ── RIGHT: PRODUCT INFO ── */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="mb-6 border-b-2 border-concrete-dark pb-6">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="font-mono text-xs text-blueprint tracking-widest uppercase bg-blueprint/10 px-2 py-1">
                {product.brand}
              </span>
              <span className={`badge-stock ${isInStock ? (product.stockQty < 50 ? "low-stock" : "in-stock") : "out-of-stock"}`}>
                {!isInStock ? "Out of Stock" : product.stockQty < 50 ? "Low Stock" : "In Stock"}
              </span>
            </div>
            <h1 className="font-display font-800 text-3xl md:text-5xl tracking-wider uppercase text-ink m-0 mb-3 leading-[1.1]">
              {product.name}
            </h1>
            <p className="font-mono text-xs text-graphite m-0">
              SKU: {product.id}
            </p>
          </div>

          {/* Description */}
          <p className="font-body text-base text-graphite mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Specs Sheet preview / highlight */}
          <div className="bg-kraft-light border border-concrete-dark p-5 mb-8">
            <h3 className="font-display font-700 text-xs tracking-widest uppercase text-ink mb-4 pb-2 border-b border-dashed border-concrete-dark">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div className="flex justify-between py-2 border-b border-dashed border-concrete-dark/50 last:border-0" key={key}>
                  <span className="font-mono text-[10px] text-graphite uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="font-mono text-[11px] text-ink text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-auto bg-concrete-light/30 p-6 border-l-4 border-blueprint">
            <div className="flex flex-col gap-4">
              <h4 className="font-display font-700 text-lg uppercase text-ink m-0">Interested in this product?</h4>
              <p className="font-body text-sm text-graphite mb-2">
                Contact our sales team to get a custom quote or discuss your project requirements.
              </p>
              <button
                onClick={() => setInquiryOpen(true)}
                className="btn-primary w-full md:w-auto !py-3 flex justify-center items-center gap-2 cursor-pointer transition-colors"
              >
                Inquire Now
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {isInStock && product.stockQty < 50 && (
              <p className="font-mono text-[10px] text-rebar mt-4 m-0 uppercase tracking-widest">
                Limited stock available
              </p>
            )}
          </div>
        </div>
      </div>

      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />

      {/* ── RELATED PRODUCTS ── */}
      {relatedProducts.length > 0 && (
        <div className="mt-20 md:mt-24 border-t-2 border-concrete-dark pt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-ink" />
            <h2 className="font-display font-800 text-xl md:text-2xl tracking-wider uppercase text-ink m-0">
              Related Materials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((p) => (
              <SpecCard key={p.id} product={p} layout="vertical" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
