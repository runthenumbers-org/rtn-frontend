import Link from "next/link";
import type { ReactNode } from "react";

import { routes } from "@/lib/routes";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f2e9] lg:grid lg:grid-cols-[minmax(22rem,0.82fr)_minmax(32rem,1.18fr)]">
      <section className="relative hidden overflow-hidden bg-[#071c16] px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between xl:px-16 xl:py-16">
        <div
          className="absolute -top-32 -left-32 size-96 rounded-full bg-lime-300/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute right-[-12rem] bottom-[-10rem] size-[30rem] rounded-full border border-lime-300/20"
          aria-hidden="true"
        />

        <Link
          className="relative w-fit rounded-md text-2xl font-bold tracking-[-0.06em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-300"
          href={routes.home}
        >
          RTN
        </Link>

        <div className="relative max-w-lg">
          <p className="text-sm font-bold tracking-[0.14em] text-lime-300 uppercase">
            Production costing with clarity
          </p>
          <h2 className="mt-6 text-5xl leading-[1.03] font-semibold tracking-[-0.05em] text-balance xl:text-6xl">
            Make every batch a better-informed decision.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-emerald-100/75">
            Keep materials, production quantities, packaging, and fixed costs in
            one practical workspace.
          </p>
        </div>

        <ul className="relative grid gap-4 text-sm text-emerald-100/80">
          <li className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-lime-300" />
            Understand the true cost of each finished unit
          </li>
          <li className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-lime-300" />
            Keep purchasing and production assumptions connected
          </li>
          <li className="flex items-center gap-3">
            <span className="size-1.5 rounded-full bg-lime-300" />
            Price from evidence instead of guesswork
          </li>
        </ul>
      </section>

      <section className="flex min-h-screen flex-col">
        <header className="flex h-20 items-center justify-between px-5 sm:px-8 lg:justify-end lg:px-12">
          <Link
            className="rounded-md text-2xl font-bold tracking-[-0.06em] text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 lg:hidden"
            href={routes.home}
          >
            RTN
          </Link>
          <Link
            className="text-sm font-semibold text-slate-700 transition hover:text-emerald-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            href={routes.home}
          >
            Back to home
          </Link>
        </header>

        <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </section>
    </main>
  );
}
