interface PlaceholderPageProps {
  description: string;
  eyebrow: string;
  title: string;
}

export function PlaceholderPage({
  description,
  eyebrow,
  title,
}: PlaceholderPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
          {title}
        </h1>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </section>
    </main>
  );
}
