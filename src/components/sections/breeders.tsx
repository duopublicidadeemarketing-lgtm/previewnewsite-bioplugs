import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { SectionHeader } from "@/components/primitives/section-header";
import { breeders } from "@/data/breeders";

export function BreedersSection() {
  return (
    <section className="bg-[--ink] py-24 md:py-32">
      <Container>
        <SectionHeader
          label="02 — Breeders parceiros"
          title="Genética de quem lidera o mundo."
          subtitle="Representantes oficiais dos maiores programas de melhoramento genético floral do planeta."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {breeders.map((b) => (
            <Link
              key={b.slug}
              href={`/parcerias/${b.slug}`}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-[--brand-lime]/40"
            >
              {/* Bandeira + nome */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl">{b.bandeira}</span>
                <div>
                  <p className="font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {b.nome}
                  </p>
                  <p className="text-xs text-white/40">{b.pais}</p>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-sm leading-relaxed text-white/60 line-clamp-3">
                {b.descricao}
              </p>

              {/* Link arrow */}
              <span className="mt-4 block text-xs font-semibold text-[--brand-lime] transition-transform group-hover:translate-x-1">
                Ver variedades →
              </span>

              {/* Accent bar bottom */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-[--brand-lime] transition-all duration-500 group-hover:w-full"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
