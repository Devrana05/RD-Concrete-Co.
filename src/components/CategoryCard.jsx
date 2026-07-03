import Link from "next/link";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/products?category=${category.id}`}
      className="group block no-underline"
      id={`category-${category.id}`}
    >
      <div className="relative overflow-hidden bg-white border border-concrete-light h-52 md:h-60 flex flex-col justify-end p-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-rebar/30">
        
        {/* Red accent bar on hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-rebar transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

        {/* Icon */}
        <div className="absolute top-6 right-6 text-rebar opacity-80 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-display font-600 text-xl md:text-2xl tracking-wide uppercase text-ink m-0 group-hover:text-rebar transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-graphite mt-2 mb-3 font-body leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            {category.description}
          </p>
          <span className="font-mono text-[10px] text-graphite tracking-widest uppercase flex items-center gap-1 group-hover:text-ink transition-colors">
            {category.skuCount} products 
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
