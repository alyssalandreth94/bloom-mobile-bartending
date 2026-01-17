export default function Services() {
  const services = [
    {
      title: "Weddings",
      description:
        "Your perfect day deserves perfect drinks. From champagne toasts to signature cocktails named after the happy couple, we create memorable bar experiences.",
      icon: "💒",
      features: ["Customized drink menus", "Champagne service", "Dedicated bar team"],
      accent: "blush",
    },
    {
      title: "Corporate Events",
      description:
        "Impress clients and celebrate teams with sophisticated bar service. Professional, polished, and perfectly executed for any business occasion.",
      icon: "🏢",
      features: ["Branded cocktails", "Non-alcoholic options", "Efficient service"],
      accent: "sage",
    },
    {
      title: "Private Parties",
      description:
        "Birthdays, anniversaries, or just because — elevate your celebration with craft cocktails and professional bartenders.",
      icon: "🎉",
      features: ["Theme customization", "Interactive experiences", "Flexible packages"],
      accent: "champagne",
    },
    {
      title: "Special Occasions",
      description:
        "Galas, fundraisers, milestone celebrations — we bring the expertise and elegance your special event requires.",
      icon: "✨",
      features: ["Premium spirits", "Full bar setups", "Event coordination"],
      accent: "blush",
    },
  ];

  const accentColors: Record<string, { bg: string; border: string; text: string }> = {
    blush: { bg: "bg-blush-light/50", border: "border-blush/30", text: "text-blush-dark" },
    sage: { bg: "bg-sage-light/50", border: "border-sage/30", text: "text-sage-dark" },
    champagne: { bg: "bg-champagne-light/50", border: "border-champagne/30", text: "text-champagne-dark" },
  };

  return (
    <section id="services" className="py-24 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-blush-light/50 text-blush-dark text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Bar Service for Every{" "}
            <span className="text-blush-dark">Occasion</span>
          </h2>
          <p className="text-lg text-charcoal-light">
            Whether it's an intimate gathering or a grand celebration, we tailor our services to create the perfect bar experience for your event.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = accentColors[service.accent];
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl ${colors.bg} border ${colors.border} transition-all duration-500 hover:shadow-2xl hover:shadow-blush/10 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                {/* Content */}
                <h3
                  className="text-2xl text-charcoal mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-charcoal-light mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-charcoal">
                      <svg
                        className={`w-5 h-5 ${colors.text}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover decoration */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg
                    className={`w-5 h-5 ${colors.text}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-gray-400/30 hover:shadow-xl hover:shadow-gray-500/40 hover:scale-105 hover:from-gray-900 hover:to-black"
          >
            <span>Discuss Your Event</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
