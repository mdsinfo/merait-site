import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceMarquee } from "@/components/home/experience-marquee";
import { MarketExperience } from "@/components/home/market-experience";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Clientes",
  description:
    "Empresas onde os especialistas da MERAIT já atuaram em projetos de SAP, AMS, integração e inteligência artificial.",
  path: "/clientes",
});

export default function ClientesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clientes"
        title="Empresas onde nossos especialistas já atuaram"
        description="A experiência foi construída em projetos estratégicos de empresas líderes. Logotipos oficiais entram quando houver autorização; até lá, o nome permanece como marca."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Clientes", path: "/clientes" },
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
