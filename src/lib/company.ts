export const stats = [
  { value: 100, prefix: "+", suffix: "", label: "Projetos" },
  { value: 200, prefix: "+", suffix: "", label: "Integrações" },
  { value: 10, prefix: "+", suffix: "", label: "Anos de Mercado" },
  { value: 95, prefix: "+", suffix: "%", label: "Satisfação" },
] as const;

export const differentials = [
  {
    icon: "users",
    title: "Especialistas na mesa",
    text: "Quem decide fala com quem desenha o processo. Sem camada de coordenação entre a diretoria e o SAP.",
  },
  {
    icon: "layers",
    title: "S/4HANA com critério de aceite",
    text: "Implantação, conversão, rollout e melhoria com dono de processo, dado mestre e teste antes do go-live.",
  },
  {
    icon: "headset",
    title: "AMS que reduz recorrência",
    text: "Fila única de incidente e melhoria, hypercare com data de saída e monitoramento do que para a operação.",
  },
  {
    icon: "target",
    title: "Decisão curta",
    text: "Escopo, risco e exceção ficam visíveis cedo. O projeto não espera um comitê para corrigir o óbvio.",
  },
  {
    icon: "award",
    title: "Senioridade em S/4HANA e BTP",
    text: "Funcional, ABAP, Fiori, integração e fiscal no mesmo desenho, com vivência em operação de médio e grande porte.",
  },
  {
    icon: "chart",
    title: "Resultado que a área explica",
    text: "Retrabalho entre sistemas, estabilidade do ambiente, documento fiscal e tempo de ciclo entram no acompanhamento.",
  },
] as const;

export const timeline = [
  {
    title: "Operação SAP no centro",
    text: "A MERAIT se organiza em torno do processo que fatura, compra, produz e fecha o mês, não de um catálogo de módulos.",
  },
  {
    title: "Projeto com dono e aceite",
    text: "Implantação, melhoria e sustentação passam a ter critério de pronto: dado, teste integrado e área usuária.",
  },
  {
    title: "AMS como continuidade",
    text: "O pós go-live deixa de ser uma fila reativa e ganha hypercare, monitoramento e evolução funcional.",
  },
  {
    title: "Integração com sistema de registro",
    text: "CRM, portais, compras e APIs passam a conversar com o SAP sem redigitação nas etapas de maior volume.",
  },
  {
    title: "IA com governança",
    text: "Copilot Studio, OpenAI e agentes entram onde há volume e fonte oficial. O lançamento crítico continua humano.",
  },
  {
    title: "Extensão na SAP BTP",
    text: "O que diferencia a empresa sai do core. O S/4HANA permanece atualizável.",
  },
] as const;

export const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Você recebe o mapa do ambiente, os pontos de perda e a ordem do que atacar primeiro.",
  },
  {
    step: "02",
    title: "Planejamento",
    text: "Escopo, arquitetura, risco de dado e critério de aceite ficam escritos antes da configuração.",
  },
  {
    step: "03",
    title: "Implementação",
    text: "Configuração, ABAP, Fiori e integração avançam com a área de negócio no teste, não só na homologação final.",
  },
  {
    step: "04",
    title: "Go-live",
    text: "Corte, contingência e os primeiros ciclos reais acompanhados por quem desenhou o processo.",
  },
  {
    step: "05",
    title: "Hypercare",
    text: "Estabilização com causa tratada e data para sair da fase assistida.",
  },
  {
    step: "06",
    title: "AMS",
    text: "Sustentação contínua e uma fila de evolução que a liderança consegue priorizar.",
  },
] as const;

export const segments = [
  {
    icon: "trees",
    title: "Papel e Celulose",
    text: "Planta contínua, custo e integração entre chão de fábrica, fiscal e backoffice no SAP.",
  },
  {
    icon: "gem",
    title: "Vidros",
    text: "Produção contínua, qualidade, expedição e custo industrial registrados no ERP.",
  },
  {
    icon: "mountain",
    title: "Mineração",
    text: "Suprimentos, manutenção, rastreabilidade e operação em ambientes de alta criticidade.",
  },
  {
    icon: "wheat",
    title: "Agronegócio",
    text: "Originação, contratos, logística e obrigações fiscais da cadeia.",
  },
  {
    icon: "factory",
    title: "Indústria",
    text: "Produção, custos, qualidade e integração entre chão de fábrica e backoffice.",
  },
  {
    icon: "truck",
    title: "Logística",
    text: "Transporte, pátio, documentos fiscais e visibilidade da entrega.",
  },
  {
    icon: "boxes",
    title: "Distribuição",
    text: "Pedidos, estoque, faturamento e integração com canais comerciais.",
  },
  {
    icon: "store",
    title: "Varejo",
    text: "Preço, estoque, omnicanal e velocidade de atendimento ao pedido.",
  },
  {
    icon: "shirt",
    title: "Moda",
    text: "Coleção, grade e canais integrados ao planejamento e ao faturamento.",
  },
  {
    icon: "zap",
    title: "Energia",
    text: "Ativos, manutenção, medição e obrigações de uma operação contínua.",
  },
  {
    icon: "flask",
    title: "Químico",
    text: "Lotes, regulamentação, qualidade e controle de processo.",
  },
  {
    icon: "bag",
    title: "Bens de Consumo",
    text: "Demanda, trade e fábrica no mesmo fluxo de pedido, estoque e fiscal.",
  },
] as const;

export type ClientMark = "bars" | "ring" | "diamond" | "waves" | "peak" | "grid" | "orbit" | "arc";

export type ClientLogo = {
  id: string;
  name: string;
  sector: string;
  mark: ClientMark;
  /** Public path of an authorized logo. When set, it replaces the placeholder. */
  logoSrc?: string;
};

export const clients: ClientLogo[] = [
  { id: "nordvista", name: "Nordvista", sector: "Indústria", mark: "bars" },
  { id: "campo-alto", name: "Campo Alto", sector: "Agronegócio", mark: "arc" },
  { id: "horizonte-log", name: "Horizonte Log", sector: "Logística", mark: "waves" },
  { id: "lumen-quimica", name: "Lumen Química", sector: "Químico", mark: "ring" },
  { id: "serra-mineral", name: "Serra Mineral", sector: "Mineração", mark: "peak" },
  { id: "atlas-distribuicao", name: "Atlas Distribuição", sector: "Distribuição", mark: "grid" },
  { id: "prisma-vidros", name: "Prisma Vidros", sector: "Vidros", mark: "diamond" },
  { id: "vale-verde", name: "Vale Verde", sector: "Manufatura", mark: "orbit" },
];

export const architecture = [
  { id: "users", label: "Usuários", detail: "Áreas de negócio e canais de trabalho" },
  { id: "copilot", label: "Microsoft Copilot", detail: "Produtividade no fluxo do dia a dia" },
  { id: "joule", label: "SAP Joule", detail: "Assistente no contexto do ERP" },
  { id: "btp", label: "SAP BTP", detail: "Integração, extensão e governança" },
  { id: "openai", label: "OpenAI", detail: "Modelos, RAG e agentes" },
  { id: "sap", label: "SAP S/4HANA", detail: "Sistema de registro dos processos" },
  { id: "crm", label: "CRM", detail: "Relacionamento e pipeline comercial" },
  { id: "bi", label: "Power BI", detail: "Indicadores para decisão" },
] as const;
