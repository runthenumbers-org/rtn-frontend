"use client";

import { SelectField } from "@/components/ui/form-controls";
import { currencies } from "@/lib/domain/currencies";

interface CurrencySelectProps {
  description: string;
  error?: string;
  label: string;
  name: string;
  optional?: boolean;
  value: string;
  onBlur?: () => void;
  onChange: (value: string) => void;
}

export function CurrencySelect({
  description,
  error,
  label,
  name,
  onBlur,
  onChange,
  optional = false,
  value,
}: CurrencySelectProps) {
  return (
    <SelectField
      description={description}
      error={error}
      label={label}
      name={name}
      required={!optional}
      value={value}
      onBlur={onBlur}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">
        {optional ? "No secondary currency" : "Select a currency"}
      </option>
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.name} ({currency.symbol} · {currency.code})
        </option>
      ))}
    </SelectField>
  );
}
