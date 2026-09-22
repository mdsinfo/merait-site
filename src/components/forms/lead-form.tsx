"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { contactSchema } from "@/lib/schemas";
import { whatsappHref } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const fields = [
  { name: "nome", label: "Nome", autoComplete: "name" },
  { name: "empresa", label: "Empresa", autoComplete: "organization" },
  { name: "telefone", label: "Telefone", autoComplete: "tel" },
  { name: "email", label: "E-mail", autoComplete: "email", type: "email" },
] as const;

export function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [forwarded, setForwarded] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      type: "contato" as const,
      nome: String(form.get("nome") ?? ""),
      empresa: String(form.get("empresa") ?? ""),
      telefone: String(form.get("telefone") ?? ""),
      email: String(form.get("email") ?? ""),
      porte: String(form.get("porte") ?? ""),
      frente: String(form.get("frente") ?? ""),
      mensagem: String(form.get("mensagem") ?? ""),
      website: String(form.get("website") ?? ""),
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await response.json()) as { ok?: boolean; forwarded?: boolean; whatsapp?: string };
      if (!response.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setForwarded(Boolean(data.forwarded));
      setWhatsapp(
        data.whatsapp ||
          whatsappHref(
            `Olá, sou ${parsed.data.nome} da ${parsed.data.empresa} (${parsed.data.porte}). Frente: ${parsed.data.frente}. ${parsed.data.mensagem}`,
          ),
      );
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-border bg-card p-6" role="status">
        <h3 className="text-xl font-semibold">Diagnóstico encaminhado</h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          {forwarded
            ? "Recebemos os dados e encaminhamos para a fila da MERAIT. Se preferir resposta imediata, continue no WhatsApp."
            : "Os dados foram validados. Para retorno imediato, continue a conversa no WhatsApp. O envio automático para o CRM é ativado quando o webhook da empresa está configurado."}
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="lime">
            <a href={whatsapp} target="_blank" rel="noreferrer">Continuar com um especialista</a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/agendamento">Agendar consultoria</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              name={field.name}
              type={"type" in field ? field.type : "text"}
              autoComplete={field.autoComplete}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
            />
            {errors[field.name] ? (
              <p id={`${field.name}-error`} className="text-sm text-red-600">
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="porte">Porte</Label>
          <select id="porte" name="porte" defaultValue="" className="h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-cyan" aria-invalid={Boolean(errors.porte)}>
            <option value="" disabled>Selecione</option>
            <option>Médio porte</option>
            <option>Grande porte</option>
            <option>Grupo com mais de uma operação</option>
          </select>
          {errors.porte ? <p className="text-sm text-red-600">{errors.porte}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="frente">Frente principal</Label>
          <select id="frente" name="frente" defaultValue="" className="h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-cyan" aria-invalid={Boolean(errors.frente)}>
            <option value="" disabled>Selecione</option>
            <option>SAP S/4HANA</option>
            <option>AMS SAP</option>
            <option>Integrações</option>
            <option>Projetos fiscais</option>
            <option>Inteligência artificial</option>
            <option>Ainda estou avaliando</option>
          </select>
          {errors.frente ? <p className="text-sm text-red-600">{errors.frente}</p> : null}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <Label htmlFor="mensagem">O que precisa mudar na operação</Label>
        <Textarea id="mensagem" name="mensagem" aria-invalid={Boolean(errors.mensagem)} aria-describedby={errors.mensagem ? "mensagem-error" : undefined} />
        {errors.mensagem ? <p id="mensagem-error" className="text-sm text-red-600">{errors.mensagem}</p> : null}
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {status === "error" ? <p className="mt-4 text-sm text-red-600" role="alert">Não foi possível enviar agora. Tente de novo ou use o WhatsApp.</p> : null}
      <Button type="submit" className="mt-5" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Agendar diagnóstico executivo"}
      </Button>
    </form>
  );
}
