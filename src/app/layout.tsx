import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollRevealProvider } from "@/components/providers/scroll-reveal-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
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
