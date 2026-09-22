import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { RoiCalculator } from "@/components/tools/roi-calculator";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Calculadora de ROI",
  description: "Simule economia de retrabalho, horas liberadas e payback de um projeto SAP ou de integração.",
  path: "/calculadora-roi",
});

export default function CalculadoraPage() {
  return (
    <>
      <PageHero
        eyebrow="Calculadora"
        title="Uma leitura inicial de retorno, antes do diagnóstico"
        description="Ajuste pessoas, horas, custo e a redução esperada. O resultado é uma simulação para orientar a conversa, não uma proposta."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Calculadora de ROI", path: "/calculadora-roi" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <RoiCalculator />
      </section>
    </>
  );
}
