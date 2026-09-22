export const siteConfig = {
  name: "MERAIT",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.merait.com.br",
  email: "contato@merait.com.br",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511000000000",
  heroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO || "",
  description:
    "Consultoria SAP para empresas de médio e grande porte. S/4HANA, AMS, integração de sistemas e inteligência artificial, com especialistas seniores e decisão curta.",
  linkedin: "https://www.linkedin.com/company/merait",
  instagram: "https://www.instagram.com/merait",
};

export const headlines = {
  eyebrow: "Consultoria especializada em SAP, AMS, integração de sistemas e inteligência artificial",
  title: "Transformamos tecnologia em resultados para o seu negócio.",
  subtitle:
    "Especialistas em SAP, AMS, Integrações Corporativas e Inteligência Artificial. Apoiamos empresas de médio e grande porte a modernizar processos, integrar sistemas e sustentar a operação depois do go-live.",
  secondary: "Em 45 minutos, um especialista sênior lê o seu cenário SAP e devolve prioridades, riscos e o próximo passo.",
  cta: "Agende um diagnóstico executivo.",
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
];

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const solutionLinks = [
  { href: "/sap-s4hana", label: "SAP S/4HANA" },
  { href: "/ams-sap", label: "AMS SAP" },
  { href: "/integracoes", label: "Integrações" },
  { href: "/sap-btp", label: "SAP BTP" },
  { href: "/inteligencia-artificial", label: "Inteligência Artificial" },
  { href: "/solucoes#fiscal", label: "Fiscal e Tributário" },
  { href: "/servicos", label: "Todos os serviços" },
] as const;

export const productLinks = [
  { href: "/#inbound", label: "Inbound" },
  { href: "/#fastnfe", label: "FastNFe" },
  { href: "/produto-agendamento-cargas", label: "Agendamento de Cargas" },
] as const;

export const nav = [
  { href: "/solucoes", label: "Soluções", children: solutionLinks },
  { href: "/#produtos", label: "Produtos", children: productLinks },
  { href: "/clientes", label: "Clientes" },
  { href: "/cases", label: "Cases" },
  { href: "/contato", label: "Contato" },
] as const;

export const productPaths = ["/produto-agendamento-cargas"] as const;

export const solutionPaths = [
  "/solucoes",
  "/sap-s4hana",
  "/ams-sap",
  "/integracoes",
  "/sap-btp",
  "/inteligencia-artificial",
  "/servicos",
];
