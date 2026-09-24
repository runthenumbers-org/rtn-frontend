export const materialCategories = [
  "Ingredient",
  "Packaging",
  "Consumable",
] as const;

export type MaterialCategory = (typeof materialCategories)[number];
export type MaterialStockStatus = "In stock" | "Low stock" | "Out of stock";

export interface MaterialSummary {
  category: MaterialCategory;
  id: string;
  lastUpdated: string;
  name: string;
  packQuantity: number;
  purchasePrice: number;
  stockQuantity: number;
  stockStatus: MaterialStockStatus;
  supplier: string;
  unit: "g" | "kg" | "ml" | "L" | "item";
}

const returningUserMaterials: readonly MaterialSummary[] = [
  {
    category: "Ingredient",
    id: "sweet-almond-oil",
    lastUpdated: "2026-09-22T14:35:00Z",
    name: "Sweet almond oil",
    packQuantity: 5,
    purchasePrice: 38.5,
    stockQuantity: 7.5,
    stockStatus: "In stock",
    supplier: "The Soapery",
    unit: "L",
  },
  {
    category: "Ingredient",
    id: "lavender-essential-oil",
    lastUpdated: "2026-09-20T09:10:00Z",
    name: "Lavender essential oil",
    packQuantity: 500,
    purchasePrice: 24.75,
    stockQuantity: 620,
    stockStatus: "Low stock",
    supplier: "Aromantic",
    unit: "ml",
  },
  {
    category: "Packaging",
    id: "amber-glass-bottle-250ml",
    lastUpdated: "2026-09-18T16:45:00Z",
    name: "Amber glass bottle, 250 ml",
    packQuantity: 48,
    purchasePrice: 52.8,
    stockQuantity: 86,
    stockStatus: "In stock",
    supplier: "Ampulla",
    unit: "item",
  },
  {
    category: "Packaging",
    id: "black-lotion-pump",
    lastUpdated: "2026-09-16T11:20:00Z",
    name: "Black lotion pump",
    packQuantity: 100,
    purchasePrice: 31,
    stockQuantity: 0,
    stockStatus: "Out of stock",
    supplier: "Stocksmetic",
    unit: "item",
  },
  {
    category: "Ingredient",
    id: "colloidal-oatmeal",
    lastUpdated: "2026-09-12T13:05:00Z",
    name: "Colloidal oatmeal",
    packQuantity: 1,
    purchasePrice: 12.4,
    stockQuantity: 2.4,
    stockStatus: "In stock",
    supplier: "Gracefruit",
    unit: "kg",
  },
  {
    category: "Consumable",
    id: "nitrile-gloves",
    lastUpdated: "2026-09-08T08:30:00Z",
    name: "Nitrile gloves",
    packQuantity: 100,
    purchasePrice: 8.95,
    stockQuantity: 34,
    stockStatus: "Low stock",
    supplier: "Cleanroom Shop",
    unit: "item",
  },
];

export function getMockMaterials(journey: "new" | "returning") {
  return journey === "returning" ? returningUserMaterials : [];
}
