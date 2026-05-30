// Posts iniciais do blog Bioplugs.
// Cliente vai editar via WordPress admin a partir da fase B.

export interface BlogPost {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: "tecnico" | "mercado" | "bastidores" | "variedades";
  autor: string;
  data: string;       // ISO format
  data_display: string;
  tempo_leitura: string;
  imagem: string;
  destaque?: boolean;
}

export const posts: BlogPost[] = [
  {
    slug: "padrao-fitossanitario-mudas-bioplugs",
    titulo: "Como nosso protocolo fitossanitário garante mudas livres de pragas",
    resumo:
      "Conheça os 6 pontos críticos de controle que aplicamos nas estufas climatizadas — da matriz importada à muda enraizada — para entregar variedades com sanidade comprovada ao produtor.",
    categoria: "tecnico",
    autor: "Equipe Técnica Bioplugs",
    data: "2026-05-15",
    data_display: "15 maio 2026",
    tempo_leitura: "6 min",
    imagem: "/blog/post-fitossanitario.jpg",
    destaque: true,
  },
  {
    slug: "novo-catalogo-26-27",
    titulo: "Catálogo 26/27: 38 variedades selecionadas para a próxima safra",
    resumo:
      "Apresentamos as variedades disponíveis para a temporada — incluindo 10 novas Limonium da Danziger, expansão da linha SunPatiens da Sakata e os destaques de Petunia BeautiCal.",
    categoria: "variedades",
    autor: "Caio Bittencourt",
    data: "2026-05-08",
    data_display: "8 maio 2026",
    tempo_leitura: "4 min",
    imagem: "/blog/post-catalogo.jpg",
  },
  {
    slug: "selecta-one-100-anos",
    titulo: "Selecta one: 100 anos de melhoramento genético em uma parceria",
    resumo:
      "Nossa maior parceira completa um século de história em 2023. Conheça a trajetória da família alemã que segue inovando em Dianthus, Gerbera e plantas para vaso.",
    categoria: "bastidores",
    autor: "Equipe Bioplugs",
    data: "2026-04-22",
    data_display: "22 abril 2026",
    tempo_leitura: "5 min",
    imagem: "/blog/post-selecta.jpg",
  },
  {
    slug: "girassol-sem-polen-mercado-decoracao",
    titulo: "Girassol sem pólen: a variedade que conquistou a floricultura premium",
    resumo:
      "O Helianthus annuus da Danziger virou referência em buquês e arranjos corporativos. Entenda por que essa característica genética muda o jogo da pós-colheita.",
    categoria: "variedades",
    autor: "Equipe Comercial",
    data: "2026-04-10",
    data_display: "10 abril 2026",
    tempo_leitura: "3 min",
    imagem: "/blog/post-girassol.jpg",
  },
  {
    slug: "tendencias-floricultura-2026",
    titulo: "Tendências da floricultura brasileira em 2026",
    resumo:
      "Mercado movimenta R$ 6,2 bilhões ao ano com crescimento de 8%. Quais variedades, formatos e canais estão crescendo mais — e o que isso significa para o produtor.",
    categoria: "mercado",
    autor: "Equipe Bioplugs",
    data: "2026-03-28",
    data_display: "28 março 2026",
    tempo_leitura: "8 min",
    imagem: "/blog/post-mercado.jpg",
  },
  {
    slug: "tecnologia-estaquia-controlada",
    titulo: "A tecnologia por trás da estaquia em ambiente controlado",
    resumo:
      "Como temperatura, umidade e luminosidade são monitoradas em tempo real nas nossas câmaras de propagação para garantir uniformidade absoluta entre mudas.",
    categoria: "tecnico",
    autor: "Equipe Técnica Bioplugs",
    data: "2026-03-15",
    data_display: "15 março 2026",
    tempo_leitura: "7 min",
    imagem: "/blog/post-estaquia.jpg",
  },
];

export const CATEGORIAS_LABEL: Record<BlogPost["categoria"], string> = {
  tecnico: "Técnico",
  mercado: "Mercado",
  bastidores: "Bastidores",
  variedades: "Variedades",
};
