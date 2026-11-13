import type { ReactNode } from "react";

export type IconName =
  | "dashboard"
  | "products"
  | "inventory"
  | "suppliers"
  | "reports"
  | "settings"
  | "menu"
  | "close"
  | "user"
  | "alert"
  | "value"
  | "activity";

const iconPaths: Record<IconName, ReactNode> = {
  dashboard: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </>
  ),
  products: (
    <>
      <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z" />
      <path d="m3.8 7.7 8.2 4.5 8.2-4.5M12 12.2V21" />
    </>
  ),
  inventory: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
      <path d="M7 4v6m10 4v6" />
    </>
  ),
  suppliers: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0M16 5a3.5 3.5 0 0 1 0 6.8M17.5 14.3a5.4 5.4 0 0 1 3.7 5.2" />
    </>
  ),
  reports: (
    <>
      <path d="M4 20V11m5 9V5m5 15v-7m5 7V8" />
      <path d="M2.5 20.5h19" />
    </>
  ),
  settings: (
    <>
      <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      <path d="m19.4 15 .1.1a1.7 1.7 0 1 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 1 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 1 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 1 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 1 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V2a1.7 1.7 0 1 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 1 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 1 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2 2.9Z" transform="translate(0.5 0.5) scale(0.96)" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 21 20H3l9-16.5Z" />
      <path d="M12 9v4.5m0 3h.01" />
    </>
  ),
  value: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M7.5 9h9m-9 6h3m4 0h1" />
    </>
  ),
  activity: (
    <>
      <path d="M3 12h4l2.2-5 4.1 10 2.2-5H21" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
};

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}
