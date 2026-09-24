import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/lead-form";
import { SeoFaq } from "@/components/sections/seo-faq";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";
import { siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contato",
  description: "Agende uma reunião, fale no WhatsApp ou envie o formulário. Vamos conversar sobre seus desafios em SAP, AMS, integrações e produtos.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre seus desafios?"
        description="Agende uma reunião, fale no WhatsApp ou deixe o cenário no formulário. O retorno é uma conversa com especialista sênior."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contato", path: "/contato" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="space-y-4">
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">E-mail</h2>
            <a className="mt-2 block text-sm text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">WhatsApp</h2>
            <a className="mt-2 block text-sm font-semibold text-link" href={whatsappHref("Olá, quero falar com um especialista MERAIT.")} target="_blank" rel="noreferrer">
              Abrir conversa
            </a>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">Agendamento de reunião</h2>
            <p className="mt-2 text-sm leading-6 text-muted">Escolha tema, data e horário para uma conversa inicial.</p>
            <Link href="/agendamento" className="mt-3 inline-flex text-sm font-semibold text-link">Agendar reunião</Link>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-semibold">LinkedIn</h2>
            <a className="mt-2 block text-sm font-semibold text-link" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
              Acessar o perfil
            </a>
          </article>
          <p className="text-sm leading-6 text-muted">Atendimento em todo o Brasil, em dias úteis, no horário comercial de Brasília.</p>
        </aside>
        <LeadForm />
      </section>
      <SeoFaq />
    </>
  );
}
