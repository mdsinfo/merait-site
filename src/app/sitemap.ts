import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { cases } from "@/lib/cases";
import { materials } from "@/lib/materials";
import { siteConfig } from "@/lib/site";

const paths = [
  "/",
  "/quem-somos",
  "/solucoes",
  "/projetos",
  "/segmentos",
  "/clientes",
  "/cases",
  "/blog",
  "/contato",
  "/ams-sap",
  "/sap-s4hana",
  "/sap-btp",
  "/integracoes",
  "/inteligencia-artificial",
  "/servicos",
  "/produto-agendamento-cargas",
  "/clientes-e-experiencia",
  "/agendamento",
  "/materiais",
  "/calculadora-roi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    ...paths.map((path) => entries(path, path === "/" ? 1 : 0.7)),
    ...posts.map((post) => entries(`/blog/${post.slug}`, 0.6)),
    ...cases.map((item) => entries(`/cases/${item.slug}`, 0.6)),
    ...materials.map((item) => entries(`/materiais/${item.slug}`, 0.5)),
  ];
}
