import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { cases, getCase } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return pageMeta({
    title: item.title,
    description: item.summary,
    path: `/cases/${item.slug}`,
  });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow={item.sector}
        title={item.title}
        description={item.result}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: item.title, path: `/cases/${item.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-sm leading-7 text-muted">{item.context}</p>
        <h2 className="mt-10 text-2xl font-semibold">Desafio</h2>
        <p className="mt-3 text-sm leading-7 text-muted">{item.challenge}</p>
        <h2 className="mt-10 text-2xl font-semibold">Abordagem</h2>
        <ul className="mt-3 space-y-2">
          {item.approach.map((step) => (
            <li key={step} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">{step}</li>
          ))}
        </ul>
        <h2 className="mt-10 text-2xl font-semibold">Resultados</h2>
        <ul className="mt-3 space-y-2">
          {item.results.map((step) => (
            <li key={step} className="rounded-2xl bg-ink px-4 py-3 text-sm leading-6 text-white">{step}</li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">Stack: {item.stack.join(" · ")}</p>
      </article>
      <CtaBand />
    </>
  );
}
