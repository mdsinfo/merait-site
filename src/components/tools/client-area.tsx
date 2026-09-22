"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { demoCredentials } from "@/lib/demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const key = "merait-demo-session";

export function ClientArea() {
  const [session, setSession] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setSession(sessionStorage.getItem(key) === "1");
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    if (email === demoCredentials.email && password === demoCredentials.password) {
      sessionStorage.setItem(key, "1");
      setSession(true);
      setError("");
      return;
    }
    setError("Use as credenciais de demonstração exibidas ao lado.");
  }

  function logout() {
    sessionStorage.removeItem(key);
    setSession(false);
  }

  if (session) {
    return (
      <div className="space-y-4">
        <div className="rounded-3xl bg-ink p-6 text-white">
          <p className="text-sm text-white/70">Ambiente de demonstração</p>
          <h2 className="mt-2 text-2xl font-semibold">Olá, operação demo</h2>
          <button type="button" onClick={logout} className="mt-4 cursor-pointer text-sm font-semibold text-lime">Sair</button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Projetos", "Rollout industrial em hypercare e integração CRM em monitoramento."],
            ["Chamados AMS", "4 demandas abertas, 1 com prioridade alta."],
            ["Documentos", "Ata de go-live, matriz de interfaces e roteiro fiscal."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-border bg-card p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link href="/portal-ams">Abrir Portal AMS</Link></Button>
          <Button asChild variant="outline"><Link href="/dashboard">Ver Dashboard</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" name="email" type="email" autoComplete="username" />
        </div>
        <div className="mt-4 space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" name="password" type="password" autoComplete="current-password" />
        </div>
        {error ? <p className="mt-3 text-sm text-red-600" role="alert">{error}</p> : null}
        <Button type="submit" className="mt-5">Entrar na demonstração</Button>
      </form>
      <aside className="rounded-3xl bg-ink p-6 text-white">
        <p className="text-sm font-semibold text-lime">Ambiente demonstrativo</p>
        <p className="mt-3 text-sm leading-6 text-white/75">Não utilize dados reais de clientes. O acesso abaixo apenas ilustra a área.</p>
        <p className="mt-4 text-sm">E-mail: {demoCredentials.email}</p>
        <p className="text-sm">Senha: {demoCredentials.password}</p>
      </aside>
    </div>
  );
}
