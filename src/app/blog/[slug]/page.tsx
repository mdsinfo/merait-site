import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { formatPostDate, getPost, posts } from "@/lib/blog";
import { pageMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.description, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: new URL(`/blog/${post.slug}`, siteConfig.url).toString(),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${formatPostDate(post.date)} · ${post.readingMinutes} min de leitura`}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        {post.blocks.map((block, index) => {
          if (block.type === "h2") return <h2 key={index} className="mt-10 text-2xl font-semibold">{block.text}</h2>;
          if (block.type === "ul") {
            return (
              <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            );
          }
          return <p key={index} className="mt-4 text-base leading-8 text-muted">{block.text}</p>;
        })}
      </article>
      <CtaBand />
    </>
  );
}
