export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: "Artigos" | "Insights" | "Reforma Tributária" | "SAP BTP" | "SAP S/4HANA" | "Inteligência Artificial" | "Logística";
  date: string;
  readingMinutes: number;
  blocks: Block[];
};

export const blogCategories = [
  "Artigos",
  "Insights",
  "Reforma Tributária",
  "SAP BTP",
  "SAP S/4HANA",
  "Inteligência Artificial",
  "Logística",
] as const;

export const posts: Post[] = [
  {
    slug: "reforma-tributaria-no-sap",
    title: "Reforma Tributária no SAP: o que preparar antes da virada",
    description:
      "IBS, CBS e o impacto em determinação fiscal, cadastros, preço e mensageria no SAP.",
    category: "Reforma Tributária",
    date: "2026-03-12",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "A Reforma Tributária do consumo, inaugurada pela Emenda Constitucional 132/2023 e regulamentada pela Lei Complementar 214/2025, substitui ao longo da transição um conjunto de tributos por IBS e CBS. Para quem opera SAP, o tema não cabe em uma nota fiscal isolada.",
      },
      {
        type: "p",
        text: "Determinação fiscal, dados mestre, procedimento de preço, documentos eletrônicos e obrigações acessórias precisam ser lidos juntos. O calendário oficial avança em etapas. O projeto SAP precisa de um roteiro com a mesma disciplina, alinhado ao jurídico-tributário da empresa.",
      },
      {
        type: "h2",
        text: "Onde o impacto aparece no sistema",
      },
      {
        type: "ul",
        items: [
          "Cadastro de materiais, serviços, clientes e fornecedores usados na determinação.",
          "Procedimentos de preço e condições que hoje carregam PIS, COFINS, ICMS ou ISS.",
          "NF-e e a mensageria que autoriza, rejeita e devolve eventos.",
          "SPEDs e relatórios que a área fiscal usa para fechar o período.",
          "Integrações que replicam imposto para CRM, compras ou parceiros.",
        ],
      },
      {
        type: "h2",
        text: "Como a MERAIT conduz o diagnóstico",
      },
      {
        type: "p",
        text: "O trabalho começa pelo mapa dos cenários fiscais reais da operação, não pelo catálogo genérico de notas SAP. Em seguida vem o confronto com a localização disponível, o gap de processo e um roadmap de configuração, teste e mensageria. A decisão jurídica permanece com os assessores da empresa. A MERAIT traduz essa decisão em desenho executável no SAP.",
      },
      {
        type: "p",
        text: "Empresas que tratam a reforma só como atualização técnica descobrem o problema no primeiro faturamento. Empresas que tratam como programa de processo chegam na virada com cenário testado, dono definido e contingência conhecida.",
      },
    ],
  },
  {
    slug: "sap-btp-camada-de-inovacao",
    title: "SAP BTP como camada de inovação, sem descaracterizar o core",
    description:
      "Quando estender na Business Technology Platform e quando permanecer no S/4HANA.",
    category: "SAP BTP",
    date: "2026-04-02",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "A SAP BTP deixa de ser um anexo técnico quando a empresa precisa integrar, automatizar ou criar uma experiência que o padrão do S/4HANA não deve absorver. O critério é simples: o que é processo de mercado fica no core; o que diferencia a operação pode viver ao lado, com contrato e ciclo de vida.",
      },
      {
        type: "h2",
        text: "Três usos que se pagam primeiro",
      },
      {
        type: "ul",
        items: [
          "Integração com CRM, portais, compras e APIs, com reprocessamento visível.",
          "Extensões side-by-side que mudam com frequência e não podem travar um upgrade.",
          "Automação e aplicações Fiori ou CAP para tarefas de alto volume.",
        ],
      },
      {
        type: "p",
        text: "ABAP, CDS Views, OData e enhancements continuam no jogo quando a regra precisa estar colada na transação. A escolha não é moda de arquitetura. É custo de sustentação daqui a dois anos, quando o próximo pacote SAP chegar.",
      },
      {
        type: "p",
        text: "Um programa de BTP sem dono de produto vira um segundo legado. A MERAIT desenha a extensão junto com o processo, o AMS e o caminho de atualização do S/4HANA.",
      },
    ],
  },
  {
    slug: "s4hana-tres-caminhos",
    title: "S/4HANA: implantação, conversão ou rollout?",
    description:
      "Como escolher o caminho do projeto a partir do legado, do prazo e do template do grupo.",
    category: "SAP S/4HANA",
    date: "2026-05-18",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Há três caminhos recorrentes para chegar ao SAP S/4HANA. Implantação nova, quando o processo-alvo importa mais do que o histórico do sistema. Conversão, quando o ECC é a base e o objetivo é preservar o que funciona com uma transição controlada. Rollout, quando um template já existe e uma nova empresa ou planta precisa entrar no padrão.",
      },
      {
        type: "h2",
        text: "O que realmente decide",
      },
      {
        type: "ul",
        items: [
          "Qualidade do dado mestre e do histórico que alguém ainda consulta.",
          "Volume e risco do código customizado.",
          "Prazo regulatório ou de contrato que não cabe em um redesenho longo.",
          "Necessidade de um template global com localização fiscal e logística.",
        ],
      },
      {
        type: "p",
        text: "Conversão não é atalho automático. Implantação não é sinônimo de processo melhor. Rollout não elimina a exceção local. O diagnóstico da MERAIT explicita o caminho, o que fica fora do escopo e o critério de go-live antes de a equipe começar a configurar.",
      },
    ],
  },
  {
    slug: "ia-aplicada-ao-sap",
    title: "Inteligência Artificial aplicada ao SAP com governança",
    description:
      "Joule, Copilot, RAG e agentes no entorno do ERP, com o humano nos passos críticos.",
    category: "Inteligência Artificial",
    date: "2026-06-09",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Inteligência artificial no contexto SAP funciona quando reduz consulta, triagem e preparação de trabalho. Falha quando tenta substituir o registro do ERP ou decidir sozinha um lançamento fiscal, de estoque ou financeiro.",
      },
      {
        type: "h2",
        text: "Uma arquitetura que cabe na operação",
      },
      {
        type: "p",
        text: "O usuário continua no centro. Microsoft Copilot apoia o trabalho no escritório. O SAP Joule apoia quem está no contexto do sistema. A SAP BTP integra e governa. Modelos como os da OpenAI entram em classificação, resumo e RAG sobre documentos aprovados. CRM e Power BI fecham o ciclo: o dado nasce no processo, a decisão volta para a pessoa.",
      },
      {
        type: "ul",
        items: [
          "Chatbots corporativos para dúvidas de processo e abertura de demanda no AMS.",
          "RAG com citação da política ou do manual oficial.",
          "Agentes com escopo limitado: consultar, sugerir e preparar. Aprovar continua humano.",
          "Automação inteligente na triagem, não no lançamento crítico.",
        ],
      },
      {
        type: "p",
        text: "O risco principal não é a tecnologia. É conectar um modelo a dado sensível sem trilha, ou aceitar uma resposta fiscal sem fonte. O desenho da MERAIT parte do caso de uso, da base autorizada e do que o SAP precisa continuar registrando.",
      },
    ],
  },
  {
    slug: "ams-que-evolui-o-ambiente",
    title: "AMS que evolui o ambiente, em vez de apenas fechar chamado",
    description:
      "Como sustentar SAP com fila única, hypercare e melhoria contínua.",
    category: "Insights",
    date: "2026-07-21",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Application Management Services vira custo opaco quando a meta é só zerar o chamado do dia. O ambiente não melhora, a mesma dúvida volta e a área de negócio perde a confiança no ERP.",
      },
      {
        type: "p",
        text: "Um AMS especializado separa incidente, dúvida e melhoria. Monitora o que pode quebrar o fechamento ou a expedição. Conduz o hypercare com critério de saída. E leva para um rito mensal as melhorias que valem o esforço do período.",
      },
      {
        type: "h2",
        text: "Indicadores que a gestão consegue ler",
      },
      {
        type: "ul",
        items: [
          "Prazo de resposta e de solução por prioridade.",
          "Recorrência do mesmo incidente.",
          "Idade do backlog de melhorias.",
          "Satisfação de quem abriu a demanda.",
        ],
      },
      {
        type: "p",
        text: "Suporte funcional e suporte técnico precisam sentar na mesma fila. Quando cada frente tem o próprio controle, o processo fica no meio. A MERAIT organiza o AMS para a operação enxergar causa, prazo e próximo passo.",
      },
    ],
  },
  {
    slug: "integracao-sap-e-crm",
    title: "Integração SAP e CRM: onde o retrabalho realmente nasce",
    description:
      "Cadastro, pedido, crédito e status. O desenho que evita a planilha entre os sistemas.",
    category: "Artigos",
    date: "2026-08-14",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "O retrabalho entre SAP e CRM quase nunca é um defeito de tela. É ausência de sistema de registro. Cliente, condição comercial, crédito e status do pedido existem nos dois lados, e alguém reconcilia no fim do dia.",
      },
      {
        type: "h2",
        text: "O desenho que reduz a conferência",
      },
      {
        type: "ul",
        items: [
          "SAP como registro de pedido faturável, preço e estoque.",
          "CRM como registro do relacionamento e do pipeline, recebendo status em vez de recriá-lo.",
          "Contrato de API ou mensagem via middleware, com erro reprocessável.",
          "A mesma disciplina para Salesforce, portais de compras como o NIMBI e demais APIs REST.",
        ],
      },
      {
        type: "p",
        text: "Integração sem monitoramento devolve o problema para o fechamento. Por isso o projeto da MERAIT entrega o fluxo, a fila de erro e o procedimento do AMS. O ganho aparece quando o comercial deixa de conferir planilha para saber se o pedido existe.",
      },
    ],
  },
  {
    slug: "logistica-inteligente-no-sap",
    title: "Logística inteligente começa no agendamento, não no pátio lotado",
    description: "Por que fila, doca e integração SAP precisam ser tratados como um único fluxo operacional.",
    category: "Logística",
    date: "2026-05-18",
    readingMinutes: 5,
    blocks: [
      { type: "p", text: "A fila na portaria é o sintoma. A causa costuma ser janela combinada por telefone, planilha e e-mail, sem capacidade real da doca e sem status no SAP." },
      { type: "h2", text: "O que a operação precisa enxergar" },
      { type: "ul", items: ["Janela reservada por tipo de veículo e turno.", "Comunicação automática com transportadora e cliente.", "Status que chega ao pedido, à entrega e ao pátio.", "Indicador de espera antes que a fila vire custo."] },
      { type: "p", text: "A MERAIT trata agendamento, doca e SAP como um produto operacional, não como um relatório depois do fato." },
    ],
  },
  {
    slug: "rfid-no-patio-logistico",
    title: "RFID no pátio: entrada, permanência e saída sem registro manual",
    description: "Como o controle de pátio deixa de depender de apontamento quando a antena registra o veículo.",
    category: "Logística",
    date: "2026-06-02",
    readingMinutes: 5,
    blocks: [
      { type: "p", text: "Check-in feito na mão atrasa a doca e perde o tempo real de permanência. RFID registra entrada, permanência e saída e devolve o fato para a operação." },
      { type: "h2", text: "Onde o ganho aparece" },
      { type: "ul", items: ["Acesso sem fila de cadastro.", "Permanência medida, não estimada.", "Saída conferida com o agendamento.", "Indicador disponível para o AMS e para o SAP."] },
      { type: "p", text: "O RFID Logistics da MERAIT existe para esse ciclo. O agendamento continua sendo a reserva. O RFID confirma o que aconteceu no pátio." },
    ],
  },
  {
    slug: "cte-no-fluxo-sap",
    title: "CT-e no SAP: o transporte não pode ficar fora do documento",
    description: "Por que o conhecimento de transporte precisa nascer junto com a expedição e o financeiro.",
    category: "Artigos",
    date: "2026-06-16",
    readingMinutes: 5,
    blocks: [
      { type: "p", text: "CT-e lançado depois da viagem vira retrabalho fiscal e atraso de frete. O documento precisa acompanhar a carga, não corrigir o passado." },
      { type: "h2", text: "O que a operação precisa fechar" },
      { type: "ul", items: ["Emissão alinhada à expedição.", "Rejeição visível antes do fechamento.", "Status de volta para o pedido e para o transporte.", "AMS preparado para o erro recorrente."] },
      { type: "p", text: "A MERAIT trata CT-e como parte do fluxo SAP e da automação fiscal, junto com NF-e e MDF-e." },
    ],
  },
  {
    slug: "mdfe-e-o-encerramento-da-viagem",
    title: "MDF-e: o manifesto precisa encerrar com a viagem",
    description: "Como o manifesto eletrônico deixa de ser uma pendência depois que o caminhão já saiu.",
    category: "Artigos",
    date: "2026-06-30",
    readingMinutes: 4,
    blocks: [
      { type: "p", text: "MDF-e aberto depois da saída gera contingência e fila no fiscal. O encerramento tem de estar no mesmo fluxo da expedição." },
      { type: "h2", text: "Onde o processo quebra" },
      { type: "ul", items: ["Manifesto sem vínculo com a carga.", "Encerramento manual no fim do dia.", "Evento rejeitado sem dono.", "Transporte e fiscal em sistemas diferentes."] },
      { type: "p", text: "No desenho da MERAIT, o MDF-e acompanha a expedição e o SAP permanece o registro do documento." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00`));
}
