import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=85"
          alt="Campo de flores ornamentais — Bioplugs"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — escurece mais à esquerda onde fica o texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[--ink]/90 via-[--ink]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[--ink]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 py-32 sm:px-8 lg:px-16 pt-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[--brand-lime]">
            Mudas Tecnicamente Produzidas
          </p>

          {/* Headline */}
          <h1
            className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Genética de<br />
            breeders globais.<br />
            <span className="text-[--brand-lime]">Resultado</span> entregue<br />
            na sua estufa.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            Bioplugs produz mudas com método técnico e genética premium dos
            principais breeders mundiais. Parceira oficial de Selecta, Danziger,
            Sakata e Hilverdakooij. Atibaia, SP.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/produtos"
              className="inline-flex items-center justify-center rounded-full bg-[--brand-lime] px-8 py-4 text-sm font-semibold text-[--ink] transition-all hover:brightness-110 hover:scale-[1.02]"
            >
              Conhecer variedades →
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              Falar com a equipe
            </Link>
          </div>

          {/* Badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="text-center">
              <span className="block text-3xl font-bold text-[--brand-lime]" style={{ fontFamily: "var(--font-display)" }}>38+</span>
              <span className="text-xs uppercase tracking-widest text-white/50">Variedades</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <span className="block text-3xl font-bold text-[--brand-lime]" style={{ fontFamily: "var(--font-display)" }}>4</span>
              <span className="text-xs uppercase tracking-widest text-white/50">Breeders</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <span className="block text-3xl font-bold text-[--brand-lime]" style={{ fontFamily: "var(--font-display)" }}>3</span>
              <span className="text-xs uppercase tracking-widest text-white/50">Categorias</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
