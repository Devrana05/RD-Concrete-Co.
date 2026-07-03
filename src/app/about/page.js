export const metadata = {
  title: "About Us | R.D. Concrete Co.",
  description: "Learn more about R.D. Concrete Co., a premier hardscape company manufacturing high-quality pavers, blocks, and tiles.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* 1. About Us Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display font-400 text-4xl md:text-5xl text-ink uppercase mb-8 tracking-wider">
            About <span className="text-rebar font-600">Us</span>
          </h1>
          <p className="font-body text-graphite-dark text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            At <span className="font-bold text-ink">R.D. Concrete Co.</span>, we take pride in being a premier hardscape company. We are manufacturer of Pavers, Blocks, Tiles, and Kerbs dedicated to providing high-quality products and exceptional customer service. Our passion for creating beautiful and durable hardscaping solutions drives everything we do.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-concrete max-w-6xl mx-auto mb-16"></div>

      {/* 2. Why Us Section */}
      <section className="px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-400 text-3xl md:text-4xl text-ink uppercase mb-12 tracking-wide">
            Why Us ?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Points */}
            <div className="relative border-l border-concrete-dark py-4">
              
              <div className="space-y-10 pl-8">
                {/* Point 1 */}
                <div className="relative">
                  <h3 className="font-display font-bold text-ink text-lg md:text-xl mb-1">Extensive Production Capacity</h3>
                  <p className="font-body text-graphite text-sm md:text-base leading-relaxed">
                    Our large-scale production facilities are capable of executing substantial orders on schedule, ensuring timely delivery for all our clients.
                  </p>
                </div>

                {/* Point 2 (Active/Highlighted style) */}
                <div className="relative">
                  {/* Highlight bar on the left */}
                  <div className="absolute -left-[33px] top-0 bottom-0 w-[2px] bg-rebar"></div>
                  
                  <h3 className="font-display font-bold text-ink text-lg md:text-xl mb-1">Uncompromising Quality Control</h3>
                  <p className="font-body text-rebar italic text-sm mb-2">Modern Testing Laboratory</p>
                  <p className="font-body text-graphite text-sm md:text-base leading-relaxed">
                    We have established state-of-the-art test laboratories in our factories, equipped with the latest testing devices. Every lot undergoes strict quality control tests to ensure adherence to our high standards.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="relative">
                  <h3 className="font-display font-bold text-ink text-lg md:text-xl mb-1">Innovative Product Development</h3>
                  <p className="font-body text-rebar italic text-sm mb-2">Customer-Focused Approach</p>
                  <p className="font-body text-graphite text-sm md:text-base leading-relaxed">
                    We are highly conscious of product development and continually responsive to our customers' needs, ensuring our products evolve to meet market demands.
                  </p>
                </div>

                {/* Point 4 */}
                <div className="relative">
                  <h3 className="font-display font-bold text-ink text-lg md:text-xl mb-1">Advanced Manufacturing Technology</h3>
                  <p className="font-body text-rebar italic text-sm mb-2">Automated Machinery</p>
                  <p className="font-body text-graphite text-sm md:text-base leading-relaxed">
                    Our production lines feature fully automatic machines allowing us to manufacture pavers and tiles in large quantities with high efficiency.
                  </p>
                </div>
                
                {/* Point 5 */}
                <div className="relative">
                  <h3 className="font-display font-bold text-ink text-lg md:text-xl mb-1">Consistency in Production</h3>
                  <p className="font-body text-graphite text-sm md:text-base leading-relaxed">
                    Equipped with PLC-based batching and mixing plants, our machinery ensures consistent quality across all products.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative flex items-center justify-center">
              <img 
                src="/about-image.png" 
                alt="Product Samples" 
                className="w-full h-auto object-cover rounded-xl shadow-xl max-h-[800px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
