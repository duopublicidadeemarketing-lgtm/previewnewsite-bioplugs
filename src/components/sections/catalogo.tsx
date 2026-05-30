"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  produtos as ALL,
  countByCategoria,
  type Categoria,
  type Breeder,
  type Sazonalidade,
  type Vigor,
  type Produto,
} from "@/data/produtos";

type FilterState = {
  categoria: Set<Categoria>;
  breeder: Set<Breeder>;
  sazonalidade: Set<Sazonalidade>;
  vigor: Set<Vigor>;
  cheiro: Set<"sim">;
};

const initial = (): FilterState => ({
  categoria: new Set(),
  breeder: new Set(),
  sazonalidade: new Set(),
  vigor: new Set(),
  cheiro: new Set(),
});

// Teaser curto exibido no hover do card — primeira frase, max ~42 chars
function shortHighlight(p: Produto): string {
  const c = (p.caracteristica || "").trim();
  if (!c) return `${p.vigor.charAt(0).toUpperCase()}${p.vigor.slice(1)} vigor`;
  // Pega a primeira frase antes de ponto/dois-pontos
  const first = c.split(/[.:;]/)[0].trim();
  if (first.length <= 42) return first;
  // Senão, corta no espaço mais próximo de 38 chars + reticências
  const cut = first.slice(0, 38).split(" ").slice(0, -1).join(" ");
  return cut + "…";
}

function Card({ p }: { p: Produto }) {
  const letter = p.breeder.charAt(0).toUpperCase();
  const breederBg =
    p.breeder === "selecta"
      ? "#1E3A8A"
      : p.breeder === "danziger"
      ? "#6FA82A"
      : "#C4242C";
  return (
    <Link href={`/produtos/${p.slug}`} className="pcard">
      <div className="pcard-photo">
        <div
          className="pcard-photo-img"
          style={{ backgroundImage: `url('${p.foto}')` }}
        />
        <div
          className="pcard-badge"
          style={{ background: breederBg }}
        >
          <span className="pcard-badge-letter">{letter}</span>
        </div>
        <div className="pcard-overlay">
          <div className="pcard-overlay-text">{shortHighlight(p)}</div>
          <div className="pcard-overlay-link">Ver detalhes →</div>
        </div>
      </div>
      <div className="pcard-body">
        <div className="pcard-name">{p.nome}</div>
        <div className="pcard-meta">{p.meta}</div>
      </div>
    </Link>
  );
}

const BANDS: { cat: Categoria; name: string; desc: string }[] = [
  { cat: "corte", name: "Corte", desc: "Variedades de alta performance para floricultura comercial — talo longo, uniformidade e durabilidade pós-colheita." },
  { cat: "jardim", name: "Jardim", desc: "Plantas ornamentais para paisagismo profissional e jardins residenciais — robustez, cor e ciclo prolongado." },
  { cat: "vaso", name: "Vaso", desc: "Variedades compactas para produção intensiva em vasos e embalagens — alto vigor, florescimento abundante e crescimento controlado." },
];

