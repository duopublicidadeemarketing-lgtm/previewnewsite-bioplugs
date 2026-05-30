import Link from "next/link";
import { breeders } from "@/data/breeders";
import { WorldMap } from "@/components/sections/world-map";

export const metadata = {
  title: "Parcerias · Bioplugs",
  description:
    "Genética dos três continentes — Selecta one (Alemanha), Danziger (Israel) e Sakata (Japão). Os maiores breeders globais em flores ornamentais, propagados em escala em Atibaia/SP pela Bioplugs.",
};

// Transforma markdown-style **bold** em <strong> simples
function withBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function ParceriasPage() {
  return (
    <>
      {/* HERO */}
      <section className="parc-hero">
        <div className="parc-hero-content">
          <div className="parc-hero-eyebrow">Parceiros globais</div>
          <h1 className="parc-hero-title">
            Genética dos <span className="it">três continentes.</span>
          </h1>
          <p className="parc-hero-sub">
            A Bioplugs trabalha diretamente com três das maiores breeders de flores ornamentais do mundo — Alemanha, Israel e Japão. Cada parceria foi construída ao longo de anos de relacionamento técnico e comercial, garantindo ao produtor brasileiro acesso a variedades exclusivas com performance comprovada.
          </p>
        </div>
        <div className="parc-hero-map">
          <WorldMap />
        </div>
      </section>

      {/* BREEDERS — um por section, alternando lado */}
      {breeders.map((b, idx) => (
        <section className="parc-section" key={b.slug}>
          <div className={`parc-breeder ${idx % 2 === 1 ? "reverse" : ""}`}>
            <div
              className="parc-breeder-image"
              style={{ backgroundImage: `url('${b.foto}')` }}
              role="img"
              aria-label={`Foto institucional ${b.nome}`}
            >
              <div className="parc-breeder-flag-badge">
                <span>{b.bandeira}</span>
                <span>{b.pais}</span>
              </div>
            </div>
            <div className="parc-breeder-content">
              <div className="parc-breeder-eyebrow">{b.cidade} · {b.pais}</div>
              <h2 className="parc-breeder-name">{b.nome}</h2>
              <div className="parc-breeder-tagline">{b.tagline}</div>

              <div className="parc-breeder-meta">
                <div className="parc-breeder-meta-item">
                  <span className="parc-breeder-meta-label">Fundação</span>
                  <span className="parc-breeder-meta-value">{b.ano_fundacao}</span>
                </div>
                <div className="parc-breeder-meta-item">
                  <span className="parc-breeder-meta-label">Variedades no catálogo</span>
                  <span className="parc-breeder-meta-value">
                    <em>{b.qtd_variedades}</em>
                  </span>
                </div>
                <div className="parc-breeder-meta-item">
                  <span className="parc-breeder-meta-label">Especialidade</span>
                  <span className="parc-breeder-meta-value" style={{ fontSize: "0.95rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>
                    {b.especialidade}
                  </span>
                </div>
              </div>

              <div className="parc-breeder-body">
                {b.paragrafos.map((p, i) => (
                  <p key={i}>{withBold(p)}</p>
                ))}
              </div>

              <div style={{ marginTop: "0.5rem" }}>
                <Link
                  href={`/produtos?breeder=${b.slug.split("-")[0]}`}
                  className="parc-breeder-cta"
                >
                  Ver variedades →
                </Link>
                <a
                  href={b.site_oficial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="parc-breeder-cta parc-breeder-cta-secondary"
                >
                  Site oficial ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <section className="emp-cta">
        <div className="emp-cta-left reveal">
          <h2>
            Quer trabalhar com <span className="it">genética premium?</span>
          </h2>
          <p>
            Atendemos exclusivamente produtores e floricultores profissionais. Solicite contato e entenda como podemos atender sua operação.
          </p>
        </div>
        <div className="emp-cta-actions reveal">
          <Link href="/contato" className="v10-btn v10-btn-primary">
            Falar com a equipe <span className="arrow">→</span>
          </Link>
          <Link href="/produtos" className="v10-btn v10-btn-secondary">
            Ver catálogo
          </Link>
        </div>
      </section>
    </>
  );
}
