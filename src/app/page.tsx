import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSignals from "@/components/TrustSignals";
import Services from "@/components/Services";
import CocktailGallery from "@/components/CocktailGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <TrustSignals />
      <Services />
      <CocktailGallery />
      <Testimonials />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
