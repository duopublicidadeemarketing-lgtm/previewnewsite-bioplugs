"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1490750967868-88df5691cc7b?w=1800&q=82&auto=format&fit=crop",
    spec: "Dahlia hybrida · Selecta one",
  },
  {
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=1800&q=82&auto=format&fit=crop",
    spec: "Dianthus barbatus · Selecta one",
  },
  {
    img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=1800&q=82&auto=format&fit=crop",
    spec: "Gerbera jamesonii · Sakata",
  },
  {
    img: "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&w=1800",
    spec: "Helianthus annuus · Danziger",
  },
  {
    img: "https://images.unsplash.com/photo-1597945233059-3a4d7d9fec38?w=1800&q=82&auto=format&fit=crop",
    spec: "Petunia × hybrida · Danziger",
  },
];

export function HeroSection() {
  const [idx, setIdx] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const bg = bgRef.current;
    const spec = specRef.current;
    if (!bg || !spec) return;
    const s = slides[idx];
    const im = new window.Image();
    im.onload = () => {
      bg.style.transition = "opacity 1.5s ease";
      bg.style.opacity = "0";
      spec.style.opacity = "0";
      setTimeout(() => {
        bg.style.backgroundImage = `linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.55) 100%), url('${s.img}')`;
        spec.textContent = s.spec;
        bg.style.opacity = "1";
        spec.style.opacity = "1";
      }, 700);
    };
    im.src = s.img;
  }, [idx]);

  return (
    <section className="v10-hero">
      <div className="v10-hero-bg" ref={bgRef} />
      <div className="v10-hero-content">
        <div className="v10-hero-eyebrow">B2B · Atibaia, SP · Brasil</div>
        <h1 className="v10-hero-title">
          <span className="wr wr-1"><span>Mudas tecnicamente</span></span>
          <br />
          <span className="wr wr-2"><span>produzidas com</span></span>{" "}
          <span className="wr wr-3"><span className="it">parceiros globais.</span></span>
        </h1>
        <p className="v10-hero-sub">
          Genética certificada das maiores breeders do mundo, propagada com tecnologia de ponta em Atibaia/SP. Exclusivamente B2B.
        </p>
        <div className="v10-hero-actions">
          <a href="#produtos" className="v10-btn v10-btn-primary">
            Ver Catálogo <span className="arrow">→</span>
          </a>
          <a href="#empresa" className="v10-btn v10-btn-ghost">
            Quem Somos
          </a>
        </div>
      </div>
      <div className="v10-hero-footer">
        <div className="v10-hero-footer-spec" ref={specRef}>
          {slides[0].spec}
        </div>
        <div className="v10-hero-footer-meta">
          Catálogo 26 / 27 · 38 variedades
        </div>
      </div>
      <div className="v10-hero-scroll">
        <span>Scroll</span>
        <span className="v10-hero-scroll-line" />
      </div>
    </section>
  );
}
