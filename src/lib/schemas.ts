import { z } from "zod";

const honeypot = z.string().optional();

export const contactSchema = z.object({
  type: z.literal("contato"),
  nome: z.string().trim().min(2, "Informe seu nome."),
  empresa: z.string().trim().min(2, "Informe a empresa."),
  telefone: z.string().trim().min(8, "Informe um telefone válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  porte: z.string().trim().min(2, "Informe o porte da empresa."),
  frente: z.string().trim().min(2, "Escolha a frente principal."),
  mensagem: z.string().trim().min(10, "Descreva a necessidade com um pouco mais de contexto."),
  website: honeypot,
});

export const scheduleSchema = z.object({
  type: z.literal("agendamento"),
  nome: z.string().trim().min(2, "Informe seu nome."),
  empresa: z.string().trim().min(2, "Informe a empresa."),
  telefone: z.string().trim().min(8, "Informe um telefone válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  tema: z.string().trim().min(2, "Escolha um tema."),
  data: z.string().trim().min(8, "Escolha uma data."),
  horario: z.string().trim().min(4, "Escolha um horário."),
  mensagem: z.string().trim().optional(),
  website: honeypot,
});

export const materialSchema = z.object({
  type: z.literal("material"),
  nome: z.string().trim().min(2, "Informe seu nome."),
  empresa: z.string().trim().min(2, "Informe a empresa."),
  email: z.string().trim().email("Informe um e-mail válido."),
  material: z.string().trim().min(2),
  website: honeypot,
});

export const leadSchema = z.discriminatedUnion("type", [
  contactSchema,
  scheduleSchema,
  materialSchema,
]);

export type LeadInput = z.infer<typeof leadSchema>;
