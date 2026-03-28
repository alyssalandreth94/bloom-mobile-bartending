import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import CocktailGallery from "@/components/CocktailGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloralPageBreak from "@/components/FloralPageBreak";
import Image from "next/image";

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
