import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { materials } from "@/lib/materials";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Materiais",
  description: "Checklists e roteiros sobre Reforma Tributária, AMS SAP e integrações.",
  path: "/materiais",
});

export default function MateriaisPage() {
  return (
    <>
      <PageHero
        eyebrow="Materiais"
        title="Conteúdo para preparar a próxima conversa"
        description="Checklists práticos. A leitura é aberta. O PDF pede nome, empresa e e-mail."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Materiais", path: "/materiais" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 md:grid-cols-3 md:px-8">
        {materials.map((item) => (
          <article key={item.slug} className="rounded-3xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
            <Link href={`/materiais/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-link">Abrir material</Link>
          </article>
        ))}
      </section>
    </>
  );
}
