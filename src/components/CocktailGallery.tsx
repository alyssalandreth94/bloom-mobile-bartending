"use client";

import { useState, useEffect, useCallback } from "react";

const cocktails = [
  {
    name: "Rose Garden Spritz",
    description: "Prosecco, rose syrup, elderflower",
    color: "from-blush to-blush-light",
    emoji: "🌹",
  },
  {
    name: "Sage Smash",
    description: "Gin, muddled sage, lime, honey",
    color: "from-sage to-sage-light",
    emoji: "🌿",
  },
  {
    name: "Golden Hour",
    description: "Bourbon, champagne, apricot",
    color: "from-champagne to-champagne-light",
    emoji: "✨",
  },
  {
    name: "Lavender Dream",
    description: "Vodka, lavender, lemon, butterfly pea",
    color: "from-blush-dark to-blush",
    emoji: "💜",
  },
  {
    name: "Cucumber Cooler",
    description: "Gin, cucumber, mint, elderflower",
    color: "from-sage-dark to-sage",
    emoji: "🥒",
  },
  {
    name: "Champagne Cocktail",
    description: "Champagne, cognac, sugar, bitters",
    color: "from-champagne-dark to-champagne",
    emoji: "🥂",
  },
];

export default function CocktailGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cocktails.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cocktails.length) % cocktails.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-champagne/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blush/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light/50 text-sage-dark text-sm font-medium rounded-full mb-4">
            Signature Creations
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Cocktails That{" "}
            <span className="text-blush-dark">Inspire</span>
          </h2>
          <p className="text-lg text-charcoal-light">
            From classic favorites to custom creations, our mixologists craft drinks that tell a story. Here are some of our signature cocktails.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Display */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Previous Card (Desktop only) */}
            <div className="hidden lg:block w-64 h-80 opacity-40 scale-90 transition-all duration-500">
              <CocktailCard
                cocktail={cocktails[(currentIndex - 1 + cocktails.length) % cocktails.length]}
              />
            </div>

            {/* Current Card */}
            <div className="w-80 h-96 transition-all duration-500 transform">
              <CocktailCard cocktail={cocktails[currentIndex]} isActive />
            </div>

            {/* Next Card (Desktop only) */}
            <div className="hidden lg:block w-64 h-80 opacity-40 scale-90 transition-all duration-500">
              <CocktailCard
                cocktail={cocktails[(currentIndex + 1) % cocktails.length]}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Previous cocktail"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Next cocktail"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {cocktails.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-2 bg-blush rounded-full"
                  : "w-2 h-2 bg-blush/30 rounded-full hover:bg-blush/50"
              }`}
              aria-label={`Go to cocktail ${index + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-12 flex items-center justify-center gap-4 overflow-x-auto pb-4 px-4">
          {cocktails.map((cocktail, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${cocktail.color} flex items-center justify-center text-2xl transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-blush ring-offset-2 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {cocktail.emoji}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CocktailCardProps {
  cocktail: {
    name: string;
    description: string;
    color: string;
    emoji: string;
  };
  isActive?: boolean;
}

function CocktailCard({ cocktail, isActive = false }: CocktailCardProps) {
  return (
    <div
      className={`h-full rounded-3xl bg-gradient-to-br ${cocktail.color} p-8 flex flex-col items-center justify-center text-center shadow-xl transition-all duration-500 ${
        isActive ? "shadow-2xl shadow-blush/20" : ""
      }`}
    >
      {/* Glass/drink illustration */}
      <div className="relative mb-6">
        <div className="text-7xl transition-transform duration-300 hover:scale-110">
          {cocktail.emoji}
        </div>
        {isActive && (
          <div className="absolute inset-0 animate-ping text-7xl opacity-30">
            {cocktail.emoji}
          </div>
        )}
      </div>

      {/* Content */}
      <h3
        className="text-2xl text-charcoal mb-2"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {cocktail.name}
      </h3>
      <p className="text-charcoal-light text-sm">{cocktail.description}</p>

      {/* Decorative line */}
      <div className="mt-6 w-12 h-0.5 bg-white/50 rounded-full" />
    </div>
  );
}
