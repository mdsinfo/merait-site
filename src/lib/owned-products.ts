export type OwnedProduct = {
  slug: string;
  href: string;
  name: string;
  title: string;
  description: string;
  capabilities: string[];
  benefits: string[];
};

export const ownedProducts: OwnedProduct[] = [
  {
    slug: "dock-scheduling",
    href: "/produto-agendamento-cargas",
    name: "MERAIT Dock Scheduling",
    title: "Agendamento inteligente de cargas",
    description:
      "Solução completa para gestão de agendamento de veículos, reserva automática de docas, comunicação logística e integração SAP.",
    capabilities: [
      "Portal de transportadoras",
      "Portal de clientes",
      "Reserva automática",
      "Controle de janelas",
      "Gestão de capacidade",
      "Workflow operacional",
      "Dashboards",
      "Integração SAP",
    ],
    benefits: ["Redução de filas", "Aumento de produtividade", "Previsibilidade logística", "Redução de custos operacionais"],
  },
  {
    slug: "yard-rfid",
    href: "/produtos/yard-rfid",
    name: "MERAIT RFID Logistics",
    title: "Gestão inteligente de pátio",
    description: "Controle de entrada, permanência e saída de veículos com RFID, integrado ao agendamento e ao SAP.",
    capabilities: ["RFID", "Tracking", "Check-in automático", "Check-out automático", "Controle de acesso", "Monitoramento operacional"],
    benefits: ["Menos registro manual", "Permanência medida", "Acesso rastreável", "Indicadores do pátio no mesmo fluxo do agendamento"],
  },
  {
    slug: "ai-enterprise",
    href: "/produtos/ai-enterprise",
    name: "MERAIT AI Enterprise",
    title: "Inteligência artificial aplicada à operação",
    description: "Agentes, copilotos e conhecimento corporativo conectados ao SAP, sem tirar o ERP do papel de sistema de registro.",
    capabilities: ["Copilot Studio", "OpenAI", "Agentes de IA", "Chatbots corporativos", "Assistentes SAP", "RAG", "Knowledge management"],
    benefits: ["Resposta com contexto do processo", "Menos consulta repetida ao especialista", "Conhecimento recuperável", "Automação com trilha de decisão"],
  },
  {
    slug: "crm-integration",
    href: "/produtos/crm-integration",
    name: "MERAIT CRM Integration Suite",
    title: "CRM e SAP no mesmo fluxo comercial",
    description: "Integração entre CRM e SAP para pedido, cliente, preço e status, com API, middleware e portal.",
    capabilities: ["CRM x SAP", "APIs REST", "Salesforce", "Dynamics", "Portais", "Integrações corporativas"],
    benefits: ["Um sistema de registro para o pedido", "Menos reconciliação manual", "Status visível para o comercial", "Erro reprocessável no AMS"],
  },
  {
    slug: "fiscal-automation",
    href: "/produtos/fiscal-automation",
    name: "MERAIT Fiscal Automation",
    title: "Automação fiscal no recebimento e na escrituração",
    description: "Inbound e FastNFe para NF-e, NFS-e e CT-e, com menos lançamento manual e o SAP como registro do documento.",
    capabilities: ["NF-e", "NFS-e", "CT-e", "Escrituração", "Monitoramento de rejeição", "Integração SAP"],
    benefits: ["Menos digitação fiscal", "Rejeição visível antes do fechamento", "Escrituração mais rápida", "Processo alinhado ao pedido de compra"],
  },
  {
    slug: "pricing-management",
    href: "/produtos/pricing-management",
    name: "MERAIT Pricing Management",
    title: "Gestão de preço conectada ao SAP",
    description: "Condição comercial, simulação e publicação de preço com o SAP como sistema de registro.",
    capabilities: ["Condição comercial", "Simulação", "Aprovação", "Publicação no SAP", "Trilha de alteração", "Integração com CRM"],
    benefits: ["Preço com dono", "Menos planilha paralela", "Aprovação antes da vigência", "Comercial e ERP na mesma condição"],
  },
];

export function getOwnedProduct(slug: string) {
  return ownedProducts.find((item) => item.slug === slug);
}
