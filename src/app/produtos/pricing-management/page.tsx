import type { Metadata } from "next";
import { OwnedProductView } from "@/components/products/owned-product-view";
import { getOwnedProduct } from "@/lib/owned-products";
import { pageMeta } from "@/lib/seo";

const product = getOwnedProduct("pricing-management")!;

export const metadata: Metadata = pageMeta({
  title: "MERAIT Pricing Management",
  description: product.description,
  path: product.href,
});

export default function Page() {
  return <OwnedProductView product={product} />;
}
