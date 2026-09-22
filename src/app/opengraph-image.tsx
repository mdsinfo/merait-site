import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og-card";

export const alt = "MERAIT — Consultoria SAP, Integrações e Inteligência Artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <OgCard kicker="Consultoria SAP Enterprise" title="Tecnologia que transforma processos." />,
    { ...size },
  );
}
