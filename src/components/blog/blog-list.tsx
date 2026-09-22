"use client";

import { useState } from "react";
import Link from "next/link";
import { blogCategories, formatPostDate, posts } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [category, setCategory] = useState<string>("Todos");
  const visible = posts.filter((post) => category === "Todos" || post.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {["Todos", ...blogCategories].map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold",
              category === item ? "border-brand bg-brand text-white" : "border-border bg-card",
            )}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map((post) => (
          <article key={post.slug} className="rounded-3xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-link">{post.category}</p>
            <h2 className="mt-3 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="hover:text-link">{post.title}</Link>
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted">{post.description}</p>
            <p className="mt-4 text-xs text-muted">{formatPostDate(post.date)} · {post.readingMinutes} min</p>
          </article>
        ))}
      </div>
    </div>
  );
}
