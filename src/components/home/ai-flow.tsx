"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const steps = [
  { label: "SAP S/4HANA", detail: "Sistema de registro dos processos" },
  { label: "SAP BTP", detail: "Integração, extensão e governança" },
  { label: "Microsoft Copilot", detail: "Produtividade no fluxo de trabalho" },
  { label: "OpenAI", detail: "Modelos, RAG e agentes" },
  { label: "CRM", detail: "Relacionamento e pipeline" },
  { label: "Power BI", detail: "Indicadores para decisão" },
  { label: "Usuários", detail: "A operação no centro do fluxo" },
];

export function AiFlow() {
  const reduce = useReducedMotion();
  return (
    <ol className="mx-auto mt-10 flex max-w-xl flex-col">
      {steps.map((step, index) => (
        <li key={step.label}>
          <motion.article
            className="glass-card-dark rounded-3xl px-5 py-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">0{index + 1}</p>
            <h3 className="mt-1 text-lg font-semibold">{step.label}</h3>
            <p className="text-sm text-white/65">{step.detail}</p>
          </motion.article>
          {index < steps.length - 1 ? (
            <div className="flex justify-center py-2 text-lime" aria-hidden="true">
              <ArrowDown className="size-4" />
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
