"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const cocktails = [
  {
    name: "Rose Garden Spritz",
    description: "Prosecco, rose syrup, elderflower",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=800&fit=crop",
  },
  {
    name: "Sage Smash",
    description: "Gin, muddled sage, lime, honey",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=800&fit=crop",
  },
  {
    name: "Golden Hour",
    description: "Bourbon, champagne, apricot",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=800&fit=crop",
  },
  {
    name: "Lavender Dream",
    description: "Vodka, lavender, lemon, butterfly pea",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&h=800&fit=crop",
  },
  {
    name: "Cucumber Cooler",
    description: "Gin, cucumber, mint, elderflower",
    image: "https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=600&h=800&fit=crop",
  },
  {
    name: "Champagne Cocktail",
    description: "Champagne, cognac, sugar, bitters",
    image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&h=800&fit=crop",
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
            <div className="hidden lg:block w-64 opacity-50 scale-90 transition-all duration-500">
              <CocktailCard
                cocktail={cocktails[(currentIndex - 1 + cocktails.length) % cocktails.length]}
              />
            </div>

            {/* Current Card */}
            <div className="w-80 transition-all duration-500 transform">
              <CocktailCard cocktail={cocktails[currentIndex]} isActive />
            </div>

            {/* Next Card (Desktop only) */}
            <div className="hidden lg:block w-64 opacity-50 scale-90 transition-all duration-500">
              <CocktailCard
                cocktail={cocktails[(currentIndex + 1) % cocktails.length]}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
            aria-label="Previous cocktail"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-charcoal hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-100"
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
                  ? "w-8 h-2 bg-rose-400 rounded-full"
                  : "w-2 h-2 bg-gray-300 rounded-full hover:bg-rose-300"
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
              className={`flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-rose-400 ring-offset-2 scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={cocktail.image}
                alt={cocktail.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
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
    image: string;
  };
  isActive?: boolean;
}

function CocktailCard({ cocktail, isActive = false }: CocktailCardProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
        isActive ? "shadow-2xl shadow-charcoal/20" : ""
      }`}
    >
      {/* Image */}
      <div className="aspect-[3/4] relative">
        <Image
          src={cocktail.image}
          alt={cocktail.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 320px, 320px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3
          className="text-2xl mb-2"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {cocktail.name}
        </h3>
        <p className="text-white/80 text-sm">{cocktail.description}</p>
      </div>
    </div>
  );
}
