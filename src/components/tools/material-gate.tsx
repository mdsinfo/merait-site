"use client";

import { useEffect, useState, type FormEvent } from "react";
import { materialSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const storageKey = "merait-material";

export function MaterialGate({ material }: { material: string }) {
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  useEffect(() => {
    setUnlocked(sessionStorage.getItem(storageKey) === "1");
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      type: "material" as const,
      nome: String(form.get("nome") ?? ""),
      empresa: String(form.get("empresa") ?? ""),
      email: String(form.get("email") ?? ""),
      material,
      website: String(form.get("website") ?? ""),
    };
    const parsed = materialSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revise os campos.");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      sessionStorage.setItem(storageKey, "1");
      setUnlocked(true);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  if (unlocked) {
    return (
      <div className="rounded-3xl border border-border bg-card p-6">
        <p className="text-sm leading-6 text-muted">Material liberado nesta sessão. Use a impressão do navegador para salvar em PDF.</p>
        <Button type="button" className="mt-4" onClick={() => window.print()}>
          Salvar em PDF
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold">Receber o material</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="nome">Nome</Label><Input id="nome" name="nome" /></div>
        <div className="space-y-2"><Label htmlFor="empresa">Empresa</Label><Input id="empresa" name="empresa" /></div>
      </div>
      <div className="mt-4 space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" /></div>
      <div className="hidden" aria-hidden="true"><input name="website" tabIndex={-1} autoComplete="off" /></div>
      {error ? <p className="mt-3 text-sm text-red-600">{error}</p> : null}
      {status === "error" ? <p className="mt-3 text-sm text-red-600">Não foi possível registrar agora.</p> : null}
      <Button type="submit" className="mt-4" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Liberar download"}
      </Button>
    </form>
  );
}
