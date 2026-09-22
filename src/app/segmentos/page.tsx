import type { Metadata } from "next";
import { Icon } from "@/components/brand/icon";
import { MotionCard } from "@/components/motion/motion-card";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { segments } from "@/lib/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Segmentos",
  description:
    "Consultoria SAP para papel e celulose, vidros, mineração, agronegócio, indústria, logística, distribuição, varejo, moda, energia, químico e bens de consumo.",
  path: "/segmentos",
});

export default function SegmentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title="Processos diferentes pedem leitura de operação"
        description="A mesma plataforma SAP encontra cadeias distintas. O desenho parte do ciclo real de cada segmento."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Segmentos", path: "/segmentos" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {segments.map((item, index) => (
          <MotionCard key={item.title} delay={index * 0.03} className="h-full">
            <article id={item.title.toLowerCase().replaceAll(" ", "-")} className="h-full rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm">
              <Icon name={item.icon} className="size-5 text-brand" />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          </MotionCard>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
