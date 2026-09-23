import type { Metadata } from "next";

import { BusinessDetailsForm } from "@/components/onboarding/business-details-form";

export const metadata: Metadata = {
  title: "Set up your business",
  description: "Configure the essential details for your RTN workspace.",
};

export default function OnboardingPage() {
  return (
    <section>
      <p className="text-sm font-bold tracking-[0.14em] text-emerald-800 uppercase">
        Business details
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
        Set up your business
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
        Tell us how your business operates so RTN can present costs and
        production information using the right defaults.
      </p>
      <BusinessDetailsForm />
    </section>
  );
}
