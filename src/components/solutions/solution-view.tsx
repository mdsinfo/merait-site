import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/solutions/faq-list";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { AiFlow } from "@/components/home/ai-flow";
import type { Solution } from "@/lib/solutions";
import { solutions } from "@/lib/solutions";
import { S4Landing } from "@/components/solutions/s4-landing";

export function SolutionView({ solution }: { solution: Solution }) {
  const related = solutions.filter((item) => item.slug !== solution.slug).slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={solution.title}
        description={solution.description}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Soluções", path: "/solucoes" },
          { name: solution.navLabel, path: solution.href },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {solution.offerings.map((item) => (
            <article key={item.title} className="rounded-3xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        {solution.slug === "sap-s4hana" ? <S4Landing /> : null}
        {solution.slug === "inteligencia-artificial" ? (
          <div className="mt-12 rounded-3xl bg-ink p-6 text-white md:p-8">
            <h2 className="text-2xl font-semibold">Arquitetura integrada</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Do S/4HANA à BTP, aos copilotos e de volta aos usuários. O SAP permanece o sistema de registro.
            </p>
            <AiFlow />
          </div>
        ) : null}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold">O que a empresa leva</h2>
            <ul className="mt-4 space-y-3">
              {solution.outcomes.map((item) => (
                <li key={item} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
            <div className="mt-4">
              <FaqJsonLd faqs={solution.faqs} />
              <FaqList faqs={solution.faqs} />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">Outras frentes</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {related.map((item) => (
              <Link key={item.slug} href={item.href} className="rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-brand/40">
                {item.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
