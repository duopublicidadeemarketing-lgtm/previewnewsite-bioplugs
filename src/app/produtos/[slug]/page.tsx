import { notFound } from "next/navigation";
import { findProduto, produtos, breederLabel } from "@/data/produtos";
import { ProdutoDetalhe } from "@/components/sections/produto-detalhe";

export function generateStaticParams() {
  return produtos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const p = findProduto(slug);
  if (!p) return { title: "Produto não encontrado · Bioplugs" };
  return {
    title: `${p.especie} · Bioplugs`,
    description: `${p.caracteristica}. Genética ${breederLabel(p.breeder)} propagada com tecnologia em Atibaia/SP. Catálogo 26/27.`,
  };
}

export default async function ProdutoPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const p = findProduto(slug);
  if (!p) notFound();
  return <ProdutoDetalhe p={p} />;
}
