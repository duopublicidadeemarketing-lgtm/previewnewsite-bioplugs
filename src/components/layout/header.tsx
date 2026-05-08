"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/produtos", label: "Produtos" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[--brand-blue]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
            <Image
              src="/brand/logo.png"
              alt="BioPlugs"
              width={40}
              height={40}
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="leading-tight">
            <span className="block text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Bio<span className="text-[--brand-lime]">Plugs</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">
              Mudas Tecnicamente Produzidas
            </span>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-[--brand-lime]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
        <Link
          href="/contato"
          className="hidden rounded-full bg-[--brand-lime] px-5 py-2 text-sm font-semibold text-[--ink] transition-opacity hover:opacity-90 lg:block"
        >
          Fale com a equipe
        </Link>

        {/* Hamburger mobile */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-white/10 bg-[--brand-blue] px-5 pb-6 pt-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-base font-medium text-white/80 hover:text-[--brand-lime]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contato"
            className="mt-4 block rounded-full bg-[--brand-lime] px-5 py-3 text-center text-sm font-semibold text-[--ink]"
            onClick={() => setOpen(false)}
          >
            Fale com a equipe
          </Link>
        </nav>
      )}
    </header>
  );
}
