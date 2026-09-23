"use client";

import { useRouter } from "next/navigation";
import { useEffect, useSyncExternalStore, type ReactNode } from "react";

import { LoadingState } from "@/components/ui/feedback";
import {
  getMockSessionServerSnapshot,
  getMockSessionSnapshot,
  subscribeToMockSession,
} from "@/lib/auth/mock-session";
import { routes } from "@/lib/routes";

function useMockSession() {
  return useSyncExternalStore(
    subscribeToMockSession,
    getMockSessionSnapshot,
    getMockSessionServerSnapshot,
  );
}

function RouteLoadingState() {
  return (
    <main className="min-h-screen bg-slate-50">
      <LoadingState label="Preparing your workspace" />
    </main>
  );
}

export function GuestRouteGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const session = useMockSession();

  useEffect(() => {
    if (session?.onboardingComplete) {
      router.replace(routes.dashboard);
    } else if (session) {
      router.replace(routes.onboarding);
    }
  }, [router, session]);

  if (session) {
    return <RouteLoadingState />;
  }

  return children;
}

export function OnboardingRouteGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const session = useMockSession();

  useEffect(() => {
    if (!session) {
      router.replace(routes.signUp);
    } else if (session.onboardingComplete) {
      router.replace(routes.dashboard);
    }
  }, [router, session]);

  if (!session || session.onboardingComplete) {
    return <RouteLoadingState />;
  }

  return children;
}

export function AppRouteGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const session = useMockSession();

  useEffect(() => {
    if (!session) {
      router.replace(routes.signIn);
    } else if (!session.onboardingComplete) {
      router.replace(routes.onboarding);
    }
  }, [router, session]);

  if (!session || !session.onboardingComplete) {
    return <RouteLoadingState />;
  }

  return children;
}
