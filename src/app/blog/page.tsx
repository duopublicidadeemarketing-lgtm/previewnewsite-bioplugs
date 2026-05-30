import Link from "next/link";
import { posts, CATEGORIAS_LABEL, type BlogPost } from "@/data/blog";

export const metadata = {
  title: "Blog · Bioplugs",
  description:
    "Conteúdo técnico, mercado e bastidores da produção de mudas ornamentais. Insights da Bioplugs e dos breeders parceiros Selecta one, Danziger e Sakata.",
};

function BlogCard({ p }: { p: BlogPost }) {
  return (
    <Link href={`/blog/${p.slug}`} className="blog-card">
      <div
        className="blog-card-img"
        style={{ backgroundImage: `url('${p.imagem}')` }}
      />
      <div className="blog-card-body">
        <div className="blog-card-tag">{CATEGORIAS_LABEL[p.categoria]}</div>
        <h3 className="blog-card-title">{p.titulo}</h3>
        <p className="blog-card-excerpt">{p.resumo}</p>
        <div className="blog-card-meta">
          <span>{p.data_display}</span>
          <span>{p.tempo_leitura} de leitura</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const destaque = posts.find((p) => p.destaque) ?? posts[0];
  const restante = posts.filter((p) => p.slug !== destaque.slug);

  return (
    <>
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-eyebrow">Blog · Bioplugs</div>
        <h1 className="blog-hero-title">
          Cultivando <span className="it">conhecimento.</span>
        </h1>
        <p className="blog-hero-sub">
          Conteúdo técnico, mercado e bastidores da produção de mudas ornamentais. Tudo o que nossa equipe técnica e comercial aprende, compartilhamos aqui com produtores, floricultores e parceiros do setor.
        </p>
      </section>

      {/* POST DESTAQUE */}
      <section className="blog-featured">
        <Link href={`/blog/${destaque.slug}`} className="blog-featured-card">
          <div
            className="blog-featured-img"
            style={{ backgroundImage: `url('${destaque.imagem}')` }}
          />
          <div className="blog-featured-content">
            <span className="blog-featured-tag">
              ★ {CATEGORIAS_LABEL[destaque.categoria]}
            </span>
            <h2 className="blog-featured-title">{destaque.titulo}</h2>
            <div className="blog-featured-meta">
              {destaque.autor} · {destaque.data_display} · {destaque.tempo_leitura}
            </div>
          </div>
        </Link>
      </section>

      {/* GRID DE POSTS */}
      <section className="blog-grid">
        {restante.map((p) => (
          <BlogCard key={p.slug} p={p} />
        ))}
      </section>

      {/* NEWSLETTER */}
      <section className="blog-newsletter">
        <div className="blog-newsletter-eyebrow">Newsletter Bioplugs</div>
        <h2>
          Receba o melhor do setor <span className="it">em primeira mão.</span>
        </h2>
        <p>
          Conteúdo técnico, novas variedades do catálogo e tendências do mercado de flores ornamentais. Sem spam — só o que importa.
        </p>
        <form className="blog-newsletter-form" action="#" method="post">
          <input
            type="email"
            placeholder="seu@email.com.br"
            className="blog-newsletter-input"
            required
          />
          <button type="submit" className="blog-newsletter-btn">
            Inscrever-se
          </button>
        </form>
      </section>
    </>
  );
}
