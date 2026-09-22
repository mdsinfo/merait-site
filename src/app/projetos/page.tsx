import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/project-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Projetos",
  description: "Oito implementações de SAP S/4HANA, projetos de Reforma Tributária, AMS, integrações e inteligência artificial.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Implementações de S/4HANA e a Reforma Tributária no SAP"
        description="Oito frentes de implantação, conversão e rollout, mais o roadmap de IBS e CBS, integrações, AMS e inteligência artificial."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Projetos", path: "/projetos" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ProjectGrid />
      </section>
      <CtaBand />
    </>
  );
}
