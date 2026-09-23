"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { EmptyState } from "@/components/ui/feedback";
import {
  getMockWorkspaceServerSnapshot,
  getMockWorkspaceSnapshot,
  subscribeToMockWorkspace,
} from "@/lib/onboarding/mock-workspace";
import { routes } from "@/lib/routes";

const primaryActionClassName =
  "inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800";

const secondaryActionClassName =
  "inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700";

export function FirstTimeDashboard() {
  const workspace = useSyncExternalStore(
    subscribeToMockWorkspace,
    getMockWorkspaceSnapshot,
    getMockWorkspaceServerSnapshot,
  );

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.12em] text-emerald-800 uppercase">
            {workspace?.businessName ?? "Your workspace"}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Welcome to RTN
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Start with the materials you purchase, then bring them together in
            your first production batch.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className={secondaryActionClassName} href={routes.newMaterial}>
            Create material
          </Link>
          <Link className={primaryActionClassName} href={routes.newBatch}>
            Create batch
          </Link>
        </div>
      </div>

      <section className="mt-10" aria-labelledby="workspace-summary-heading">
        <h2 className="sr-only" id="workspace-summary-heading">
          Workspace summary
        </h2>
        <dl className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-sm font-medium text-slate-600">Materials</dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              0
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-sm font-medium text-slate-600">Batches</dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              0
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <dt className="text-sm font-medium text-slate-600">
              Base currency
            </dt>
            <dd className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              {workspace?.baseCurrency ?? "—"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-10" aria-labelledby="recent-batches-heading">
        <div className="mb-4">
          <h2
            className="text-xl font-semibold tracking-tight text-slate-950"
            id="recent-batches-heading"
          >
            Recent batches
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Your latest production work will appear here.
          </p>
        </div>
        <EmptyState
          title="No batches yet"
          description="Create your first batch when you are ready to bring materials, quantities, packaging, and fixed costs together."
          action={
            <Link className={primaryActionClassName} href={routes.newBatch}>
              Create your first batch
            </Link>
          }
        />
      </section>
    </div>
  );
}
