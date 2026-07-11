"use client";

import { useState, useEffect } from "react";
import { categories } from "@/data/categories";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryModal({ isOpen, onClose, initialMessage = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    description: initialMessage,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setFormData((prev) => ({ ...prev, description: initialMessage }));
      setSubmitted(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialMessage]);



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
            _subject: "New Expert Inquiry - R.D. Concrete Co.",
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Category: formData.category || "General",
            Message: formData.description,
            _template: "table"
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", phone: "", category: "", description: "" });
          onClose();
        }, 3000);
      } else {
        alert("Sorry, there was an issue sending your request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Sorry, there was an issue sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render anything when closed — prevents fixed inset-0 elements
  // from intercepting touch events on real mobile browsers
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div 
        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-in max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-graphite hover:text-ink transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Close inquiry form"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-2xl text-ink mb-2">Thank You!</h3>
                <p className="font-body text-graphite text-sm">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-700 text-2xl text-rebar mb-1 uppercase tracking-wide">
                  Let&apos;s Talk Tiles
                </h3>
                <p className="font-body text-graphite text-sm mb-6">
                  Drop your details and our team will respond fast.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-concrete-light rounded-full border-none font-body text-sm text-ink placeholder:text-graphite focus:outline-none focus:ring-2 focus:ring-rebar/30"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-concrete-light rounded-full border-none font-body text-sm text-ink placeholder:text-graphite focus:outline-none focus:ring-2 focus:ring-rebar/30"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number (10 digits)"
                    pattern="[0-9]{10}"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-concrete-light rounded-full border-none font-body text-sm text-ink placeholder:text-graphite focus:outline-none focus:ring-2 focus:ring-rebar/30"
                  />
                  <div className="relative w-full">
                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full px-4 py-3 bg-concrete-light rounded-full border-none font-body text-sm flex justify-between items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-rebar/30 ${!formData.category ? "text-graphite" : "text-ink"}`}
                      tabIndex={0}
                      onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                    >
                      <span className="truncate pr-4">
                        {formData.category || "Project Category"}
                      </span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-graphite transition-transform duration-200 flex-shrink-0 ${dropdownOpen ? "rotate-180" : ""}`}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="w-full mt-2 bg-white rounded-xl shadow-inner border border-concrete-light max-h-60 overflow-y-auto"
                        >
                          {categories.map((cat) => (
                            <div
                              key={cat.id}
                              onClick={() => {
                                setFormData({ ...formData, category: cat.name });
                                setDropdownOpen(false);
                              }}
                              className="px-4 py-3 text-sm font-body text-graphite hover:bg-[#f4f4f4] hover:text-rebar cursor-pointer transition-colors"
                            >
                              {cat.name}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <textarea
                    placeholder="Project description..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-concrete-light rounded-xl border-none font-body text-sm text-ink placeholder:text-graphite focus:outline-none focus:ring-2 focus:ring-rebar/30 resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-rebar text-white font-body font-600 text-base rounded-full hover:bg-rebar-dark transition-colors cursor-pointer border-none disabled:bg-graphite disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
