import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollRevealProvider } from "@/components/providers/scroll-reveal-provider";

// Tosia — ROHH foundry. Substitui Manrope (body) e Cormorant (display) nesta
// versão de preview da fonte. Mantemos as mesmas CSS vars (--font-manrope,
// --font-cormorant) pra não precisar tocar em todas as linhas de globals.css.
const tosia = localFont({
  variable: "--font-manrope",
  display: "swap",
  src: [
    { path: "../../public/fonts/tosia/Tosia-Regular.otf",        weight: "400", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-Italic.otf",         weight: "400", style: "italic" },
    { path: "../../public/fonts/tosia/Tosia-Medium.otf",         weight: "500", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-DemiBold.otf",       weight: "600", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-DemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../../public/fonts/tosia/Tosia-Bold.otf",           weight: "700", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-BoldItalic.otf",     weight: "700", style: "italic" },
  ],
});

// Pra display (títulos), reutilizo a mesma Tosia mas via outra CSS var,
// assim os trechos italicizados (`<em>`) caem nas italic weights do próprio Tosia.
const tosiaDisplay = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "../../public/fonts/tosia/Tosia-Regular.otf",        weight: "400", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-Italic.otf",         weight: "400", style: "italic" },
    { path: "../../public/fonts/tosia/Tosia-Medium.otf",         weight: "500", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-DemiBold.otf",       weight: "600", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-DemiBoldItalic.otf", weight: "600", style: "italic" },
    { path: "../../public/fonts/tosia/Tosia-Bold.otf",           weight: "700", style: "normal" },
    { path: "../../public/fonts/tosia/Tosia-BoldItalic.otf",     weight: "700", style: "italic" },
  ],
});

const manrope = tosia;
const cormorant = tosiaDisplay;

export const metadata: Metadata = {
  title: "Bioplugs — Mudas Tecnicamente Produzidas",
  description:
    "Bioplugs propaga em escala industrial as variedades dos maiores breeders globais — Selecta one, Danziger e Sakata. Genética certificada, exclusivamente B2B. Atibaia/SP.",
  openGraph: {
    title: "Bioplugs — Mudas Tecnicamente Produzidas",
    description:
      "Genética certificada das maiores breeders do mundo, propagada com tecnologia em Atibaia/SP. Exclusivamente B2B.",
    locale: "pt_BR",
    type: "website",
  },
};

const HERO_FIRST_IMG = "/hero/dianthus.jpg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="preload"
          as="image"
          href={HERO_FIRST_IMG}
          fetchPriority="high"
        />
      </head>
      <body>
        <LenisProvider>
          <ScrollRevealProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ScrollRevealProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
