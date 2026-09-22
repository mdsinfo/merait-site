import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Counter } from "@/components/motion/counter";

const problems = [
  "Filas de caminhões",
  "Falta de previsibilidade",
  "Conflitos de doca",
  "Perda de produtividade",
  "Controles manuais em planilhas",
  "Comunicação descentralizada",
];

const features = [
  "Agendamento de cargas",
  "Reserva automática de docas",
  "Portal para transportadoras",
  "Portal para clientes",
  "Controle de veículos",
  "Controle de motoristas",
  "Gestão de capacidade operacional",
  "Configuração por tipo de veículo",
  "Configuração por transportadora",
  "Configuração por unidade",
  "SLA operacional",
  "Workflow de aprovação",
  "Dashboard em tempo real",
  "Fila operacional",
  "Gestão de ocupação",
  "Histórico operacional",
  "Check-in e Check-out",
  "Integração SAP",
  "Integração RFID",
  "Integração via API",
];

const parameters = [
  "Quantidade de docas",
  "Capacidade diária",
  "Turnos",
  "Tempo médio por veículo",
  "Tempo médio por operação",
  "Restrições operacionais",
];

const vehicles = ["Carreta", "Bitrem", "Rodotrem", "Truck", "Toco", "VUC", "Veículo leve"];
const vehicleParams = ["Tempo médio", "Capacidade", "Prioridade", "Regras operacionais"];

const mailSteps = [
  "Agendamento realizado",
  "Envio de e-mail para cliente",
  "Envio de e-mail para transportadora",
  "Envio para operação logística",
  "Lembretes automáticos",
  "Atualizações em tempo real",
];

const sapTargets = ["SAP ECC", "SAP S/4HANA", "SAP EWM", "SAP TM", "SAP Yard Logistics"];
const sapObjects = ["Ordens de carga", "Entregas", "Transportadoras", "Clientes", "Materiais", "Centros", "Docas", "Status operacionais"];

const kpis = [
  { label: "Agendamentos do dia", value: 48 },
  { label: "Cargas recebidas", value: 32 },
  { label: "Tempo médio de espera", value: 18, suffix: " min" },
  { label: "Tempo médio descarga", value: 42, suffix: " min" },
  { label: "Taxa de ocupação", value: 78, suffix: "%" },
  { label: "Pontualidade", value: 94, suffix: "%" },
  { label: "Produtividade", value: 6, suffix: " cargas/h" },
  { label: "Capacidade utilizada", value: 80, suffix: "%" },
];

const docks = [
  { name: "Doca 01 • Recebimento", status: "Operação em andamento" },
  { name: "Doca 02 • Expedição", status: "Janela reservada" },
  { name: "Doca 03 • Recebimento", status: "Disponível para agendamento" },
];

const benefits = [
  "Redução de filas",
  "Aumento de produtividade",
  "Mais previsibilidade",
  "Menor tempo de espera",
  "Melhor experiência para transportadoras",
  "Maior controle operacional",
  "Maior rastreabilidade",
  "Integração total com SAP",
];

const uses = ["Indústria", "Centros de Distribuição", "Operadores Logísticos", "Transportadoras", "Agronegócio", "Mineração", "Manufatura", "Varejo"];

