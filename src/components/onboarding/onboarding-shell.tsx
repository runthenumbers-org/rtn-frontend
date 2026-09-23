import type { ReactNode } from "react";

interface OnboardingShellProps {
  children: ReactNode;
}

const setupSteps = [
  {
    label: "Business details",
    description: "Name, location, and operating preferences",
    status: "current",
  },
  {
    label: "Ready to cost",
    description: "Continue into your new workspace",
    status: "upcoming",
  },
] as const;

export function OnboardingShell({ children }: OnboardingShellProps) {
  return (
    <main className="min-h-screen bg-[#f5f2e9] text-slate-950">
      <a
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0 focus:outline-none"
        href="#onboarding-content"
      >
        Skip to business details
      </a>
      <header className="border-b border-slate-950/10 bg-[#f5f2e9]/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <p className="text-2xl font-bold tracking-[-0.06em] text-emerald-950">
            RTN
          </p>
          <p className="text-sm font-semibold text-slate-600">
            Workspace setup
          </p>
        </div>
      </header>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl lg:grid-cols-[21rem_minmax(0,1fr)]">
        <aside className="border-b border-slate-950/10 bg-emerald-950 px-5 py-8 text-white sm:px-8 lg:border-r lg:border-b-0 lg:px-8 lg:py-12">
          <div className="lg:sticky lg:top-12">
            <p className="text-xs font-bold tracking-[0.14em] text-lime-300 uppercase">
              Your workspace
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight">
              Start with the essentials.
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-100/75">
              These details establish the defaults RTN will use when presenting
              costs and planning production.
            </p>

            <div className="mt-8" aria-label="Setup progress">
              <div className="flex items-center justify-between text-xs font-semibold text-emerald-100/70">
                <span>Step 1 of 2</span>
                <span>50%</span>
              </div>
              <div
                className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15"
                role="progressbar"
                aria-label="Workspace setup progress"
                aria-valuemin={0}
                aria-valuemax={2}
                aria-valuenow={1}
              >
                <div className="h-full w-1/2 rounded-full bg-lime-300" />
              </div>
            </div>

            <ol className="mt-8 grid gap-5">
              {setupSteps.map((step, index) => {
                const isCurrent = step.status === "current";

                return (
                  <li className="flex gap-4" key={step.label}>
                    <span
                      className={[
                        "flex size-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold",
                        isCurrent
                          ? "border-lime-300 bg-lime-300 text-emerald-950"
                          : "border-white/25 text-emerald-100/65",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p
                        className={
                          isCurrent
                            ? "font-semibold text-white"
                            : "font-medium text-emerald-100/70"
                        }
                        aria-current={isCurrent ? "step" : undefined}
                      >
                        {step.label}
                      </p>
                      <p className="mt-1 text-sm leading-5 text-emerald-100/55">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>

        <section
          className="flex items-start justify-center px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16"
          id="onboarding-content"
          tabIndex={-1}
        >
          <div className="w-full max-w-2xl rounded-2xl border border-slate-950/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)] sm:p-9 lg:p-10">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
