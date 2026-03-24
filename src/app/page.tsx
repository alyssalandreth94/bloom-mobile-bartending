import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import CocktailGallery from "@/components/CocktailGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Image from "next/image";

function FloralPageBreak() {
  return (
    <div
      className="w-full h-[200px] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url(/wildflower-divider.png)" }}
      role="img"
      aria-label="Floral divider"
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <TrustSignals />
      <FloralPageBreak />
      <Services />
      <FloralPageBreak />
      <CocktailGallery />
      <FloralPageBreak />
      <Testimonials />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
