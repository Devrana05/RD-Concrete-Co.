"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import InquiryModal from "@/components/InquiryModal";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-concrete-light">
        <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-24 md:h-32">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-4 no-underline flex-shrink-0">
              <img src="/logo.png" alt="R.D. Concrete Co. Logo" className="h-10 sm:h-12 md:h-24 w-auto object-contain mix-blend-multiply" />
              <span className="font-display font-bold text-ink text-xl sm:text-2xl md:text-4xl tracking-wider uppercase mt-1">
                RD CONCRETE CO.
              </span>
            </Link>

            {/* Desktop Nav (Centered) */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-10 px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body font-600 text-lg md:text-xl tracking-wide transition-colors no-underline ${
                    pathname === link.href ? "text-rebar" : "text-ink hover:text-rebar"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 flex-shrink-0">

              {/* Connect with Expert */}
              <button
                onClick={() => setInquiryOpen(true)}
                className="hidden sm:inline-flex items-center justify-center border border-ink rounded-full px-5 py-2 text-sm font-body font-600 text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer bg-transparent"
              >
                Connect with Expert
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden flex flex-col gap-1.5 p-3 bg-transparent border-none cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                <span
                  className={`block w-6 h-[2px] bg-ink transition-transform duration-300 pointer-events-none ${
                    mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-ink transition-opacity duration-300 pointer-events-none ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-[2px] bg-ink transition-transform duration-300 pointer-events-none ${
                    mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          data-modal-backdrop
          className={`md:hidden fixed z-40 transition-all duration-300 left-0 right-0 bottom-0 opacity-100 pointer-events-auto visible`}
          style={{ top: '96px' }}
          aria-hidden={!mobileOpen}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out opacity-100 pointer-events-auto`}
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Drawer */}
          <div
            className={`absolute top-0 left-0 right-0 bg-white border-b border-concrete-light shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none translate-y-0 pointer-events-auto`}
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body font-600 text-lg tracking-wide transition-colors py-2 border-b border-concrete-light last:border-0 no-underline ${
                    pathname === item.href ? "text-rebar" : "text-ink"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                className="mt-4 border border-ink rounded-full px-6 py-3 text-center text-sm font-body font-600 text-ink hover:bg-ink hover:text-white transition-colors cursor-pointer bg-transparent"
                onClick={() => {
                  setMobileOpen(false);
                  setInquiryOpen(true);
                }}
              >
                Connect with Expert
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Inquiry Modal */}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
}
