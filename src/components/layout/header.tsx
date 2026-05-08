"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/empresa", label: "Empresa" },
  { href: "/produtos", label: "Produtos" },
  { href: "/parcerias", label: "Parcerias" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Remove white background from logo PNG via canvas
  useEffect(() => {
    const img = logoRef.current;
    if (!img) return;
    const proc = () => {
      try {
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const d = ctx.getImageData(0, 0, c.width, c.height);
        const px = d.data;
        for (let i = 0; i < px.length; i += 4) {
          const r = px[i], g = px[i + 1], b = px[i + 2];
          if (r > 235 && g > 235 && b > 235) {
            px[i + 3] = 0;
          } else if (r > 200 && g > 200 && b > 200) {
            const l = (r + g + b) / 3;
            px[i + 3] = Math.min(px[i + 3], Math.max(0, 255 - (l - 200) * 5));
          }
        }
        ctx.putImageData(d, 0, 0);
        img.src = c.toDataURL("image/png");
      } catch {
        // CORS or other failure — leave logo as-is
      }
    };
    if (img.complete && img.naturalWidth) proc();
    else img.addEventListener("load", proc, { once: true });
  }, []);

  return (
    <>
      <nav className={`v10-nav ${scrolled ? "scrolled" : ""}`}>
        <Link href="/" className="v10-nav-logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={logoRef}
            className="v10-nav-logo-img"
            src="/brand/logo.png"
            alt="Bioplugs"
            crossOrigin="anonymous"
          />
          <div>
            <div className="v10-nav-logo-text">
              Bio<em>Plugs</em>
            </div>
            <div className="v10-nav-logo-sub">Mudas tecnicamente produzidas</div>
          </div>
        </Link>
        <div className="v10-nav-links">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contato" className="v10-nav-cta">
          Fale Conosco →
        </Link>
        <button
          className={`v10-nav-mobile-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`v10-nav-mobile-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`v10-nav-mobile-sheet ${open ? "open" : ""}`}>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link
          href="/contato"
          className="v10-nav-cta-mobile"
          onClick={() => setOpen(false)}
        >
          Fale Conosco →
        </Link>
      </aside>
    </>
  );
}
