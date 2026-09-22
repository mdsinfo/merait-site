"use client";

import { useRef, useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { headlines, siteConfig, whatsappHref } from "@/lib/site";

const stack = [
  { label: "SAP S/4HANA", detail: "Processos de registro" },
  { label: "Integrações", detail: "CRM, APIs e middleware" },
  { label: "SAP BTP", detail: "Extensão e automação" },
  { label: "Inteligência Artificial", detail: "Joule, Copilot e agentes" },
  { label: "AMS", detail: "Sustentação contínua" },
];

const ribbon = ["SAP S/4HANA", "AMS", "Integrações", "SAP BTP", "Fiscal", "Inteligência Artificial", "Fiori", "Power BI"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(event: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const yAxis = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: x * 10, y: yAxis * -8 });
  }

  return (
    <section ref={ref} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} className="relative overflow-hidden bg-[#070B16] text-white">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0" aria-hidden="true">
        {siteConfig.heroVideo ? (
          <video className="absolute inset-0 h-full w-full object-cover opacity-30" autoPlay muted loop playsInline preload="metadata">
            <source src={siteConfig.heroVideo} type="video/mp4" />
          </video>
        ) : null}
        <div className="bg-grid absolute inset-0" />
        <div className="particle-field absolute inset-0" />
        <div className="orb orb-cyan" />
        <div className="orb orb-brand" />
        <div className="orb orb-lime" />
      </motion.div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <div>
          <p className="max-w-xl text-sm font-medium leading-6 text-white/75">{headlines.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Transformamos tecnologia em <span className="text-lime">resultados</span> para o seu negócio.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{headlines.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="white" size="lg">
              <Link href="/contato">
                Solicitar Diagnóstico
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="inverse" size="lg">
              <a href={whatsappHref("Olá, quero falar com um especialista MERAIT.")} target="_blank" rel="noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">
            Diagnóstico de 45 minutos com especialista sênior. Você sai com prioridades, riscos e o próximo passo.
          </p>
        </div>
        <div className="scene-3d">
          <div
            className="rounded-3xl bg-[linear-gradient(135deg,#22D3EE,#2D2E91,#7BEA23)] p-px shadow-2xl transition-transform duration-200"
            style={{ transform: reduce ? undefined : `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
          >
            <div className="rounded-3xl bg-[#101828] p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Arquitetura de valor</p>
                <span className="rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">Enterprise</span>
              </div>
              <ul className="mt-6 space-y-3">
                {stack.map((item) => (
                  <li key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-xs text-white/60">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee relative border-t border-white/10 py-4">
        <div className="animate-marquee flex w-max gap-10 px-5">
          {[...ribbon, ...ribbon].map((item, index) => (
            <span key={`${item}-${index}`} className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
