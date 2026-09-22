import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-cyan" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <BreadcrumbJsonLd items={crumbs} />
        <nav aria-label="Trilha" className="text-sm text-white/70">
          <ol className="flex flex-wrap gap-2">
            {crumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {index === crumbs.length - 1 ? (
                  <span className="text-white">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="hover:text-white">
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{description}</p>
      </div>
    </section>
  );
}
