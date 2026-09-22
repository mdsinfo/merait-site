export type ProjectItem = {
  title: string;
  type: string;
  sector: string;
  text: string;
  href: string;
};

export const projectTypes = ["Todos", "S/4HANA", "Reforma Tributária", "AMS", "Integrações", "IA"] as const;

export const projects: ProjectItem[] = [
  {
    title: "Implantação SAP S/4HANA",
    type: "S/4HANA",
    sector: "Indústria",
    text: "Processo-alvo, dados mestres, testes integrados e go-live com hypercare combinado.",
    href: "/sap-s4hana",
  },
  {
    title: "Conversão ECC para S/4HANA",
    type: "S/4HANA",
    sector: "Manufatura",
    text: "Leitura de custom code, simplificação e janela de corte com plano de retomada.",
    href: "/sap-s4hana",
  },
  {
    title: "Rollout de template global",
    type: "S/4HANA",
    sector: "Grupo empresarial",
    text: "Replicação do padrão para uma nova operação, com localização fiscal e logística.",
    href: "/sap-s4hana",
  },
  {
    title: "Implantação S/4HANA em papel e celulose",
    type: "S/4HANA",
    sector: "Papel e celulose",
    text: "Produção contínua, custo industrial e integração entre planta e backoffice no novo ERP.",
    href: "/sap-s4hana",
  },
  {
    title: "Implantação S/4HANA em mineração",
    type: "S/4HANA",
    sector: "Mineração",
    text: "Suprimentos, manutenção e rastreio de materiais em operação de alta criticidade.",
    href: "/sap-s4hana",
  },
  {
    title: "Implantação S/4HANA no varejo",
    type: "S/4HANA",
    sector: "Varejo",
    text: "Pedido, estoque, preço e faturamento alinhados aos canais de venda.",
    href: "/sap-s4hana",
  },
  {
    title: "Implantação S/4HANA no agronegócio",
    type: "S/4HANA",
    sector: "Agronegócio",
    text: "Contratos, originação, logística e obrigações fiscais da cadeia no S/4HANA.",
    href: "/sap-s4hana",
  },
  {
    title: "Implantação S/4HANA em logística",
    type: "S/4HANA",
    sector: "Logística",
    text: "Transporte, pátio, documentos fiscais e visibilidade da entrega no ERP.",
    href: "/sap-s4hana",
  },
  {
    title: "Roadmap da Reforma Tributária no SAP",
    type: "Reforma Tributária",
    sector: "Fiscal",
    text: "Leitura de IBS e CBS sobre determinação, cadastro, preço e documentos, com sequência de configuração e teste.",
    href: "/cases/projetos-fiscais",
  },
  {
    title: "Determinação fiscal para IBS e CBS",
    type: "Reforma Tributária",
    sector: "Fiscal",
    text: "Cenários reais de faturamento confrontados com a localização, antes da virada do calendário.",
    href: "/cases/projetos-fiscais",
  },
  {
    title: "Mensageria na transição tributária",
    type: "Reforma Tributária",
    sector: "Fiscal",
    text: "NF-e, CT-e e MDF-e com monitoramento, contingência e reprocessamento durante a mudança.",
    href: "/cases/projetos-fiscais",
  },
  {
    title: "Integração CRM x SAP",
    type: "Integrações",
    sector: "Comercial",
    text: "Automação de processos, menos retrabalho e dados integrados em tempo real.",
    href: "/cases/integracao-crm-sap",
  },
  {
    title: "Portal de Fornecedores SAP",
    type: "Integrações",
    sector: "Suprimentos",
    text: "Compliance, governança e automação no ciclo do fornecedor.",
    href: "/cases/portal-fornecedores-sap",
  },
  {
    title: "SAP x Salesforce",
    type: "Integrações",
    sector: "Comercial",
    text: "Conta, oportunidade e pedido alinhados ao mestre do SAP, com sistema de registro definido.",
    href: "/integracoes",
  },
  {
    title: "APIs REST com o SAP",
    type: "Integrações",
    sector: "Tecnologia",
    text: "Contrato, versão e monitoramento para portais e produtos que consomem o ERP.",
    href: "/integracoes",
  },
  {
    title: "Middleware e Integration Suite",
    type: "Integrações",
    sector: "Tecnologia",
    text: "Orquestração, transformação e fila de erro visível antes do fechamento.",
    href: "/integracoes",
  },
  {
    title: "Integração de compras",
    type: "Integrações",
    sector: "Suprimentos",
    text: "Requisição, cotação e pedido sem transcrição entre o fluxo de sourcing e o SAP.",
    href: "/integracoes",
  },
  {
    title: "AMS SAP",
    type: "AMS",
    sector: "Operação SAP",
    text: "Sustentação contínua, hypercare, monitoramento e evolução funcional.",
    href: "/cases/ams-sap",
  },
  {
    title: "Agente de triagem para o AMS",
    type: "IA",
    sector: "Suporte",
    text: "Classificação de demandas e sugestão de resposta com base na documentação oficial.",
    href: "/inteligencia-artificial",
  },
  {
    title: "Extensão na SAP BTP",
    type: "SAP BTP",
    sector: "Tecnologia",
    text: "Processo diferenciador fora do core, com API e ciclo de vida próprios.",
    href: "/sap-btp",
  },
];
