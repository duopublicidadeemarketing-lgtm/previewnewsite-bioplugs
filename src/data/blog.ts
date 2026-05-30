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
  // Conteúdo do post — array de parágrafos.
  // Parágrafo iniciando com "## " vira H2.
  // Parágrafo iniciando com "> " vira blockquote (callout).
  // Texto entre **asteriscos** vira <strong>.
  conteudo?: string[];
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
    conteudo: [
      "Em mais de 20 anos atendendo a floricultura brasileira, aprendemos que **a sanidade da muda é o fator que mais impacta o resultado final do produtor**. Não importa quão promissora seja a genética: se a planta chega ao campo com pragas ou patógenos, todo o investimento se perde nas primeiras semanas.",
      "Por isso desenvolvemos um protocolo fitossanitário com seis pontos críticos de controle, aplicado em todas as variedades do nosso catálogo — das matrizes importadas dos breeders parceiros até a embalagem final pronta para entrega.",
      "## 1. Recebimento de matriz certificada",
      "Toda matriz entra na Bioplugs com certificação de origem emitida pelo breeder. As plantas passam por **quarentena de 21 dias** em estufa isolada, onde nossa equipe técnica inspeciona visualmente em busca de qualquer sintoma de doença viral, bacteriana ou fúngica.",
      "## 2. Propagação em ambiente controlado",
      "A multiplicação acontece em câmaras climatizadas com temperatura entre 22-26°C, umidade relativa de 80-85% e luminosidade controlada. Esses parâmetros são monitorados em tempo real por sensores e ajustados automaticamente — uniformidade absoluta entre lotes.",
      "## 3. Substrato técnico esterilizado",
      "Usamos substrato turfa-perlita formulado especificamente para cada espécie, esterilizado a 70°C antes do plantio. Isso elimina patógenos do solo (Fusarium, Pythium, Rhizoctonia) sem deixar resíduo químico na muda.",
      "## 4. Irrigação automatizada",
      "Sistema de mesa de subirrigação que controla pH e condutividade elétrica da solução nutritiva. Sem molhar a parte aérea da planta — **reduz drasticamente o risco de míldio e botrytis**.",
      "## 5. Monitoramento entomológico",
      "Armadilhas adesivas amarelas e azuis em todas as estufas, vistoriadas semanalmente. Quando detectamos qualquer praga (tripes, mosca-branca, ácaros), aplicamos manejo integrado com biocontrole **antes de chegar no limite de dano**.",
      "## 6. Embalagem e logística refrigerada",
      "Mudas embaladas em câmara fria a 8°C e transportadas em veículos com controle de temperatura. Chegam ao produtor com vigor preservado e sistema radicular pronto para o plantio definitivo.",
      "## O resultado prático",
      "Produtores que adotam mudas Bioplugs relatam **taxa de pegamento acima de 98%** e ciclo produtivo reduzido em 1-2 semanas comparado a alternativas convencionais. É um padrão que só faz sentido quando você controla todas as etapas — e é exatamente o que fazemos em Atibaia.",
      "> Quer entender melhor como nosso protocolo pode se aplicar ao seu cultivo? Solicite uma visita técnica de um dos nossos representantes.",
    ],
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
    conteudo: [
      "Após meses de seleção criteriosa junto aos breeders parceiros — Selecta one, Danziger e Sakata — estamos oficialmente apresentando o catálogo Bioplugs 26/27 com **38 variedades** distribuídas em três categorias técnicas.",
      "## Corte: 16 variedades para floricultura comercial",
      "Destaque para a expansão da linha **Limonium** da Danziger, com 10 famílias diferentes (Enchanté, Magnum, Piuma, Safora, Sensy, Sinuatum, Supreme, Splendid, Sinuet, Superta). Cada uma com características próprias de cor, tamanho de haste e durabilidade pós-colheita.",
      "Mantemos também os clássicos: Dianthus Barbatus, Gerbera Standard, Girassol sem pólen, Gypsophila Paniculata, Sorghum Prairie e Carnation Sweeties.",
      "## Jardim: 3 variedades para paisagismo profissional",
      "Foco em variedades resistentes ao calor tropical e ao sol pleno: **SunPatiens Compact e Vigorous** da Sakata, mais a **Begonia Viking** com sua linha Pink on Green, Red on Choco e Rose on Green Exp.",
      "## Vaso: 19 variedades — a maior categoria",
      "Inclui linhas premium de **Petunia** (Amore, Cascadia, Capella, Supercal, Beautical, Ray, Sky), **Calibrachoa** (Colibri, Ombre, Uno), **Geranio** (Moonlight, Royal, Sunrise, Tumbao), **Dianthus** (Kisses, Diadeur, Oscar), Dahlia Meena e Dipladenia Uni.",
      "## Calendário de pré-venda",
      "Reservas para a safra 26/27 abrem em **junho de 2026**. Volume limitado por variedade — atendimento por ordem de pedido. Entre em contato com nosso time comercial para garantir disponibilidade.",
    ],
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
    conteudo: [
      "Em 2023, a Selecta one — nossa principal parceira em genética ornamental — completou **um século de história**. Uma marca rara em qualquer setor, especialmente no agronegócio onde poucas empresas familiares chegam até a quarta geração no comando.",
      "## Da Alemanha rural para 50+ países",
      "Fundada em 1923 nos arredores de Stuttgart, a Selecta começou como pequeno viveiro familiar focado em Pelargonium (Gerânio). Ao longo das décadas, expandiu para Dianthus, Gerbera, Petunia e linhas de plantas para vaso, sempre com forte investimento em pesquisa genética.",
      "Hoje, a empresa mantém **estações de pesquisa em quatro continentes**: Alemanha, Quênia, Etiópia e Costa Rica. Cada uma especializada em testes adaptados ao clima e ao mercado da região.",
      "## A parceria com a Bioplugs",
      "Trabalhamos com a Selecta há mais de uma década. No catálogo 26/27 são **19 variedades** — o maior portfólio de qualquer breeder em nossas estufas. Isso inclui toda a linha de Dianthus para corte (Diadeur, Kisses, Oscar), Gerbera Standard, Gypsophila Paniculata, Petunia Amore, Geranio Royal, Calibrachoa Uno e mais.",
      "> O que nos atrai na Selecta não é só a genética — é a relação de confiança construída ao longo dos anos. Quando precisamos de suporte técnico, eles respondem em horas. Quando uma variedade tem problema, assumem a responsabilidade.",
      "## O futuro do setor",
      "A Selecta investe 8% do faturamento anual em pesquisa — número que reflete o compromisso com inovação contínua. Variedades que estão em desenvolvimento agora chegarão ao Brasil em 3-5 anos pela Bioplugs. É essa visão de longo prazo que mantém a parceria forte.",
    ],
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
    conteudo: [
      "Há cinco anos, o Helianthus annuus da Danziger era visto pelo mercado brasileiro como uma variedade técnica de nicho — usado por floristas profissionais que conheciam suas vantagens. **Em 2026, virou referência absoluta no segmento de corte premium.**",
      "## A característica que mudou tudo: sem pólen",
      "Variedades convencionais de girassol soltam pólen amarelo abundante — o que parece poético no campo, mas é um problema sério em ambientes internos: mancha tecidos, tapetes, paredes e (pior) provoca reações alérgicas em parte do público.",
      "O **Helianthus annuus** da Danziger é geneticamente desenvolvido para **não produzir pólen**. Isso transformou o girassol em opção viável para casamentos, eventos corporativos, hotéis premium e qualquer ambiente onde limpeza é prioridade.",
      "## Outras vantagens técnicas",
      "Talo ereto premium 120-160cm, ciclo de produção curto (aproximadamente 49 dias), resistente a doenças e praticamente insensível ao fotoperíodo — produz o ano todo em estufa controlada. Densidade de plantio 4-6 plantas/m², gerando alta produtividade por área.",
      "## O reflexo no mercado",
      "Floristas que adotaram a variedade reportam aumento médio de **30% no ticket de buquês com girassol**, justamente porque podem oferecer o produto em ocasiões que antes eram impossíveis. Hotéis 5 estrelas em São Paulo, Rio e Brasília já especificam o Helianthus sem pólen como padrão em arranjos de lobby.",
      "Para o produtor que atende esse mercado, é variedade obrigatória no portfólio.",
    ],
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
    conteudo: [
      "O setor de flores e plantas ornamentais segue como **um dos mais promissores do agronegócio brasileiro**. Movimentando cerca de **R$ 6,2 bilhões ao ano** e crescendo 8% anualmente, o segmento gera mais de **200 mil empregos diretos** — números que poucos subsetores agrícolas alcançam.",
      "## Os 4 movimentos mais relevantes em 2026",
      "**1. Profissionalização da produção.** O produtor de flores está cada vez mais técnico: monitoramento via sensores, estufas climatizadas, manejo integrado de pragas, controle de pH e condutividade. A era do cultivo intuitivo está acabando.",
      "**2. Variedades premium ganham terreno.** Florais comuns perdem espaço para variedades exclusivas com características técnicas marcantes — sem pólen, sem cheiro, maior durabilidade pós-colheita, padrão de cor único. É o que diferencia o produtor profissional da concorrência via marketplace.",
      "**3. Floricultura como serviço.** Assinaturas mensais, drop-shipping para floristas independentes, parcerias com hotéis e eventos. O modelo direto-ao-consumidor abriu portas que antes só existiam para grandes redes.",
      "**4. Sustentabilidade como diferencial comercial.** Substrato reciclado, embalagem biodegradável, certificação fitossanitária internacional. Variedades resistentes que reduzem aplicação de defensivos.",
      "## O papel do breeder global",
      "Nesse cenário, **escolher o breeder certo passa a ser decisão estratégica**. As variedades dos breeders globais (Selecta, Danziger, Sakata) chegam ao Brasil com programas de pesquisa de 10-15 anos por trás — algo impossível de replicar localmente em escala competitiva.",
      "A Bioplugs atua como ponte entre essa genética premium e o produtor profissional brasileiro. Propagamos com tecnologia local, mas a base genética vem dos melhores do mundo.",
      "## O que esperar nos próximos 12 meses",
      "Esperamos consolidação do mercado de corte premium (girassol sem pólen, Lisianthus dupla, Limonium estruturado), expansão das linhas de vaso compacto (Calibrachoa, Petunia BeautiCal) e crescimento da floricultura voltada para projetos de paisagismo profissional.",
    ],
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
    conteudo: [
      "Estaquia parece operação simples — corta o ramo, planta na bandeja, espera enraizar. Mas no padrão técnico Bioplugs, cada uma dessas etapas envolve sensores, automação e dezenas de variáveis monitoradas em tempo real. **O resultado é uniformidade que o método tradicional simplesmente não consegue entregar.**",
      "## Por que uniformidade importa",
      "Para o produtor profissional, a diferença entre 80% e 98% de pegamento muda o resultado financeiro do ciclo inteiro. E essa diferença começa na muda: se um lote chega com tamanhos diferentes, vigor desigual ou enraizamento heterogêneo, o campo nunca produz de forma sincronizada.",
      "## Os parâmetros que controlamos",
      "**Temperatura.** Câmaras climatizadas mantêm 22-26°C dia e 18-20°C à noite. Sensores em pontos múltiplos da estufa atualizam a cada 30 segundos. Variação aceita: ±0.5°C.",
      "**Umidade relativa.** 80-85% durante as primeiras 72h pós-estaquia (fase de cicatrização), reduzindo gradualmente para 70-75% após enraizamento. Sistema de nebulização de alta pressão controlado por timer pulsado.",
      "**Luminosidade.** Iluminação suplementar LED nos meses de menor radiação solar. Espectro ajustado para favorecer formação radicular (mais vermelho profundo) em vez de crescimento vegetativo precoce.",
      "**pH e condutividade.** Solução nutritiva monitorada continuamente. pH entre 5.8-6.2 e EC entre 1.5-2.0 mS/cm, ajustada por dosadora automática.",
      "## A diferença que aparece no campo",
      "Mudas que saem desse processo chegam ao produtor com **sistema radicular completo, talo uniforme e folhas livres de estresse hídrico**. Plantadas no campo, iniciam o ciclo produtivo imediatamente — sem fase de adaptação prolongada.",
      "É essa atenção operacional invisível ao olhar do comprador que justifica chamar nossas mudas de **tecnicamente produzidas**.",
    ],
  },
];

export const CATEGORIAS_LABEL: Record<BlogPost["categoria"], string> = {
  tecnico: "Técnico",
  mercado: "Mercado",
  bastidores: "Bastidores",
  variedades: "Variedades",
};
