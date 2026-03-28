"use client";

import { useState, FormEvent } from "react";
import { ScatteredPetals, FloralCorner } from "./FloralElements";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: string;
}

export default function Hero() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush-light/30 to-champagne-light/50" />
      <ScatteredPetals />
      <FloralCorner position="top-left" className="absolute top-16 left-4 opacity-40" />
      <FloralCorner position="top-right" className="absolute top-16 right-4 opacity-40" />
      <FloralCorner position="bottom-left" className="absolute bottom-12 left-4 opacity-30" />
      <FloralCorner position="bottom-right" className="absolute bottom-12 right-4 opacity-30" />

      {/* Animated floating petals */}
      {[
        { left: "10%", delay: "0s", duration: "14s", size: "10px", color: "#E8B4B8" },
        { left: "25%", delay: "3s", duration: "11s", size: "8px", color: "#D4E2D4" },
        { left: "45%", delay: "6s", duration: "16s", size: "12px", color: "#F5E6C8" },
        { left: "65%", delay: "2s", duration: "13s", size: "9px", color: "#E8B4B8" },
        { left: "80%", delay: "5s", duration: "15s", size: "11px", color: "#D4E2D4" },
        { left: "92%", delay: "8s", duration: "12s", size: "7px", color: "#F5E6C8" },
      ].map((petal, i) => (
        <div
          key={i}
          className="absolute pointer-events-none floating-petal"
          style={{
            left: petal.left,
            top: "-20px",
            animationDelay: petal.delay,
            animationDuration: `${petal.duration}, 4s`,
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 12 16">
            <ellipse cx="6" cy="8" rx="5" ry="7" fill={petal.color} opacity="0.5" />
          </svg>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Craft Cocktails,{" "}
              <span className="relative">
                <span className="relative z-10 text-blush-dark">Unforgettable</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-champagne"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Moments
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              From intimate gatherings to grand celebrations, BLOOM brings the bar to you.
              Expert mixologists craft bespoke cocktails tailored to your vision and offer customizable packages combined with a stress-free consultation and planning experience.
            </p>

            {/* Urgency Line */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blush-light border-2 border-white flex items-center justify-center text-xs">🥂</div>
                <div className="w-8 h-8 rounded-full bg-sage-light border-2 border-white flex items-center justify-center text-xs">🍸</div>
                <div className="w-8 h-8 rounded-full bg-champagne-light border-2 border-white flex items-center justify-center text-xs">✨</div>
              </div>
              <p className="text-sm text-blush-dark font-medium">
                Popular dates book fast — secure yours today
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-blush/20 max-w-xs">
              <div>
                <div className="text-3xl font-bold text-charcoal" style={{ fontFamily: "var(--font-playfair), serif" }}>5.0</div>
                <div className="text-sm text-neutral-gray">Star Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-charcoal" style={{ fontFamily: "var(--font-playfair), serif" }}>100%</div>
                <div className="text-sm text-neutral-gray">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl shadow-blush/10 border border-white/50">
              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blush rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-blush rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-blush rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blush rounded-br-lg" />

              {!isSubmitted ? (
                <>
                  <div className="text-center mb-8">
                    <h2
                      className="text-2xl text-charcoal mb-2"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      Get Your Free Quote
                    </h2>
                    <p className="text-neutral-gray text-sm">
                      Tell us about your event and we'll craft the perfect package
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-charcoal placeholder-gray-400 transition-all duration-300 hover:border-[#8E9FCA] focus:border-[#6B7EB0] focus:ring-2 focus:ring-[#E0E4F0]"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-charcoal placeholder-gray-400 transition-all duration-300 hover:border-[#8E9FCA] focus:border-[#6B7EB0] focus:ring-2 focus:ring-[#E0E4F0]"
                          placeholder="jane@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-charcoal placeholder-gray-400 transition-all duration-300 hover:border-[#8E9FCA] focus:border-[#6B7EB0] focus:ring-2 focus:ring-[#E0E4F0]"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-charcoal mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 bg-cream/50 border border-blush/20 rounded-xl text-charcoal transition-all duration-300 hover:border-blush/40 focus:border-blush focus:bg-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="guestCount" className="block text-sm font-medium text-charcoal mb-2">
                          Guest Count
                        </label>
                        <input
                          type="number"
                          id="guestCount"
                          required
                          min="1"
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-charcoal placeholder-gray-400 transition-all duration-300 hover:border-[#8E9FCA] focus:border-[#6B7EB0] focus:ring-2 focus:ring-[#E0E4F0]"
                          placeholder="50"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#819B8A] text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#6E8876]/20 hover:bg-[#6E8876] hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Get My Free Quote"
                      )}
                    </button>

                    <p className="text-center text-xs text-neutral-gray">
                      No obligation • Response within 24 hours
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-20 h-20 mx-auto mb-6 bg-sage-light rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl text-charcoal mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-charcoal-light mb-6">
                    We've received your request and will be in touch within 24 hours to discuss your event.
                  </p>
                  <div className="p-4 bg-champagne-light/50 rounded-xl">
                    <p className="text-sm text-charcoal">
                      Can't wait? Call us directly at{" "}
                      <a href="tel:+18183849862" className="text-blush-dark font-medium hover:underline">
                        (818) 384-9862
                      </a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blush" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
