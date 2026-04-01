"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Row 1: Logo + Location/Phone/Quote — fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg shadow-blush/10 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-0">
            {/* Logo Image + Brand Name */}
            <a href="#" className="flex items-center gap-4 group">
              <Image
                src="/bloom-icon.png"
                alt="Bloom Mobile Bartending"
                width={360}
                height={180}
                className="h-14 w-auto flex-shrink-0 transition-transform duration-300 group-hover:scale-105 my-2"
                priority
              />
              <h1
                className="text-lg sm:text-xl lg:text-2xl text-charcoal tracking-wide whitespace-nowrap"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                BLOOM{" "}
                <span className="text-blush-dark">Mobile Bartending</span>
              </h1>
            </a>

            {/* Location, Phone, CTA */}
            <div className="hidden md:flex items-center gap-8">
              {/* Location */}
              <div className="flex flex-col items-center text-charcoal-light">
                <span className="text-xs font-semibold tracking-wider uppercase">Location</span>
                <span className="text-sm text-blush-dark font-medium">San Antonio, TX</span>
              </div>

              {/* Phone */}
              <a
                href="tel:+18183849862"
                className="flex items-center gap-2 text-charcoal hover:text-[#8E9FCA] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-base font-medium underline">(818) 384-9862</span>
              </a>

              {/* CTA Button */}
              <a
                href="#quote"
                className="px-8 py-3 bg-[#819B8A] text-white text-base font-semibold tracking-wide rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#6E8876]/20 hover:bg-[#6E8876] hover:scale-105"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-blush/20">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal-light hover:text-peach transition-colors">
                Services
              </a>
              <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal-light hover:text-peach transition-colors">
                Gallery
              </a>
              <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal-light hover:text-peach transition-colors">
                Reviews
              </a>
              <a
                href="tel:+18183849862"
                className="flex items-center gap-2 text-charcoal font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (818) 384-9862
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />

      {/* Row 2: Navigation links — scrolls with page */}
      <nav className="relative bg-[#8E9FCA]">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-center gap-12 py-3">
            <a href="#services" className="text-white hover:text-white/70 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
              Services
            </a>
            <a href="#gallery" className="text-white hover:text-white/70 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
              Gallery
            </a>
            <a href="#testimonials" className="text-white hover:text-white/70 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
              Reviews
            </a>
            <a href="#quote" className="text-white hover:text-white/70 transition-colors duration-300 text-sm font-medium tracking-wider uppercase">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
