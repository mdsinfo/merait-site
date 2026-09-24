import type { Metadata } from "next";
import { ExperienceMarquee } from "@/components/home/experience-marquee";
import { MarketExperience } from "@/components/home/market-experience";
import { Cases, Segments } from "@/components/home/sections";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Clientes e experiência",
  description:
    "Experiência de mercado da MERAIT em SAP, AMS, integrações e inteligência artificial, construída em projetos estratégicos de empresas líderes.",
  path: "/clientes-e-experiencia",
});

export default function ClientesExperienciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Apresentação comercial"
        title="Experiência construída em grandes empresas"
        description="Segmentos, empresas, cases e parceiros SAP em uma leitura única para conversas comerciais. A atuação refere-se à trajetória profissional dos especialistas da MERAIT."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Clientes e experiência", path: "/clientes-e-experiencia" },
        ]}
      />
      <Segments />
      <ExperienceMarquee />
      <MarketExperience
        heading="Experiências por segmento"
        intro="Filtre a trajetória por indústria, varejo, logística ou parceiros SAP."
      />
      <Cases />
      <MarketExperience
        id="parceiros"
        lockFilter="Parceiros SAP"
        heading="Parceiros SAP"
        intro="Ecossistema com o qual os especialistas da MERAIT já trabalharam em projetos de integração, localização e plataforma."
      />
      <CtaBand />
    </>
  );
}
