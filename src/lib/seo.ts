import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const full = absolute ? title : `${title} | ${siteConfig.name}`;
  const url = new URL(path, siteConfig.url).toString();
  return {
    title: absolute ? { absolute: title } : title,
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
