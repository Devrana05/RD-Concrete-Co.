import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-ink mt-auto border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 md:gap-4 mb-4 -ml-1 flex-shrink-0">
              <img src="/logo.png" alt="RD Concrete Co. Logo" className="h-10 md:h-14 w-auto object-contain mix-blend-multiply" />
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-ink text-[10px] md:text-xs tracking-widest uppercase mb-[-2px] md:mb-[-4px]">
                  Since 2008
                </span>
                <span className="font-display font-bold text-ink text-2xl md:text-3xl tracking-wider uppercase leading-none whitespace-nowrap">
                  RD CONCRETE CO.
                </span>
                <div className="flex items-center gap-1.5 md:gap-2 mt-1 md:mt-1.5">
                  <div className="h-[3px] md:h-[3.5px] flex-grow bg-[#C89B5C]"></div>
                  <span className="font-display font-bold text-ink/90 text-[10px] md:text-xs tracking-widest uppercase whitespace-nowrap">
                    WE BUILD STRENGTH & QUALITY
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#5a5a5a] leading-relaxed mb-6">
              Manufacturer of quality precast concrete products since 2008.
            </p>
            {/* Certifications Logos */}
            <div className="flex items-center flex-wrap gap-4 mt-6">
              {[
                "/cert1.jpg",
                "/cert2.png",
                "/cert3.png",
                "/cert4.png",
                "/cert5.png"
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Certification ${index + 1}`}
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-700 text-xs tracking-widest uppercase text-ink mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { href: "/products", label: "All Products" },
                { href: "/products?category=u-drain", label: "Drains & Utility Ducts" },
                { href: "/products?category=culvert", label: "RCC Culvert Box" },
                { href: "/products?category=jersey-barrier", label: "Jersey Barrier" },
                { href: "/products?category=pavers", label: "Pavers" },
                { href: "/products?category=drainage", label: "Kerb Stone" },
                { href: "/products?category=tiles", label: "Chequered Tiles" },
                { href: "/products?category=cool-roof", label: "Manhole Cover & Frame" }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5a5a5a] hover:text-rebar transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-700 text-xs tracking-widest uppercase text-ink mb-4">
              Support
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/about", label: "About Us" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5a5a5a] hover:text-rebar transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-700 text-xs tracking-widest uppercase text-ink mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-[#5a5a5a]">
              <div className="flex gap-2 items-start">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span><strong className="text-ink font-medium">Registered Head office</strong><br />Plot no. 99, HL City, Sector-37, Bahadurgarh, Haryana-124507</span>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span className="font-mono tracking-wide">+91 9992554620</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 opacity-0">
                </svg>
                <span className="font-mono tracking-wide">+91 9813188844</span>
              </div>
              <div className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>rdccindia@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#d0d0d0] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#888] font-mono">
            © 2026 RD Concrete Co. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#888]">
            <Link href="/privacy" className="hover:text-rebar transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-rebar transition-colors no-underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
