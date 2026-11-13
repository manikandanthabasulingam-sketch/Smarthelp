import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

type MetricTone = "blue" | "teal" | "amber" | "slate";

export function MetricCard({
  label,
  value,
  note,
  icon,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  icon: IconName;
  tone: MetricTone;
}) {
  return (
    <article className="metric-card">
      <div className="metric-card__topline">
        <span className="metric-card__label">{label}</span>
        <span className={`metric-icon metric-icon--${tone}`}>
          <Icon name={icon} size={19} />
        </span>
      </div>
      <p className="metric-card__value tabular-nums">{value}</p>
      <p className="metric-card__note">{note}</p>
    </article>
  );
}
