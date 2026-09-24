import Link from "next/link";

const blocks = [
  {
    id: "desafios",
    eyebrow: "Desafios do SAP",
    title: "O ERP deixa de acompanhar a operação",
    text: "ECC envelhecido, S/4HANA sem dono de processo ou go-live sem critério. O efeito aparece em dado mestre frágil, customização sem suporte e corte sem plano.",
    items: [
      "Código customizado que trava a atualização",
      "Dado mestre tratado no fim do projeto",
      "Interface sem dono no dia do corte",
      "Time interno sem critério de aceite",
    ],
    cta: "Solicitar Diagnóstico Gratuito",
    href: "/contato",
  },
  {
    id: "como-ajudamos",
    eyebrow: "Como ajudamos",
    title: "Consultoria SAP com caminho explícito",
    text: "O diagnóstico separa implantação, migração e rollout. A MERAIT desenha o processo-alvo, a arquitetura e a primeira onda antes de configurar.",
    items: [
      "Assessment do ECC ou do S/4HANA atual",
      "Arquitetura: o que fica no core e o que vai para a BTP",
      "Conversão com teste integrado e janela de corte",
      "Roadmap de ondas, hypercare e passagem para AMS",
    ],
    cta: "Agendar reunião",
    href: "/agendamento",
  },
  {
    id: "metodologia",
    eyebrow: "Metodologia",
    title: "Do diagnóstico ao AMS",
    text: "Cada etapa fecha com uma decisão. O projeto não avança sem critério combinado com o negócio.",
    items: [
      "Diagnóstico do legado e do risco de corte",
      "Desenho do processo-alvo e da localização",
      "Configuração, desenvolvimento e carga",
      "Teste integrado, go-live e hypercare",
    ],
    cta: "Baixar o checklist de migração",
    href: "/materiais/checklist-migracao-s4hana",
  },
  {
    id: "beneficios",
    eyebrow: "Benefícios",
    title: "O que a empresa leva",
    text: "Processo com responsável, dado mestre no escopo e continuidade depois do go-live. O ganho é previsibilidade, sem percentual inventado.",
    items: [
      "Critério de go-live escrito antes do corte",
      "Menos ajuste informal depois da entrada",
      "Time interno preparado para operar",
      "AMS como continuidade, não como chamado solto",
    ],
    cta: "Solicitar Diagnóstico Gratuito",
    href: "/contato",
  },
];

export function S4Landing() {
  return (
    <div className="mt-16 space-y-8">
      <h2 className="text-2xl font-semibold">Serviços de consultoria SAP S/4HANA</h2>
      {blocks.map((block) => (
        <section key={block.id} id={block.id} className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-link">{block.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">{block.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{block.text}</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="rounded-2xl bg-[#f5f7fb] px-4 py-3 text-sm leading-6 text-[#101828] dark:bg-white/5 dark:text-foreground">
                {item}
              </li>
            ))}
          </ul>
          <Link href={block.href} className="mt-6 inline-flex text-sm font-semibold text-link">
            {block.cta}
          </Link>
        </section>
      ))}
    </div>
  );
}
