import type { ReactNode } from "react";

import { OnboardingRouteGate } from "@/components/auth/mock-route-gates";
import { OnboardingShell } from "@/components/onboarding/onboarding-shell";

export default function OnboardingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <OnboardingRouteGate>
      <OnboardingShell>{children}</OnboardingShell>
    </OnboardingRouteGate>
  );
}
