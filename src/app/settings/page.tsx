import type { Metadata } from "next";
import { FeatureComingSoon } from "@/components/feature-coming-soon";

export const metadata: Metadata = {
  title: "Settings",
};

export default function SettingsPage() {
  return <FeatureComingSoon title="Settings" />;
}
