export type ServiceOffer = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  differentials: string[];
  href: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    id: "sap-s4hana",
    title: "SAP S/4HANA",
    description: "Implantação, conversão, rollout, melhoria e template global com critério de go-live e dono de processo.",
    benefits: ["Processo-alvo com indicador", "Dados mestres no escopo", "Template replicável", "Hypercare combinado"],
    differentials: ["Especialistas seniores no desenho", "Decisão curta com a operação", "Localização fiscal considerada desde o início"],
    href: "/sap-s4hana",
  },
  {
    id: "ams-sap",
    title: "AMS SAP",
    description: "Sustentação funcional e técnica, monitoramento, hypercare e gestão de demandas para o ambiente evoluir depois do projeto.",
    benefits: ["Fila única de incidente e melhoria", "Causa tratada, não só o contorno", "Indicadores de prazo e recorrência", "Saída de hypercare com critério"],
    differentials: ["Proximidade com quem abre o chamado", "Funcional e técnico na mesma fila", "Baixa camada entre o cliente e o especialista"],
    href: "/ams-sap",
  },
  {
    id: "integracoes",
    title: "Integrações",
    description: "SAP conectado a CRM, portais, APIs REST e middleware, com sistema de registro e fila de erro visível.",
    benefits: ["Menos retrabalho entre sistemas", "Status em tempo real", "Reprocessamento governado", "Contrato de interface versionado"],
    differentials: ["Desenho dos dois lados do fluxo", "Monitoramento entregue com a integração", "AMS preparado para o erro recorrente"],
    href: "/integracoes",
  },
  {
    id: "abap",
    title: "ABAP",
    description: "Desenvolvimento e correção no stack ABAP quando a regra precisa estar junto da transação e do dado.",
    benefits: ["Código sustentável em upgrade", "APIs e enhancements controlados", "Correção de causa", "Documentação para o time interno"],
    differentials: ["Critério de o que fica no core", "Revisão de suporte antes de customizar", "Entrega pronta para o AMS"],
    href: "/sap-btp",
  },
  {
    id: "fiori",
    title: "Fiori",
    description: "Aplicações e extensões de experiência para as tarefas de maior volume, com foco em adoção real.",
    benefits: ["Menos cliques na rotina", "Adoção medida com a área", "Padrão visual SAP", "Extensão sem copiar o core"],
    differentials: ["Desenho com o usuário da transação", "Escopo curto e utilizável", "Ligação com o processo, não só com a tela"],
    href: "/sap-btp",
  },
  {
    id: "sap-btp",
    title: "SAP BTP",
    description: "Integração, extensão side-by-side e automação na Business Technology Platform, preservando o S/4HANA atualizável.",
    benefits: ["Core mais limpo", "Ciclo de vida da extensão", "APIs com contrato", "Inovação sem travar upgrade"],
    differentials: ["Arquitetura explicada para a gestão", "Escolha consciente entre ABAP, CAP e BTP", "Operação incluída no desenho"],
    href: "/sap-btp",
  },
  {
    id: "ia",
    title: "Inteligência Artificial",
    description: "Copilot Studio, OpenAI, RAG e agentes no entorno do SAP, com aprovação humana nos passos críticos.",
    benefits: ["Menos tempo em triagem", "Respostas presas à base oficial", "Trilha do que foi sugerido", "SAP como sistema de registro"],
    differentials: ["Caso de uso com dono", "Governança de dado desde o início", "IA que prepara, pessoa que aprova"],
    href: "/inteligencia-artificial",
  },
  {
    id: "projetos-fiscais",
    title: "Projetos Fiscais",
    description: "NF-e, CT-e, MDF-e, mensageria e o roadmap de Reforma Tributária traduzido para o SAP.",
    benefits: ["Cenários fiscais mapeados", "Mensageria monitorada", "Teste por documento", "Roadmap alinhado ao assessor tributário"],
    differentials: ["Processo e sistema no mesmo time", "Contingência prevista", "Decisão jurídica permanece com o cliente"],
    href: "/solucoes#fiscal",
  },
];
