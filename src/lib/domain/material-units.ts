export const materialUnitGroups = [
  {
    dimension: "Mass",
    units: [
      { value: "g", label: "Gram", abbreviation: "g" },
      { value: "kg", label: "Kilogram", abbreviation: "kg" },
    ],
  },
  {
    dimension: "Volume",
    units: [
      { value: "ml", label: "Millilitre", abbreviation: "ml" },
      { value: "L", label: "Litre", abbreviation: "L" },
    ],
  },
  {
    dimension: "Count",
    units: [{ value: "item", label: "Item", abbreviation: "item" }],
  },
] as const;

export type MaterialUnit =
  (typeof materialUnitGroups)[number]["units"][number]["value"];

const supportedUnits = new Set<string>(
  materialUnitGroups.flatMap((group) => group.units.map((unit) => unit.value)),
);

export function isMaterialUnit(value: string): value is MaterialUnit {
  return supportedUnits.has(value);
}

export function formatMaterialQuantity(quantity: number, unit: MaterialUnit) {
  const formattedQuantity = new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(quantity);

  if (unit === "item") {
    return `${formattedQuantity} ${quantity === 1 ? "item" : "items"}`;
  }

  return `${formattedQuantity} ${unit}`;
}
