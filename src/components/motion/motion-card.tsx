"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function MotionCard({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { y: -6, rotateX: 3, rotateY: -3 }}
      style={{ transformPerspective: 900 }}
    >
      {children}
    </Comp>
  );
}
