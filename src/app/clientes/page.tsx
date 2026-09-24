import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceMarquee } from "@/components/home/experience-marquee";
import { MarketExperience } from "@/components/home/market-experience";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Experiência de Mercado",
  description:
    "Nossa experiência foi construída em empresas líderes de seus segmentos através de projetos de transformação digital, SAP, integrações, AMS e automação empresarial.",
  path: "/clientes",
});

export default function ClientesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiência de Mercado"
        title="Experiência construída em empresas líderes"
        description="Nossa experiência foi construída em empresas líderes de seus segmentos através de projetos de transformação digital, SAP, integrações, AMS e automação empresarial."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Experiência de Mercado", path: "/clientes" },
        ]}
      />
      <ExperienceMarquee />
      <MarketExperience id="experiencia-clientes" />
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <Link href="/clientes-e-experiencia" className="text-sm font-semibold text-link">
          Abrir a apresentação comercial
        </Link>
      </section>
      <CtaBand />
    </>
  );
}
