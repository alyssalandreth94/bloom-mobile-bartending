"use client";

import { useRef, useEffect, useState } from "react";

export default function FloralPageBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the element is
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setOffset(progress * -100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[200px] overflow-hidden relative"
      role="img"
      aria-label="Floral divider"
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url(/wildflower-divider.png)",
          transform: `translateY(${offset}px)`,
          top: "-50px",
          bottom: "-50px",
        }}
      />
    </div>
  );
}
