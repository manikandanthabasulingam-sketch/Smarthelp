"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";
import type { IconName } from "@/components/icons";

const navigationItems: { label: string; href: string; icon: IconName }[] = [
  { label: "Dashboard", href: "/", icon: "dashboard" },
  { label: "Products", href: "/products", icon: "products" },
  { label: "Inventory", href: "/inventory", icon: "inventory" },
  { label: "Suppliers", href: "/suppliers", icon: "suppliers" },
  { label: "Reports", href: "/reports", icon: "reports" },
  { label: "Settings", href: "/settings", icon: "settings" },
];

function NavigationLinks({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <nav aria-label="Primary navigation" className="sidebar-navigation">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={`navigation-link${isActive ? " navigation-link--active" : ""}`}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function BrandMark() {
  return (
    <span aria-hidden="true" className="brand-mark">
      <span />
      <span />
      <span />
    </span>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isMobileNavigationOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isMobileNavigationOpen && dialog.open) {
      dialog.close();
    }
  }, [isMobileNavigationOpen]);

  const closeMobileNavigation = () => setIsMobileNavigationOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="app-shell">
        <aside aria-label="StockPilot sidebar" className="desktop-sidebar">
          <Link href="/" className="sidebar-brand">
            <BrandMark />
            <span>StockPilot</span>
          </Link>
          <p className="sidebar-caption">INVENTORY WORKSPACE</p>
          <NavigationLinks
            pathname={pathname}
            onNavigate={closeMobileNavigation}
          />
          <div className="sidebar-footer">
            <span className="sidebar-footer__dot" />
            <span>Inventory workspace</span>
          </div>
        </aside>

        <div className="app-panel">
          <header className="topbar">
            <div className="topbar-brand-group">
              <button
                type="button"
                className="mobile-menu-button"
                aria-label="Open navigation"
                aria-expanded={isMobileNavigationOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMobileNavigationOpen(true)}
              >
                <Icon name="menu" size={21} />
              </button>
              <Link href="/" className="topbar-brand">
                <BrandMark />
                <span>StockPilot</span>
              </Link>
            </div>
            <div className="workspace-user" aria-label="User profile placeholder">
              <span className="workspace-user__avatar">
                <Icon name="user" size={18} />
              </span>
              <span className="workspace-user__name">Workspace user</span>
            </div>
          </header>

          <main id="main-content" className="main-content">
            {children}
          </main>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="StockPilot navigation"
        onClose={() => setIsMobileNavigationOpen(false)}
      >
        <div className="mobile-navigation__inner">
          <div className="mobile-navigation__header">
            <Link href="/" className="sidebar-brand" onClick={closeMobileNavigation}>
              <BrandMark />
              <span>StockPilot</span>
            </Link>
            <button
              type="button"
              className="mobile-close-button"
              aria-label="Close navigation"
              onClick={closeMobileNavigation}
            >
              <Icon name="close" size={19} />
            </button>
          </div>
          <p className="sidebar-caption">INVENTORY WORKSPACE</p>
          <NavigationLinks
            pathname={pathname}
            onNavigate={closeMobileNavigation}
          />
          <div className="sidebar-footer">
            <span className="sidebar-footer__dot" />
            <span>Inventory workspace</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
