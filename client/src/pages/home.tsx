import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import KeyHighlights from "@/components/sections/key-highlights";
import Services from "@/components/sections/services";
import Industries from "@/components/sections/industries";
import MelodiaTeaser from "@/components/sections/melodia-teaser";
import Stats from "@/components/sections/stats";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <KeyHighlights />
        <Services />
        <Industries />
        <MelodiaTeaser />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
