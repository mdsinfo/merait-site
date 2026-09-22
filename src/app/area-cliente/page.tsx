import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ClientArea } from "@/components/tools/client-area";

export const metadata: Metadata = {
  title: "Área do cliente",
  description: "Demonstração da área do cliente MERAIT.",
  robots: { index: false, follow: false },
};

export default function AreaClientePage() {
  return (
    <>
      <PageHero
        eyebrow="Área do cliente"
        title="Portal ilustrativo da operação"
        description="Projetos, chamados e documentos em um ambiente de demonstração. O acesso real depende do contrato de cada cliente."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Área do cliente", path: "/area-cliente" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <ClientArea />
      </section>
    </>
  );
}
