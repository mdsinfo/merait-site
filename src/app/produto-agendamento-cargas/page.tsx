import type { Metadata } from "next";
import { LogisticsPlatform } from "@/components/products/logistics-platform";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Agendamento de cargas",
  description:
    "MERAIT Logistics Scheduling Platform: agendamento inteligente de cargas, gestão de docas, RFID e integração com SAP ECC, S/4HANA, EWM, TM e Yard Logistics.",
  path: "/produto-agendamento-cargas",
});

export default function ProdutoAgendamentoCargasPage() {
  return <LogisticsPlatform />;
}
