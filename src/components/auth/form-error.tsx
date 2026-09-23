export function FormError({ children }: { children: string }) {
  return (
    <div
      className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
      role="alert"
    >
      {children}
    </div>
  );
}
