import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import type { OwnedProduct } from "@/lib/owned-products";

export function OwnedProductView({ product }: { product: OwnedProduct }) {
  return (
    <>
      <PageHero
        eyebrow={product.name}
        title={product.title}
        description={product.description}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Produtos", path: "/produtos" },
          { name: product.name, path: product.href },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Capacidades</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {product.capabilities.map((item) => (
            <li key={item} className="rounded-2xl border border-border bg-card px-5 py-4 text-sm">{item}</li>
          ))}
        </ul>
        <h2 className="mt-14 text-3xl font-semibold tracking-tight">Benefícios</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">Ganhos esperados. O resultado depende do cenário, da adoção e das integrações implementadas.</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {product.benefits.map((item) => (
            <li key={item} className="rounded-2xl border-t-[3px] border-brand bg-card px-5 py-5 text-sm font-semibold">{item}</li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/contato" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white">
            Solicitar demonstração <ArrowRight className="size-4" />
          </Link>
          <Link href="/agendamento" className="inline-flex h-12 items-center rounded-full border border-border px-5 text-sm font-semibold">
            Agendar reunião
          </Link>
        </div>
      </section>
    </>
  );
}
