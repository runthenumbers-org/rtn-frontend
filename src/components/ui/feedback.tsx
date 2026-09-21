import type { ReactNode } from "react";

interface StateProps {
  action?: ReactNode;
  description: string;
  title: string;
}

function StateLayout({ action, description, title }: StateProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center text-center">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = "Loading" }: LoadingStateProps) {
  return (
    <div
      className="flex min-h-48 items-center justify-center"
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <span
        className="size-6 animate-spin rounded-full border-2 border-slate-300 border-t-emerald-700 motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function EmptyState({ action, description, title }: StateProps) {
  return (
    <section className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12">
      <StateLayout action={action} description={description} title={title} />
    </section>
  );
}

export function ErrorState({ action, description, title }: StateProps) {
  return (
    <section
      className="rounded-xl border border-red-200 bg-red-50 px-6 py-8"
      aria-live="assertive"
      role="alert"
    >
      <StateLayout action={action} description={description} title={title} />
    </section>
  );
}

interface SuccessFeedbackProps {
  children: ReactNode;
  title?: string;
}

export function SuccessFeedback({
  children,
  title = "Changes saved",
}: SuccessFeedbackProps) {
  return (
    <div
      className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
      aria-live="polite"
      role="status"
    >
      <p className="font-medium">{title}</p>
      <div className="mt-1 text-sm leading-6 text-emerald-900">{children}</div>
    </div>
  );
}
