import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Decorative floral top border */}
      <div className="relative">
        <div className="h-1 bg-gradient-to-r from-blush via-champagne to-sage" />
        <svg className="w-full h-8 -mb-1" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
          <path d="M0,0 C200,30 400,5 600,15 S1000,25 1200,0" stroke="#E8B4B8" strokeWidth="1" opacity="0.2" />
          <path d="M0,5 C300,25 500,0 700,12 S1000,20 1200,5" stroke="#D4E2D4" strokeWidth="1" opacity="0.15" />
          <circle cx="300" cy="12" r="3" fill="#E8B4B8" opacity="0.15" />
          <circle cx="600" cy="10" r="4" fill="#F5E6C8" opacity="0.12" />
          <circle cx="900" cy="15" r="3" fill="#D4E2D4" opacity="0.15" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blush/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      {/* Subtle floral watermark */}
      <svg className="absolute bottom-10 left-10 w-64 h-64 opacity-[0.03]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="30" fill="#E8B4B8" />
        <ellipse cx="100" cy="60" rx="15" ry="25" fill="#D4E2D4" />
        <ellipse cx="100" cy="140" rx="15" ry="25" fill="#D4E2D4" />
        <ellipse cx="60" cy="100" rx="25" ry="15" fill="#D4E2D4" />
        <ellipse cx="140" cy="100" rx="25" ry="15" fill="#D4E2D4" />
        <ellipse cx="72" cy="72" rx="15" ry="20" fill="#F5E6C8" transform="rotate(-45 72 72)" />
        <ellipse cx="128" cy="72" rx="15" ry="20" fill="#F5E6C8" transform="rotate(45 128 72)" />
        <ellipse cx="72" cy="128" rx="15" ry="20" fill="#F5E6C8" transform="rotate(45 72 128)" />
        <ellipse cx="128" cy="128" rx="15" ry="20" fill="#F5E6C8" transform="rotate(-45 128 128)" />
        <circle cx="100" cy="100" r="15" fill="#F8E8E8" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-6 group">
              <Image
                src="/bloom-icon.png"
                alt="Bloom Mobile Bartending"
                width={360}
                height={180}
                className="h-36 w-auto brightness-0 invert opacity-90 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-white/70 mb-6 max-w-sm leading-relaxed">
              Premium mobile bartending services for life's most memorable moments.
              Crafting exceptional experiences, one cocktail at a time.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-peach transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-peach transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-peach transition-colors duration-300"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-peach transition-colors duration-300">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-peach transition-colors duration-300">
                  Cocktail Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-peach transition-colors duration-300">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#quote" className="text-white/70 hover:text-peach transition-colors duration-300">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+18183849862"
                  className="flex items-center gap-3 text-white/70 hover:text-peach transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-peach/20 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">(818) 384-9862</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@bloombartending.com"
                  className="flex items-center gap-3 text-white/70 hover:text-peach transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-peach/20 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>hello@bloombartending.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span>
                  Serving the Greater San Antonio<br />
                  <span className="text-sm">Metropolitan Area & surrounding regions</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} BLOOM Mobile Bartending. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-peach transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-peach transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
