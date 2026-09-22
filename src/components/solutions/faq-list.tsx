"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-border rounded-3xl border border-border bg-card px-5">
      {faqs.map((faq) => (
        <Accordion.Item key={faq.q} value={faq.q}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold">
              {faq.q}
              <ChevronDown className="size-4 shrink-0 transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-sm leading-6 text-muted">{faq.a}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
