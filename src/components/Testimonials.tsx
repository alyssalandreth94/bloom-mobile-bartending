"use client";

import { useState } from "react";
import { FloralCorner, ScatteredPetals } from "./FloralElements";

const testimonials = [
  {
    quote:
      "BLOOM made our wedding reception absolutely magical. The signature cocktails they created for us were not only delicious but beautifully presented. Our guests are still talking about them!",
    author: "Sarah & Michael",
    event: "Wedding Reception",
    rating: 5,
    image: "S",
  },
  {
    quote:
      "Professional, creative, and incredibly personable. They handled our corporate gala with ease and impressed even our most discerning clients. Already booked for next year!",
    author: "Jennifer Chen",
    event: "Corporate Gala",
    rating: 5,
    image: "J",
  },
  {
    quote:
      "From planning to execution, the BLOOM team was exceptional. They understood exactly what we wanted and delivered beyond our expectations. The bar setup was stunning!",
    author: "David & Lisa",
    event: "Anniversary Party",
    rating: 5,
    image: "D",
  },
  {
    quote:
      "I've hired many bartending services over the years, but BLOOM is in a league of their own. The attention to detail, the quality of drinks, and the service were impeccable.",
    author: "Marcus Thompson",
    event: "Private Event",
    rating: 5,
    image: "M",
  },
  {
    quote:
      "They turned our backyard birthday party into an upscale cocktail experience. Guests felt like they were at a high-end lounge. Worth every penny!",
    author: "Amanda Roberts",
    event: "Birthday Celebration",
    rating: 5,
    image: "A",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-cream to-blush-light/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-champagne/10 rounded-full blur-3xl" />
      <ScatteredPetals />

      {/* Large quote decoration */}
      <div className="absolute top-20 left-10 text-[200px] text-blush/5 font-serif leading-none select-none">
        "
      </div>

      {/* Floral corner accents */}
      <FloralCorner position="top-left" className="absolute top-4 left-4 opacity-30" />
      <FloralCorner position="bottom-right" className="absolute bottom-4 right-4 opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-champagne-light/50 text-champagne-dark text-sm font-medium rounded-full mb-4">
            Client Love
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What Our{" "}
            <span className="text-blush-dark">Clients</span> Say
          </h2>
          <p className="text-lg text-charcoal-light">
            Don't just take our word for it — hear from the hosts who trusted us with their special moments.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-blush/10 border border-white/50 transition-all duration-500">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-champagne"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-xl md:text-2xl text-charcoal text-center leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blush to-blush-dark flex items-center justify-center text-white text-xl font-medium">
                {testimonials[activeIndex].image}
              </div>
              <div className="text-left">
                <div className="font-semibold text-charcoal">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-sm text-neutral-gray">
                  {testimonials[activeIndex].event}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all duration-300 ${
                index === activeIndex
                  ? "bg-gradient-to-br from-blush to-blush-dark text-white scale-110 shadow-lg shadow-blush/30"
                  : "bg-white/80 text-charcoal-light hover:bg-peach/20 hover:text-charcoal"
              }`}
            >
              {testimonial.image}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/50">
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl text-charcoal mb-1"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              500+
            </div>
            <div className="text-sm text-neutral-gray">Happy Events</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl text-charcoal mb-1"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              50k+
            </div>
            <div className="text-sm text-neutral-gray">Cocktails Served</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl text-charcoal mb-1"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              100%
            </div>
            <div className="text-sm text-neutral-gray">5-Star Reviews</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl md:text-4xl text-charcoal mb-1"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              8+
            </div>
            <div className="text-sm text-neutral-gray">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
