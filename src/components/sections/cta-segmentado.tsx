import Link from "next/link";
import { Container } from "@/components/primitives/container";

const perfis = [
  {
    id: "produtor",
    titulo: "Sou produtor",
    descricao:
      "Preciso de mudas técnicas para produção em escala. Quero acesso ao catálogo 26/27, fichas técnicas e condições de fornecimento.",
    cta: "Ver condições para produtores",
    cor: "bg-[--brand-blue]",
    corHover: "hover:bg-[--brand-lime] hover:text-[--ink]",
    icone: "🌱",
  },
  {
    id: "fornecedor",
    titulo: "Sou fornecedor",
    descricao:
      "Tenho interesse em tornar-me fornecedor parceiro de insumos, substratos, embalagens ou serviços para a Bioplugs.",
    cta: "Quero ser fornecedor",
    cor: "bg-[--ink]",
    corHover: "hover:bg-[--brand-lime] hover:text-[--ink]",
    icone: "🤝",
  },
  {
    id: "parceiro",
    titulo: "Quero ser parceiro",
    descricao:
      "Distribuidor, representante regional ou parceiro estratégico? Vamos conversar sobre oportunidades de parceria.",
    cta: "Falar sobre parceria",
    cor: "bg-[--brand-sage]",
    corHover: "hover:bg-[--brand-lime] hover:text-[--ink]",
    icone: "🌍",
  },
];

export function CtaSegmentadoSection() {
  return (
    <section className="bg-[--paper] py-24 md:py-32">
      <Container>
        <div className="reveal mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[--brand-sage]">
            04 — Como podemos ajudar
          </p>
          <h2
            className="text-3xl font-bold text-[--ink] md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Qual é o seu perfil?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[--muted]">
            A Bioplugs atende exclusivamente B2B. Identifique-se para receber
            as informações certas para o seu negócio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {perfis.map((p) => (
            <Link
              key={p.id}
              href={`/contato?perfil=${p.id}`}
              className={`reveal group flex flex-col rounded-2xl p-8 text-white transition-all duration-300 ${p.cor} ${p.corHover}`}
            >
              <span className="mb-4 text-4xl">{p.icone}</span>
              <h3
                className="mb-3 text-xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {p.titulo}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed opacity-80">
                {p.descricao}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold transition-transform group-hover:translate-x-1">
                {p.cta} →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
