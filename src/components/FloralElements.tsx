// Reusable floral SVG decorations for the BLOOM site

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
        fill="none"
      >
        {/* Center flower */}
        <g transform="translate(600, 60)">
          {/* Petals */}
          <ellipse cx="0" cy="-14" rx="6" ry="12" fill="#8E9FCA" opacity="0.6" />
          <ellipse cx="0" cy="14" rx="6" ry="12" fill="#8E9FCA" opacity="0.6" />
          <ellipse cx="-14" cy="0" rx="12" ry="6" fill="#8E9FCA" opacity="0.6" />
          <ellipse cx="14" cy="0" rx="12" ry="6" fill="#8E9FCA" opacity="0.6" />
          <ellipse cx="-10" cy="-10" rx="6" ry="10" fill="#D4E2D4" opacity="0.5" transform="rotate(-45 -10 -10)" />
          <ellipse cx="10" cy="-10" rx="6" ry="10" fill="#D4E2D4" opacity="0.5" transform="rotate(45 10 -10)" />
          <ellipse cx="-10" cy="10" rx="6" ry="10" fill="#D4E2D4" opacity="0.5" transform="rotate(45 -10 10)" />
          <ellipse cx="10" cy="10" rx="6" ry="10" fill="#D4E2D4" opacity="0.5" transform="rotate(-45 10 10)" />
          <circle cx="0" cy="0" r="5" fill="#F5E6C8" />
        </g>

        {/* Left vine */}
        <path
          d="M0,60 C100,60 150,40 250,45 S400,65 500,55 S550,50 570,60"
          stroke="#D4E2D4"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Left leaves */}
        <ellipse cx="150" cy="38" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(-30 150 38)" />
        <ellipse cx="250" cy="44" rx="7" ry="3.5" fill="#D4E2D4" opacity="0.25" transform="rotate(20 250 44)" />
        <ellipse cx="350" cy="55" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(-15 350 55)" />
        <ellipse cx="450" cy="52" rx="7" ry="3.5" fill="#D4E2D4" opacity="0.25" transform="rotate(25 450 52)" />
        {/* Left small flowers */}
        <circle cx="200" cy="42" r="3" fill="#8E9FCA" opacity="0.3" />
        <circle cx="400" cy="58" r="2.5" fill="#F5E6C8" opacity="0.35" />
        <circle cx="500" cy="53" r="2" fill="#8E9FCA" opacity="0.25" />

        {/* Right vine */}
        <path
          d="M1200,60 C1100,60 1050,40 950,45 S800,65 700,55 S650,50 630,60"
          stroke="#D4E2D4"
          strokeWidth="1.5"
          opacity="0.4"
        />
        {/* Right leaves */}
        <ellipse cx="1050" cy="38" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(30 1050 38)" />
        <ellipse cx="950" cy="44" rx="7" ry="3.5" fill="#D4E2D4" opacity="0.25" transform="rotate(-20 950 44)" />
        <ellipse cx="850" cy="55" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(15 850 55)" />
        <ellipse cx="750" cy="52" rx="7" ry="3.5" fill="#D4E2D4" opacity="0.25" transform="rotate(-25 750 52)" />
        {/* Right small flowers */}
        <circle cx="1000" cy="42" r="3" fill="#8E9FCA" opacity="0.3" />
        <circle cx="800" cy="58" r="2.5" fill="#F5E6C8" opacity="0.35" />
        <circle cx="700" cy="53" r="2" fill="#8E9FCA" opacity="0.25" />
      </svg>
    </div>
  );
}

export function FloralCorner({ position = "top-left", className = "" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; className?: string }) {
  const transforms: Record<string, string> = {
    "top-left": "",
    "top-right": "scale(-1, 1)",
    "bottom-left": "scale(1, -1)",
    "bottom-right": "scale(-1, -1)",
  };

  return (
    <svg
      viewBox="0 0 120 120"
      className={`w-24 h-24 ${className}`}
      style={{ transform: transforms[position] }}
      fill="none"
    >
      {/* Curved vine stem */}
      <path
        d="M0,5 C20,5 30,10 40,25 S55,60 50,90"
        stroke="#D4E2D4"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M5,0 C5,20 10,30 25,40 S60,55 90,50"
        stroke="#D4E2D4"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Leaves along vine */}
      <ellipse cx="25" cy="15" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(-40 25 15)" />
      <ellipse cx="15" cy="25" rx="8" ry="4" fill="#D4E2D4" opacity="0.3" transform="rotate(-50 15 25)" />
      <ellipse cx="40" cy="40" rx="7" ry="3.5" fill="#D4E2D4" opacity="0.25" transform="rotate(-30 40 40)" />
      {/* Small flowers */}
      <g transform="translate(20, 8)">
        <circle cx="0" cy="0" r="4" fill="#8E9FCA" opacity="0.4" />
        <circle cx="0" cy="0" r="2" fill="#F5E6C8" opacity="0.5" />
      </g>
      <g transform="translate(8, 20)">
        <circle cx="0" cy="0" r="3" fill="#F5E6C8" opacity="0.35" />
        <circle cx="0" cy="0" r="1.5" fill="#8E9FCA" opacity="0.4" />
      </g>
      <g transform="translate(45, 50)">
        <ellipse cx="-4" cy="0" rx="3" ry="5" fill="#8E9FCA" opacity="0.25" transform="rotate(-20 -4 0)" />
        <ellipse cx="4" cy="0" rx="3" ry="5" fill="#8E9FCA" opacity="0.25" transform="rotate(20 4 0)" />
        <circle cx="0" cy="0" r="2.5" fill="#F5E6C8" opacity="0.35" />
      </g>
    </svg>
  );
}

