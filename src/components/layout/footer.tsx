import Link from "next/link";

export function Footer() {
  return (
    <footer className="v10-footer">
      <div className="v10-footer-top">
        <div className="v10-footer-brand">
          <h2>
            Bio<em>Plugs</em>
          </h2>
          <p>Mudas tecnicamente produzidas</p>
          <div className="v10-footer-info">
            Atibaia, SP — Brasil
            <br />
            contato@bioplugs.com.br
            <br />
            +55 (11) 0000-0000
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
