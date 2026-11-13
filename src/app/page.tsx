import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { MetricCard } from "@/components/metric-card";

export const metadata: Metadata = {
  title: "Dashboard",
};

const metrics = [
  {
    label: "Total products",
    value: "0",
    note: "Products in your catalog",
    icon: "products",
    tone: "blue",
  },
  {
    label: "Total stock quantity",
    value: "0",
    note: "Recorded stock units",
    icon: "inventory",
    tone: "teal",
  },
  {
    label: "Low stock products",
    value: "0",
    note: "Products needing attention",
    icon: "alert",
    tone: "amber",
  },
  {
    label: "Total inventory value",
    value: "0.00",
    note: "Currency not configured",
    icon: "value",
    tone: "slate",
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="page-eyebrow">Overview</p>
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">
          Your inventory at a glance. A clear starting point for the work ahead.
        </p>
      </header>

      <section aria-label="Inventory summary" className="metric-grid">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            note={metric.note}
            icon={metric.icon}
            tone={metric.tone}
          />
        ))}
      </section>

      <section className="activity-panel" aria-labelledby="activity-title">
        <div className="activity-panel__header">
          <div>
            <p className="section-eyebrow">Your stockroom</p>
            <h2 id="activity-title">Recent inventory activity</h2>
          </div>
          <span className="activity-period">Latest updates</span>
        </div>
        <div className="activity-empty-state">
          <span className="activity-empty-state__icon">
            <Icon name="activity" size={25} />
          </span>
          <h3>No inventory activity yet</h3>
          <p>
            Stock movements and updates will appear here as your team begins
            managing inventory.
          </p>
        </div>
      </section>
    </div>
  );
}
