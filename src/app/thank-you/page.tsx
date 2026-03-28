import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-blush-light/30 to-champagne-light/50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 bg-sage-light rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1
          className="text-3xl text-charcoal mb-3"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Thank You!
        </h1>
        <p className="text-charcoal-light mb-8 leading-relaxed">
          We&apos;ve received your request and will be in touch within 24 hours to discuss your event.
        </p>
        <div className="p-4 bg-champagne-light/50 rounded-xl mb-8">
          <p className="text-sm text-charcoal">
            Can&apos;t wait? Call us directly at{" "}
            <a href="tel:+18183849862" className="text-blush-dark font-medium hover:underline">
              (818) 384-9862
            </a>
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#819B8A] text-white font-semibold rounded-xl transition-all duration-300 hover:bg-[#6E8876] hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
