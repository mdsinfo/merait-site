import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-5 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Esta página não está no mapa</h1>
      <p className="mt-4 text-muted">O endereço pode ter mudado. Volte para a home ou fale com um especialista.</p>
      <Button asChild className="mt-6">
        <Link href="/">Ir para a home</Link>
      </Button>
    </section>
  );
}
