// ── Catálogo Bioplugs 26/27 — 38 variedades ──
// Estrutura espelha a planilha "Caracteristica produtos - Catálogo 26&27.xlsx"

export type Categoria = "corte" | "jardim" | "vaso";
export type Breeder = "selecta" | "danziger" | "sakata";
export type Sazonalidade = "anual" | "bianual" | "perene";
export type Vigor = "medio" | "alto" | "compacta";
export type Florescimento = "precoce" | "medio" | "lento";
export type Crescimento = "ereto" | "curvo" | "pendente";
export type TipoFlor = "simples" | "dupla";

export interface Produto {
  slug: string;
  // Identificação
  especie: string;
  familia: string;
  // Atributos chave (6 ícones-pílula)
  florescimento: Florescimento;
  vigor: Vigor;
  crescimento: Crescimento;
  tipoFlor: TipoFlor;
  cheiro: boolean;
  sazonalidade: Sazonalidade;
  // Atributos técnicos
  cicloProducao: string;
  densidadePlantio: string;
  caracteristica: string;
  comprimentoTalo: string;
  diametroFlor: string;
  // Classificação
  breeder: Breeder;
  categoria: Categoria;
  // Visual
  foto: string;
  meta: string; // ex.: "Selecta · Corte · Florescimento precoce"
}

// Fotos locais (servidas do edge Vercel) — carregamento instantâneo,
// sem dependência de CDN externo. Cliente final substituirá por fotos
// reais dos produtos quando entregar o material fotográfico.
const PHOTO = {
  dianthus: "/hero/dianthus.jpg",
  gerbera: "/hero/gerbera.jpg",
  girassol: "/hero/sunflower.jpg",
  // Aliases mantidos pra compatibilidade com chamadas antigas
  dahlia: "/hero/dianthus.jpg",
  petunia: "/hero/gerbera.jpg",
};

const photoPool = [PHOTO.dianthus, PHOTO.gerbera, PHOTO.girassol];
const photoFor = (i: number): string => photoPool[i % photoPool.length];

// Helper para criar produto com defaults
const p = (
  partial: Omit<Produto, "meta" | "foto"> & { foto?: string; meta?: string }
): Produto => {
  const breederName =
    partial.breeder === "selecta"
      ? "Selecta one"
      : partial.breeder === "danziger"
      ? "Danziger"
      : "Sakata";
  const catName =
    partial.categoria.charAt(0).toUpperCase() + partial.categoria.slice(1);
  const florName =
    partial.florescimento.charAt(0).toUpperCase() +
    partial.florescimento.slice(1);
  return {
    ...partial,
    foto: partial.foto ?? PHOTO.dianthus,
    meta: partial.meta ?? `${breederName} · ${catName} · ${florName}`,
  };
};

const pp: Omit<Produto, "slug" | "especie" | "familia" | "categoria" | "breeder" | "meta" | "foto"> = {
  florescimento: "medio",
  vigor: "medio",
  crescimento: "ereto",
  tipoFlor: "simples",
  cheiro: false,
  sazonalidade: "anual",
  cicloProducao: "10–12 semanas (sob condições tropicais)",
  densidadePlantio: "20 a 24 plantas/m²",
  caracteristica: "Variedade técnica selecionada para alta performance",
  comprimentoTalo: "60–80 cm",
  diametroFlor: "8–10 cm",
};

let i = 0;
const next = () => photoFor(i++);

