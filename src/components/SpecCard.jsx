"use client";

import Link from "next/link";

export default function SpecCard({ product, layout = "vertical" }) {
  const isInStock = product.in_stock === true;

  // Dynamically get relevant specs based on new product catalog
  const getSpecEntries = () => {
    const entries = [];
    if (product.standard) entries.push(["Standard", product.standard]);
    if (product.grade) entries.push(["Grade", product.grade]);
    if (product.sizes && product.sizes.length) entries.push(["Size", product.sizes[0]]); // show first size
    if (product.thickness_options) entries.push(["Thickness", product.thickness_options.join(", ")]);
    if (product.seating_height) entries.push(["Seating", product.seating_height]);
    if (product.duty_ratings) entries.push(["Rating", product.duty_ratings.join(", ")]);
    if (product.colors) entries.push(["Colors", product.colors.slice(0, 2).join(", ") + (product.colors.length > 2 ? "..." : "")]);
    return entries.slice(0, 3);
  };

  const specEntries = getSpecEntries();

  const IconDisplay = () => (
    <div className="text-5xl opacity-60">
      {product.category === "pavers" && "🧱"}
      {product.category === "tiles" && "🔲"}
      {product.category === "furniture" && "🪑"}
      {product.category === "drainage" && "🕳️"}
      {product.category === "boundary" && "🚧"}
      {product.category === "screens" && "💠"}
    </div>
  );

  if (layout === "horizontal") {
    // Catalog page — horizontal spec-sheet card
    return (
      <div className="spec-card p-0 flex flex-col sm:flex-row" id={`product-${product.id}`}>
        {/* Image */}
        <div className="sm:w-48 md:w-56 h-44 sm:h-auto bg-concrete-dark/30 flex items-center justify-center flex-shrink-0 overflow-hidden relative">
          <div className="w-full h-full flex items-center justify-center p-6">
            <IconDisplay />
          </div>
          {/* Grade stamp */}
          <div className="absolute top-0 left-0">
            <span className="grade-stamp">{product.sku}</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-5 flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <Link href={`/products/${product.id}`} className="no-underline">
                <h3 className="font-display font-700 text-base md:text-lg tracking-wide uppercase text-ink hover:text-blueprint transition-colors m-0 leading-tight cursor-pointer">
                  {product.name}
                </h3>
              </Link>
              <p className="font-mono text-xs text-graphite mt-1 m-0">
                SKU: {product.sku}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className={`badge-stock ${isInStock ? "in-stock" : "out-of-stock"}`}>
                {isInStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Specs Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 mb-3">
            {specEntries.map(([key, value]) => (
              <div className="spec-row !border-b-0 !p-0" key={key}>
                <span className="spec-label">{key}</span>
                <span className="spec-value text-xs ml-2">{value}</span>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 pt-3 border-t border-dashed border-concrete-dark">
            <Link
              href={`/products/${product.id}`}
              className="btn-cart transition-colors no-underline text-center"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Default: vertical card (featured products, homepage)
  return (
    <div className="spec-card flex flex-col h-full" id={`product-${product.id}`}>
      {/* Image area */}
      <div className="h-40 md:h-48 bg-concrete-dark/30 flex items-center justify-center relative overflow-hidden">
        <IconDisplay />
        {/* Grade stamp top-left */}
        <div className="absolute top-0 left-0">
          <span className="grade-stamp">{product.sku}</span>
        </div>
        {/* Stock badge */}
        <div className="absolute top-2 right-6">
          <span className={`badge-stock ${isInStock ? "in-stock" : "out-of-stock"}`}>
            {isInStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <Link href={`/products/${product.id}`} className="no-underline">
          <h3 className="font-display font-700 text-sm tracking-wide uppercase text-ink hover:text-blueprint transition-colors m-0 leading-tight cursor-pointer">
            {product.name}
          </h3>
        </Link>
        <p className="font-mono text-[10px] text-graphite mt-1 mb-3">
          SKU: {product.sku}
        </p>

        {/* Mini spec sheet */}
        <div className="space-y-0 mb-3 flex-1">
          {specEntries.map(([key, value]) => (
            <div className="spec-row" key={key}>
              <span className="spec-label">{key}</span>
              <span className="spec-value text-xs">{value}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-3 border-t border-dashed border-concrete-dark">
          <Link
            href={`/products/${product.id}`}
            className="btn-cart text-xs transition-colors no-underline text-center w-full"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
