import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LenisProvider } from "@/components/providers/lenis-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bioplugs — Mudas Tecnicamente Produzidas",
  description:
    "Bioplugs produz mudas técnicas de floricultura com genética de breeders globais. Parceira oficial Selecta, Danziger, Sakata e Hilverdakooij. Atibaia, SP.",
  openGraph: {
    title: "Bioplugs — Mudas Tecnicamente Produzidas",
    description:
      "Produção técnica de mudas para produtores e floricultores profissionais. Parceira oficial dos principais breeders globais.",
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
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[--paper] text-[--ink] antialiased">
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
