export const currencies = [
  { code: "AUD", name: "Australian dollar", symbol: "$" },
  { code: "CAD", name: "Canadian dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British pound", symbol: "£" },
  { code: "GHS", name: "Ghanaian cedi", symbol: "₵" },
  { code: "KES", name: "Kenyan shilling", symbol: "KSh" },
  { code: "NGN", name: "Nigerian naira", symbol: "₦" },
  { code: "USD", name: "United States dollar", symbol: "$" },
  { code: "ZAR", name: "South African rand", symbol: "R" },
] as const;

export type CurrencyCode = (typeof currencies)[number]["code"];

const supportedCurrencyCodes = new Set<string>(
  currencies.map((currency) => currency.code),
);

export function isCurrencyCode(value: string): value is CurrencyCode {
  return supportedCurrencyCodes.has(value);
}
