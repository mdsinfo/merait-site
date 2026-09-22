import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/schemas";
import { whatsappHref } from "@/lib/site";

const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 8) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function messageOf(data: ReturnType<typeof leadSchema.parse>) {
  if (data.type === "contato") {
    return `Olá, sou ${data.nome} da ${data.empresa} (${data.porte}). Frente: ${data.frente}. Telefone: ${data.telefone}. ${data.mensagem}`;
  }
  if (data.type === "agendamento") {
    return `Olá, sou ${data.nome} da ${data.empresa}. Quero agendar ${data.tema} em ${data.data} às ${data.horario}.`;
  }
  return `Olá, sou ${data.nome} da ${data.empresa}. Quero o material: ${data.material}.`;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, error: "Muitas tentativas. Aguarde um minuto." }, { status: 429 });
  }

  const body: unknown = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Dados inválidos." }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true, forwarded: false, whatsapp: whatsappHref("Olá, quero falar com a MERAIT.") });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  let forwarded = false;
  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...parsed.data, website: undefined, receivedAt: new Date().toISOString() }),
    }).catch(() => null);
    forwarded = Boolean(response?.ok);
  }

  return NextResponse.json({
    ok: true,
    forwarded,
    whatsapp: whatsappHref(messageOf(parsed.data)),
  });
}
