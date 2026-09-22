import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { serviceOffers } from "@/lib/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Serviços de consultoria SAP",
  description:
    "Serviços de consultoria SAP no Brasil: S/4HANA, AMS, integração, ABAP, Fiori, SAP BTP, inteligência artificial e projetos fiscais.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Oito frentes, cada uma com dono e próximo passo"
        description="SAP S/4HANA, AMS, integrações, ABAP, Fiori, SAP BTP, inteligência artificial e projetos fiscais. O diagnóstico indica por onde começar."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Serviços", path: "/servicos" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:px-8">
        {serviceOffers.map((service) => (
          <article key={service.id} id={service.id} className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted md:text-base">{service.description}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/contato">
                      Solicitar diagnóstico
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={service.href}>Ver a frente</Link>
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-link">Benefícios</h3>
                  <ul className="mt-3 space-y-2">
                    {service.benefits.map((item) => (
                      <li key={item} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-link">Diferenciais</h3>
                  <ul className="mt-3 space-y-2">
                    {service.differentials.map((item) => (
                      <li key={item} className="rounded-2xl bg-ink px-4 py-3 text-sm leading-6 text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