export const produtos: Produto[] = [
  // ── CORTE (16) ──
  p({ ...pp, slug: "corte-dianthus-barbatus", especie: "Dianthus barbatus", familia: "Caryophyllaceae", breeder: "selecta", categoria: "corte", florescimento: "precoce", vigor: "alto", sazonalidade: "bianual", caracteristica: "Florescimento precoce, talo longo premium", comprimentoTalo: "70–90 cm", diametroFlor: "8–11 cm", foto: PHOTO.dianthus }),
  p({ ...pp, slug: "corte-dianthus-chinensis", especie: "Dianthus chinensis", familia: "Caryophyllaceae", breeder: "selecta", categoria: "corte", cheiro: true, caracteristica: "Talo longo perfumado", foto: next() }),
  p({ ...pp, slug: "corte-gerbera-jamesonii", especie: "Gerbera jamesonii", familia: "Asteraceae", breeder: "sakata", categoria: "corte", florescimento: "precoce", vigor: "alto", sazonalidade: "perene", caracteristica: "Talo robusto, alto vigor", comprimentoTalo: "30–65 cm", diametroFlor: "12 cm", foto: PHOTO.gerbera }),
  p({ ...pp, slug: "corte-gerbera-mini", especie: "Gerbera Mini", familia: "Asteraceae", breeder: "sakata", categoria: "corte", vigor: "compacta", sazonalidade: "perene", caracteristica: "Compacta, ideal para arranjos", foto: next() }),
  p({ ...pp, slug: "corte-lisianthus-eustoma", especie: "Lisianthus eustoma", familia: "Gentianaceae", breeder: "danziger", categoria: "corte", vigor: "alto", tipoFlor: "dupla", caracteristica: "Tipo dupla, alto vigor", foto: next() }),
  p({ ...pp, slug: "corte-lisianthus-crown", especie: "Lisianthus Crown", familia: "Gentianaceae", breeder: "danziger", categoria: "corte", caracteristica: "Florescimento médio uniforme", foto: next() }),
  p({ ...pp, slug: "corte-helianthus-annuus", especie: "Helianthus annuus", familia: "Asteraceae", breeder: "danziger", categoria: "corte", florescimento: "precoce", vigor: "alto", caracteristica: "Sem pólen, talo ereto premium", cicloProducao: "Aproximadamente 49 dias", densidadePlantio: "4 a 6 plantas/m² (40.000 a 60.000 plantas/ha)", comprimentoTalo: "120–160 cm", diametroFlor: "> 14 cm", foto: PHOTO.girassol }),
  p({ ...pp, slug: "corte-helianthus-sundance", especie: "Helianthus Sundance", familia: "Asteraceae", breeder: "sakata", categoria: "corte", caracteristica: "Médio porte, talo ereto", foto: next() }),
  p({ ...pp, slug: "corte-statice-latifolia", especie: "Statice latifolia", familia: "Plumbaginaceae", breeder: "selecta", categoria: "corte", sazonalidade: "perene", cheiro: true, caracteristica: "Perfumada, durabilidade pós-colheita", foto: next() }),
  p({ ...pp, slug: "corte-statice-talia", especie: "Statice Talia", familia: "Plumbaginaceae", breeder: "selecta", categoria: "corte", vigor: "alto", cheiro: true, caracteristica: "Coloração vibrante", foto: next() }),
  p({ ...pp, slug: "corte-trachelium-caeruleum", especie: "Trachelium caeruleum", familia: "Campanulaceae", breeder: "danziger", categoria: "corte", vigor: "alto", sazonalidade: "perene", caracteristica: "Talo longo, durabilidade", foto: next() }),
  p({ ...pp, slug: "corte-antirrhinum-aroma", especie: "Antirrhinum Aroma", familia: "Plantaginaceae", breeder: "selecta", categoria: "corte", cheiro: true, caracteristica: "Perfume marcante", foto: next() }),
  p({ ...pp, slug: "corte-antirrhinum-snappy", especie: "Antirrhinum Snappy", familia: "Plantaginaceae", breeder: "danziger", categoria: "corte", tipoFlor: "dupla", cheiro: true, caracteristica: "Flor dupla perfumada", foto: next() }),
  p({ ...pp, slug: "corte-aster-ericoides", especie: "Aster ericoides", familia: "Asteraceae", breeder: "selecta", categoria: "corte", vigor: "alto", sazonalidade: "perene", caracteristica: "Densidade alta, multiplas hastes", foto: next() }),
  p({ ...pp, slug: "corte-stock-iron", especie: "Stock Iron", familia: "Brassicaceae", breeder: "danziger", categoria: "corte", cheiro: true, caracteristica: "Perfumada, talo robusto", foto: next() }),
  p({ ...pp, slug: "corte-larkspur-sublime", especie: "Larkspur Sublime", familia: "Ranunculaceae", breeder: "selecta", categoria: "corte", vigor: "alto", caracteristica: "Talo longo, cores vibrantes", foto: next() }),

  // ── JARDIM (3) ──
  p({ ...pp, slug: "jardim-vinca-mediterranean", especie: "Vinca Mediterranean", familia: "Apocynaceae", breeder: "danziger", categoria: "jardim", vigor: "alto", sazonalidade: "perene", caracteristica: "Tropical resistente, sol pleno", foto: next() }),
  p({ ...pp, slug: "jardim-petunia-easywave", especie: "Petunia Easy Wave", familia: "Solanaceae", breeder: "selecta", categoria: "jardim", vigor: "alto", crescimento: "pendente", caracteristica: "Crescimento pendente, cobertura ampla", foto: PHOTO.petunia }),
  p({ ...pp, slug: "jardim-pansy-matrix", especie: "Pansy Matrix", familia: "Violaceae", breeder: "sakata", categoria: "jardim", florescimento: "precoce", sazonalidade: "bianual", caracteristica: "Florescimento precoce, multicolor", foto: next() }),

  // ── VASO (19) ──
  p({ ...pp, slug: "vaso-petunia-surfinia", especie: "Petunia Surfinia", familia: "Solanaceae", breeder: "danziger", categoria: "vaso", vigor: "alto", crescimento: "pendente", caracteristica: "Pendente clássica, alta cobertura", foto: PHOTO.petunia }),
  p({ ...pp, slug: "vaso-petunia-famous", especie: "Petunia Famous", familia: "Solanaceae", breeder: "selecta", categoria: "vaso", vigor: "alto", caracteristica: "Flor grande, cores intensas", foto: next() }),
  p({ ...pp, slug: "vaso-petunia-vivini", especie: "Petunia Vivini", familia: "Solanaceae", breeder: "selecta", categoria: "vaso", vigor: "compacta", caracteristica: "Compacta vigorosa", foto: next() }),
  p({ ...pp, slug: "vaso-petunia-crazytunia", especie: "Petunia Crazytunia", familia: "Solanaceae", breeder: "danziger", categoria: "vaso", caracteristica: "Padrão único, mosaicos exclusivos", foto: next() }),
  p({ ...pp, slug: "vaso-calibrachoa-minifamous", especie: "Calibrachoa MiniFamous", familia: "Solanaceae", breeder: "selecta", categoria: "vaso", vigor: "alto", caracteristica: "Flor abundante, longa duração", foto: next() }),
  p({ ...pp, slug: "vaso-calibrachoa-cabaret", especie: "Calibrachoa Cabaret", familia: "Solanaceae", breeder: "danziger", categoria: "vaso", vigor: "compacta", caracteristica: "Compacta colorida", foto: next() }),
  p({ ...pp, slug: "vaso-begonia-adonis", especie: "Begonia Adonis", familia: "Begoniaceae", breeder: "selecta", categoria: "vaso", sazonalidade: "perene", caracteristica: "Sombra parcial, baixa manutenção", foto: next() }),
  p({ ...pp, slug: "vaso-begonia-solenia", especie: "Begonia Solenia", familia: "Begoniaceae", breeder: "selecta", categoria: "vaso", vigor: "alto", sazonalidade: "perene", caracteristica: "Auto-limpante, sem pétalas caídas", foto: next() }),
  p({ ...pp, slug: "vaso-impatiens-compact", especie: "Impatiens Compact", familia: "Balsaminaceae", breeder: "sakata", categoria: "vaso", vigor: "compacta", caracteristica: "Compacta uniforme", foto: next() }),
  p({ ...pp, slug: "vaso-impatiens-sunpatiens", especie: "Impatiens SunPatiens", familia: "Balsaminaceae", breeder: "sakata", categoria: "vaso", vigor: "alto", caracteristica: "Sol pleno, alta tolerância", foto: next() }),
  p({ ...pp, slug: "vaso-cyclamen-latinia", especie: "Cyclamen Latinia", familia: "Primulaceae", breeder: "selecta", categoria: "vaso", sazonalidade: "perene", cheiro: true, caracteristica: "Flor grande perfumada", foto: next() }),
  p({ ...pp, slug: "vaso-cyclamen-halios", especie: "Cyclamen Halios", familia: "Primulaceae", breeder: "selecta", categoria: "vaso", sazonalidade: "perene", cheiro: true, caracteristica: "Cores vibrantes premium", foto: next() }),
  p({ ...pp, slug: "vaso-geranium-calliope", especie: "Geranium Calliope", familia: "Geraniaceae", breeder: "danziger", categoria: "vaso", vigor: "alto", sazonalidade: "perene", cheiro: true, caracteristica: "Híbrido potente, perfumado", foto: next() }),
  p({ ...pp, slug: "vaso-geranium-caliente", especie: "Geranium Caliente", familia: "Geraniaceae", breeder: "selecta", categoria: "vaso", vigor: "alto", sazonalidade: "perene", caracteristica: "Tropical, alto vigor", foto: next() }),
  p({ ...pp, slug: "vaso-newguinea-impatiens", especie: "New Guinea Impatiens", familia: "Balsaminaceae", breeder: "danziger", categoria: "vaso", vigor: "alto", caracteristica: "Sombra parcial, flor grande", foto: next() }),
  p({ ...pp, slug: "vaso-bidens-bee", especie: "Bidens Bee", familia: "Asteraceae", breeder: "danziger", categoria: "vaso", sazonalidade: "perene", caracteristica: "Atrai polinizadores, cobertura amarela", foto: next() }),
  p({ ...pp, slug: "vaso-lobelia-hotspring", especie: "Lobelia Hot Spring", familia: "Campanulaceae", breeder: "selecta", categoria: "vaso", vigor: "compacta", caracteristica: "Compacta intensa", foto: next() }),
  p({ ...pp, slug: "vaso-verbena-lascar", especie: "Verbena Lascar", familia: "Verbenaceae", breeder: "danziger", categoria: "vaso", vigor: "alto", crescimento: "pendente", sazonalidade: "perene", cheiro: true, caracteristica: "Pendente perfumada", foto: next() }),
  p({ ...pp, slug: "vaso-helianthus-sunbuzz", especie: "Helianthus Sun Buzz", familia: "Asteraceae", breeder: "sakata", categoria: "vaso", vigor: "compacta", caracteristica: "Vaso compacto, florescimento contínuo", foto: next() }),
];

export const breederLabel = (b: Breeder): string =>
  b === "selecta" ? "Selecta one" : b === "danziger" ? "Danziger" : "Sakata";

export const breederFlag = (b: Breeder): string =>
  b === "selecta" ? "🇩🇪" : b === "danziger" ? "🇮🇱" : "🇯🇵";

export const breederColor = (b: Breeder): string =>
  b === "selecta" ? "#1E3A8A" : b === "danziger" ? "#6FA82A" : "#C4242C";

export const findProduto = (slug: string): Produto | undefined =>
  produtos.find((p) => p.slug === slug);

export const produtosPorCategoria = (cat: Categoria): Produto[] =>
  produtos.filter((p) => p.categoria === cat);

export const countByCategoria = {
  corte: produtos.filter((p) => p.categoria === "corte").length,
  jardim: produtos.filter((p) => p.categoria === "jardim").length,
  vaso: produtos.filter((p) => p.categoria === "vaso").length,
};
