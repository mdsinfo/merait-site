import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/brand/icon";
import { AiFlow } from "@/components/home/ai-flow";
import { ExperienceMarquee } from "@/components/home/experience-marquee";
import { MotionCard } from "@/components/motion/motion-card";
import { Counter } from "@/components/motion/counter";
import { differentials, methodology, segments, stats, timeline } from "@/lib/company";
import { cases } from "@/lib/cases";
import { formatPostDate, posts } from "@/lib/blog";
import { solutions } from "@/lib/solutions";

export function Differentials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" id="diferenciais">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Diferenciais</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Por que escolher a MERAIT?</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        Atendimento próximo, agilidade, alta especialização e baixa burocracia. Quem decide fala com especialistas seniores.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => (
          <MotionCard key={item.title} delay={index * 0.04} className="h-full">
            <article className="h-full rounded-3xl border border-border bg-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
            </article>
          </MotionCard>
        ))}
      </div>
      <dl className="mt-8 grid gap-4 rounded-3xl bg-ink p-6 text-white sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-white/65">{item.label}</dt>
            <dd className="mt-2 text-4xl font-semibold tracking-tight">
              <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function About() {
  return (
    <section className="bg-card" id="quem-somos">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Quem somos</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Especialistas seniores no processo e no SAP</h2>
          <p className="mt-5 text-base leading-7 text-muted">
            A MERAIT atende empresas de médio e grande porte que precisam implantar, integrar ou sustentar o SAP sem abrir mão de agilidade. O time reúne funcional, técnico, fiscal e integração.
          </p>
          <p className="mt-4 text-base leading-7 text-muted">
            O trabalho começa no processo que gera receita, custo ou risco fiscal. A tecnologia entra para registrar, conectar e sustentar esse processo.
          </p>
          <Link href="/quem-somos" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link">
            Conheça a MERAIT <ArrowRight className="size-4" />
          </Link>
        </div>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {timeline.map((item, index) => (
            <MotionCard as="li" key={item.title} delay={index * 0.05} className="relative">
              <span className="absolute -left-[1.85rem] top-1 size-3 rounded-full bg-brand ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
            </MotionCard>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Solutions() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" id="solucoes">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Soluções</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Onde o SAP pesa no resultado</h2>
        </div>
        <Link href="/solucoes" className="text-sm font-semibold text-link">Ver todas as soluções</Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item, index) => (
          <MotionCard key={item.slug} delay={index * 0.04}>
            <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#101828] text-lime">
                <Icon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{item.navLabel}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.description}</p>
              <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link">
                Explorar <ArrowRight className="size-4" />
              </Link>
            </article>
          </MotionCard>
        ))}
        <MotionCard delay={0.2}>
          <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#101828] text-lime">
              <Icon name="receipt" className="size-5" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Fiscal e Tributário</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted">
              NF-e, CT-e, MDF-e, SPED, mensageria fiscal e preparação para a Reforma Tributária dentro do SAP.
            </p>
            <Link href="/solucoes#fiscal" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link">
              Explorar <ArrowRight className="size-4" />
            </Link>
          </article>
        </MotionCard>
      </div>
    </section>
  );
}

