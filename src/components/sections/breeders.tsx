const breeders = [
  {
    flag: "🇩🇪 Alemanha",
    name: "Selecta one",
    country: "Stuttgart",
    vars: "16 variedades",
    desc: "Líder global em genética de Dianthus, Gerbera e plantas para vaso. Mais de 90 anos de inovação em melhoramento ornamental.",
  },
  {
    flag: "🇮🇱 Israel",
    name: "Danziger",
    country: "Mishmar Hashiv'a",
    vars: "17 variedades",
    desc: "Inovação em flores de corte e vaso. Especialistas em Lisianthus, Petunia e Gypsophila com alta performance produtiva.",
  },
  {
    flag: "🇯🇵 Japão",
    name: "Sakata",
    country: "Yokohama",
    vars: "5 variedades",
    desc: "Precisão japonesa em híbridos. Catálogo premium de Girassóis sem pólen e SunPatiens para climas tropicais.",
  },
];

export function BreedersSection() {
  return (
    <section className="v10-breeders" id="parcerias">
      <div className="v10-breeders-inner">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "end",
          }}
          className="reveal"
        >
          <div>
            <div className="v10-section-eyebrow">Parceiros globais</div>
            <h2 className="v10-section-title">
              Genética dos <span className="it">três continentes.</span>
            </h2>
          </div>
          <p className="v10-section-sub">
            Trabalhamos diretamente com Selecta one (Alemanha), Danziger (Israel) e Sakata (Japão) — os maiores breeders mundiais em flores ornamentais. Suas variedades chegam ao Brasil propagadas em escala pela Bioplugs.
          </p>
        </div>
        <div className="v10-breeders-map reveal">Mapa global · em construção</div>
        <div className="v10-breeder-cards reveal-stagger">
          {breeders.map((b) => (
            <div className="v10-bcard" key={b.name}>
              <div className="v10-bcard-flag">{b.flag}</div>
              <div className="v10-bcard-name">{b.name}</div>
              <div className="v10-bcard-country">{b.country}</div>
              <div className="v10-bcard-vars">{b.vars}</div>
              <div className="v10-bcard-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
