import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headlines, whatsappHref } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold text-lime">{headlines.cta}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">{headlines.secondary}</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="lime" size="lg">
            <Link href="/contato">Agendar diagnóstico executivo</Link>
          </Button>
          <Button asChild variant="inverse" size="lg">
            <a href={whatsappHref("Olá, quero uma avaliação com a MERAIT.")} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
