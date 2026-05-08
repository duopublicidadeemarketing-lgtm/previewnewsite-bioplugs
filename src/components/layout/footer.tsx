import Link from "next/link";
import { Container } from "@/components/primitives/container";

const footerLinks = {
  site: [
    { href: "/", label: "Home" },
    { href: "/empresa", label: "Empresa" },
    { href: "/produtos", label: "Produtos" },
    { href: "/parcerias", label: "Parcerias" },
    { href: "/blog", label: "Blog" },
    { href: "/contato", label: "Contato" },
  ],
  breeders: [
    { href: "/parcerias/selecta", label: "Selecta" },
    { href: "/parcerias/danziger", label: "Danziger" },
    { href: "/parcerias/sakata", label: "Sakata" },
    { href: "/parcerias/hilverdakooij", label: "Hilverdakooij" },
  ],
  redes: [
    { href: "https://instagram.com/bioplugs", label: "Instagram" },
    { href: "https://facebook.com/bioplugs", label: "Facebook" },
    { href: "https://linkedin.com/company/bioplugs", label: "LinkedIn" },
    { href: "https://youtube.com/@bioplugs", label: "YouTube" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[--ink] text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Bio<span className="text-[--brand-lime]">Plugs</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Mudas Tecnicamente Produzidas<br />
              para a floricultura profissional.
            </p>
            <p className="mt-4 text-sm text-white/40">
              Atibaia, SP — Brasil<br />
              (11) 94440-9993
            </p>
          </div>

          {/* Site map */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navegação
            </h3>
            <ul className="space-y-2">
              {footerLinks.site.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-[--brand-lime] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Breeders */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Breeders parceiros
            </h3>
            <ul className="space-y-2">
              {footerLinks.breeders.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-[--brand-lime] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Redes sociais
            </h3>
            <ul className="space-y-2">
              {footerLinks.redes.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[--brand-lime] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Bioplugs. Todos os direitos reservados.</span>
          <Link href="/politica-de-privacidade" className="hover:text-white/70 transition-colors">
            Política de Privacidade
          </Link>
        </Container>
      </div>
    </footer>
  );
}
