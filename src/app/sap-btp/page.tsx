import type { Metadata } from "next";
import { SolutionView } from "@/components/solutions/solution-view";
import { pageMeta } from "@/lib/seo";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("sap-btp");

export const metadata: Metadata = pageMeta({
  title: solution.metaTitle,
  description: solution.description,
  path: solution.href,
});

export default function Page() {
  return <SolutionView solution={solution} />;
}
