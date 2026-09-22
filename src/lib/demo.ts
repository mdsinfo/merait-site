export const demoCredentials = {
  email: "cliente@merait.com.br",
  password: "merait-demo",
};

export const kpis = [
  { label: "Disponibilidade", value: "99,7%", hint: "Rotinas críticas do período" },
  { label: "No prazo", value: "96%", hint: "Chamados dentro do SLA" },
  { label: "Satisfação", value: "95%", hint: "Avaliação de quem abriu a demanda" },
  { label: "Integrações", value: "200+", hint: "Fluxos acompanhados" },
  { label: "Backlog crítico", value: "3", hint: "Itens com impacto alto" },
  { label: "Resposta média", value: "28 min", hint: "Prioridade alta" },
];

export const ticketSeries = [
  { month: "Abr", value: 42 },
  { month: "Mai", value: 38 },
  { month: "Jun", value: 51 },
  { month: "Jul", value: 33 },
  { month: "Ago", value: 29 },
  { month: "Set", value: 31 },
];

export const demandMix = [
  { label: "Funcional", value: 46, color: "#2D2E91" },
  { label: "Técnico", value: 28, color: "#22D3EE" },
  { label: "Melhoria", value: 18, color: "#7BEA23" },
  { label: "Incidente", value: 8, color: "#667085" },
];

export const queue = [
  { id: "AMS-1042", title: "Rejeição de NF-e em contingência", priority: "Alta", status: "Em análise", sla: "2h" },
  { id: "AMS-1048", title: "Status de pedido não retorna ao CRM", priority: "Alta", status: "Em execução", sla: "4h" },
  { id: "AMS-1055", title: "Dúvida de determinação fiscal", priority: "Média", status: "Aguardando negócio", sla: "8h" },
  { id: "AMS-1061", title: "Ajuste de aplicação Fiori de compras", priority: "Baixa", status: "Planejado", sla: "5d" },
];

export const scheduleTopics = [
  "Diagnóstico SAP S/4HANA",
  "AMS e sustentação",
  "Integrações",
  "SAP BTP",
  "Inteligência Artificial",
  "Fiscal e Reforma Tributária",
];

export const scheduleSlots = ["09:00", "10:30", "14:00", "16:00"];
