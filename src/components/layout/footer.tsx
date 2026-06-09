"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export function Footer() {
  const logoRef = useRef<HTMLImageElement>(null);

  // Remove white background from logo PNG via canvas (mesma técnica do header)
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
        // CORS — deixa como está
      }
    };
    if (img.complete && img.naturalWidth) proc();
    else img.addEventListener("load", proc, { once: true });
  }, []);

  return (
    <footer className="v10-footer">
      <div className="v10-footer-top">
        <div className="v10-footer-brand">
          <div className="v10-footer-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={logoRef}
              className="v10-footer-logo-img"
              src="/brand/logo.png"
              alt="Bioplugs"
              crossOrigin="anonymous"
            />
            <div>
              <h2>
                Bio<em>Plugs</em>
              </h2>
              <p>Mudas tecnicamente produzidas</p>
            </div>
          </div>
          <div className="v10-footer-info">
            Atibaia, SP — Brasil
            <br />
            programacao@bioplugs.com.br
            <br />
            +55 (11) 94440-9993
          </div>
        </div>
        <div className="v10-fcol">
          <h4>Site</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/empresa">Empresa</Link></li>
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/parcerias">Parcerias</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div className="v10-fcol">
          <h4>Breeders</h4>
          <ul>
            <li><Link href="/parcerias/selecta">Selecta one 🇩🇪</Link></li>
            <li><Link href="/parcerias/danziger">Danziger 🇮🇱</Link></li>
            <li><Link href="/parcerias/sakata">Sakata 🇯🇵</Link></li>
          </ul>
        </div>
        <div className="v10-fcol">
          <h4>Categorias</h4>
          <ul>
            <li><Link href="/produtos?categoria=corte">Corte</Link></li>
            <li><Link href="/produtos?categoria=jardim">Jardim</Link></li>
            <li><Link href="/produtos?categoria=vaso">Vaso</Link></li>
          </ul>
        </div>
      </div>
      <div className="v10-footer-bottom">
        <span>© 2026 Bioplugs · Todos os direitos reservados</span>
        <span>Política de Privacidade · LGPD</span>
      </div>
    </footer>
  );
}
