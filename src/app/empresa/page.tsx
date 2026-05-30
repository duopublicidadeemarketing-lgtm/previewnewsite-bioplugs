import Link from "next/link";

export const metadata = {
  title: "Empresa · Bioplugs",
  description:
    "Bioplugs — uma das mais tecnificadas viveiristas do Brasil. Genética certificada dos maiores breeders globais, propagada em escala industrial em Atibaia/SP. Conheça nossa história.",
};

// Canal oficial da Bioplugs no YouTube — embed mostra o último upload do canal
const YT_CHANNEL_UPLOADS = "UU8TtLeJYSU6l6KzmYXzrRwg";

export default function EmpresaPage() {
  return (
    <>
      {/* HERO */}
      <section className="emp-hero">
        <div>
          <div className="emp-hero-eyebrow">Nossa história</div>
          <h1 className="emp-hero-title">
            Cultivando a floricultura <span className="it">brasileira.</span>
          </h1>
          <p className="emp-hero-sub">
            Há mais de duas décadas a Bioplugs propaga em escala industrial as variedades dos breeders mais reconhecidos do mundo, sempre prezando pela qualidade técnica e pela relação de confiança com produtores e floricultores brasileiros.
          </p>
        </div>
        <div className="emp-hero-stats">
          <div className="emp-hero-stat">
            <div className="emp-hero-stat-num">+20<em>a</em></div>
            <div className="emp-hero-stat-label">De mercado nacional</div>
          </div>
          <div className="emp-hero-stat">
            <div className="emp-hero-stat-num">38</div>
            <div className="emp-hero-stat-label">Variedades técnicas</div>
          </div>
          <div className="emp-hero-stat">
            <div className="emp-hero-stat-num">3</div>
            <div className="emp-hero-stat-label">Breeders globais</div>
          </div>
        </div>
      </section>

      {/* BLOCO 1 — Destaque no mercado */}
      <section className="emp-section">
        <div className="emp-block reveal">
          <div className="emp-block-content">
            <div className="emp-block-eyebrow">Mercado brasileiro</div>
            <h2 className="emp-block-title">
              Destaque no mercado de <span className="it">flores brasileiro.</span>
            </h2>
            <div className="emp-block-body">
              <p>
                O segmento de flores e plantas ornamentais é um dos mais promissores no Brasil. Fortalecido na década de 70, graças aos imigrantes japoneses e holandeses, hoje o setor cresce <strong>8% ao ano</strong>, movimentando cerca de <strong>R$ 6,2 bilhões</strong> ao ano e gerando mais de <strong>200 mil empregos diretos</strong>.
              </p>
              <p>
                Detentor de uma alta tecnologia, o mercado de flores envolve avançados processos de produção, logística, comercialização e possui um enorme potencial de crescimento. Neste cenário, o produtor rural passou a buscar novas variedades e melhorias genéticas — e foi desta necessidade que surgiu a Bioplugs.
              </p>
              <p>
                Somos uma empresa dedicada à produção e comercialização de mudas de flores com alto desempenho genético. Possuímos um vasto portfólio que conta com flores de corte, vasos e jardins, atendendo às diferentes necessidades do mercado.
              </p>
              <p>
                Guiados pela inovação, estamos sempre em busca de variedades que atendam aos anseios dos consumidores brasileiros. Graças à parceria e relação de confiança que construímos com grandes breeders como <strong>Selecta one, Danziger e Sakata</strong>, trazemos ao mercado nacional produtos exclusivos.
              </p>
            </div>
          </div>
          <div
            className="emp-block-image"
            style={{ backgroundImage: "url('/empresa/bandeira.jpg')" }}
            aria-label="Bandeira Bioplugs hasteada na produção"
            role="img"
          />
        </div>
      </section>

      {/* BLOCO 2 — Parceria em primeiro lugar */}
      <section className="emp-section emp-section-bone">
        <div className="emp-block reverse reveal">
          <div className="emp-block-content">
            <div className="emp-block-eyebrow">Relação de confiança</div>
            <h2 className="emp-block-title">
              Parceria em <span className="it">primeiro lugar.</span>
            </h2>
            <div className="emp-block-body">
              <p>
                Para nós, prestar um bom serviço é primordial. Por isso, contamos com um sistema seguro e preciso, garantindo que todas as etapas do atendimento sejam cumpridas com excelência.
              </p>
              <p>
                Nosso pessoal é treinado e constantemente atualizado, pronto para prestar todo o suporte necessário aos clientes e representantes. Da produção à logística, do financeiro às vendas, prezamos pelo sucesso de todos os envolvidos na cadeia produtiva: <strong>breeders, produtores, pontos de venda e consumidores</strong>.
              </p>
              <p>
                Buscamos trazer uma gama de produtos diferenciados, que vão de encontro com a necessidade e preferência dos consumidores brasileiros. Contamos com um marketing ativo, que leva as variedades ao conhecimento do consumidor e ganha a atenção de novos públicos — garantindo rentabilidade aos nossos clientes.
              </p>
              <p>
                É com esta relação de parceria que levamos os nossos produtos a todo o país. Temos muito orgulho em fazer parte da história da floricultura no Brasil, cultivando bons momentos e levando mais cor a parques, praças, eventos e casas brasileiras.
              </p>
            </div>
          </div>
          <div
            className="emp-block-image"
            style={{ backgroundImage: "url('/empresa/qualidade.jpg')" }}
            aria-label="Equipe Bioplugs trabalhando em estufa"
            role="img"
          />
        </div>
      </section>

      {/* BLOCO 3 — Tecnificação (texto puro, sem imagem, fundo escuro) */}
      <section className="emp-section emp-section-dark">
        <div className="emp-block reveal" style={{ gridTemplateColumns: "1fr", maxWidth: "920px", margin: "0 auto" }}>
          <div className="emp-block-content">
            <div className="emp-block-eyebrow">Tecnologia de produção</div>
            <h2 className="emp-block-title">
              Um dos viveiristas mais <span className="it">tecnificados do Brasil.</span>
            </h2>
            <div className="emp-block-body">
              <p>
                Buscando sempre a melhor qualidade, todas as nossas <strong>Plantas Matrizes</strong> são originadas de materiais extremamente puros, chamados <em>Elite Line</em>. Elas são acondicionadas em estufas automatizadas e controladas por computador, totalmente isoladas do meio ambiente, com o objetivo de manter as plantas livres de insetos e doenças.
              </p>
              <p>
                Todo o processo de formação de mudas é realizado através de um <strong>rigoroso controle fitossanitário</strong> das estufas, manuseado por uma equipe treinada e preparada para oferecer aos nossos clientes mudas sadias, de qualidade, alto vigor, livres de pragas e doenças — favorecendo o êxito da cultura no campo e em estufas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSÃO · VISÃO · VALORES */}
      <section className="emp-mvv">
        <div className="emp-mvv-header reveal">
          <div className="emp-block-eyebrow">Nossa essência</div>
          <h2 className="emp-block-title">
            Missão, visão e <span className="it">valores.</span>
          </h2>
        </div>
        <div className="emp-mvv-grid reveal-stagger">
          <div className="emp-mvv-card" data-num="01">
            <div className="emp-mvv-card-label">Missão</div>
            <h3 className="emp-mvv-card-title">Levar genética de qualidade ao produtor brasileiro.</h3>
            <p className="emp-mvv-card-desc">
              Propagar com excelência técnica as variedades dos maiores breeders globais, garantindo mudas sadias, uniformes e produtivas para a floricultura nacional.
            </p>
          </div>
          <div className="emp-mvv-card" data-num="02">
            <div className="emp-mvv-card-label">Visão</div>
            <h3 className="emp-mvv-card-title">Ser referência em mudas tecnicamente produzidas na América Latina.</h3>
            <p className="emp-mvv-card-desc">
              Consolidar a Bioplugs como ponte de confiança entre breeders internacionais e o produtor profissional brasileiro, sempre em busca de inovação genética.
            </p>
          </div>
          <div className="emp-mvv-card" data-num="03">
            <div className="emp-mvv-card-label">Valores</div>
            <h3 className="emp-mvv-card-title">Parceria, qualidade técnica, inovação e ética.</h3>
            <p className="emp-mvv-card-desc">
              Cultivamos relações duradouras com breeders, produtores e clientes. Trabalhamos com rigor fitossanitário, transparência comercial e respeito a todos os elos da cadeia.
            </p>
          </div>
        </div>
      </section>

      {/* VÍDEO INSTITUCIONAL */}
      <section className="emp-video">
        <div className="emp-video-header reveal">
          <div className="emp-block-eyebrow">Conheça por dentro</div>
          <h2>
            Bioplugs em <span className="it">movimento.</span>
          </h2>
          <p>
            Assista um pouco da nossa rotina técnica — das estufas climatizadas à entrega das mudas ao produtor.
          </p>
        </div>
        <div className="emp-video-frame reveal">
          <iframe
            src={`https://www.youtube.com/embed/?listType=playlist&list=${YT_CHANNEL_UPLOADS}&rel=0`}
            title="Vídeo institucional Bioplugs"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* CTA */}
      <section className="emp-cta">
        <div className="emp-cta-left reveal">
          <h2>
            Pronto para <span className="it">conhecer nossas variedades?</span>
          </h2>
          <p>
            Explore o catálogo completo das 38 variedades selecionadas dos breeders Selecta one, Danziger e Sakata. Atendimento exclusivo a produtores e floricultores profissionais.
          </p>
        </div>
        <div className="emp-cta-actions reveal">
          <Link href="/produtos" className="v10-btn v10-btn-primary">
            Ver catálogo <span className="arrow">→</span>
          </Link>
          <Link href="/contato" className="v10-btn v10-btn-secondary">
            Falar com a equipe
          </Link>
        </div>
      </section>
    </>
  );
}
