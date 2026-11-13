import type { Metadata } from "next";
import { FeatureComingSoon } from "@/components/feature-coming-soon";

export const metadata: Metadata = {
  title: "Inventory",
};

export default function InventoryPage() {
  return <FeatureComingSoon title="Inventory" />;
}
