"use client";

import { useMemo, useState } from "react";
import { ExperienceTile } from "@/components/brand/experience-tile";
import {
  experienceCategories,
  experienceDisclaimer,
  experienceEntries,
  type ExperienceCategory,
} from "@/lib/experience";
import { cn } from "@/lib/utils";

const filters = ["Todos", ...experienceCategories] as const;

export function MarketExperience({
  initialFilter = "Todos",
  lockFilter,
  heading = "Empresas onde nossos especialistas já atuaram",
  intro = "Experiência construída em projetos estratégicos realizados em empresas líderes de seus segmentos.",
  id = "experiencia",
}: {
  initialFilter?: (typeof filters)[number];
  lockFilter?: ExperienceCategory;
  heading?: string;
  intro?: string;
  id?: string;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>(lockFilter ?? initialFilter);
  const visible = useMemo(
    () => experienceEntries.filter((item) => (lockFilter ?? filter) === "Todos" || item.category === (lockFilter ?? filter)),
    [filter, lockFilter],
  );

  return (
    <section className="relative overflow-hidden bg-[#070B16] py-20 text-white md:py-28" id={id}>
      <div className="orb orb-cyan opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Experiência de mercado</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">{heading}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 md:text-base">{intro}</p>
        {lockFilter ? null : (
          <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filtrar experiência por segmento">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  "shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold",
                  filter === item ? "border-transparent bg-white text-ink" : "border-white/20 text-white/80 hover:bg-white/10",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        )}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((item) => (
            <ExperienceTile key={item.id} name={item.name} logoSrc={item.logoSrc} caption={item.category} />
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-5 text-white/55">{experienceDisclaimer}</p>
      </div>
    </section>
  );
}
