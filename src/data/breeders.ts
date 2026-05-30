// Os 3 breeders parceiros oficiais da Bioplugs (catálogo 26/27).

export interface BreederInfo {
  slug: string;
  nome: string;
  pais: string;
  bandeira: string;
  cidade: string;
  ano_fundacao: number;
  tagline: string;
  especialidade: string;
  paragrafos: string[];
  site_oficial: string;
  qtd_variedades: number;
  foto: string;        // path to local /breeders/ image
}

export const breeders: BreederInfo[] = [
  {
    slug: "selecta-one",
    nome: "Selecta one",
    pais: "Alemanha",
    bandeira: "🇩🇪",
    cidade: "Stuttgart",
    ano_fundacao: 1923,
    tagline: "Mais de 100 anos cultivando inovação.",
    especialidade: "Dianthus, Gerbera e plantas para vaso",
    paragrafos: [
      "Sediada em **Stuttgart, na Alemanha**, a Selecta one é referência global em melhoramento genético de plantas ornamentais. Com mais de 100 anos de história, a empresa familiar mantém uma rede de estações de pesquisa espalhadas pela Europa, África e América do Sul, sempre buscando variedades que combinam beleza, produtividade e resistência.",
      "No catálogo Bioplugs 26/27, a Selecta one é a maior parceira em número de variedades — incluindo a linha completa de **Dianthus Barbatus** para corte (Diadeur, Kisses, Oscar) e cultivares premium de **Gerbera Standard**, **Gypsophila Paniculata**, **Petunia Amore**, **Geranio Royal**, **Calibrachoa Uno** e mais.",
      "A relação Bioplugs × Selecta combina genética europeia certificada com propagação técnica tropical em Atibaia, garantindo ao produtor brasileiro variedades selecionadas para o nosso clima e mercado.",
    ],
    site_oficial: "https://www.selecta-one.com",
    qtd_variedades: 19,
    foto: "/breeders/selecta.jpg",
  },
  {
    slug: "danziger",
    nome: "Danziger",
    pais: "Israel",
    bandeira: "🇮🇱",
    cidade: "Mishmar Hashiv'a",
    ano_fundacao: 1953,
    tagline: "Inovação israelense em flores de corte e vaso.",
    especialidade: "Lisianthus, Limonium, Petunia e Calibrachoa",
    paragrafos: [
      "Fundada em **Mishmar Hashiv'a, Israel**, em 1953, a Danziger é uma das principais breeders mundiais em flores ornamentais. A empresa investe pesado em pesquisa biotecnológica para criar variedades de alta produtividade, durabilidade pós-colheita e resistência a doenças — características valorizadas tanto pelo produtor profissional quanto pelo consumidor final.",
      "A Bioplugs traz para o Brasil o portfólio completo de **Limonium** da Danziger — incluindo as séries **Enchanté, Magnum, Piuma, Safora, Sensy, Sinuet, Sinuatum, Splendid, Supreme e Superta**, além de **Calibrachoa Colibri e Ombre**, **Petunia Cascadias, Cappela e Ray**, **Sorghum Prairie** e o **Girassol Helianthus** sem pólen.",
      "Variedades Danziger são reconhecidas pelo equilíbrio entre **performance comercial** e **identidade visual marcante** — perfeitas para a floricultura de corte tropical brasileira.",
    ],
    site_oficial: "https://www.danzigeronline.com",
    qtd_variedades: 13,
    foto: "/breeders/danziger.jpg",
  },
  {
    slug: "sakata",
    nome: "Sakata Seed Sudamerica",
    pais: "Japão",
    bandeira: "🇯🇵",
    cidade: "Yokohama",
    ano_fundacao: 1913,
    tagline: "Precisão japonesa em híbridos premium.",
    especialidade: "SunPatiens, Begonia Viking e Petunia BeautiCal / SuperCal",
    paragrafos: [
      "Fundada em **Yokohama, Japão** em 1913, a Sakata é uma das mais antigas e respeitadas breeders do mundo. Com escritórios e estações de pesquisa em mais de 20 países, a empresa é referência em **híbridos F1** de altíssima uniformidade, com programas de melhoramento que duram décadas até cada nova variedade chegar ao mercado.",
      "No catálogo Bioplugs, a Sakata fornece os destaques de **SunPatiens Compact e Vigorous** (Impatiens híbrida que tolera sol pleno), as séries **BeautiCal e SuperCal** de Petunia, além da **Begônia Viking** para paisagismo profissional.",
      "A escolha pela Sakata reforça o compromisso da Bioplugs com **rigor técnico** — variedades que entregam exatamente o que prometem, com performance previsível campo a campo.",
    ],
    site_oficial: "https://www.sakata.com.br",
    qtd_variedades: 6,
    foto: "/breeders/sakata.jpg",
  },
];

export const findBreeder = (slug: string): BreederInfo | undefined =>
  breeders.find((b) => b.slug === slug);
