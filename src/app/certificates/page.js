"use client";

import { useState } from "react";
import { ArrowRight, FileText, X } from "lucide-react";
import InquiryModal from "@/components/InquiryModal";

export default function CertificatesPage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: "bis-paving",
      name: "Precast Concrete Paving Blocks",
      body: "Bureau of Indian Standards (BIS)",
      number: "IS:15658:2006",
      validity: "Valid / Active",
      image: "", // Placeholder - real scans will be placed in /public/certificates/
    },
    {
      id: "iso-9001",
      name: "Quality Management System",
      body: "ISO",
      number: "ISO 9001:2015",
      validity: "Valid / Active",
      image: "/certificates/Quality.jpg",
      thumbnail: "/cert1.jpg",
    },
    {
      id: "iso-14001",
      name: "Environmental Management System",
      body: "ISO",
      number: "ISO 14001:2015",
      validity: "Valid / Active",
      image: "/certificates/environment.jpg",
      thumbnail: "/cert3.png",
    },
    {
      id: "iso-45001",
      name: "Occupational Health and Safety Management System",
      body: "ISO",
      number: "ISO 45001:2018",
      validity: "Valid / Active",
      image: "/certificates/occupational.jpg",
      thumbnail: "/cert2.png",
    },
    {
      id: "bis-manhole",
      name: "Precast Concrete Manhole Cover",
      body: "Bureau of Indian Standards (BIS)",
      number: "IS:12592:2002",
      validity: "Valid / Active",
      image: "",
    }
  ];

  const standards = [
    { code: "IS:15658:2006", description: "Precast concrete paving blocks" },
    { code: "ISO 9001:2015", description: "Quality Management System" },
    { code: "ISO 14001:2015", description: "Environmental Management System" },
    { code: "ISO 45001:2018", description: "Occupational Health and Safety Management System" },
    { code: "IS:12592:2002", description: "Precast concrete manhole covers and frames" },
  ];

  const openLightbox = (cert) => {
    setSelectedCert(cert);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedCert(null), 300);
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen font-body flex flex-col">

      {/* Hero Section */}
      <section className="bg-[#f4f4f4] pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center border-b border-concrete-light">
        <div className="max-w-4xl mx-auto">
          <p className="text-rebar font-display font-700 tracking-[0.2em] uppercase text-sm mb-4">Quality Assurance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-300 text-ink leading-tight mb-6 tracking-wide">
            Our <strong className="font-700">Certifications</strong>
          </h1>
          <p className="text-graphite md:text-lg max-w-2xl mx-auto">
            All our products are manufactured to stringent Indian Standards and are independently tested and certified to ensure maximum durability, safety, and performance.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        
        {/* Certificate Cards Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="h-full bg-white border border-concrete-light hover:border-rebar/30 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col sm:flex-row group"
                onClick={() => openLightbox(cert)}
              >
                {/* Image / Icon Area */}
                <div className="bg-concrete-light/30 p-6 flex items-center justify-center sm:w-1/3 sm:border-r border-concrete-light">
                  {cert.thumbnail || cert.image ? (
                    <img 
                      src={cert.thumbnail || cert.image} 
                      alt={cert.name} 
                      className={`w-full h-auto object-contain max-h-48 ${cert.id === 'iso-45001' ? 'scale-[1.4]' : ''}`} 
                    />
                  ) : (
                    <FileText className="w-16 h-16 text-graphite/40 group-hover:text-rebar/60 transition-colors" />
                  )}
                </div>
                
                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col justify-center flex-grow relative">
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-700 text-ink mb-1 pr-20">{cert.name}</h3>
                  <p className="text-sm font-600 text-rebar mb-4">{cert.body}</p>
                  
                  <div className="space-y-1 text-sm text-graphite">
                    <p><span className="font-600 text-ink">Number:</span> {cert.number}</p>
                    <p><span className="font-600 text-ink">Status:</span> {cert.validity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Standards Table Section */}
        <section className="bg-white p-8 md:p-12 border border-concrete-light">
          <h2 className="text-2xl md:text-3xl font-display font-700 text-ink mb-8 border-b border-concrete-light pb-4">
            Standards Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base border-collapse">
              <thead>
                <tr className="border-b-2 border-ink">
                  <th className="py-4 px-4 font-display font-700 text-ink w-1/3">Standard Code</th>
                  <th className="py-4 px-4 font-display font-700 text-ink">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-concrete-light">
                {standards.map((std, idx) => (
                  <tr key={idx} className="hover:bg-concrete-light/20 transition-colors">
                    <td className="py-4 px-4 font-mono font-600 text-rebar">{std.code}</td>
                    <td className="py-4 px-4 text-graphite">{std.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#111] text-white p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-300 tracking-wide mb-4">
            Want to verify our quality before ordering?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Request product samples, technical data sheets, or full certification documentation for your project requirements.
          </p>
          <button 
            onClick={() => setInquiryOpen(true)}
            className="inline-flex items-center justify-center bg-rebar text-white font-body font-600 px-8 py-4 hover:bg-rebar-dark transition-colors tracking-widest text-sm uppercase cursor-pointer border-none"
          >
            REQUEST DOCUMENTATION <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </section>

      </main>

      {/* Lightbox */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 transition-all duration-300 ${
          lightboxOpen ? "opacity-100" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button 
          onClick={closeLightbox}
          className="absolute top-6 right-6 text-white hover:text-rebar transition-colors bg-black/50 p-2 rounded-full cursor-pointer border-none"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-8 flex justify-center items-center">
          {selectedCert?.image ? (
             <img src={selectedCert.image} alt={selectedCert.name} className="max-w-full h-auto max-h-[80vh] object-contain shadow-2xl" />
          ) : (
            <div className="bg-white p-12 md:p-24 text-center w-full max-w-2xl shadow-2xl">
              <FileText className="w-24 h-24 text-concrete mx-auto mb-6" />
              <h3 className="text-2xl font-display font-700 text-ink mb-2">Certificate Scan Coming Soon</h3>
              <p className="text-graphite">The official document for {selectedCert?.name} will be uploaded here.</p>
            </div>
          )}
        </div>
      </div>

      <InquiryModal 
        isOpen={inquiryOpen} 
        onClose={() => setInquiryOpen(false)} 
        initialMessage="I would like to request quality documentation / product samples."
      />
    </div>
  );
}