export function Products() {
  const items = [
    {
      id: "inbound",
      label: "Recebimento fiscal",
      title: "Inbound",
      lead: "Três módulos completos para NF-e, NFS-e e CT-e.",
      text: "Uma solução completa para o recebimento de documentos fiscais, organizada em três módulos que atendem aos diferentes tipos de documento da sua operação.",
      modules: ["NF-e", "NFS-e", "CT-e"],
      noteTitle: "Flexibilidade para os processos do seu negócio",
      note: "Além de atender aos fluxos padrão do SAP, o Inbound permite customizar os processos de entrada com base em pedido de compra, remessa ou ordem de venda.",
      href: "/contato",
      cta: "Conhecer o Inbound",
    },
    {
      id: "fastnfe",
      label: "Escrituração fiscal",
      title: "FastNFe",
      lead: "Mais agilidade na escrituração. Menos trabalho manual.",
      text: "O FastNFe automatiza a escrituração de notas fiscais, substituindo atividades manuais e agilizando a execução do processo.",
      modules: ["Automação", "Agilidade", "Produtividade"],
      noteTitle: "Mais tempo para analisar e acompanhar",
      note: "Com menos tarefas repetitivas, a equipe ganha tempo para análise e acompanhamento das operações fiscais.",
      href: "/contato",
      cta: "Conhecer o FastNFe",
    },
  ];

  return (
    <section className="bg-[#f5f7fb]" id="produtos">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Produtos MERAIT</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Tecnologia aplicada à operação</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Recebimento fiscal, escrituração e gestão logística. Três produtos proprietários, cada um com um processo claro.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <article key={item.id} id={item.id} className="flex scroll-mt-24 flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-link">{item.label}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-lg font-medium">{item.lead}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.modules.map((module) => (
                  <li key={module} className="rounded-md bg-brand/10 px-3 py-2 text-sm font-semibold text-brand">{module}</li>
                ))}
              </ul>
              <h4 className="mt-6 text-lg font-semibold">{item.noteTitle}</h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.note}</p>
              <Link href={item.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-link">
                {item.cta} <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
        <article className="mt-4 flex flex-col gap-4 rounded-3xl bg-brand p-6 text-white md:flex-row md:items-end md:justify-between md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">Gestão logística</p>
            <h3 className="mt-2 text-2xl font-semibold">MERAIT Logistics Scheduling Platform</h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
              Agendamento de cargas, docas, RFID e integração SAP em um único produto. Dock &amp; Yard Management para recebimento e expedição.
            </p>
          </div>
          <Link href="/produto-agendamento-cargas" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-lime">
            Ver a plataforma <ArrowRight className="size-4" />
          </Link>
        </article>
      </div>
    </section>
  );
}

export function Clients() {
  return <ExperienceMarquee />;
}

export function Cases() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" id="cases">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Cases de sucesso</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">O que muda quando o SAP deixa de ser ilha</h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {cases.map((item, index) => (
          <MotionCard key={item.slug} delay={index * 0.05}>
            <article className="flex h-full flex-col rounded-3xl bg-ink p-6 text-white">
              <p className="text-xs uppercase tracking-[0.16em] text-white/60">{item.sector}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-xl font-semibold text-lime">{item.result}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm leading-6 text-white/75">
                {item.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
              <Link href={`/cases/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Ler o case <ArrowRight className="size-4" />
              </Link>
            </article>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}

export function Segments() {
  return (
    <section className="bg-card" id="segmentos">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Segmentos</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Leitura de operação, não um pacote único</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((item, index) => (
            <MotionCard key={item.title} delay={index * 0.03} className="h-full">
              <article className="h-full rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur-sm">
                <Icon name={item.icon} className="size-5 text-brand" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" id="metodologia">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Metodologia</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">Do diagnóstico ao AMS, com entrega em cada etapa</h2>
      <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {methodology.map((item, index) => (
          <MotionCard as="li" key={item.title} delay={index * 0.04} className="h-full rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-link">{item.step}</span>
                {index < methodology.length - 1 ? <span className="h-px flex-1 bg-[linear-gradient(90deg,#22D3EE,#2D2E91,#7BEA23)]" /> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
          </MotionCard>
        ))}
      </ol>
    </section>
  );
}

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-[#070B16] text-white" id="ia">
      <div className="particle-field absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">IA e inovação</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">IA no entorno do SAP, com o ERP como registro</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          O dado nasce no S/4HANA, passa pela BTP e pelos copilotos, e volta como decisão. Lançamento fiscal, financeiro e de estoque segue com aprovação humana.
        </p>
        <AiFlow />
        <Link href="/inteligencia-artificial" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime">
          Ver a arquitetura completa <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28" id="blog">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-link">Blog</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Insights para quem decide o roadmap</h2>
        </div>
        <Link href="/blog" className="hidden text-sm font-semibold text-link sm:inline">Ver todos</Link>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <article key={post.slug} className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-link">{post.category}</p>
            <h3 className="mt-3 text-lg font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-link">{post.title}</Link>
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">{post.description}</p>
            <p className="mt-4 text-xs text-muted">{formatPostDate(post.date)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
