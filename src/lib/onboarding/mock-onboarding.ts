import type { BusinessType, CountryCode } from "@/lib/domain/business-options";
import type { CurrencyCode } from "@/lib/domain/currencies";

export interface BusinessDetailsInput {
  baseCurrency: CurrencyCode;
  businessName: string;
  businessType?: BusinessType;
  country?: CountryCode;
  secondaryCurrency?: CurrencyCode;
}

const pause = () => new Promise((resolve) => setTimeout(resolve, 650));

export async function saveBusinessDetails(input: BusinessDetailsInput) {
  await pause();

  if (input.businessName.trim().toLowerCase() === "error test") {
    throw new Error("Simulated onboarding failure");
  }
}
