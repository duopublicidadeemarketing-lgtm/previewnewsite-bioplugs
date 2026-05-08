const items = [
  {
    cls: "v10-var-item-1",
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1400&q=85&auto=format&fit=crop",
    tag: "Corte",
    name: "Dianthus barbatus",
    meta: "Selecta one · Florescimento precoce · Talo longo",
  },
  {
    cls: "v10-var-item-2",
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=900&q=85&auto=format&fit=crop",
    tag: "Corte",
    name: "Gerbera jamesonii",
    meta: "Sakata · Alto vigor",
  },
  {
    cls: "v10-var-item-3",
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc7b?w=900&q=85&auto=format&fit=crop",
    tag: "Vaso",
    name: "Dahlia hybrida",
    meta: "Selecta one · Floração abundante",
  },
  {
    cls: "v10-var-item-4",
    img: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&w=1400",
    tag: "Corte",
    name: "Helianthus annuus",
    meta: "Sakata · Sem pólen · Talo ereto premium",
  },
];

export function VarietiesSection() {
  return (
    <section className="v10-varieties">
      <div className="v10-var-header reveal">
        <div>
          <div className="v10-section-eyebrow">Nosso catálogo</div>
          <h2 className="v10-section-title">
            Variedades em <span className="it">destaque.</span>
          </h2>
        </div>
        <a href="/produtos" className="v10-var-link">
          Ver catálogo completo →
        </a>
      </div>
      <div className="v10-var-grid reveal-stagger">
        {items.map((it) => (
          <div className={`v10-var-item ${it.cls}`} key={it.name}>
            <div
              className="v10-var-img"
              style={{ backgroundImage: `url('${it.img}')` }}
            />
            <span className="v10-var-tag">{it.tag}</span>
            <div className="v10-var-overlay">
              <div className="v10-var-name">{it.name}</div>
              <div className="v10-var-meta">{it.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
