"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent h-24 -top-8" />

      {/* CTA Container */}
      <div className="relative bg-white/95 backdrop-blur-lg border-t border-blush/20 px-4 py-4 shadow-lg shadow-charcoal/10">
        <div className="flex items-center gap-3">
          {/* Phone Button */}
          <a
            href="tel:+18183849862"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#819B8A] text-white transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#6E8876]/20 hover:bg-[#6E8876] active:scale-95"
            aria-label="Call us"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </a>

          {/* Quote Button */}
          <a
            href="#quote"
            className="flex-1 flex items-center justify-center gap-2 h-14 bg-[#819B8A] text-white font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#6E8876]/20 hover:bg-[#6E8876] active:scale-[0.98]"
          >
            <span>Get Your Free Quote</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>

        {/* Urgency text */}
        <p className="text-center text-xs text-neutral-gray mt-2">
          Popular dates book fast — secure yours today
        </p>
      </div>
    </div>
  );
}
