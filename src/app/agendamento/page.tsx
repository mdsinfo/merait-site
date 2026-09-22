import type { Metadata } from "next";
import { ScheduleForm } from "@/components/forms/schedule-form";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Agendar diagnóstico SAP",
  description: "Reserve um horário com um especialista sênior da MERAIT para SAP S/4HANA, AMS, integração, fiscal ou inteligência artificial.",
  path: "/agendamento",
});

export default function AgendamentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Reserve o diagnóstico com um especialista sênior"
        description="Informe o tema e o horário. A conversa cobre o ambiente, a prioridade e se o próximo passo é projeto, AMS, integração ou IA."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Agendamento", path: "/agendamento" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <ScheduleForm />
      </section>
    </>
  );
}
