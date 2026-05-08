import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/primitives/container";
import { SectionHeader } from "@/components/primitives/section-header";
import { produtos, categoriaLabels, categoriaCount, type Categoria } from "@/data/produtos";

const categorias: Categoria[] = ["corte", "jardim", "vaso"];
const PREVIEW_PER_CAT = 4;

export function ProdutosPreviewSection() {
  return (
    <section className="bg-[--bone] py-24 md:py-32">
      <Container>
        <SectionHeader
          label="03 — Catálogo 26/27"
          title="Variedades para cada necessidade."
          subtitle="Mosaico completo de mudas para corte, jardim e vaso. Clique em qualquer variedade para ver a ficha técnica."
        />

        <div className="space-y-16">
          {categorias.map((cat) => {
            const itens = produtos
              .filter((p) => p.categoria === cat)
              .slice(0, PREVIEW_PER_CAT);
            const total = categoriaCount[cat];

            return (
              <div key={cat}>
                {/* Cabeçalho da categoria */}
                <div className="reveal mb-6 flex items-center justify-between border-b border-[--border] pb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-2xl font-bold text-[--ink]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {categoriaLabels[cat]}
                    </span>
                    <span className="rounded-full bg-[--brand-lime]/20 px-3 py-1 text-xs font-semibold text-[--brand-lime]">
                      {total} variedades
                    </span>
                  </div>
                  <Link
                    href={`/produtos?categoria=${cat}`}
                    className="text-sm font-medium text-[--brand-blue] hover:text-[--brand-lime] transition-colors"
                  >
                    Ver todas →
                  </Link>
                </div>

                {/* Grid de cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {itens.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/produtos/${p.slug}`}
                      className="reveal group overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                    >
                      {/* Imagem */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[--bone]">
                        <Image
                          src={p.foto || "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"}
                          alt={`${p.especie} ${p.familia}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        {/* Breeder badge */}
                        <span className="absolute right-2 top-2 rounded-full bg-[--ink]/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                          {p.breeder}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="p-4">
                        <p className="text-[11px] font-medium uppercase tracking-widest text-[--brand-sage]">
                          {p.florescimento}
                        </p>
                        <h3
                          className="mt-1 font-bold text-[--ink] leading-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {p.especie}
                        </h3>
                        <p className="text-sm text-[--muted]">{p.familia}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA global */}
        <div className="reveal mt-16 text-center">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 rounded-full bg-[--brand-blue] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[--brand-lime] hover:text-[--ink]"
          >
            Ver catálogo completo (38 variedades) →
          </Link>
        </div>
      </Container>
    </section>
  );
}
