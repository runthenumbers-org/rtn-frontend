import Link from "next/link";
import type { ReactNode } from "react";

import { routes } from "@/lib/routes";

const navigation = [
  { href: routes.dashboard, label: "Dashboard" },
  { href: routes.materials, label: "Materials" },
  { href: routes.batches, label: "Batches" },
  { href: routes.settings, label: "Settings" },
] as const;

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <a
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0 focus:outline-none"
        href="#main-content"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-baseline gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            href={routes.dashboard}
          >
            <span className="text-xl font-bold tracking-tight text-emerald-800">
              RTN
            </span>
            <span className="hidden text-sm text-slate-500 sm:inline">
              Production costing
            </span>
          </Link>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-screen-2xl md:grid-cols-[15rem_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-4rem)] border-r border-slate-200 bg-white md:block">
          <div className="sticky top-16 p-4 lg:p-6">
            <p className="px-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Workspace
            </p>
            <nav className="mt-3" aria-label="Primary navigation">
              <ul className="grid gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <main
          className="min-w-0 px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
