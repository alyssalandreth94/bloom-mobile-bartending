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
    <div className="w-full overflow-hidden">
      <Image
        src="/wildflower-divider.png"
        alt="Floral divider"
        width={5468}
        height={2743}
        className="w-full h-auto"
      />
    </div>
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
