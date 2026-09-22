import { LeadForm } from "@/components/forms/lead-form";
import { Hero } from "@/components/home/hero";
import { MarketExperience } from "@/components/home/market-experience";
import {
  About,
  AiSection,
  BlogPreview,
  Cases,
  Clients,
  Differentials,
  Methodology,
  Segments,
  Products,
  Solutions,
} from "@/components/home/sections";
import { headlines } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Differentials />
      <MarketExperience />
      <About />
      <Solutions />
      <Products />
      <Clients />
      <Cases />
      <Segments />
      <Methodology />
      <AiSection />
      <BlogPreview />
      <section className="bg-card" id="contato">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-link">{headlines.cta}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{headlines.secondary}</h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              Informe porte, cenário SAP e a frente que mais pressiona a operação. O retorno é uma conversa com especialista, não um material genérico.
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-6 text-muted">
              <li>Leitura do ambiente: ECC, S/4HANA, integrações e fiscal.</li>
              <li>Prioridades para os próximos 90 dias.</li>
              <li>Indicação de frente: projeto, AMS, integração ou IA.</li>
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}
