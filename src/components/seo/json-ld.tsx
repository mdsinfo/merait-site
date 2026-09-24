import { siteConfig } from "@/lib/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        areaServed: "BR",
        sameAs: [siteConfig.linkedin, siteConfig.instagram],
      },
      {
        "@type": "LocalBusiness",
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        areaServed: "BR",
      },
      {
        "@type": "ProfessionalService",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        areaServed: "BR",
        knowsLanguage: "pt-BR",
        serviceType: [
          "Consultoria SAP",
          "SAP S/4HANA",
          "AMS SAP",
          "Integrações corporativas",
          "SAP BTP",
          "Inteligência Artificial",
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
