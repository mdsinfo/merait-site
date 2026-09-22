import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MERAIT",
    short_name: "MERAIT",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#101828",
    theme_color: "#2D2E91",
    lang: "pt-BR",
  };
}
