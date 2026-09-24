import Link from "next/link";

import { routes } from "@/lib/routes";

const workflow = [
  {
    number: "01",
    title: "Build your material library",
    description:
      "Record what you buy, how much it costs, and the units your production team actually uses.",
  },
  {
    number: "02",
    title: "Plan the batch",
    description:
      "Combine priced ingredients, packaging, and target quantities in one clear workspace.",
  },
  {
    number: "03",
    title: "Price with confidence",
    description:
      "See the batch total and cost per finished unit before production begins.",
  },
] as const;

const capabilities = [
  {
    label: "Purchasing",
    title: "A single source of truth for material costs",
    description:
      "Keep supplier prices, pack sizes, currencies, and usable quantities connected to the products they affect.",
  },
  {
    label: "Production",
    title: "Unit-aware batch planning",
    description:
      "Work in the measurements that make sense on the production floor without losing sight of the original purchase cost.",
  },
  {
    label: "Pricing",
    title: "Costs you can explain",
    description:
      "Separate ingredient and packaging costs so every saved number has a clear origin—and every price has a rationale.",
  },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f2e9] text-slate-950">
      <a
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0 focus:outline-none"
        href="#main-content"
      >
        Skip to main content
      </a>

      <header className="relative z-20 border-b border-slate-950/10">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link
            className="rounded-md text-2xl font-bold tracking-[-0.06em] text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            href={routes.home}
          >
            RTN
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            <a
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
              href="#how-it-works"
            >
              How it works
            </a>
            <a
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
              href="#capabilities"
            >
              Capabilities
            </a>
            <a
              className="text-sm font-medium text-slate-700 transition hover:text-emerald-800"
              href="#who-its-for"
            >
              Who it&apos;s for
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              className="hidden min-h-11 items-center justify-center rounded-full px-4 text-sm font-semibold text-slate-800 transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 sm:inline-flex"
              href={routes.signIn}
            >
              Sign in
            </Link>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-950 px-5 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              href={routes.signUp}
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="relative border-b border-slate-950/10">
          <div
            className="absolute top-[-12rem] right-[-10rem] size-[30rem] rounded-full bg-lime-300/45 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-[-14rem] left-[-10rem] size-[28rem] rounded-full bg-emerald-300/25 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-28">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full border border-emerald-900/15 bg-white/60 px-4 py-2 text-xs font-bold tracking-[0.14em] text-emerald-900 uppercase backdrop-blur">
                Built for batch-based product businesses
              </p>
              <h1 className="mt-7 text-5xl leading-[0.98] font-semibold tracking-[-0.055em] text-balance sm:text-6xl lg:text-7xl">
                Know what every product costs before you make it.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
                RTN turns material purchases and production quantities into a
                clear estimated cost per batch—and a cost per output unit you
                can review.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-950 px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  href={routes.signUp}
                >
                  Start costing smarter
                </Link>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/20 bg-white/50 px-7 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                  href="#how-it-works"
                >
                  See how it works
                </a>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <li>Materials</li>
                <li aria-hidden="true">·</li>
                <li>Unit conversions</li>
                <li aria-hidden="true">·</li>
                <li>Batch planning</li>
                <li aria-hidden="true">·</li>
                <li>Cost clarity</li>
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div
                className="absolute -inset-5 -rotate-2 rounded-[2.25rem] border border-emerald-950/10 bg-lime-300/55"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-950/15 bg-[#0b241c] p-3 shadow-[0_32px_80px_-32px_rgba(6,35,25,0.65)] sm:p-5">
                <div className="rounded-2xl bg-[#f8f7f2] p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                    <div>
                      <p className="text-xs font-bold tracking-[0.12em] text-emerald-700 uppercase">
                        Example batch
                      </p>
                      <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                        Citrus body wash
                      </h2>
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                      Draft
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <p className="text-xs text-slate-500">Target output</p>
                      <p className="mt-2 text-lg font-semibold">120 units</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <p className="text-xs text-slate-500">Batch cost</p>
                      <p className="mt-2 text-lg font-semibold">£318.60</p>
                    </div>
                    <div className="rounded-xl bg-emerald-950 p-4 text-white shadow-sm">
                      <p className="text-xs text-emerald-100">Cost per unit</p>
                      <p className="mt-2 text-lg font-semibold">£2.66</p>
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl bg-white p-4 ring-1 ring-slate-200 sm:p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">Cost breakdown</h3>
                      <p className="text-xs text-slate-500">GBP</p>
                    </div>
                    <div className="mt-5 space-y-4">
                      <div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Ingredients</span>
                          <span className="font-medium">£184.20</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full w-[58%] rounded-full bg-emerald-700" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Packaging</span>
                          <span className="font-medium">£98.40</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full w-[31%] rounded-full bg-lime-500" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-600">Fixed costs</span>
                          <span className="font-medium">£36.00</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full w-[11%] rounded-full bg-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-950 px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-lime-300 uppercase">
                The costing gap
              </p>
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                Your spreadsheet knows numbers. RTN knows production.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3">
              <article className="bg-emerald-950 p-6 sm:p-7">
                <p className="text-lg font-semibold">Costs change</p>
                <p className="mt-3 text-sm leading-6 text-emerald-100/75">
                  Keep current supplier prices visible when planning the next
                  batch without rewriting previously saved costs.
                </p>
              </article>
              <article className="bg-emerald-950 p-6 sm:p-7">
                <p className="text-lg font-semibold">Units get messy</p>
                <p className="mt-3 text-sm leading-6 text-emerald-100/75">
                  You buy by the case, formulate by the gram, and sell by the
                  unit.
                </p>
              </article>
              <article className="bg-emerald-950 p-6 sm:p-7">
                <p className="text-lg font-semibold">Margins disappear</p>
                <p className="mt-3 text-sm leading-6 text-emerald-100/75">
                  Packaging costs can turn a promising price into an expensive
                  guess when they are not tracked alongside ingredients.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="border-b border-slate-950/10 px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          id="how-it-works"
        >
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.14em] text-emerald-800 uppercase">
                How it works
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                From supplier invoice to confident selling price.
              </h2>
            </div>

            <ol className="mt-14 grid gap-5 lg:grid-cols-3">
              {workflow.map((step) => (
                <li
                  className="rounded-2xl border border-slate-950/10 bg-white/55 p-7 backdrop-blur sm:p-8"
                  key={step.number}
                >
                  <span className="font-mono text-sm font-semibold text-emerald-700">
                    {step.number}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="bg-[#ece8dc] px-5 py-20 sm:px-8 sm:py-28 lg:px-10"
          id="capabilities"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <p className="text-sm font-bold tracking-[0.14em] text-emerald-800 uppercase">
                  One connected workspace
                </p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
                  Make decisions from the same cost picture.
                </h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                  RTN keeps purchasing details and production assumptions close
                  enough to reveal what changed—and what it means for your
                  product.
                </p>
              </div>

              <div className="divide-y divide-slate-950/10 border-y border-slate-950/10">
                {capabilities.map((capability) => (
                  <article
                    className="grid gap-3 py-7 sm:grid-cols-[8rem_1fr] sm:gap-6 sm:py-8"
                    key={capability.label}
                  >
                    <p className="text-xs font-bold tracking-[0.12em] text-emerald-700 uppercase">
                      {capability.label}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {capability.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {capability.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y border-slate-950/10 bg-lime-300 px-5 py-16 sm:px-8 lg:px-10"
          id="who-its-for"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold tracking-[0.14em] text-emerald-950 uppercase">
                Made for people who make things
              </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl">
                Food, skincare, candles, home fragrance, beverages, and every
                growing product business where the batch matters.
              </h2>
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-950 px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950"
              href={routes.signUp}
            >
              Build your first batch
            </Link>
          </div>
        </section>

        <section className="bg-[#071c16] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold tracking-[0.14em] text-lime-300 uppercase">
              Make the numbers make sense
            </p>
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-6xl">
              Price the product you actually make—not the one in the
              spreadsheet.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-emerald-100/75">
              Bring your materials, batches, and costs into one practical
              workspace built for day-to-day production decisions.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-lime-300 px-7 font-semibold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                href={routes.signUp}
              >
                Get started with RTN
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-7 font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                href={routes.signIn}
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071c16] px-5 py-8 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-emerald-100/65 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold tracking-tight text-white">RTN</p>
          <p>Production costing with clarity.</p>
        </div>
      </footer>
    </div>
  );
}
