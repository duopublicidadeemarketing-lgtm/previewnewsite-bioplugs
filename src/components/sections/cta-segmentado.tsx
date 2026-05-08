import Link from "next/link";

const rows = [
  { title: "Sou produtor", desc: "Quero adquirir mudas para meu cultivo", href: "/contato?perfil=produtor" },
  { title: "Sou paisagista", desc: "Procuro variedades para projetos", href: "/contato?perfil=paisagista" },
  { title: "Quero ser parceiro", desc: "Tenho interesse comercial estratégico", href: "/contato?perfil=parceiro" },
];

export function CtaSegmentadoSection() {
  return (
    <section className="v10-cta-final" id="contato">
      <div className="v10-cta-final-left reveal">
        <div className="v10-section-eyebrow">Vamos conversar</div>
        <h2 className="v10-section-title">
          Pronto para <span className="it">elevar seu cultivo?</span>
        </h2>
        <p className="v10-section-sub">
          Cada cliente Bioplugs tem necessidades distintas. Conte sua demanda e nosso time técnico vai construir a solução certa para o seu negócio.
        </p>
      </div>
      <div className="v10-cta-final-right reveal">
        {rows.map((r) => (
          <Link href={r.href} key={r.title} className="v10-cta-row">
            <div className="v10-cta-row-content">
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
            <div className="v10-cta-row-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8 L13 8 M9 4 L13 8 L9 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
