export const siteConfig = {
  name: "MERAIT",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.merait.com.br",
  email: "contato@merait.com.br",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5512996127225",
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO || "",
  description:
    "Especialistas em SAP S/4HANA, AMS, Integrações, Inteligência Artificial e Automação Empresarial. Conheça as soluções MERAIT.",
  linkedin: "https://www.linkedin.com/company/merait",
  instagram: "https://www.instagram.com/merait",
};

export const headlines = {
  eyebrow: "MERAIT Technology & Business Solutions",
  title: "Tecnologia, SAP e Inteligência Artificial para acelerar os resultados do seu negócio.",
  subtitle:
    "Ajudamos empresas a modernizar processos, integrar sistemas e aumentar produtividade através de soluções SAP, Integrações Empresariais, AMS e Produtos Digitais.",
  secondary: "Vamos conversar sobre seus desafios?",
  cta: "Solicitar Diagnóstico Gratuito",
};

export const seoKeywords = [
  "Consultoria SAP",
  "AMS SAP",
  "SAP S4HANA",
  "Consultoria SAP Brasil",
  "SAP BTP",
  "Integração SAP",
  "ABAP",
  "Fiori",
  "Reforma Tributária",
  "Copilot Studio",
  "OpenAI",
  "Transformação Digital",
  "consultoria sap",
  "consultoria sap brasil",
  "sap s4hana",
  "projetos sap",
  "inteligência artificial empresarial",
  "agendamento de cargas",
  "rfid logística",
  "yard management",
  "sistema de docas",
  "controle logístico sap",
  "projeto sap",
  "implementação sap",
  "migração sap",
  "consultoria sap s4hana",
];

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const solutionLinks = [
  { href: "/implementacoes-sap", label: "Implementações SAP" },
  { href: "/sap-s4hana", label: "SAP S/4HANA" },
  { href: "/ams-sap", label: "AMS SAP" },
  { href: "/integracoes", label: "Integrações" },
  { href: "/sap-btp", label: "SAP BTP" },
  { href: "/inteligencia-artificial", label: "Inteligência Artificial" },
  { href: "/solucoes#fiscal", label: "Fiscal e Tributário" },
  { href: "/servicos", label: "Todos os serviços" },
] as const;

export const productLinks = [
  { href: "/produto-agendamento-cargas", label: "Dock Scheduling" },
  { href: "/produtos/yard-rfid", label: "RFID Logistics" },
  { href: "/produtos/fiscal-automation", label: "Fiscal Automation" },
  { href: "/produtos/pricing-management", label: "Pricing Management" },
  { href: "/produtos/ai-enterprise", label: "AI Enterprise" },
  { href: "/produtos/crm-integration", label: "CRM Integration Suite" },
  { href: "/#inbound", label: "Inbound" },
  { href: "/#fastnfe", label: "FastNFe" },
] as const;

export const nav = [
  { href: "/solucoes", label: "Soluções", children: solutionLinks },
  { href: "/produtos", label: "Produtos", children: productLinks },
  { href: "/clientes", label: "Clientes" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
] as const;

export const productPaths = [
  "/produtos",
  "/produto-agendamento-cargas",
  "/produtos/yard-rfid",
  "/produtos/ai-enterprise",
  "/produtos/crm-integration",
  "/produtos/fiscal-automation",
  "/produtos/pricing-management",
] as const;

export const solutionPaths = [
  "/solucoes",
  "/implementacoes-sap",
  "/sap-s4hana",
  "/ams-sap",
  "/integracoes",
  "/sap-btp",
  "/inteligencia-artificial",
  "/servicos",
];
