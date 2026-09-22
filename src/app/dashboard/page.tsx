import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { demandMix, kpis, ticketSeries } from "@/lib/demo";

export const metadata: Metadata = {
  title: "Dashboard de KPIs",
  description: "Painel demonstrativo de indicadores de AMS e integrações.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  const max = Math.max(...ticketSeries.map((item) => item.value));
  const total = demandMix.reduce((sum, item) => sum + item.value, 0);
  let cursor = 0;
  const segments = demandMix.map((item) => {
    const start = cursor;
    cursor += (item.value / total) * 360;
    return `${item.color} ${start}deg ${cursor}deg`;
  });

  return (
    <>
      <PageHero
        eyebrow="Dashboard"
        title="Indicadores que a gestão consegue ler"
        description="Dados ilustrativos de disponibilidade, SLA, satisfação e composição da fila. Não representam um contrato específico."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Dashboard", path: "/dashboard" },
        ]}
      />
      <section className="mx-auto max-w-6xl space-y-6 px-5 py-16 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {kpis.map((item) => (
            <article key={item.label} className="rounded-3xl border border-border bg-card p-5">
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-2 text-3xl font-semibold">{item.value}</p>
              <p className="mt-1 text-xs text-muted">{item.hint}</p>
            </article>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">Chamados por mês</h2>
            <div className="mt-6 flex h-48 items-end gap-3">
              {ticketSeries.map((item) => (
                <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-xl bg-brand" style={{ height: `${(item.value / max) * 100}%` }} />
                  <span className="text-xs text-muted">{item.month}</span>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">Composição da demanda</h2>
            <div
              className="mx-auto mt-6 size-40 rounded-full"
              style={{ background: `conic-gradient(${segments.join(",")})` }}
              role="img"
              aria-label="Distribuição entre funcional, técnico, melhoria e incidente"
            />
            <ul className="mt-6 space-y-2 text-sm">
              {demandMix.map((item) => (
                <li key={item.label} className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2">
                    <span className="size-2.5 rounded-full" style={{ background: item.color }} />
                    {item.label}
                  </span>
                  <span>{item.value}%</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
