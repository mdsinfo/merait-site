import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/brand/icon";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";
import { fiscalOffering, solutions } from "@/lib/solutions";

export const metadata: Metadata = pageMeta({
  title: "Soluções SAP",
  description: "Consultoria em SAP S/4HANA, AMS SAP, integração SAP, SAP BTP, ABAP, Fiori, projetos fiscais e inteligência artificial.",
  path: "/solucoes",
});

export default function SolucoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Soluções"
        title="Frentes para implantar, integrar e sustentar o SAP"
        description="S/4HANA, AMS, integração, BTP, fiscal e inteligência artificial. Cada frente tem dono, benefício e um diagnóstico como próximo passo."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Soluções", path: "/solucoes" },
        ]}
      />
      <section className="mx-auto max-w-6xl space-y-6 px-5 py-16 md:px-8">
        {solutions.map((solution) => (
          <article key={solution.slug} id={solution.slug} className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-lime">
                <Icon name={solution.icon} className="size-5" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold">{solution.navLabel}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{solution.description}</p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {solution.offerings.map((item) => (
                <li key={item.title} className="rounded-2xl bg-background px-4 py-3">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
            <Link href={solution.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link">
              Abrir página <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
        <article id="fiscal" className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink text-lime">
              <Icon name="receipt" className="size-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold">Fiscal e Tributário</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                Documentos eletrônicos, obrigações e a Reforma Tributária tratados junto com o processo de faturamento, compras e logística.
              </p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {fiscalOffering.map((item) => (
              <li key={item.title} className="rounded-2xl bg-background px-4 py-3">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <CtaBand />
    </>
  );
}
