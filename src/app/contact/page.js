"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/rdccindia@gmail.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: "New Contact Form Submission - R.D. Concrete Co.",
            Name: `${formData.firstName} ${formData.lastName}`,
            Email: formData.email,
            WhatsApp: formData.whatsapp,
            Message: formData.message,
            _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ firstName: "", lastName: "", email: "", message: "", whatsapp: "" });
        }, 3000);
      } else {
        alert("Sorry, there was an issue sending your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Sorry, there was an issue sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Top Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center border-b border-concrete">
        {/* Placeholder for Terrazzo Background */}
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1600&auto=format&fit=crop" 
          alt="Terrazzo Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 bg-white/80 px-16 py-6 border border-concrete shadow-sm">
          <h1 className="font-display font-400 text-5xl md:text-6xl text-ink m-0">
            Contact
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 2. Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-center md:text-left">
          
          {/* Address */}
          <div>
            <h3 className="font-display font-700 text-2xl text-[#3a3a3a] mb-4">
              Address
            </h3>
            <div className="mb-4">
              <strong className="block font-body text-sm text-ink mb-1">Work Address (Unit-1):</strong>
              <p className="font-body text-sm text-[#5a5a5a] leading-relaxed m-0">
                Main sampla-Beri Road, V.P.O kultana,<br />
                Distt. Rohtak Haryana - 124501
              </p>
            </div>
            <div className="mb-4">
              <strong className="block font-body text-sm text-ink mb-1">Work Address (Unit-2):</strong>
              <p className="font-body text-sm text-[#5a5a5a] leading-relaxed m-0">
                Main Dulhera-Chudani Road, V.P.O Dulhera,<br />
                Distt. Jhajjar Haryana - 124508
              </p>
            </div>
            <div>
              <strong className="block font-body text-sm text-ink mb-1">Registered Head Office:</strong>
              <p className="font-body text-sm text-[#5a5a5a] leading-relaxed m-0">
                Plot no. 99, HL City, Sector-37, Bahadurgarh, Haryana-124507
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-700 text-2xl text-[#3a3a3a] mb-4">
              Contact
            </h3>
            <p className="font-body text-sm text-[#5a5a5a] leading-relaxed mb-2">
              +91 99925 54620, +91 98131 88844
            </p>
            <p className="font-body text-sm text-[#5a5a5a] leading-relaxed">
              rdccindia@gmail.com
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display font-700 text-2xl text-[#3a3a3a] mb-4">
              Opening Hours
            </h3>
            <p className="font-body text-sm text-[#5a5a5a] leading-relaxed">
              Mon - Sun &nbsp;&nbsp; 9:30 am - 6:30 pm
            </p>
          </div>
          
        </div>

        {/* 3. Form & Map Section */}
        <div className="border border-[#e0e0e0] rounded-sm flex flex-col lg:flex-row overflow-hidden shadow-sm">
          
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-600 text-xl text-ink mb-2">Message Sent!</h3>
                <p className="font-body text-[#5a5a5a]">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="flex flex-col">
                  <label className="font-body text-xs text-[#5a5a5a] mb-1">First Name *</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="border-b border-[#a0a0a0] outline-none py-2 text-sm text-ink focus:border-ink transition-colors bg-transparent"
                    required
                  />
                </div>
                {/* Last Name */}
                <div className="flex flex-col">
                  <label className="font-body text-xs text-[#5a5a5a] mb-1">Last Name *</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="border-b border-[#a0a0a0] outline-none py-2 text-sm text-ink focus:border-ink transition-colors bg-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-body text-xs text-[#5a5a5a] mb-1">Email *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-b border-[#a0a0a0] outline-none py-2 text-sm text-ink focus:border-ink transition-colors bg-transparent"
                  required
                />
              </div>

              {/* Requirement / Message */}
              <div className="flex flex-col">
                <label className="font-body text-xs text-[#5a5a5a] mb-1">Requirement / Message *</label>
                <textarea 
                  rows="1"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-b border-[#a0a0a0] outline-none py-2 text-sm text-ink focus:border-ink transition-colors bg-transparent resize-none h-10"
                  required
                ></textarea>
              </div>

              {/* Whatsapp No */}
              <div className="flex flex-col">
                <label className="font-body text-xs text-[#5a5a5a] mb-1">Whatsapp No. *</label>
                <input 
                  type="tel" 
                  placeholder="Phone"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="border-b border-[#a0a0a0] outline-none py-2 text-sm text-ink focus:border-ink transition-colors bg-transparent placeholder:text-[#a0a0a0]"
                  required
                />
              </div>

              {/* Send Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#444] text-white font-body font-500 text-sm py-3 px-10 w-fit mt-2 hover:bg-[#333] transition-colors cursor-pointer border-none disabled:bg-[#a0a0a0] disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
            )}
          </div>

          {/* Right: Map */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-[#f0f0f0] border-t lg:border-t-0 lg:border-l border-[#e0e0e0]">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kultana,%20Sampla,%20Rohtak,%20Haryana&t=&z=13&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="R.D. Concrete Co. Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}
