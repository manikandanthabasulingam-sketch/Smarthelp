import type { Metadata } from "next";
import { FeatureComingSoon } from "@/components/feature-coming-soon";

export const metadata: Metadata = {
  title: "Reports",
};

export default function ReportsPage() {
  return <FeatureComingSoon title="Reports" />;
}
