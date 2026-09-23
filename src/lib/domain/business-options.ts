export const businessTypes = [
  { value: "beauty-personal-care", label: "Beauty and personal care" },
  { value: "food-beverage", label: "Food and beverage" },
  { value: "home-fragrance", label: "Candles and home fragrance" },
  { value: "household-goods", label: "Household goods" },
  { value: "other", label: "Other product business" },
] as const;

export type BusinessType = (typeof businessTypes)[number]["value"];

export const countries = [
  { value: "AU", label: "Australia" },
  { value: "CA", label: "Canada" },
  { value: "GH", label: "Ghana" },
  { value: "KE", label: "Kenya" },
  { value: "NG", label: "Nigeria" },
  { value: "ZA", label: "South Africa" },
  { value: "GB", label: "United Kingdom" },
  { value: "US", label: "United States" },
] as const;

export type CountryCode = (typeof countries)[number]["value"];

const businessTypeValues = new Set<string>(
  businessTypes.map((businessType) => businessType.value),
);
const countryValues = new Set<string>(
  countries.map((country) => country.value),
);

export function isBusinessType(value: string): value is BusinessType {
  return businessTypeValues.has(value);
}

export function isCountryCode(value: string): value is CountryCode {
  return countryValues.has(value);
}
