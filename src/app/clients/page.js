"use client";

import { useState } from "react";
import { ArrowRight, Building2, HardHat, Factory, Home, Landmark, Trees } from "lucide-react";
import InquiryModal from "@/components/InquiryModal";

export default function ClientsPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const governmentClients = [
    { id: 1, name: "Govt Org 1", image: "/clients/logo1.png" },
    { id: 2, name: "Govt Org 2", image: "/clients/logo2.jpg" },
    { id: 3, name: "Govt Org 3", image: "/clients/logo3.jpg" },
    { id: 4, name: "Govt Org 4", image: "/clients/logo4.jpg" },
    { id: 5, name: "Govt Org 5", image: "/clients/logo5.jpg" },
    { id: 6, name: "Govt Org 6", image: "/clients/logo7.jpg" },
    { id: 7, name: "Govt Org 7", image: "/clients/logo8.jpg" },
    { id: 8, name: "Govt Org 8", image: "/clients/logo9.jpeg" },
    { id: 9, name: "Govt Org 9", image: "/clients/logo10.png" },
    { id: 10, name: "Govt Org 10", image: "/clients/logo11.png" },
    { id: 11, name: "Govt Org 11", image: "/clients/logo12.png" },
    { id: 12, name: "Govt Org 12", image: "/clients/logo13.png" },
    { id: 13, name: "Govt Org 13", image: "/clients/logo14.jpg" },
    { id: 14, name: "Govt Org 14", image: "/clients/logo15.png" },
    { id: 15, name: "Govt Org 15", image: "/clients/logo16.jpg" },
  ];

  const corporateClients = [
    { id: 16, name: "Corp Org 1", image: "/clients/logo6.jpg" },
    { id: 17, name: "Corp Org 2", image: "/clients/logo17.png" },
    { id: 18, name: "Corp Org 3", image: "/clients/logo18.png" },
    { id: 19, name: "Corp Org 4", image: "/clients/logo19.png" },
    { id: 20, name: "Corp Org 5", image: "/clients/logo20.png" },
    { id: 21, name: "Corp Org 6", image: "/clients/logo21.png" },
    { id: 22, name: "Corp Org 7", image: "/clients/logo22.png" },
    { id: 23, name: "Corp Org 8", image: "/clients/logo23.png" },
    { id: 24, name: "Corp Org 9", image: "/clients/logo24.jpg" },
    { id: 25, name: "Corp Org 10", image: "/clients/logo25.jpg" },
    { id: 26, name: "Corp Org 11", image: "/clients/logo26.jpeg" },
  ];

  const segments = [
    { icon: Landmark, label: "Government & Municipal Projects" },
    { icon: Building2, label: "Real Estate Developers" },
    { icon: HardHat, label: "Contractors & Builders" },
    { icon: Home, label: "Housing Societies" },
    { icon: Factory, label: "Industrial & Commercial Zones" },
    { icon: Trees, label: "Landscaping & Architecture Firms" },
  ];

  const testimonials = [
    {
      name: "Mr. Ashwin Bhardwaj ( Parineeta Infratech )",
      role: "Project Manager",
      quote: "RD Concrete's Railway Coping Stone have provided exceptional edge support for our recent railway station ( Shafdurjung Railway Station ) projects. Their uniform finish and high compressive strength make them an incredibly reliable choice for heavy-duty railway works."
    },
    {
      name: "Mr. Ashish Chikkara",
      role: "DDA Contractor",
      quote: "RD Concrete's RCC Garden Benches have been a fantastic addition to our municipal park projects. They are incredibly sturdy, weather-resistant, and provide an excellent finish. Highly recommended for public spaces."
    },
    {
      name: "Mr. Manphool Bairwa ( M B Construction Co.)",
      role: "IFC Department, Delhi",
      quote: "Timely delivery and impeccable finish. Their heavy-duty RCC Drain Covers are extremely durable and fit perfectly, saving us weeks of curing time on site. The team is professional and always ready to help."
    },
    {
      name: "Mr. Guneet Singh Sethi Ji ( Sethi Construction Co. )",
      role: "Public Works Department, Delhi",
      quote: "We used RD Concrete's Interlocking Pavers for upgrading the city's pedestrian walkways. Their interlocking strength and vibrant finish are outstanding, with zero cracking even in high-traffic public zones."
    },
    {
      name: "Mr. Sahid Ali Ji ( S A Traders )",
      role: "Railway Contractor",
      quote: "RD Concrete's Precast Kerb Stones have provided exceptional edge support for our recent railway station ( New Delhi ) projects. Their uniform finish and high compressive strength make them an incredibly reliable choice for heavy-duty railway works."
    },
    {
      name: "Mr. Parveen Narwal ( PMV Buildcon Pvt. Ltd.)",
      role: "HSIIDC Department, Haryana",
      quote: "The SFRC Majestic Railings from RD Concrete completely elevated the look and safety of our new HSIIDC, IMT Rohtak project. Their robust steel fiber reinforced build and beautiful finish are second to none."
    },
    {
      name: "Mr. Sonu ( Bangkeshwar Singh )",
      role: "Railway Contractor",
      quote: "The Chequered and Tactile Tiles from RD Concrete were perfect for our railway station platforms. Their anti-slip surface and durability ensure maximum safety for daily commuters."
    },
    {
      name: "Mr. Prashant Sharma Ji ( Mahender Builders )",
      role: "Delhi Jal Board Contractor",
      quote: "We solely rely on RD Concrete for RCC Manhole Covers and Chambers. Their structural integrity and precise dimensions provide a secure, flush fit every time, holding up flawlessly under heavy traffic."
    }
  ];

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-body flex flex-col">
      
      {/* Hero Section */}
      <section className="bg-[#f4f4f4] pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center border-b border-concrete-light">
        <div className="max-w-4xl mx-auto">
          <p className="text-rebar font-display font-700 tracking-[0.2em] uppercase text-sm mb-4">Who We Work With</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-300 text-ink leading-tight mb-6 tracking-wide">
            Our <strong className="font-700">Clients</strong>
          </h1>
          <p className="text-graphite md:text-lg max-w-2xl mx-auto">
            Over 21 years, R.D. Concrete Co. has supplied quality precast concrete products to contractors, builders, developers and government projects across the region.
          </p>
        </div>
      </section>

      <main className="flex-grow w-full">
        
        {/* Client Logo Grids */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          
          {/* Government Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-700 text-[#0056b3] whitespace-nowrap">
                GOVERNMENT / ORGANISATIONS
              </h2>
              <div className="h-[2px] w-full bg-[#0056b3]"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {governmentClients.map((client) => (
                <div 
                  key={client.id} 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 flex flex-col items-center justify-center text-center border border-concrete-light group"
                >
                  <div className="w-full h-24 flex items-center justify-center rounded">
                    {client.image ? (
                      <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    ) : (
                      <span className="text-graphite/40 font-display uppercase tracking-widest text-xs font-700 px-2 text-center">{client.name} Logo</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-700 text-[#0056b3] whitespace-nowrap">
                CORPORATE
              </h2>
              <div className="h-[2px] w-full bg-[#0056b3]"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {corporateClients.map((client) => (
                <div 
                  key={client.id} 
                  className="bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 p-4 md:p-6 flex flex-col items-center justify-center text-center border border-concrete-light group"
                >
                  <div className="w-full h-24 flex items-center justify-center rounded">
                    {client.image ? (
                      <img src={client.image} alt={client.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    ) : (
                      <span className="text-graphite/40 font-display uppercase tracking-widest text-xs font-700 px-2 text-center">{client.name} Logo</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Segments */}
        <section className="bg-white border-y border-concrete-light py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-display font-700 text-ink mb-12 text-center">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {segments.map((seg, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 bg-[#f4f4f4] rounded hover:bg-concrete-light/30 transition-colors">
                  <seg.icon className="w-12 h-12 text-rebar mb-4 stroke-[1.5]" />
                  <h3 className="font-display font-700 text-ink text-lg">{seg.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats Bar */}
        <section className="bg-ink text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-gray-700">
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-4xl md:text-5xl font-700 text-rebar mb-2">500+</span>
                <span className="font-display uppercase tracking-widest text-sm text-gray-400">Projects Supplied</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-4xl md:text-5xl font-700 text-rebar mb-2">21</span>
                <span className="font-display uppercase tracking-widest text-sm text-gray-400">Years of Service</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-4xl md:text-5xl font-700 text-rebar mb-2">15+</span>
                <span className="font-display uppercase tracking-widest text-sm text-gray-400">Product Lines</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="font-mono text-4xl md:text-5xl font-700 text-rebar mb-2">PAN</span>
                <span className="font-display uppercase tracking-widest text-sm text-gray-400">Region Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
           <h2 className="text-2xl md:text-3xl font-display font-700 text-ink mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
              {testimonials.map((test, idx) => (
                <div key={idx} className={`bg-white p-8 md:p-10 border border-concrete-light shadow-sm flex flex-col ${(idx === testimonials.length - 1 && testimonials.length % 2 !== 0) ? 'md:col-span-2 md:max-w-2xl md:mx-auto w-full' : ''}`}>
                  <div className="flex-grow">
                    <p className="text-graphite italic leading-relaxed mb-6">"{test.quote}"</p>
                  </div>
                  <div className="mt-auto border-t border-concrete-light pt-4">
                    <p className="font-display font-700 text-ink text-lg">{test.name}</p>
                    <p className="text-sm font-600 text-rebar">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111] text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-300 tracking-wide mb-4">
            Join 500+ satisfied clients
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your project requirements.
          </p>
          <button 
            onClick={() => setInquiryOpen(true)}
            className="inline-flex items-center justify-center bg-rebar text-white font-body font-600 px-8 py-4 hover:bg-rebar-dark transition-colors tracking-widest text-sm uppercase cursor-pointer border-none"
          >
            START YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </section>

      </main>

      <InquiryModal 
        isOpen={inquiryOpen} 
        onClose={() => setInquiryOpen(false)} 
        initialMessage="I would like to discuss a project with R.D. Concrete Co."
      />
    </div>
  );
}
