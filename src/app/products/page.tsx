import type { Metadata } from "next";
import { FeatureComingSoon } from "@/components/feature-coming-soon";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return <FeatureComingSoon title="Products" />;
}
