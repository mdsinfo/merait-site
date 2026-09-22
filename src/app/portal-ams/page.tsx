import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { queue } from "@/lib/demo";

export const metadata: Metadata = {
  title: "Portal AMS",
  description: "Demonstração do portal de sustentação SAP da MERAIT.",
  robots: { index: false, follow: false },
};

export default function PortalAmsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portal AMS"
        title="Fila, SLA e hypercare em um só painel"
        description="Visão demonstrativa. Os chamados abaixo são ilustrativos e não representam um cliente real."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Portal AMS", path: "/portal-ams" },
        ]}
      />
      <section className="mx-auto max-w-6xl space-y-6 px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Prioridade alta", "4 horas"],
            ["Prioridade média", "8 horas"],
            ["Melhoria planejada", "5 dias úteis"],
          ].map(([label, value]) => (
            <article key={label} className="rounded-3xl border border-border bg-card p-5">
              <p className="text-sm text-muted">{label}</p>
              <p className="mt-2 text-2xl font-semibold">{value}</p>
            </article>
          ))}
        </div>
        <div className="overflow-x-auto rounded-3xl border border-border">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <caption className="px-4 py-3 text-left text-sm font-semibold">Fila de demandas demonstrativa</caption>
            <thead className="bg-card text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Demanda</th>
                <th className="px-4 py-3 font-medium">Prioridade</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">SLA</th>
              </tr>
            </thead>
            <tbody>
              {queue.map((item) => (
                <tr key={item.id} className="border-t border-border">
                  <td className="px-4 py-3 font-semibold">{item.id}</td>
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.priority}</td>
                  <td className="px-4 py-3">{item.status}</td>
                  <td className="px-4 py-3">{item.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <article className="rounded-3xl bg-ink p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">Hypercare</p>
          <h2 className="mt-2 text-2xl font-semibold">Programa Indústria 01</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
            Semana 3 de 6. Incidentes críticos estabilizados. Saída prevista quando a recorrência semanal ficar abaixo do combinado e o time interno assumir a fila de dúvidas.
          </p>
        </article>
      </section>
    </>
  );
}
