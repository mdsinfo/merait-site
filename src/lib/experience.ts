export const experienceCategories = [
  "Indústria e Manufatura",
  "Varejo e Consumo",
  "Logística e Transporte",
  "Mineração",
  "Parceiros SAP",
] as const;

export type ExperienceCategory = (typeof experienceCategories)[number];

export type ExperienceEntry = {
  id: string;
  name: string;
  category: ExperienceCategory;
  /** Caminho de um SVG autorizado, por exemplo /experience/bracell.svg */
  logoSrc?: string;
};

export const experienceDisclaimer =
  "A experiência apresentada refere-se à atuação dos profissionais da MERAIT em projetos realizados ao longo de sua trajetória profissional.";

export const experienceEntries: ExperienceEntry[] = [
  { id: "bracell", name: "Bracell", category: "Indústria e Manufatura" },
  { id: "mallory", name: "Mallory", category: "Indústria e Manufatura" },
  { id: "betania-alvoar", name: "Betânia (Alvoar)", category: "Indústria e Manufatura" },
  { id: "messer", name: "Messer", category: "Indústria e Manufatura" },
  { id: "viscofan", name: "Viscofan", category: "Indústria e Manufatura" },
  { id: "ligai", name: "Ligái", category: "Indústria e Manufatura" },
  { id: "hering", name: "Hering", category: "Indústria e Manufatura" },
  { id: "cnh-industrial", name: "CNH Industrial", category: "Indústria e Manufatura" },
  { id: "arcelormittal-gonvarri", name: "ArcelorMittal Gonvarri", category: "Indústria e Manufatura" },
  { id: "bosch", name: "Bosch", category: "Indústria e Manufatura" },
  { id: "nexa-resources", name: "Nexa Resources", category: "Mineração" },
  { id: "ceratizit", name: "Ceratizit", category: "Indústria e Manufatura" },
  { id: "markem-imaje", name: "Markem-Imaje", category: "Indústria e Manufatura" },
  { id: "biosev", name: "Biosev", category: "Indústria e Manufatura" },
  { id: "lwart", name: "Lwart", category: "Indústria e Manufatura" },
  { id: "takasago", name: "Takasago", category: "Indústria e Manufatura" },
  { id: "kelvion", name: "Kelvion", category: "Indústria e Manufatura" },
  { id: "grupo-boticario", name: "Grupo Boticário", category: "Varejo e Consumo" },
  { id: "notco", name: "NotCo", category: "Varejo e Consumo" },
  { id: "roldao-atacadista", name: "Roldão Atacadista", category: "Varejo e Consumo" },
  { id: "polo-wear", name: "Polo Wear", category: "Varejo e Consumo" },
  { id: "top-brands", name: "Top Brands Fashion Group", category: "Varejo e Consumo" },
  { id: "ccr", name: "CCR", category: "Logística e Transporte" },
  { id: "dta-cargo", name: "DTA Cargo", category: "Logística e Transporte" },
  { id: "dall-cargo", name: "Dall Cargo", category: "Logística e Transporte" },
  { id: "seidor", name: "Seidor", category: "Parceiros SAP" },
  { id: "snp-group", name: "SNP Group", category: "Parceiros SAP" },
  { id: "avalara", name: "Avalara", category: "Parceiros SAP" },
  { id: "alliance", name: "Alliance", category: "Parceiros SAP" },
  { id: "meta", name: "Meta", category: "Parceiros SAP" },
  { id: "vexia", name: "Vexia", category: "Parceiros SAP" },
  { id: "capitani", name: "Capitani", category: "Parceiros SAP" },
  { id: "wayon", name: "Wayon", category: "Parceiros SAP" },
];
