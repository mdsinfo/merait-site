import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const full = `${title} | ${siteConfig.name}`;
  const url = new URL(path, siteConfig.url).toString();
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: full,
      description,
      url,
      locale: "pt_BR",
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
    },
  };
}
