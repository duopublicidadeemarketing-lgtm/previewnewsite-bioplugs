"use client";

import Link from "next/link";
import { useState } from "react";
import {
  type Produto,
  breederLabel,
  breederFlag,
} from "@/data/produtos";

const ICONS = {
  flor: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 9 L16 16 L21 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  vigor: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 5 L16 27 M10 11 L16 5 L22 11 M9 22 L16 27 L23 22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  cresc: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 27 L16 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 14 C12 12 9 9 10 6 C13 5 17 8 16 14 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
      <path d="M16 14 C20 12 23 9 22 6 C19 5 15 8 16 14 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  tipo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 5 L16 11 M16 21 L16 27 M5 16 L11 16 M21 16 L27 16 M8.5 8.5 L12.5 12.5 M19.5 19.5 L23.5 23.5 M23.5 8.5 L19.5 12.5 M12.5 19.5 L8.5 23.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  cheiro: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M11 6 L21 6 L19 12 L13 12 L11 6 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 5 L16 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 14 L19 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 14 L11 22 Q16 28 21 22 L21 14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  sazo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="9" width="20" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="6" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.6" />
      <line x1="11" y1="6" x2="11" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="21" y1="6" x2="21" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="11" cy="19" r="1.2" fill="currentColor" />
      <circle cx="16" cy="19" r="1.2" fill="currentColor" />
      <circle cx="21" cy="19" r="1.2" fill="currentColor" />
    </svg>
  ),
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function ProdutoDetalhe({ p }: { p: Produto }) {
  // Galeria: usa o array de fotos do PRÓPRIO produto (1-5 fotos)
  const allPhotos = p.fotos && p.fotos.length > 0 ? p.fotos : [p.foto];
  const [active, setActive] = useState(0);

  return (
    <>
      <nav className="pdet-breadcrumb">
        <Link href="/produtos">Produtos</Link>
        <span className="sep">/</span>
        <Link href={`/produtos?categoria=${p.categoria}`}>{cap(p.categoria)}</Link>
        <span className="sep">/</span>
        <span className="current">{p.nome}</span>
      </nav>

      <section className="pdet-hero">
        <div className="pdet-gallery">
          <div className="pdet-gal-main">
            <div
              className="pdet-gal-img"
              style={{ backgroundImage: `url('${allPhotos[active]}')` }}
            />
            <span className="pdet-gal-tag">Catálogo 26 / 27</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.6rem" }}>
            {allPhotos.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  aspectRatio: "1",
                  borderRadius: "4px",
                  overflow: "hidden",
                  cursor: "pointer",
                  backgroundImage: `url('${src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: active === i ? "2px solid var(--lime-deep)" : "2px solid transparent",
                  opacity: active === i ? 1 : 0.65,
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="pdet-info-eyebrow">Variedade · Catálogo 26/27</div>
          <h1 className="pdet-info-title">{p.nome}</h1>
          <div className="pdet-info-common">{p.especie} · {p.familia}</div>
          <div className="pdet-tags">
            <span className="pdet-tag pdet-tag-breeder">
              {breederFlag(p.breeder)} {breederLabel(p.breeder)}
            </span>
            <span className="pdet-tag pdet-tag-categoria">{cap(p.categoria)}</span>
            {p.cheiro && <span className="pdet-tag">Perfumada</span>}
            {p.tipoFlor === "dupla" && <span className="pdet-tag">Flor dupla</span>}
            <span className="pdet-tag">Vigor {p.vigor}</span>
          </div>
          <p className="pdet-info-desc">{p.caracteristica}.</p>
          <div className="pdet-cta-row">
            <Link
              href={`/contato?produto=${p.slug}`}
              className="pdet-btn pdet-btn-primary"
            >
              Solicitar orçamento →
            </Link>
            <Link href="/produtos" className="pdet-btn pdet-btn-secondary">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </section>

      <div className="pdet-iconrow">
        <Pill icon={ICONS.flor} label="Florescimento" value={cap(p.florescimento)} />
        <Pill icon={ICONS.vigor} label="Vigor" value={cap(p.vigor)} />
        <Pill icon={ICONS.cresc} label="Crescimento" value={cap(p.crescimento)} />
        <Pill icon={ICONS.tipo} label="Tipo de flor" value={cap(p.tipoFlor)} />
        <Pill icon={ICONS.cheiro} label="Cheiro" value={p.cheiro ? "Sim" : "Não"} />
        <Pill icon={ICONS.sazo} label="Sazonalidade" value={cap(p.sazonalidade)} />
      </div>

      <section className="pdet-tech">
        <div className="pdet-tech-side">
          <div className="pdet-tech-eyebrow">Ficha técnica</div>
          <h2 className="pdet-tech-title">
            Especificações <span className="it">completas.</span>
          </h2>
          <p className="pdet-tech-sub">
            Dados técnicos extraídos do catálogo {breederLabel(p.breeder)} 26/27. Para volumes acima de 5.000 mudas, parâmetros podem ser ajustados conforme protocolo do produtor.
          </p>
        </div>
        <div className="pdet-tech-table">
          <Row k="Espécie" v={<><em>{p.especie}</em></>} />
          <Row k="Família" v={p.familia} />
          <Row k="Florescimento" v={cap(p.florescimento)} />
          <Row k="Vigor" v={cap(p.vigor)} />
          <Row k="Sazonalidade" v={cap(p.sazonalidade)} />
          <Row k="Tipo de flor" v={cap(p.tipoFlor)} />
          <Row k="Ciclo de produção" v={p.cicloProducao} />
          <Row k="Densidade de plantio" v={p.densidadePlantio} />
          <Row k="Cheiro" v={p.cheiro ? "Sim" : "Não"} />
          <Row k="Crescimento" v={cap(p.crescimento)} />
          <Row k="Característica" v={p.caracteristica} />
          <Row k="Comprimento de talo" v={<em>{p.comprimentoTalo}</em>} />
          <Row k="Diâmetro da flor" v={<em>{p.diametroFlor}</em>} />
          <Row k="Breeder" v={`${breederFlag(p.breeder)} ${breederLabel(p.breeder)}`} />
          <Row k="Categoria" v={cap(p.categoria)} />
        </div>
      </section>

      <section className="pdet-bcta">
        <div className="pdet-bcta-content">
          <h2>
            Quero esta <span className="it">variedade.</span>
          </h2>
          <p>
            Solicite orçamento técnico para {p.nome}. Atendimento exclusivo a produtores e floricultores profissionais. Consulte safra disponível e MOQ para sua região.
          </p>
        </div>
        <div className="pdet-cta-row" style={{ marginBottom: 0 }}>
          <Link href={`/contato?produto=${p.slug}`} className="pdet-btn pdet-btn-primary">
            Solicitar orçamento →
          </Link>
        </div>
      </section>
    </>
  );
}

function Pill({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="pdet-iconpill">
      <div className="pdet-iconpill-circle">{icon}</div>
      <div className="pdet-iconpill-label">{label}</div>
      <div className="pdet-iconpill-divider" />
      <div className="pdet-iconpill-value">{value}</div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="pdet-tech-row">
      <div className="pdet-tech-key">{k}</div>
      <div className="pdet-tech-val">{v}</div>
    </div>
  );
}
