import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MotionCard } from "@/components/motion/motion-card";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { SeoFaq } from "@/components/sections/seo-faq";
import { ownedProducts } from "@/lib/owned-products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Produtos Digitais MERAIT",
  description: "Conheça os produtos desenvolvidos pela MERAIT para logística, SAP, automação fiscal e inteligência artificial.",
  absolute: true,
  path: "/produtos",
});

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos proprietários"
        title="Tecnologia MERAIT para a operação"
        description="Agendamento de cargas, pátio, inteligência artificial e integração comercial. Cada produto tem página própria e conversa com o SAP."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Produtos", path: "/produtos" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-2 md:px-8">
        {ownedProducts.map((product, index) => (
          <MotionCard key={product.slug} delay={index * 0.05} className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/50 bg-white/70 p-6 shadow-[0_20px_50px_-30px_rgba(45,46,145,0.45)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <span className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[linear-gradient(135deg,#22D3EE,#2D2E91,#7BEA23)] opacity-30 blur-2xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-link">{product.name}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">{product.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{product.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {product.capabilities.slice(0, 4).map((item) => (
                  <li key={item} className="rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold">{item}</li>
                ))}
              </ul>
              <Link href={product.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link">
                Conhecer o produto <ArrowRight className="size-4" />
              </Link>
            </article>
          </MotionCard>
        ))}
      </section>
      <SeoFaq />
      <CtaBand />
    </>
  );
}
