export type Offering = { title: string; text: string };

export type Solution = {
  slug: string;
  href: string;
  icon: string;
  navLabel: string;
  metaTitle: string;
  eyebrow: string;
  title: string;
  description: string;
  offerings: Offering[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "sap-s4hana",
    href: "/sap-s4hana",
    icon: "layers",
    navLabel: "SAP S/4HANA",
    metaTitle: "Consultoria SAP S/4HANA",
    eyebrow: "Projetos SAP Enterprise",
    title: "Consultoria SAP S/4HANA com critério de go-live",
    description:
      "Implantação, conversão, rollout e melhoria de SAP S/4HANA para empresas que precisam evoluir o ERP com dono de processo, dado mestre e teste integrado.",
    offerings: [
      {
        title: "Implantações",
        text: "Desenho do processo-alvo, configuração, carga de dados, testes integrados e preparação da operação para o primeiro ciclo real.",
      },
      {
        title: "Rollouts",
        text: "Replicação controlada do template para novas empresas, plantas ou países, com localização e exceções explícitas.",
      },
      {
        title: "Conversões",
        text: "Transição do ECC para o S/4HANA com análise de código customizado, qualidade de dados e janela de corte.",
      },
      {
        title: "Melhorias",
        text: "Evolução de processos já em produção quando o ganho está no ciclo, no controle ou na experiência do usuário.",
      },
      {
        title: "Template Global",
        text: "Padrão de processos para grupos com mais de uma operação, preservando o que precisa ser local.",
      },
    ],
    outcomes: [
      "Processos desenhados com dono, indicador e critério de aceite",
      "Menor dependência de ajuste informal depois do go-live",
      "Dados mestres tratados como parte do projeto, não como etapa final",
      "Time interno preparado para operar e sustentar",
    ],
    faqs: [
      {
        q: "Implantação, conversão ou rollout: como a MERAIT escolhe o caminho?",
        a: "A decisão considera a qualidade do legado, o volume de desenvolvimentos, o prazo e a necessidade de padronizar mais de uma empresa. O diagnóstico explicita o caminho e o que fica de fora.",
      },
      {
        q: "O template global elimina as exceções locais?",
        a: "Não é o objetivo. O template cobre o processo comum do grupo. Fiscal, logística e particularidades de planta entram como localização governada, não como customização solta.",
      },
      {
        q: "A MERAIT permanece depois do go-live?",
        a: "Sim. Hypercare e AMS fazem parte da jornada para estabilizar o ambiente e transformar demanda recorrente em melhoria.",
      },
    ],
  },
  {
    slug: "ams-sap",
    href: "/ams-sap",
    icon: "headset",
    navLabel: "AMS SAP",
    metaTitle: "AMS SAP",
    eyebrow: "Application Management Services",
    title: "AMS SAP para sustentar e evoluir o ambiente",
    description:
      "AMS SAP com suporte funcional e técnico, hypercare, monitoramento e gestão de demandas para o ambiente evoluir depois do projeto.",
    offerings: [
      {
        title: "Suporte Funcional",
        text: "Atendimento às áreas de negócio em processos SAP, com análise de causa e orientação de uso.",
      },
      {
        title: "Suporte Técnico",
        text: "Incidentes de desenvolvimento, performance, jobs, interfaces e correções no código suportado.",
      },
      {
        title: "Monitoramento",
        text: "Acompanhamento de filas, interfaces e rotinas críticas antes que o impacto chegue ao usuário.",
      },
      {
        title: "Hypercare",
        text: "Estabilização assistida após o go-live, com critério claro para encerrar a fase e entrar na rotina de AMS.",
      },
      {
        title: "Gestão de Demandas",
        text: "Fila única para incidente, dúvida e melhoria, com prioridade, esforço e retorno esperado.",
      },
    ],
    outcomes: [
      "Chamados com causa, não apenas com contorno",
      "Backlog visível para a liderança",
      "Hypercare com saída planejada",
      "Melhorias pequenas entrando no ritmo do AMS",
    ],
    faqs: [
      {
        q: "AMS substitui o time interno?",
        a: "O modelo complementa o time do cliente. O conhecimento fica documentado e as decisões de negócio permanecem com os donos do processo.",
      },
      {
        q: "Como a prioridade é definida?",
        a: "Por impacto na operação, prazo regulatório e esforço. A fila é compartilhada para que incidente e melhoria não concorram no escuro.",
      },
      {
        q: "Quais indicadores acompanham o contrato?",
        a: "Prazo de atendimento, recorrência, idade do backlog, disponibilidade das rotinas críticas e satisfação de quem abre a demanda.",
      },
    ],
  },
  {
    slug: "integracoes",
    href: "/integracoes",
    icon: "workflow",
    navLabel: "Integrações",
    metaTitle: "Integração SAP",
    eyebrow: "Integrações corporativas",
    title: "Integração SAP com CRM, portais e APIs",
    description:
      "Integração SAP com CRM, portais de fornecedores, Salesforce, APIs REST e middleware, com sistema de registro e fila de erro visível.",
    offerings: [
      {
        title: "SAP x CRM",
        text: "Cliente, pedido, crédito e status circulando sem redigitação entre o comercial e o ERP.",
      },
      {
        title: "SAP x NIMBI",
        text: "Compras e fornecedores conectados ao processo de sourcing, com retorno do pedido e do recebimento.",
      },
      {
        title: "SAP x Salesforce",
        text: "Conta, oportunidade e pedido alinhados ao mestre do SAP, com regra clara de quem é o sistema de registro.",
      },
      {
        title: "SAP x APIs REST",
        text: "Exposição e consumo de APIs para portais, parceiros e produtos digitais, com contrato e monitoramento.",
      },
      {
        title: "SAP x Middleware",
        text: "Orquestração por Integration Suite ou middleware equivalente, com reprocessamento e trilha de erro.",
      },
    ],
    outcomes: [
      "Menos retrabalho entre comercial, compras e ERP",
      "Dono definido para cada dado mestre",
      "Erros de interface visíveis antes do fechamento",
      "Contrato de API versionado e monitorado",
    ],
    faqs: [
      {
        q: "Toda integração precisa de middleware?",
        a: "Não. APIs simples e bem governadas podem ser diretas. O middleware entra quando há orquestração, volume, transformação ou vários consumidores.",
      },
      {
        q: "Quem é o sistema de registro?",
        a: "Essa decisão vem antes do desenvolvimento. Cliente, preço, estoque e pedido precisam de uma fonte oficial para evitar conflito.",
      },
      {
        q: "A MERAIT atua só no lado SAP?",
        a: "O desenho cobre os dois lados do fluxo. A implementação SAP é nossa frente principal, em conjunto com o time do sistema parceiro.",
      },
    ],
  },
  {
    slug: "sap-btp",
    href: "/sap-btp",
    icon: "cloud",
    navLabel: "SAP BTP",
    metaTitle: "SAP BTP, ABAP e Fiori",
    eyebrow: "SAP Business Technology Platform",
    title: "SAP BTP, ABAP e Fiori sem descaracterizar o core",
    description:
      "SAP BTP, ABAP, Fiori, CAP e OData para estender o S/4HANA com ciclo de vida próprio e o core atualizável.",
    offerings: [
      {
        title: "SAP BTP",
        text: "Integration Suite, extensões side-by-side e automações quando o processo precisa sair do padrão sem descaracterizar o S/4HANA.",
      },
      {
        title: "ABAP",
        text: "Correções, melhorias e APIs no stack ABAP com critério de suporte e de atualização.",
      },
      {
        title: "Fiori",
        text: "Aplicações e extensões de experiência do usuário para tarefas frequentes, com foco em adoção.",
      },
      {
        title: "CAP e CDS Views",
        text: "Serviços e modelos de dados para produtos e integrações que consomem o ERP com contrato estável.",
      },
      {
        title: "OData e Enhancements",
        text: "Exposição de serviços e pontos de extensão controlados, com rastreio do que é padrão e do que é específico.",
      },
    ],
    outcomes: [
      "Core mais limpo e atualizável",
      "Extensões com dono e ambiente de ciclo de vida",
      "Interfaces com contrato, não com acesso direto informal",
      "Experiência Fiori onde o ganho de adoção é concreto",
    ],
    faqs: [
      {
        q: "Quando a extensão deve ficar na BTP?",
        a: "Quando o processo é diferenciador, conversa com outros sistemas ou mudaria com frequência dentro do core. O que é padrão SAP permanece no S/4HANA.",
      },
      {
        q: "ABAP ainda faz parte da estratégia?",
        a: "Sim, quando a regra precisa estar perto da transação e do dado. A escolha entre ABAP, Fiori e CAP depende do ciclo de vida, não da preferência da equipe.",
      },
      {
        q: "Enhancement é sempre a última opção?",
        a: "É uma opção governada. Usamos quando o ponto de extensão oficial resolve o processo com menor risco de atualização do que uma cópia de padrão.",
      },
    ],
  },
  {
    slug: "inteligencia-artificial",
    href: "/inteligencia-artificial",
    icon: "brain",
    navLabel: "Inteligência Artificial",
    metaTitle: "Inteligência Artificial para SAP",
    eyebrow: "IA aplicada ao ERP",
    title: "Inteligência artificial aplicada ao SAP",
    description:
      "Copilot Studio, OpenAI, SAP Joule, RAG e agentes no entorno do SAP. A IA prepara. A pessoa aprova. O S/4HANA permanece o sistema de registro.",
    offerings: [
      {
        title: "Copilot Studio",
        text: "Copilotos de processo para tirar dúvida operacional, consultar política e acionar fluxos aprovados.",
      },
      {
        title: "SAP Joule",
        text: "Assistente no contexto SAP para quem já trabalha dentro do sistema e precisa de resposta situada.",
      },
      {
        title: "OpenAI",
        text: "Modelos aplicados a resumo, classificação e geração assistida, com dado corporativo sob controle.",
      },
      {
        title: "Chatbots Corporativos",
        text: "Canais de atendimento interno para AMS, compras e dúvidas de processo, integrados à base oficial.",
      },
      {
        title: "Automação Inteligente",
        text: "Leitura, classificação e encaminhamento de demandas repetitivas antes da etapa humana de decisão.",
      },
      {
        title: "RAG",
        text: "Respostas fundamentadas em documentos aprovados, manuais e políticas, com citação da fonte.",
      },
      {
        title: "Agentes IA",
        text: "Agentes com escopo limitado para consultar, sugerir e abrir demanda. Aprovação humana permanece nos passos críticos.",
      },
    ],
    outcomes: [
      "Menos tempo em triagem e consulta repetida",
      "Respostas presas à base oficial da empresa",
      "Trilha do que a IA sugeriu e do que a pessoa aprovou",
      "SAP permanece como sistema de registro",
    ],
    faqs: [
      {
        q: "A IA altera pedido, nota fiscal ou lançamento sozinha?",
        a: "Nos desenhos da MERAIT, a IA sugere e prepara. Lançamentos fiscais, financeiros e de estoque seguem com aprovação humana e com o SAP como registro.",
      },
      {
        q: "Qual a diferença entre chatbot, RAG e agente?",
        a: "O chatbot conversa. O RAG responde com base em documentos autorizados. O agente executa um conjunto limitado de ações, sempre com escopo e trilha.",
      },
      {
        q: "Por onde começar?",
        a: "Por um processo com volume, regra conhecida e fonte de conhecimento confiável. O diagnóstico separa o caso de uso do experimento sem dono.",
      },
    ],
  },
];

export const fiscalOffering: Offering[] = [
  {
    title: "NF-e",
    text: "Emissão, eventos e tratamento de rejeição no fluxo de faturamento, com monitoramento da mensageria.",
  },
  {
    title: "CT-e",
    text: "Documentos de transporte alinhados à operação logística e ao financeiro.",
  },
  {
    title: "MDF-e",
    text: "Manifesto integrado à expedição e ao encerramento da viagem.",
  },
  {
    title: "SPED",
    text: "Apoio à geração e à consistência das obrigações, em conjunto com a área fiscal do cliente.",
  },
  {
    title: "Reforma Tributária",
    text: "Leitura de impacto de IBS e CBS em determinação, preço, cadastro e documentos, com roadmap SAP.",
  },
  {
    title: "Mensageria Fiscal",
    text: "Acompanhamento de autorização, contingência e reprocessamento para a operação não parar no escuro.",
  },
];

export function getSolution(slug: string) {
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) {
    throw new Error(`Solução não encontrada: ${slug}`);
  }
  return solution;
}
