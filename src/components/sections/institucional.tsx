import { Container } from "@/components/primitives/container";
import { SectionHeader } from "@/components/primitives/section-header";

const beneficios = [
  {
    num: "01",
    titulo: "Genética premium",
    texto:
      "Parceria oficial com Selecta, Danziger, Sakata e Hilverdakooij garante acesso às variedades mais avançadas do mercado global de floricultura.",
  },
  {
    num: "02",
    titulo: "Método técnico",
    texto:
      "Cada muda é produzida com protocolo rigoroso: ficha técnica auditável, controle de ciclo, densidade e vigor para máxima previsibilidade na sua estufa.",
  },
  {
    num: "03",
    titulo: "Entrega ao produtor",
    texto:
      "Modelo exclusivamente B2B. Nosso foco é o produtor profissional e o floricultor. Suporte agronômico contínuo, do pedido à colheita.",
  },
];

export function InstitucionalSection() {
  return (
    <section className="bg-[--paper] py-24 md:py-32">
      <Container>
        <SectionHeader
          label="01 — Por que Bioplugs"
          title="Mudas produzidas com método."
          subtitle="Mais do que fornecedor — somos o elo técnico entre a genética dos melhores breeders do mundo e o resultado prático na sua estufa."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {beneficios.map((b) => (
            <article
              key={b.num}
              className="reveal group rounded-2xl border border-[--border] bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <span
                className="mb-4 block text-5xl font-bold text-[--brand-lime]/30"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {b.num}
              </span>
              <h3
                className="mb-3 text-xl font-bold text-[--ink]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {b.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-[--muted]">{b.texto}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
