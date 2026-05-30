import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, CATEGORIAS_LABEL, type BlogPost } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado · Bioplugs" };
  return {
    title: `${post.titulo} · Blog Bioplugs`,
    description: post.resumo,
  };
}

// Helper: renderiza parágrafos com markup leve (**bold**, ## h2, > blockquote)
function renderConteudo(paragrafos: string[]) {
  return paragrafos.map((p, i) => {
    if (p.startsWith("## ")) {
      return <h2 key={i}>{p.slice(3)}</h2>;
    }
    if (p.startsWith("> ")) {
      return (
        <blockquote key={i}>
          <p>{withBold(p.slice(2))}</p>
        </blockquote>
      );
    }
    return <p key={i}>{withBold(p)}</p>;
  });
}

function withBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function RelatedCard({ p }: { p: BlogPost }) {
  return (
    <Link href={`/blog/${p.slug}`} className="blog-card">
      <div
        className="blog-card-img"
        style={{ backgroundImage: `url('${p.imagem}')` }}
      />
      <div className="blog-card-body">
        <div className="blog-card-tag">{CATEGORIAS_LABEL[p.categoria]}</div>
        <h3 className="blog-card-title">{p.titulo}</h3>
        <div className="blog-card-meta">
          <span>{p.data_display}</span>
          <span>{p.tempo_leitura} de leitura</span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const conteudo = post.conteudo ?? [post.resumo];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* COVER */}
      <header className="post-cover">
        <div
          className="post-cover-img"
          style={{ backgroundImage: `url('${post.imagem}')` }}
        />
        <div className="post-cover-content">
          <nav className="post-cover-breadcrumb">
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span>{CATEGORIAS_LABEL[post.categoria]}</span>
          </nav>
          <span className="post-cover-tag">
            {CATEGORIAS_LABEL[post.categoria]}
          </span>
          <h1 className="post-cover-title">{post.titulo}</h1>
          <div className="post-cover-meta">
            <span>Por {post.autor}</span>
            <span>{post.data_display}</span>
            <span>{post.tempo_leitura} de leitura</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <article className="post-body">{renderConteudo(conteudo)}</article>

      {/* SHARE */}
      <div className="post-share">
        <span className="post-share-label">Compartilhar</span>
        <a
          className="post-share-btn"
          href={`https://wa.me/?text=${encodeURIComponent(post.titulo + " · " + "https://bioplugs.com.br/blog/" + post.slug)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp →
        </a>
        <a
          className="post-share-btn"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://bioplugs.com.br/blog/" + post.slug)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn →
        </a>
        <a
          className="post-share-btn"
          href={`mailto:?subject=${encodeURIComponent(post.titulo)}&body=${encodeURIComponent("https://bioplugs.com.br/blog/" + post.slug)}`}
        >
          Email →
        </a>
      </div>

      {/* RELACIONADOS */}
      <section className="post-related">
        <div className="post-related-eyebrow">Continue lendo</div>
        <h2 className="post-related-title">
          Outros conteúdos do <span className="it">blog.</span>
        </h2>
        <div className="post-related-grid">
          {related.map((p) => (
            <RelatedCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      {/* NEWSLETTER (reaproveita do /blog) */}
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
