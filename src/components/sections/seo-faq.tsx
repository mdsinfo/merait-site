import { FaqJsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/solutions/faq-list";
import { seoFaqs } from "@/lib/faqs";

export function SeoFaq() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <h2 className="text-3xl font-semibold tracking-tight">Perguntas frequentes</h2>
      <div className="mt-6">
        <FaqJsonLd faqs={seoFaqs} />
        <FaqList faqs={seoFaqs} />
      </div>
    </section>
  );
}
