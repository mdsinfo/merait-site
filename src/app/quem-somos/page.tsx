import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { methodology, timeline } from "@/lib/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Consultoria SAP",
  description: "Consultoria SAP especializada para médio e grande porte. Especialistas seniores em S/4HANA, AMS, integração e inteligência artificial.",
  path: "/quem-somos",
});

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title="Consultoria SAP para quem responde pelo resultado"
        description="Especialistas seniores em S/4HANA, AMS, integração e inteligência artificial. Atendimento próximo, decisão curta e presença de quem executa."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Quem Somos", path: "/quem-somos" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="max-w-3xl text-lg leading-8 text-muted">
          O mandato é claro: implantar, integrar ou sustentar o SAP sem perder o processo de vista. Funcional, técnico, fiscal e integração trabalham no mesmo desenho, do diagnóstico ao AMS.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["Estratégia", "Diagnóstico executivo com prioridades para os próximos 90 dias."],
            ["Entrega", "S/4HANA, integração, ABAP, Fiori e go-live com critério de aceite."],
            ["Continuidade", "Hypercare e AMS para o ambiente evoluir depois da virada."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <h2 className="mt-16 text-3xl font-semibold">Linha do tempo</h2>
        <ol className="mt-8 space-y-6">
          {timeline.map((item, index) => (
            <li key={item.title} className="grid gap-2 border-t border-border pt-6 md:grid-cols-[8rem_1fr]">
              <p className="text-sm font-semibold text-link">0{index + 1}</p>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h2 className="mt-16 text-3xl font-semibold">Como conduzimos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {methodology.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border p-5">
              <p className="text-sm font-semibold text-link">{item.step}</p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
