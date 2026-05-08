export type Categoria = "corte" | "jardim" | "vaso";
export type Breeder = "selecta" | "danziger" | "sakata";

export interface Produto {
  slug: string;
  especie: string;
  familia: string;
  breeder: Breeder;
  categoria: Categoria;
  florescimento: string;
  foto?: string;
}

export const produtos: Produto[] = [
  // CORTE — Selecta
  { slug: "corte-dianthus-barbatus-selecta", especie: "Dianthus", familia: "Barbatus", breeder: "selecta", categoria: "corte", florescimento: "Precoce", foto: "https://images.unsplash.com/photo-1490750967868-88df5691cc33?w=600&q=80" },
  { slug: "corte-gerbera-standard-selecta", especie: "Gerbera", familia: "Standard", breeder: "selecta", categoria: "corte", florescimento: "Precoce", foto: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&q=80" },
  { slug: "corte-lisianthus-selecta", especie: "Lisianthus", familia: "F1 Series", breeder: "selecta", categoria: "corte", florescimento: "Médio", foto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { slug: "corte-snapdragon-selecta", especie: "Antirrhinum", familia: "Majus", breeder: "selecta", categoria: "corte", florescimento: "Precoce", foto: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
  // CORTE — Danziger
  { slug: "corte-girassol-danziger", especie: "Girassol", familia: "Helianthus", breeder: "danziger", categoria: "corte", florescimento: "Precoce", foto: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=80" },
  { slug: "corte-statice-danziger", especie: "Limonium", familia: "Sinuatum", breeder: "danziger", categoria: "corte", florescimento: "Médio", foto: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&q=80" },
  { slug: "corte-gypsophila-danziger", especie: "Gypsophila", familia: "Pearls Blossom", breeder: "danziger", categoria: "corte", florescimento: "Médio", foto: "https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=600&q=80" },
  // JARDIM
  { slug: "jardim-sunpatiens-sakata", especie: "Impatiens", familia: "SunPatiens", breeder: "sakata", categoria: "jardim", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=600&q=80" },
  { slug: "jardim-oscar-danziger", especie: "Impatiens", familia: "Oscar", breeder: "danziger", categoria: "jardim", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=600&q=80" },
  { slug: "jardim-petunia-selecta", especie: "Petunia", familia: "Multiflora", breeder: "selecta", categoria: "jardim", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1490750967868-88df5691cc33?w=600&q=80" },
  // VASO
  { slug: "vaso-nightsky-danziger", especie: "Petunia", familia: "Night Sky", breeder: "danziger", categoria: "vaso", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { slug: "vaso-pinkkisses-danziger", especie: "Petunia", familia: "Pink Kisses", breeder: "danziger", categoria: "vaso", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&q=80" },
  { slug: "vaso-moonlight-selecta", especie: "Impatiens", familia: "Moonlight", breeder: "selecta", categoria: "vaso", florescimento: "Contínuo", foto: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" },
];

export const categoriaLabels: Record<Categoria, string> = {
  corte: "Corte",
  jardim: "Jardim",
  vaso: "Vaso",
};

export const categoriaCount: Record<Categoria, number> = {
  corte: 16,
  jardim: 3,
  vaso: 19,
};
