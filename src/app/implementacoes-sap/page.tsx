import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Implementações SAP",
  description:
    "Projetos SAP da arquitetura à estabilização: assessment, blueprint, configuração, ABAP, testes, cutover, go-live, Hypercare e sustentação.",
  path: "/implementacoes-sap",
});

const pillars = [
  {
    title: "Assessment e Blueprint",
    items: [
      "Levantamento do cenário atual",
      "Desenho do cenário futuro",
      "Requisitos",
      "Arquitetura funcional e técnica",
      "Riscos, premissas e dependências",
      "Plano de implantação",
    ],
  },
  {
    title: "Configuração e Desenvolvimento",
    items: [
      "Parametrização SAP",
      "Desenvolvimento ABAP",
      "Interfaces e APIs",
      "Jobs e processamento em background",
      "Monitores e logs",
      "Workflows",
      "Tratamento de erros e reprocessamento",
    ],
  },
  {
    title: "Qualidade e Implantação",
    items: [
      "Testes unitários",
      "Testes integrados",
      "QA",
      "UAT",
      "Plano de cutover",
      "Go/No-Go",
      "Entrada em produção",
    ],
  },
  {
    title: "Estabilização",
    items: [
      "Hypercare",
      "Monitoramento",
      "Tratamento de incidentes",
      "Estabilização",
      "Documentação",
      "Transferência para sustentação",
    ],
  },
];

const projectCases = [
  {
    href: "/cases/implementacao-sap-wm",
    title: "Implementação SAP WM para gestão de armazém",
    text: "Assessment, Business Blueprint e configuração de depósitos, putaway, picking, FIFO, FEFO, inventário, cutover e manuais.",
  },
  {
    href: "/cases/ciclo-fornecedores-sap",
    title: "Automação do ciclo de fornecedores integrado ao SAP",
    text: "Integração SAP ECC e plataforma de fornecedores: criação, atualização, bloqueio, código ERP, testes, cutover e Hypercare.",
  },
  {
    href: "/cases/ecossistema-crm-sap",
    title: "Integração dos processos comerciais entre CRM e SAP",
    text: "Implementação de integração empresarial para clientes, pedidos, faturamento, claims e ordens de venda.",
  },
];

const modernization = [
  "Modernização de programas ABAP",
  "Evolução de monitores",
  "Adequação de layouts",
  "Cálculo e workflow de pricing",
  "Modernização de processos Inbound",
  "Criação de camadas parametrizáveis",
  "Melhoria de logs e rastreabilidade",
  "Redução de impacto sobre aplicações existentes",
];

export default function ImplementacoesSapPage() {
  return (
    <>
      <PageHero
        eyebrow="Implementações e evolução SAP"
        title="Implementações SAP conduzidas da arquitetura à estabilização"
        description="Apoiamos projetos desde o assessment e desenho funcional até configuração, desenvolvimento, testes, cutover, go-live, Hypercare e sustentação."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Implementações SAP", path: "/implementacoes-sap" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Da leitura do cenário à sustentação</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="text-xl font-semibold">{pillar.title}</h3>
              <ul className="mt-4 space-y-2">
                {pillar.items.map((item) => (
                  <li key={item} className="text-sm leading-6 text-muted">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f7fb] dark:bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Cases anonimizados</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            Relatos de escopo executado. Sem nome de empresa, sem depoimento e sem percentual de resultado.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {projectCases.map((item) => (
              <article key={item.href} className="flex flex-col rounded-3xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted">{item.text}</p>
                <Link href={item.href} className="mt-5 text-sm font-semibold text-link">Ler o case</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">Evolução de aplicações SAP sem descartar investimentos existentes</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
          A evolução acontece na aplicação e no processo que já estão em produção. Este trabalho não é um upgrade técnico do SAP.
        </p>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {modernization.map((item) => (
            <li key={item} className="rounded-2xl border border-border px-4 py-3 text-sm leading-6">{item}</li>
          ))}
        </ul>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <article className="rounded-3xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-semibold">Rollouts e atualizações</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
            A MERAIT apoia iniciativas de rollout, atualização e evolução de ambientes SAP com assessment, análise de impacto, localização de processos, desenvolvimento, testes, cutover e estabilização.
          </p>
          <Link href="/contato" className="mt-6 inline-flex h-12 items-center rounded-full bg-brand px-5 text-sm font-semibold text-white">
            Avaliar cenário SAP
          </Link>
        </article>
      </section>
      <CtaBand />
    </>
  );
}
