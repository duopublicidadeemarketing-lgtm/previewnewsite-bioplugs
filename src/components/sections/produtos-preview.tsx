"use client";

import { useEffect, useRef } from "react";

type Cat = {
  num: number;
  name: string;
  desc: string;
  candidates: string[];
};

const categories: Cat[] = [
  {
    num: 16,
    name: "Corte",
    desc: "Variedades de alta performance para floricultura comercial — Dianthus, Gerbera, Lisianthus, Girassol e mais.",
    candidates: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=900&q=80&auto=format&fit=crop",
      "https://images.pexels.com/photos/931158/pexels-photo-931158.jpeg?auto=compress&w=900",
    ],
  },
  {
    num: 3,
    name: "Jardim",
    desc: "Plantas ornamentais para paisagismo profissional e jardins residenciais de alto padrão.",
    candidates: [
      "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&w=900",
      "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=900&q=80&auto=format&fit=crop",
    ],
  },
  {
    num: 19,
    name: "Vaso",
    desc: "Variedades compactas para produção intensiva em vasos e embalagens — alto vigor, florescimento abundante.",
    candidates: [
      "https://images.unsplash.com/photo-1597945233059-3a4d7d9fec38?w=900&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=900&q=80&auto=format&fit=crop",
      "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&w=900",
    ],
  },
];

function CategoryTile({ c }: { c: Cat }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let i = 0;
    const tryNext = () => {
      if (i >= c.candidates.length) return;
      const im = new window.Image();
      im.onload = () => {
        el.style.backgroundImage = `url('${c.candidates[i]}')`;
      };
      im.onerror = () => {
        i += 1;
        tryNext();
      };
      im.src = c.candidates[i];
    };
    tryNext();
  }, [c.candidates]);

  return (
    <div className="v10-cat-tile">
      <div className="v10-cat-tile-bg" ref={bgRef} />
      <div className="v10-cat-tile-arrow">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M3 15 L15 3 M7 3 L15 3 L15 11"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="v10-cat-tile-content">
        <span className="v10-cat-tile-num">{c.num}</span>
        <div className="v10-cat-tile-name">{c.name}</div>
        <div className="v10-cat-tile-desc">{c.desc}</div>
      </div>
    </div>
  );
}

export function ProdutosPreviewSection() {
  return (
    <section className="v10-categories" id="produtos">
      <div className="v10-cat-header reveal">
        <div>
          <div className="v10-section-eyebrow">Nossas categorias</div>
          <h2 className="v10-section-title">
            Três mundos, <span className="it">uma genética.</span>
          </h2>
        </div>
        <p className="v10-cat-header-meta">
          Cada variedade é selecionada para uma vocação específica — produção comercial em larga escala, paisagismo profissional ou cultivo intensivo em vaso. Clique em uma categoria para explorar.
        </p>
      </div>
      <div className="v10-cat-grid reveal-stagger">
        {categories.map((c) => (
          <CategoryTile c={c} key={c.name} />
        ))}
      </div>
    </section>
  );
}
