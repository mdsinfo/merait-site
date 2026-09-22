import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/area-cliente", "/portal-ams", "/dashboard"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
    host: siteConfig.url,
  };
}
