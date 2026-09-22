"use client";

import { useState } from "react";
import Link from "next/link";
import { projectTypes, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [filter, setFilter] = useState<(typeof projectTypes)[number]>("Todos");
  const visible = projects.filter((item) => filter === "Todos" || item.type === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar projetos">
        {projectTypes.map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={filter === type}
            onClick={() => setFilter(type)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold",
              filter === type ? "border-brand bg-brand text-white" : "border-border bg-card",
            )}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((item) => (
          <article key={item.title} className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-link">{item.type} · {item.sector}</p>
            <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-link">Ver frente</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
