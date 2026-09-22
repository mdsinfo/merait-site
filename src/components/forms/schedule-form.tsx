"use client";

import { useState, type FormEvent } from "react";
import { scheduleSchema } from "@/lib/schemas";
import { scheduleSlots, scheduleTopics } from "@/lib/demo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ScheduleForm() {
  const [horario, setHorario] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      type: "agendamento" as const,
      nome: String(form.get("nome") ?? ""),
      empresa: String(form.get("empresa") ?? ""),
      telefone: String(form.get("telefone") ?? ""),
      email: String(form.get("email") ?? ""),
      tema: String(form.get("tema") ?? ""),
      data: String(form.get("data") ?? ""),
      horario,
      mensagem: String(form.get("mensagem") ?? ""),
      website: String(form.get("website") ?? ""),
    };
    const parsed = scheduleSchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revise os campos.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as { ok?: boolean; whatsapp?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setWhatsapp(data.whatsapp ?? "");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-border bg-card p-6" role="status">
        <h2 className="text-xl font-semibold">Pedido de agenda registrado</h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Confirmamos a preferência de data e horário nesta solicitação. A equipe valida a disponibilidade e retorna pelo canal escolhido.
        </p>
        {whatsapp ? (
          <Button asChild className="mt-5" variant="lime">
            <a href={whatsapp} target="_blank" rel="noreferrer">Confirmar no WhatsApp</a>
          </Button>
        ) : null}
      </div>
    );
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2"><Label htmlFor="nome">Nome</Label><Input id="nome" name="nome" autoComplete="name" /></div>
        <div className="space-y-2"><Label htmlFor="empresa">Empresa</Label><Input id="empresa" name="empresa" autoComplete="organization" /></div>
        <div className="space-y-2"><Label htmlFor="telefone">Telefone</Label><Input id="telefone" name="telefone" autoComplete="tel" /></div>
        <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" name="email" type="email" autoComplete="email" /></div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="tema">Tema</Label>
        <select id="tema" name="tema" className="h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm" defaultValue={scheduleTopics[0]}>
          {scheduleTopics.map((topic) => <option key={topic}>{topic}</option>)}
        </select>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="data">Data</Label>
        <Input id="data" name="data" type="date" min={today} />
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium">Horário</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {scheduleSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setHorario(slot)}
              className={cn("cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold", horario === slot ? "border-brand bg-brand text-white" : "border-border")}
              aria-pressed={horario === slot}
            >
              {slot}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="hidden" aria-hidden="true">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {error ? <p className="mt-4 text-sm text-red-600" role="alert">{error}</p> : null}
      {status === "error" ? <p className="mt-4 text-sm text-red-600" role="alert">Não foi possível registrar agora.</p> : null}
      <Button type="submit" className="mt-5" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Reservar conversa"}
      </Button>
    </form>
  );
}