export function ScatteredPetals({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 1000 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Scattered petals across the section */}
        <ellipse cx="80" cy="100" rx="8" ry="14" fill="#8E9FCA" opacity="0.08" transform="rotate(-30 80 100)" />
        <ellipse cx="920" cy="150" rx="10" ry="16" fill="#8E9FCA" opacity="0.07" transform="rotate(25 920 150)" />
        <ellipse cx="150" cy="600" rx="9" ry="15" fill="#D4E2D4" opacity="0.08" transform="rotate(40 150 600)" />
        <ellipse cx="850" cy="650" rx="8" ry="13" fill="#D4E2D4" opacity="0.07" transform="rotate(-35 850 650)" />
        <ellipse cx="500" cy="80" rx="7" ry="12" fill="#F5E6C8" opacity="0.1" transform="rotate(15 500 80)" />
        <ellipse cx="300" cy="400" rx="9" ry="14" fill="#8E9FCA" opacity="0.06" transform="rotate(-45 300 400)" />
        <ellipse cx="700" cy="350" rx="8" ry="13" fill="#F5E6C8" opacity="0.07" transform="rotate(30 700 350)" />
        <ellipse cx="50" cy="350" rx="7" ry="11" fill="#D4E2D4" opacity="0.06" transform="rotate(55 50 350)" />
        <ellipse cx="950" cy="450" rx="8" ry="12" fill="#8E9FCA" opacity="0.07" transform="rotate(-20 950 450)" />
        <ellipse cx="600" cy="700" rx="10" ry="15" fill="#D4E2D4" opacity="0.06" transform="rotate(35 600 700)" />

        {/* Small flower clusters */}
        <g transform="translate(120, 250)" opacity="0.12">
          <ellipse cx="-5" cy="0" rx="4" ry="7" fill="#8E9FCA" transform="rotate(-30 -5 0)" />
          <ellipse cx="5" cy="0" rx="4" ry="7" fill="#8E9FCA" transform="rotate(30 5 0)" />
          <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#8E9FCA" transform="rotate(0 0 -5)" />
          <circle cx="0" cy="0" r="3" fill="#F5E6C8" />
        </g>
        <g transform="translate(880, 550)" opacity="0.1">
          <ellipse cx="-5" cy="0" rx="4" ry="7" fill="#D4E2D4" transform="rotate(-30 -5 0)" />
          <ellipse cx="5" cy="0" rx="4" ry="7" fill="#D4E2D4" transform="rotate(30 5 0)" />
          <ellipse cx="0" cy="-5" rx="4" ry="7" fill="#D4E2D4" transform="rotate(0 0 -5)" />
          <circle cx="0" cy="0" r="3" fill="#F5E6C8" />
        </g>
        <g transform="translate(450, 500)" opacity="0.08">
          <ellipse cx="-4" cy="0" rx="3" ry="6" fill="#8E9FCA" transform="rotate(-40 -4 0)" />
          <ellipse cx="4" cy="0" rx="3" ry="6" fill="#8E9FCA" transform="rotate(40 4 0)" />
          <circle cx="0" cy="0" r="2.5" fill="#F5E6C8" />
        </g>
      </svg>
    </div>
  );
}

export function FloralVine({ side = "left", className = "" }: { side?: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 60 400"
      className={`absolute ${side === "left" ? "left-0" : "right-0"} h-80 w-auto ${className}`}
      style={side === "right" ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
    >
      {/* Main vine stem */}
      <path
        d="M30,0 C25,50 35,80 28,130 S20,200 30,250 S35,320 25,400"
        stroke="#D4E2D4"
        strokeWidth="1.5"
        opacity="0.3"
      />
      {/* Leaves */}
      <ellipse cx="20" cy="60" rx="12" ry="5" fill="#D4E2D4" opacity="0.15" transform="rotate(-40 20 60)" />
      <ellipse cx="35" cy="110" rx="10" ry="4.5" fill="#D4E2D4" opacity="0.12" transform="rotate(30 35 110)" />
      <ellipse cx="18" cy="170" rx="11" ry="5" fill="#D4E2D4" opacity="0.15" transform="rotate(-35 18 170)" />
      <ellipse cx="38" cy="230" rx="10" ry="4.5" fill="#D4E2D4" opacity="0.12" transform="rotate(25 38 230)" />
      <ellipse cx="20" cy="290" rx="12" ry="5" fill="#D4E2D4" opacity="0.15" transform="rotate(-30 20 290)" />
      <ellipse cx="32" cy="350" rx="10" ry="4.5" fill="#D4E2D4" opacity="0.12" transform="rotate(35 32 350)" />
      {/* Flower buds */}
      <circle cx="22" cy="90" r="4" fill="#8E9FCA" opacity="0.15" />
      <circle cx="22" cy="90" r="2" fill="#F5E6C8" opacity="0.2" />
      <circle cx="33" cy="200" r="5" fill="#8E9FCA" opacity="0.12" />
      <circle cx="33" cy="200" r="2.5" fill="#F5E6C8" opacity="0.18" />
      <circle cx="22" cy="320" r="4" fill="#8E9FCA" opacity="0.15" />
      <circle cx="22" cy="320" r="2" fill="#F5E6C8" opacity="0.2" />
    </svg>
  );
}
