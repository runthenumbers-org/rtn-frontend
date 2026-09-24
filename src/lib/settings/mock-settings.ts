import {
  isBusinessType,
  isCountryCode,
  type BusinessType,
  type CountryCode,
} from "@/lib/domain/business-options";
import { isCurrencyCode, type CurrencyCode } from "@/lib/domain/currencies";
import { saveMockWorkspace } from "@/lib/onboarding/mock-workspace";

export interface BusinessSettingsInput {
  baseCurrency: CurrencyCode;
  businessName: string;
  businessType?: BusinessType;
  country?: CountryCode;
  secondaryCurrency?: CurrencyCode;
}

export async function saveMockBusinessSettings(input: BusinessSettingsInput) {
  if (
    input.businessName.trim().length < 2 ||
    !isCurrencyCode(input.baseCurrency) ||
    (input.secondaryCurrency !== undefined &&
      !isCurrencyCode(input.secondaryCurrency)) ||
    input.secondaryCurrency === input.baseCurrency ||
    (input.businessType !== undefined && !isBusinessType(input.businessType)) ||
    (input.country !== undefined && !isCountryCode(input.country))
  ) {
    throw new Error("INVALID_BUSINESS_SETTINGS");
  }

  await new Promise((resolve) => window.setTimeout(resolve, 350));

  const workspace = {
    ...input,
    businessName: input.businessName.trim(),
  };
  saveMockWorkspace(workspace);
  return workspace;
}
