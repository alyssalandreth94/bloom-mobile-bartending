import { ScatteredPetals, FloralVine } from "./FloralElements";

export default function Services() {
  const services = [
    {
      title: "Weddings",
      description:
        "Your perfect day deserves perfect drinks. From champagne toasts to signature cocktails named after the happy couple, we create memorable bar experiences.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      features: ["Customized drink menus", "Champagne service", "Dedicated bar team"],
      accent: "blush",
    },
    {
      title: "Corporate Events",
      description:
        "Impress clients and celebrate teams with sophisticated bar service. Professional, polished, and perfectly executed for any business occasion.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      ),
      features: ["Branded cocktails", "Non-alcoholic options", "Efficient service"],
      accent: "sage",
    },
    {
      title: "Private Parties",
      description:
        "Birthdays, anniversaries, or just because — elevate your celebration with craft cocktails and professional bartenders.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      features: ["Theme customization", "Interactive experiences", "Flexible packages"],
      accent: "champagne",
    },
    {
      title: "Special Occasions",
      description:
        "Galas, fundraisers, milestone celebrations — we bring the expertise and elegance your special event requires.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      ),
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
      <ScatteredPetals />
      <FloralVine side="left" className="top-20 opacity-60" />
      <FloralVine side="right" className="bottom-20 opacity-60" />

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
                <div className={`w-16 h-16 mb-6 rounded-2xl ${colors.bg} flex items-center justify-center ${colors.text} transition-transform duration-300 group-hover:scale-110`}>
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
            <span>Get Your Free Quote</span>
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
