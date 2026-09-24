import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { cases } from "@/lib/cases";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Cases SAP",
  description: "Cases de integração CRM x SAP, portal de fornecedores, projetos fiscais e AMS SAP para operações de médio e grande porte.",
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases de sucesso"
        title="Relatos de processo, sem métrica inventada"
        description="Implementação SAP WM, ciclo de fornecedores, CRM x SAP, fiscal e AMS. Cada relato descreve o que passou a funcionar. Nenhum percentual foi acrescentado."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Cases", path: "/cases" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:px-8">
        {cases.map((item) => (
          <article key={item.slug} className="grid gap-6 rounded-3xl border border-border bg-card p-6 md:grid-cols-[12rem_1fr] md:p-8">
            <p className="text-3xl font-semibold text-brand">{item.metric}</p>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.sector}</p>
              <h2 className="mt-2 text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
              <Link href={`/cases/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-link">
                Ler o case
              </Link>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
