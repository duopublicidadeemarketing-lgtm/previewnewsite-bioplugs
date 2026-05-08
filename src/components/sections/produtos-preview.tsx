// Categorias section — 3 large photo tiles (Corte / Jardim / Vaso)
const categories = [
  {
    num: 16,
    name: "Corte",
    desc: "Variedades de alta performance para floricultura comercial — Dianthus, Gerbera, Lisianthus, Girassol e mais.",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1200&q=85&auto=format&fit=crop",
  },
  {
    num: 3,
    name: "Jardim",
    desc: "Plantas ornamentais para paisagismo profissional e jardins residenciais de alto padrão.",
    img: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&w=1200",
  },
  {
    num: 19,
    name: "Vaso",
    desc: "Variedades compactas para produção intensiva em vasos e embalagens — alto vigor, florescimento abundante.",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc7b?w=1200&q=85&auto=format&fit=crop",
  },
];

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
          <div className="v10-cat-tile" key={c.name}>
            <div
              className="v10-cat-tile-bg"
              style={{ backgroundImage: `url('${c.img}')` }}
            />
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
        ))}
      </div>
    </section>
  );
}
