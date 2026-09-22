import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MaterialGate } from "@/components/tools/material-gate";
import { PageHero } from "@/components/sections/page-hero";
import { getMaterial, materials } from "@/lib/materials";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return materials.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMaterial(slug);
  if (!item) return {};
  return pageMeta({ title: item.title, description: item.description, path: `/materiais/${item.slug}` });
}

export default async function MaterialPage({ params }: Props) {
  const { slug } = await params;
  const item = getMaterial(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        eyebrow="Material"
        title={item.title}
        description={item.description}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Materiais", path: "/materiais" },
          { name: item.title, path: `/materiais/${item.slug}` },
        ]}
      />
      <article className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          {item.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="mt-3 space-y-2">
                {section.items.map((point) => (
                  <li key={point} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">{point}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <MaterialGate material={item.title} />
      </article>
    </>
  );
}
