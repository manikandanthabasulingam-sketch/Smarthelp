import type { Metadata } from "next";
import { FeatureComingSoon } from "@/components/feature-coming-soon";

export const metadata: Metadata = {
  title: "Suppliers",
};

export default function SuppliersPage() {
  return <FeatureComingSoon title="Suppliers" />;
}
