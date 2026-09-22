import type { Metadata } from "next";
import { BlogList } from "@/components/blog/blog-list";
import { PageHero } from "@/components/sections/page-hero";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description: "Artigos e insights sobre Reforma Tributária, SAP BTP, S/4HANA e inteligência artificial.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Artigos e insights para o roadmap SAP"
        description="Reforma Tributária, SAP BTP, S/4HANA, inteligência artificial e a prática de AMS e integrações."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <BlogList />
      </section>
    </>
  );
}
