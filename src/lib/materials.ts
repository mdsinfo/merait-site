export type Material = {
  slug: string;
  title: string;
  description: string;
  sections: { title: string; items: string[] }[];
};

export const materials: Material[] = [
  {
    slug: "checklist-migracao-s4hana",
    title: "Checklist para migração SAP S/4HANA",
    description: "Pontos de código, dado, interface e corte antes de sair do ECC.",
    sections: [
      {
        title: "Legado",
        items: [
          "Inventariar customizações que o negócio ainda usa.",
          "Classificar interfaces que não podem parar no corte.",
          "Medir a qualidade de cliente, material e fornecedor.",
        ],
      },
      {
        title: "Caminho",
        items: [
          "Decidir implantação, conversão ou rollout com o diagnóstico.",
          "Separar o que entra na primeira onda.",
          "Definir o que fica no core e o que vai para a BTP.",
        ],
      },
      {
        title: "Corte",
        items: [
          "Escrever o critério de go-live antes da data.",
          "Preparar teste integrado com o negócio.",
          "Planejar hypercare e a passagem para AMS.",
        ],
      },
    ],
  },
  {
    slug: "checklist-reforma-tributaria",
    title: "Checklist da Reforma Tributária no SAP",
    description: "Pontos de processo, cadastro e mensageria para o roadmap de IBS e CBS.",
    sections: [
      {
        title: "Processo e governança",
        items: [
          "Nomear dono fiscal e dono SAP para o programa.",
          "Listar cenários de venda, compra, transferência e serviço.",
          "Alinhar premissas com o assessor tributário antes de configurar.",
        ],
      },
      {
        title: "Sistema",
        items: [
          "Mapear determinação fiscal e procedimentos de preço atuais.",
          "Inventariar NF-e, CT-e, MDF-e e SPEDs impactados.",
          "Levantar integrações que replicam imposto para outros sistemas.",
        ],
      },
      {
        title: "Prontidão",
        items: [
          "Definir massa de teste por cenário.",
          "Preparar contingência de mensageria.",
          "Registrar o que fica para a onda seguinte da transição.",
        ],
      },
    ],
  },
  {
    slug: "roteiro-ams-sap",
    title: "Guia de AMS SAP",
    description: "Como organizar SLA, governança, hypercare e evolução contínua.",
    sections: [
      {
        title: "Modelo de atendimento",
        items: [
          "Separar incidente, dúvida e melhoria.",
          "Definir prioridade por impacto na operação.",
          "Publicar horário, canal e tempo de resposta.",
        ],
      },
      {
        title: "Operação",
        items: [
          "Monitorar interfaces e rotinas críticas.",
          "Medir recorrência, não apenas volume.",
          "Encerrar hypercare com critério de estabilidade.",
        ],
      },
      {
        title: "Evolução",
        items: [
          "Rito mensal de melhorias com a liderança.",
          "Documentar causa e decisão.",
          "Transferir conhecimento para o time interno.",
        ],
      },
    ],
  },
  {
    slug: "guia-integracao-sap",
    title: "Guia de Integrações SAP",
    description: "Decisões de arquitetura antes de conectar CRM, compras, APIs e middleware.",
    sections: [
      {
        title: "Desenho",
        items: [
          "Escolher o sistema de registro de cada dado.",
          "Desenhar o fluxo feliz e a fila de erro.",
          "Definir o que é síncrono e o que pode ser assíncrono.",
        ],
      },
      {
        title: "Contrato",
        items: [
          "Versionar a API ou a mensagem.",
          "Combinar identificadores entre os sistemas.",
          "Prever reprocessamento e idempotência.",
        ],
      },
      {
        title: "Operação",
        items: [
          "Entregar monitoramento junto com a interface.",
          "Treinar o AMS no erro mais comum.",
          "Medir retrabalho antes e depois.",
        ],
      },
    ],
  },
];

export function getMaterial(slug: string) {
  return materials.find((item) => item.slug === slug);
}
