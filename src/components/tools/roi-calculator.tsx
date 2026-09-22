"use client";

import { useMemo, useState } from "react";
import { formatBRL } from "@/lib/utils";

export function RoiCalculator() {
  const [people, setPeople] = useState(20);
  const [hours, setHours] = useState(8);
  const [cost, setCost] = useState(80);
  const [reduction, setReduction] = useState(40);
  const [investment, setInvestment] = useState(180000);

  const result = useMemo(() => {
    const yearlyHours = people * hours * 12;
    const yearlyCost = yearlyHours * cost;
    const savings = yearlyCost * (reduction / 100);
    const freedHours = yearlyHours * (reduction / 100);
    const payback = savings > 0 ? investment / (savings / 12) : 0;
    return { yearlyCost, savings, freedHours, payback };
  }, [people, hours, cost, reduction, investment]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <form className="space-y-5 rounded-3xl border border-border bg-card p-6">
        <Field label="Pessoas impactadas" value={people} min={1} max={500} onChange={setPeople} />
        <Field label="Horas de retrabalho por pessoa ao mês" value={hours} min={1} max={80} onChange={setHours} />
        <Field label="Custo médio da hora (R$)" value={cost} min={20} max={500} step={10} onChange={setCost} />
        <Field label={`Redução esperada: ${reduction}%`} value={reduction} min={10} max={70} onChange={setReduction} />
        <label className="block text-sm font-medium">
          Investimento previsto do projeto (R$)
          <input
            className="mt-2 h-11 w-full rounded-2xl border border-border bg-background px-4"
            type="number"
            min={0}
            value={investment}
            onChange={(event) => setInvestment(Number(event.target.value))}
          />
        </label>
      </form>
      <aside className="rounded-3xl bg-ink p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">Simulação</p>
        <dl className="mt-6 space-y-5">
          <Item label="Custo anual do retrabalho" value={formatBRL(result.yearlyCost)} />
          <Item label="Economia anual estimada" value={formatBRL(result.savings)} />
          <Item label="Horas liberadas por ano" value={Math.round(result.freedHours).toLocaleString("pt-BR")} />
          <Item label="Payback estimado" value={`${result.payback.toFixed(1)} meses`} />
        </dl>
        <p className="mt-6 text-xs leading-5 text-white/65">
          Simulação ilustrativa. O número depende do diagnóstico, do processo e do investimento real. Não é uma proposta comercial.
        </p>
      </aside>
    </div>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        className="mt-3 w-full accent-[#2D2E91]"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="mt-1 block text-muted">{value}</span>
    </label>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm text-white/65">{label}</dt>
      <dd className="mt-1 text-3xl font-semibold">{value}</dd>
    </div>
  );
}
