import { ScrollRevealProvider } from "@/components/providers/scroll-reveal-provider";
import { HeroSection } from "@/components/sections/hero";
import { InstitucionalSection } from "@/components/sections/institucional";
import { BreedersSection } from "@/components/sections/breeders";
import { ProdutosPreviewSection } from "@/components/sections/produtos-preview";
import { CtaSegmentadoSection } from "@/components/sections/cta-segmentado";

export default function HomePage() {
  return (
    <ScrollRevealProvider>
      <HeroSection />
      <InstitucionalSection />
      <BreedersSection />
      <ProdutosPreviewSection />
      <CtaSegmentadoSection />
    </ScrollRevealProvider>
  );
}
