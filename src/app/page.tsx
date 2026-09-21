import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
          RTN
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Cost every batch with clarity.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          A focused workspace for managing materials, planning production, and
          understanding true costs.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            href="/sign-up"
          >
            Create an account
          </Link>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-800 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
            href="/sign-in"
          >
            Sign in
          </Link>
        </div>
      </section>
    </main>
  );
}
