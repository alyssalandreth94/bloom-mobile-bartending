import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  viewportFit: "cover" as const,
  interactiveWidget: "resizes-content" as const,
};

export const metadata: Metadata = {
  title: "BLOOM Mobile Bartending | San Antonio, Texas",
  description: "Premium mobile bartending services in San Antonio, Texas for weddings, corporate events, and private celebrations. Licensed, insured, and committed to crafting unforgettable experiences.",
  metadataBase: new URL("https://www.bloombartending.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BLOOM Mobile Bartending | San Antonio, Texas",
    description: "Premium mobile bartending services for weddings, corporate events, and private celebrations. Licensed, insured, and committed to crafting unforgettable experiences.",
    url: "https://www.bloombartending.com",
    siteName: "BLOOM Mobile Bartending",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "BLOOM Mobile Bartending - Premium cocktail services in San Antonio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOOM Mobile Bartending | San Antonio, Texas",
    description: "Premium mobile bartending services for weddings, corporate events, and private celebrations.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XGE1MTC98S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XGE1MTC98S');
          `}
        </Script>
      </head>
      <body
        className={`${playfair.variable} ${lato.variable} antialiased`}
        style={{ fontFamily: "var(--font-lato), sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BLOOM Mobile Bartending",
              image: "https://www.bloombartending.com/opengraph-image.png",
              description:
                "Premium mobile bartending services in San Antonio, Texas for weddings, corporate events, and private celebrations.",
              url: "https://www.bloombartending.com",
              telephone: "+1-818-384-9862",
              email: "alyssa@bloombartending.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Antonio",
                addressRegion: "TX",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 29.4241,
                  longitude: -98.4936,
                },
                geoRadius: "80000",
              },
              priceRange: "$$",
              serviceType: [
                "Mobile Bartending",
                "Wedding Bartending",
                "Corporate Event Bartending",
                "Private Party Bartending",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
