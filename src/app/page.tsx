import { HeroSection } from "@/components/sections/hero";
import { InstitucionalSection } from "@/components/sections/institucional";
import { ProdutosPreviewSection } from "@/components/sections/produtos-preview";
import { VarietiesSection } from "@/components/sections/varieties";
import { BreedersSection } from "@/components/sections/breeders";
import { ProcessSection } from "@/components/sections/process";
import { CtaSegmentadoSection } from "@/components/sections/cta-segmentado";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InstitucionalSection />
      <ProdutosPreviewSection />
      <VarietiesSection />
      <BreedersSection />
      <ProcessSection />
      <CtaSegmentadoSection />
    </>
  );
}
