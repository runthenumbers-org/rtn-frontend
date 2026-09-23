import { AppShell } from "@/components/layout/app-shell";
import { AppRouteGate } from "@/components/auth/mock-route-gates";
import type { ReactNode } from "react";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <AppRouteGate>
      <AppShell>{children}</AppShell>
    </AppRouteGate>
  );
}
