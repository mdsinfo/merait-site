"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { whatsappHref } from "@/lib/site";

const replies: { test: RegExp; text: string }[] = [
  {
    test: /ams|suporte|sustent/i,
    text: "O AMS cobre suporte funcional, técnico, monitoramento e hypercare. O próximo passo é um diagnóstico do ambiente atual.",
  },
  {
    test: /s\/?4|s4|implanta|convers|rollout/i,
    text: "Em S/4HANA atuamos em implantação, conversão, rollout, melhoria e template global. O diagnóstico define o caminho antes do projeto.",
  },
  {
    test: /integra|crm|salesforce|nimbi|api/i,
    text: "Integramos o SAP a CRM, NIMBI, Salesforce, APIs REST e middleware, com sistema de registro e fila de erro.",
  },
  {
    test: /ia|intelig|joule|copilot|agente|openai/i,
    text: "A IA entra como copiloto, RAG ou agente com escopo limitado. O SAP continua sendo o sistema de registro e a aprovação crítica permanece humana.",
  },
  {
    test: /fiscal|reforma|nf-?e|sped/i,
    text: "No fiscal, o trabalho cobre NF-e, CT-e, MDF-e, SPED, mensageria e o impacto da Reforma Tributária no SAP, junto com o assessor da empresa.",
  },
];

type Message = { from: "bot" | "user"; text: string };

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Posso indicar a frente certa — S/4HANA, AMS, integração, fiscal ou IA — e abrir um diagnóstico com um especialista sênior.",
    },
  ]);

  const suggestions = useMemo(
    () => ["Quero um diagnóstico SAP", "Como funciona o AMS?", "Integração com CRM", "Inteligência Artificial no SAP"],
    [],
  );

  function answer(text: string) {
    const found = replies.find((item) => item.test.test(text));
    const reply =
      found?.text ??
      "Posso encaminhar essa conversa para um especialista. Use o WhatsApp ou deixe uma mensagem na página de contato.";
    setMessages((current) => [...current, { from: "user", text }, { from: "bot", text: reply }]);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    answer(text);
  }

  return (
    <div className="fixed bottom-20 right-5 z-30">
      {open ? (
        <section className="mb-3 flex w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-2xl" aria-label="Chat online">
          <header className="flex items-center justify-between bg-ink px-4 py-3 text-white">
            <div>
              <p className="text-sm font-semibold">Chat MERAIT</p>
              <p className="text-xs text-white/70">Orientação inicial</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="inline-flex size-8 items-center justify-center rounded-full hover:bg-white/10" aria-label="Fechar chat">
              <X className="size-4" />
            </button>
          </header>
          <div className="flex max-h-80 flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p
                key={`${message.from}-${index}`}
                className={message.from === "bot" ? "rounded-2xl bg-foreground/5 px-3 py-2 text-sm leading-6" : "self-end rounded-2xl bg-brand px-3 py-2 text-sm leading-6 text-white"}
              >
                {message.text}
              </p>
            ))}
            <div className="flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button key={item} type="button" onClick={() => answer(item)} className="cursor-pointer rounded-full border border-border px-3 py-1 text-xs font-medium hover:border-brand/40">
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 border-t border-border px-4 py-3 text-xs font-semibold">
            <Link href="/contato" className="text-link">Falar com especialista</Link>
            <a href={whatsappHref("Olá, vim pelo chat do site MERAIT.")} target="_blank" rel="noreferrer" className="text-link">WhatsApp</a>
            <Link href="/agendamento" className="text-link">Agendar</Link>
          </div>
          <form onSubmit={submit} className="flex gap-2 border-t border-border p-3">
            <label className="sr-only" htmlFor="chat-message">Mensagem</label>
            <input
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escreva sua dúvida"
              className="h-10 flex-1 rounded-full border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            />
            <button type="submit" className="cursor-pointer rounded-full bg-brand px-4 text-sm font-semibold text-white">
              Enviar
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
        aria-expanded={open}
      >
        <MessageCircle className="size-4" />
        Chat
      </button>
    </div>
  );
}
