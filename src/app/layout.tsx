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
  keywords: "mobile bartending, wedding bartender, corporate events, cocktail catering, private party bar, San Antonio, Texas",
  metadataBase: new URL("https://www.bloombartending.com"),
  openGraph: {
    title: "BLOOM Mobile Bartending | San Antonio, Texas",
    description: "Premium mobile bartending services for weddings, corporate events, and private celebrations. Licensed, insured, and committed to crafting unforgettable experiences.",
    url: "https://www.bloombartending.com",
    siteName: "BLOOM Mobile Bartending",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOOM Mobile Bartending | San Antonio, Texas",
    description: "Premium mobile bartending services for weddings, corporate events, and private celebrations.",
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
        {children}
      </body>
    </html>
  );
}
