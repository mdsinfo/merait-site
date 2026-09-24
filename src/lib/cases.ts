export type CaseStudy = {
  slug: string;
  title: string;
  result: string;
  metric: string;
  metricLabel: string;
  sector: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string[];
  results: string[];
  stack: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: "integracao-crm-sap",
    title: "Integração CRM x SAP",
    result: "Processos automatizados e dados no mesmo tempo",
    metric: "CRM",
    metricLabel: "integração entre relacionamento e ERP",
    sector: "Comercial",
    summary:
      "Pedido, cliente e status passaram a circular entre o CRM e o SAP, com menos retrabalho e visão única para quem vende e para quem fatura.",
    context:
      "O relacionamento comercial vivia no CRM e o registro de pedido, crédito e faturamento no SAP. A conferência entre os dois sistemas ocupava o time no fechamento e no dia a dia.",
    challenge:
      "Cadastro divergente, status atrasado e redigitação nas etapas de maior volume.",
    approach: [
      "Definição do SAP como sistema de registro de cliente faturado, preço e pedido.",
      "Contrato de integração para criação e atualização, com fila de erro visível.",
      "Status de crédito e de pedido devolvidos ao CRM.",
      "Monitoramento da interface e roteiro de reprocessamento para o AMS.",
    ],
    results: ["Automação de processos", "Redução de retrabalho", "Dados integrados em tempo real"],
    stack: ["SAP S/4HANA", "CRM", "APIs", "Middleware"],
  },
  {
    slug: "portal-fornecedores-sap",
    title: "Portal de Fornecedores SAP",
    result: "Cadastro, pedido e documento no mesmo fluxo",
    metric: "Portal",
    metricLabel: "portal conectado ao processo de compras",
    sector: "Suprimentos",
    summary:
      "O portal deixou de ser uma camada solta e passou a refletir cadastro, pedido e documento fiscal com regra de compliance no SAP.",
    context:
      "Fornecedores enviavam documentos por canais paralelos. Compras e fiscal conferiam o mesmo dado mais de uma vez antes de liberar o processo.",
    challenge:
      "Falta de governança sobre quem altera o cadastro, o que entra no pedido e qual documento é aceito.",
    approach: [
      "Mapeamento do ciclo do fornecedor, do cadastro ao documento.",
      "Regras de compliance e de alçada no SAP, com o portal como canal.",
      "Automação das etapas repetitivas e trilha do que foi aprovado.",
      "Fila de exceção para o que ainda exige decisão humana.",
    ],
    results: ["Compliance", "Governança", "Automação"],
    stack: ["SAP", "Portal de fornecedores", "Workflow", "AMS"],
  },
  {
    slug: "projetos-fiscais",
    title: "Projetos Fiscais",
    result: "Documentos eletrônicos e roadmap tributário no SAP",
    metric: "Fiscal",
    metricLabel: "documentos eletrônicos e reforma tributária",
    sector: "Fiscal",
    summary:
      "CT-e, MDF-e e NF-e tratados no processo, com monitoramento da mensageria e leitura da Reforma Tributária para o roadmap do SAP.",
    context:
      "A operação emitia e recebia documentos eletrônicos com pontos cegos entre logística, faturamento e o retorno da SEFAZ.",
    challenge:
      "Cenário fiscal espalhado, contingência pouco ensaiada e mudança tributária sem dono no sistema.",
    approach: [
      "Inventário dos cenários de NF-e, CT-e e MDF-e usados de fato.",
      "Monitoramento da mensageria e roteiro de contingência.",
      "Teste por tipo de documento, com a área fiscal no aceite.",
      "Roadmap da Reforma Tributária alinhado ao assessor do cliente.",
    ],
    results: ["CT-e", "MDF-e", "NF-e", "Reforma Tributária"],
    stack: ["SAP", "NF-e", "CT-e", "MDF-e"],
  },
  {
    slug: "ams-sap",
    title: "AMS SAP",
    result: "Ambiente sustentado e em evolução",
    metric: "AMS",
    metricLabel: "sustentação contínua com evolução funcional",
    sector: "Operação SAP",
    summary:
      "Depois do projeto, o ambiente ganhou sustentação contínua, hypercare com critério de saída, monitoramento e uma fila de evolução funcional.",
    context:
      "O go-live concentrou dúvidas, incidentes repetidos e melhorias sem prioridade. O suporte reagia ao chamado e a causa voltava no mês seguinte.",
    challenge:
      "Falta de dono entre incidente, monitoramento e a evolução que a área de negócio pedia.",
    approach: [
      "Fila única para incidente, dúvida e melhoria.",
      "Hypercare com meta de estabilidade e data de transição.",
      "Monitoramento dos fluxos críticos e das interfaces.",
      "Rito de evolução funcional com a liderança da operação.",
    ],
    results: ["Sustentação contínua", "Hypercare", "Monitoramento", "Evolução funcional"],
    stack: ["AMS", "Suporte funcional", "Suporte técnico", "Hypercare"],
  },
  {
    slug: "implementacao-sap-wm",
    title: "Implementação SAP WM para gestão de armazém",
    result: "Processos de armazenagem estruturados no SAP",
    metric: "WM",
    metricLabel: "administração de depósitos",
    sector: "Logística",
    summary:
      "Projeto estruturado a partir de assessment e Business Blueprint para implementação de processos de administração de depósitos no SAP. Case anonimizado, sem métrica de resultado.",
    context:
      "A operação precisava levar a administração de depósitos para o SAP, com estrutura de armazém, movimentos e procedimentos documentados antes da entrada em operação.",
    challenge:
      "Estoque e atividade de armazém sem um desenho único de armazenagem, putaway, picking e inventário.",
    approach: [
      "Assessment e Business Blueprint do processo de depósitos.",
      "Definição e configuração do armazém, com atribuição à planta e ao depósito.",
      "Tipos e zonas de armazenagem, posições de depósito, putaway e picking.",
      "Estratégias FIFO e FEFO, inventário e dados mestres.",
      "Recebimento, saída de materiais, cutover e transportes SAP.",
      "Treinamento e manuais de usuário.",
    ],
    results: [
      "Processos de armazenagem estruturados no SAP",
      "Procedimentos operacionais documentados",
      "Preparação de dados e usuários para entrada em operação",
      "Integração entre gestão de estoque e atividades do armazém",
    ],
    stack: ["SAP WM", "Dados mestres", "Cutover", "Manuais de usuário"],
  },
  {
    slug: "ciclo-fornecedores-sap",
    title: "Automação do ciclo de fornecedores integrado ao SAP",
    result: "Cadastro de fornecedor com rastreio e reprocessamento",
    metric: "ECC",
    metricLabel: "integração com plataforma de fornecedores",
    sector: "Compras",
    summary:
      "Implantação de integração entre SAP ECC e plataforma externa de fornecedores, do desenho funcional e técnico até cutover e Hypercare. Case anonimizado.",
    context:
      "O cadastro de fornecedor nascia fora do SAP e precisava voltar ao ERP com código, status e trilha de erro.",
    challenge:
      "Criação, atualização e bloqueio dependiam de replicação manual entre a plataforma e o SAP ECC.",
    approach: [
      "Desenho funcional e técnico da integração.",
      "APIs e desenvolvimento ABAP para criação, atualização, bloqueio, desbloqueio e reativação.",
      "Retorno do código ERP para a plataforma.",
      "Logs e reprocessamento.",
      "Testes unitários, testes integrados, QA e UAT.",
      "Cutover, go-live e Hypercare.",
    ],
    results: [
      "Ciclo de fornecedor tratado na integração",
      "Código ERP devolvido à plataforma",
      "Erro com log e caminho de reprocessamento",
      "Entrada em produção com Hypercare",
    ],
    stack: ["SAP ECC", "APIs", "ABAP", "Hypercare"],
  },
  {
    slug: "ecossistema-crm-sap",
    title: "Integração dos processos comerciais entre CRM e SAP",
    result: "Continuidade entre venda e execução no SAP",
    metric: "CRM",
    metricLabel: "implementação de integração empresarial",
    sector: "Implementação de integração",
    summary:
      "Implementação de integração empresarial entre CRM e SAP para cliente, venda, pedido, faturamento e crédito. Case anonimizado, sem depoimento e sem indicador inventado.",
    context:
      "O comercial operava no CRM e a execução do pedido, do faturamento e do crédito permanecia no SAP.",
    challenge:
      "Cadastro, histórico e documentos comerciais não circulavam com retorno do código SAP.",
    approach: [
      "Cadastro e atualização de clientes, com carga inicial.",
      "Processamento por job e comunicação via API e JSON.",
      "Retorno do código SAP.",
      "Histórico de vendas, pedidos, faturamento, claims e notas de crédito.",
      "Automação de ordens de venda.",
    ],
    results: [
      "Cliente e código SAP no mesmo fluxo",
      "Histórico e documentos comerciais disponíveis na integração",
      "Ordem de venda encaminhada ao SAP",
      "Continuidade entre a venda e a execução",
    ],
    stack: ["CRM", "SAP", "API", "JSON"],
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
