import { Icon } from "@/components/icons";

export function FeatureComingSoon({ title }: { title: string }) {
  return (
    <div className="page-container">
      <header className="page-heading">
        <p className="page-eyebrow">Workspace</p>
        <h1 className="page-title">{title}</h1>
        <p className="page-description">
          A clear place to manage your {title.toLowerCase()} workspace.
        </p>
      </header>

      <section className="coming-soon-panel" aria-labelledby="coming-soon-title">
        <span className="coming-soon-panel__icon">
          <Icon name="inventory" size={23} />
        </span>
        <p className="coming-soon-panel__eyebrow">StockPilot workspace</p>
        <h2 id="coming-soon-title">Feature coming soon</h2>
        <p>
          We’re preparing {title.toLowerCase()} tools for your inventory workflow.
          This section will be available here soon.
        </p>
      </section>
    </div>
  );
}