function Tag({ children, light = false }: { children: string; light?: boolean }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${light ? "text-lime" : "text-link"}`}>{children}</p>;
}

export function LogisticsPlatform() {
  return (
    <article>
      <section className="bg-[radial-gradient(ellipse_at_90%_20%,#2D2E91,#0a1027_70%)] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-40">
          <Tag light>Produto proprietário MERAIT</Tag>
          <p className="mt-6 font-medium text-cyan">MERAIT Logistics Scheduling Platform</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
            Transforme sua operação logística com <em className="text-lime not-italic">agendamento inteligente de cargas</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
            Automatize todo o processo de recebimento e expedição, eliminando controles manuais e aumentando a eficiência operacional através de uma plataforma integrada ao SAP.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contato" className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink">
              Solicitar Demonstração <ArrowRight className="size-4" />
            </Link>
            <Link href="/agendamento" className="inline-flex h-12 items-center rounded-full border border-white/30 px-5 text-sm font-semibold">
              Agendar Apresentação
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold tracking-[0.16em] text-white/70">
            {["Agendamento", "Dock & Yard", "RFID", "SAP"].map((item) => <li key={item}>{item.toUpperCase()}</li>)}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Tag>01 / Visão do produto</Tag>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Uma plataforma completa para gestão de agendamento logístico</h2>
        <div className="mt-8 grid gap-8 text-base leading-8 text-muted md:grid-cols-2">
          <p>A solução MERAIT permite controlar toda a operação de recebimento e expedição de cargas através de agendamento inteligente de veículos, reservas automáticas de janelas operacionais e comunicação integrada com clientes, transportadoras e operadores logísticos.</p>
          <p>A plataforma foi projetada para integrar-se ao SAP e demais sistemas corporativos, proporcionando visibilidade completa da operação logística.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <Tag>02 / Desafios da operação</Tag>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Menos gargalos. Mais fluidez.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <article key={item} className="rounded-2xl border border-border p-6">
              <p className="text-sm font-semibold text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 bg-[#f5f7fb] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Tag>03 / Recursos</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Principais funcionalidades</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-4 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-emerald-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Tag>04 / Gestão de janelas</Tag>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Reserva inteligente de capacidade logística</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">Configure os parâmetros da operação. Com essas informações, o sistema realiza automaticamente a reserva das janelas operacionais disponíveis.</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {parameters.map((item) => (
            <li key={item} className="border-l-[3px] border-brand bg-[#f5f7fb] px-5 py-5 text-sm text-[#101828] dark:bg-white/5 dark:text-foreground">{item}</li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-ink px-6 py-8 text-white">
          {["Capacidade e regras", "Disponibilidade", "Reserva da janela"].map((step, index) => (
            <span key={step} className="flex items-center gap-4 text-sm font-medium">
              {index > 0 ? <span className="text-lime">→</span> : null}
              {step}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <Tag>05 / Configuração de veículos</Tag>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Cada veículo, uma regra operacional.</h2>
        <div className="mt-8 grid overflow-hidden rounded-3xl border border-border lg:grid-cols-[0.8fr_1.2fr]">
          <ul className="flex flex-wrap content-center gap-2 bg-brand p-8">
            {vehicles.map((item) => (
              <li key={item} className="rounded-lg border border-white/30 bg-white/10 px-4 py-3 text-sm text-white">{item}</li>
            ))}
          </ul>
          <div className="p-8">
            <h3 className="text-2xl font-semibold">Parametrização por tipo</h3>
            <p className="mt-3 text-sm leading-6 text-muted">Tempo médio, capacidade, prioridade e regras operacionais podem ser definidos de forma independente para cada tipo de veículo.</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {vehicleParams.map((item) => (
                <li key={item} className="rounded-lg bg-[#f1f4f9] px-4 py-3 text-sm text-[#101828] dark:bg-white/5 dark:text-foreground">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Tag>06 / Comunicação</Tag>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Comunicação automatizada com todos os envolvidos</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mailSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-border bg-card p-6 text-sm leading-6">
                <span className="block text-xl font-semibold text-brand">{String(index + 1).padStart(2, "0")} ↓</span>
                <span className="mt-3 block">{step}</span>
              </li>
            ))}
          </ol>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["E-mail customizável", "Templates personalizados", "Notificações automáticas", "Alertas operacionais"].map((item) => (
              <li key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Tag>07 / RFID</Tag>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Automação com RFID</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">Permite controlar automaticamente a entrada, permanência e saída de veículos utilizando antenas RFID integradas ao processo logístico.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-ink px-6 py-8 text-white">
          {["Entrada", "Permanência", "Saída"].map((step, index) => (
            <span key={step} className="flex items-center gap-4 text-sm font-medium">
              {index > 0 ? <span className="text-lime">→</span> : null}
              {step}
            </span>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {["Eliminação de registros manuais", "Rastreabilidade", "Controle de permanência", "Controle de acesso", "Indicadores operacionais"].map((item) => (
            <li key={item} className="rounded-full border border-border px-4 py-2 text-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Tag light>08 / Ecossistema conectado</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Integração nativa com SAP</h2>
          <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-8">
            <div className="flex flex-col items-center gap-4">
              <span className="rounded-lg border border-cyan bg-brand px-6 py-4 text-sm">Portal</span>
              <span className="text-lime">↓</span>
              <strong className="rounded-lg border border-cyan bg-brand px-6 py-4">MERAIT Platform</strong>
              <span className="text-lime">↓</span>
            </div>
            <ul className="mt-4 flex flex-wrap justify-center gap-3">
              {sapTargets.map((item) => (
                <li key={item} className="rounded-lg border border-white/25 bg-white/5 px-4 py-3 text-sm">{item}</li>
              ))}
            </ul>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-white/70">Conexões conforme a arquitetura e os módulos do cliente. Os sistemas não precisam operar em sequência.</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {sapObjects.map((item) => (
              <li key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Tag>09 / Dashboard executivo</Tag>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Visibilidade para decidir melhor.</h2>
        <div className="mt-8 rounded-3xl border border-border bg-[#f4f6fb] p-4 shadow-[0_20px_55px_rgba(32,38,80,0.07)] dark:bg-white/[0.04] md:p-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-muted">OPERAÇÃO LOGÍSTICA</p>
              <h3 className="mt-1 text-2xl font-semibold">Visão executiva</h3>
            </div>
            <p className="text-xs font-semibold tracking-wide text-muted">DEMONSTRAÇÃO · DADOS ILUSTRATIVOS</p>
          </div>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((item) => (
              <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="mt-3 text-3xl font-semibold tracking-tight text-brand">
                  <Counter value={item.value} suffix={item.suffix} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {docks.map((dock) => (
              <div key={dock.name} className="rounded-xl bg-card p-4">
                <p className="text-sm font-semibold">{dock.name}</p>
                <div className="mt-3 flex gap-1">
                  {["08:00", "09:00", "10:00", "11:00"].map((slot, index) => (
                    <span key={slot} className={`flex-1 rounded px-1 py-3 text-center text-xs ${index === 1 ? "bg-lime text-ink" : "bg-[#e8edfb] text-brand dark:bg-white/10 dark:text-foreground"}`}>{slot}</span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted">{dock.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fb] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Tag>10 / Benefícios</Tag>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Controle ponta a ponta da operação</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted">Benefícios esperados. Os ganhos dependem do cenário, da adoção e das integrações implementadas.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <article key={item} className="rounded-xl border-t-[3px] border-brand bg-card p-6">
                <p className="text-4xl font-semibold text-brand"><Counter value={index + 1} /></p>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <Tag>11 / Casos de uso</Tag>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Uma plataforma para diferentes operações.</h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {uses.map((item) => (
            <li key={item} className="rounded-full border border-border px-4 py-2 text-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <Tag light>12 / Diferencial MERAIT</Tag>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Muito mais que um sistema de agendamento</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
            A solução MERAIT combina agendamento logístico, gestão de docas, RFID, automação de comunicação e integração SAP em uma única plataforma, proporcionando controle ponta a ponta da operação logística.
          </p>
        </div>
      </section>

      <section className="bg-brand px-5 py-20 text-center text-white">
        <Tag light>Vamos conversar</Tag>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">Pronto para transformar sua operação logística?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">Solicite uma demonstração e descubra como a MERAIT pode digitalizar toda a gestão de recebimento e expedição da sua empresa.</p>
        <Link href="/contato" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-ink">
          Solicitar Demonstração <ArrowRight className="size-4" />
        </Link>
      </section>
    </article>
  );
}