export function CatalogoView() {
  const [f, setF] = useState<FilterState>(initial);

  const toggle = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K] extends Set<infer V> ? V : never
  ) => {
    setF((prev) => {
      const next = { ...prev, [key]: new Set(prev[key]) } as FilterState;
      const set = next[key] as Set<typeof value>;
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return next;
    });
  };

  const clear = () => setF(initial());

  const filtered = useMemo(() => {
    return ALL.filter((p) => {
      if (f.categoria.size > 0 && !f.categoria.has(p.categoria)) return false;
      if (f.breeder.size > 0 && !f.breeder.has(p.breeder)) return false;
      if (f.sazonalidade.size > 0 && !f.sazonalidade.has(p.sazonalidade)) return false;
      if (f.vigor.size > 0 && !f.vigor.has(p.vigor)) return false;
      if (f.cheiro.size > 0 && !p.cheiro) return false;
      return true;
    });
  }, [f]);

  const counts = useMemo(
    () => ({
      corte: filtered.filter((p) => p.categoria === "corte").length,
      jardim: filtered.filter((p) => p.categoria === "jardim").length,
      vaso: filtered.filter((p) => p.categoria === "vaso").length,
    }),
    [filtered]
  );

  const hasAny =
    f.categoria.size + f.breeder.size + f.sazonalidade.size + f.vigor.size + f.cheiro.size > 0;
  const isCatActive = f.categoria.size > 0;

  const chip = <K extends keyof FilterState>(
    label: string,
    key: K,
    value: FilterState[K] extends Set<infer V> ? V : never,
    extraClass = ""
  ) => {
    const active = (f[key] as Set<unknown>).has(value);
    return (
      <button
        key={`${String(key)}-${String(value)}`}
        className={`cat-fchip ${extraClass} ${active ? "active" : ""}`}
        onClick={() => toggle(key, value)}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      <section className="cat-hero">
        <div className="cat-hero-content">
          <div className="cat-hero-eyebrow">Catálogo 26 / 27</div>
          <h1 className="cat-hero-title">
            Nosso <span className="it">catálogo.</span>
          </h1>
          <p className="cat-hero-sub">
            38 variedades selecionadas dos maiores breeders do mundo, propagadas com tecnologia em Atibaia/SP. Filtre por breeder, sazonalidade ou vigor — e clique em qualquer variedade para ver a ficha técnica completa.
          </p>
        </div>
        <div className="cat-hero-meta">
          <div className="cat-hero-meta-row">
            <div className="cat-hero-meta-stat">
              <span className="cat-hero-meta-num">38</span>
              <span className="cat-hero-meta-label">Variedades</span>
            </div>
            <div className="cat-hero-meta-stat">
              <span className="cat-hero-meta-num">3</span>
              <span className="cat-hero-meta-label">Categorias</span>
            </div>
            <div className="cat-hero-meta-stat">
              <span className="cat-hero-meta-num">3</span>
              <span className="cat-hero-meta-label">Breeders globais</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <div className="cat-filters">
        <div className="cat-filter-row cat-filter-row-primary">
          <span className="cat-filter-label">Categoria</span>
          <div className="cat-filter-group">
            <button
              className={`cat-fchip cat-fchip-cat ${f.categoria.has("corte") ? "active" : ""}`}
              onClick={() => toggle("categoria", "corte")}
            >
              Corte <span className="cat-fchip-c">{countByCategoria.corte}</span>
            </button>
            <button
              className={`cat-fchip cat-fchip-cat ${f.categoria.has("jardim") ? "active" : ""}`}
              onClick={() => toggle("categoria", "jardim")}
            >
              Jardim <span className="cat-fchip-c">{countByCategoria.jardim}</span>
            </button>
            <button
              className={`cat-fchip cat-fchip-cat ${f.categoria.has("vaso") ? "active" : ""}`}
              onClick={() => toggle("categoria", "vaso")}
            >
              Vaso <span className="cat-fchip-c">{countByCategoria.vaso}</span>
            </button>
          </div>
          <div className="cat-filter-spacer" />
          {hasAny && (
            <button className="cat-filter-clear" onClick={clear}>
              Limpar filtros
            </button>
          )}
          <div className="cat-filter-count">
            <em>{filtered.length}</em> de {ALL.length}
          </div>
        </div>

        <div className="cat-filter-row cat-filter-row-secondary">
          <div className="cat-filter-group">
            <span className="cat-filter-label">Breeder</span>
            {chip("Selecta", "breeder", "selecta")}
            {chip("Danziger", "breeder", "danziger")}
            {chip("Sakata", "breeder", "sakata")}
          </div>
          <div className="cat-filter-divider" />
          <div className="cat-filter-group">
            <span className="cat-filter-label">Sazonalidade</span>
            {chip("Anual", "sazonalidade", "anual")}
            {chip("Bianual", "sazonalidade", "bianual")}
            {chip("Perene", "sazonalidade", "perene")}
          </div>
          <div className="cat-filter-divider" />
          <div className="cat-filter-group">
            <span className="cat-filter-label">Vigor</span>
            {chip("Médio", "vigor", "medio")}
            {chip("Alto", "vigor", "alto")}
            {chip("Compacta", "vigor", "compacta")}
          </div>
          <div className="cat-filter-divider" />
          <div className="cat-filter-group">
            <span className="cat-filter-label">Cheiro</span>
            {chip("Perfumado", "cheiro", "sim")}
          </div>
        </div>
      </div>

      {/* BANDS */}
      {BANDS.map((b) => {
        const items = filtered.filter((p) => p.categoria === b.cat);
        const catNotSelected = isCatActive && !f.categoria.has(b.cat);
        const isEmpty = !catNotSelected && counts[b.cat] === 0 && hasAny;
        if (catNotSelected) return null;
        return (
          <section
            key={b.cat}
            className={`cat-band ${isEmpty ? "is-empty" : ""}`}
          >
            <div className="cat-band-header">
              <div className="cat-band-title-wrap">
                <h2 className="cat-band-name">{b.name}</h2>
                <span className="cat-band-count">
                  {counts[b.cat]} variedade{counts[b.cat] !== 1 ? "s" : ""}
                </span>
              </div>
              <p className="cat-band-desc">{b.desc}</p>
            </div>
            <div className="cat-grid">
              {items.map((p) => (
                <Card key={p.slug} p={p} />
              ))}
            </div>
            <div className="cat-band-empty">
              Nenhuma variedade nesta categoria com os filtros aplicados.
            </div>
          </section>
        );
      })}
    </>
  );
}
