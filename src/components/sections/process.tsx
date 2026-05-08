const steps = [
  {
    num: "01",
    title: "Matriz certificada",
    desc: "Recebemos material genético diretamente do breeder, com certificação de origem e protocolos rigorosos de qualidade.",
  },
  {
    num: "02",
    title: "Propagação técnica",
    desc: "Estaquia em ambiente controlado de temperatura, umidade e iluminação — uniformidade absoluta.",
  },
  {
    num: "03",
    title: "Enraizamento",
    desc: "Substrato técnico, irrigação automatizada e monitoramento contínuo. Mudas com sistema radicular pronto.",
  },
  {
    num: "04",
    title: "Logística refrigerada",
    desc: "Embalagem técnica e transporte com temperatura controlada — entregamos no seu campo no padrão internacional.",
  },
];

export function ProcessSection() {
  return (
    <section className="v10-process" id="empresa">
      <div className="v10-process-grid reveal">
        <div>
          <div className="v10-section-eyebrow">Como produzimos</div>
          <h2 className="v10-section-title">
            Da matriz ao seu <span className="it">campo.</span>
          </h2>
          <p className="v10-section-sub">
            Toda muda Bioplugs passa por um processo rigoroso de quatro etapas, garantindo uniformidade genética, sanidade fitossanitária e vigor de plantio para o produtor.
          </p>
          <div className="v10-process-list">
            {steps.map((s) => (
              <div className="v10-process-item" key={s.num}>
                <div className="v10-process-num">{s.num}</div>
                <div>
                  <div className="v10-process-title">{s.title}</div>
                  <div className="v10-process-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="v10-process-photo" />
      </div>
    </section>
  );
}
