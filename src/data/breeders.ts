export interface Breeder {
  slug: string;
  nome: string;
  pais: string;
  bandeira: string;
  descricao: string;
  corBg: string;
  site: string;
}

export const breeders: Breeder[] = [
  {
    slug: "selecta",
    nome: "Selecta",
    pais: "Alemanha",
    bandeira: "🇩🇪",
    descricao: "Líder mundial em sementes e mudas de flores ornamentais, com mais de 70 anos de pesquisa genética focada em performance e rentabilidade para o produtor.",
    corBg: "#1E3A8A",
    site: "https://www.selecta.de",
  },
  {
    slug: "danziger",
    nome: "Danziger",
    pais: "Israel",
    bandeira: "🇮🇱",
    descricao: "Referência global em inovação floral, responsável por variedades icônicas como Night Sky, Pink Kisses e Gypsophila Pearls Blossom.",
    corBg: "#3B6E3A",
    site: "https://www.danziger.com",
  },
  {
    slug: "sakata",
    nome: "Sakata",
    pais: "Japão",
    bandeira: "🇯🇵",
    descricao: "Um dos maiores grupos de melhoramento genético vegetal do mundo, presente em mais de 170 países com portfólio que vai de hortaliças a flores ornamentais.",
    corBg: "#7A2020",
    site: "https://www.sakata.com.br",
  },
  {
    slug: "hilverdakooij",
    nome: "Hilverdakooij",
    pais: "Holanda",
    bandeira: "🇳🇱",
    descricao: "Especialista holandês em propagação de plantas ornamentais de alto padrão, com variedades exclusivas para o mercado de jardim e vaso.",
    corBg: "#4A6FBF",
    site: "https://www.hilverdakooij.nl",
  },
];
