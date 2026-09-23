import type { CurrencyCode } from "@/lib/domain/currencies";

export interface RecentBatchSummary {
  costPerUnit: number;
  name: string;
  outputUnits: number;
  status: "Costed" | "Draft";
  totalCost: number;
}

export interface DashboardViewModel {
  batchCount: number;
  materialCount: number;
  recentBatches: readonly RecentBatchSummary[];
  recordedBatchCosts: number;
}

const returningUserDashboard: DashboardViewModel = {
  batchCount: 4,
  materialCount: 12,
  recordedBatchCosts: 1284.4,
  recentBatches: [
    {
      costPerUnit: 2.66,
      name: "Citrus body wash",
      outputUnits: 120,
      status: "Costed",
      totalCost: 318.6,
    },
    {
      costPerUnit: 4.05,
      name: "Amber candle",
      outputUnits: 48,
      status: "Draft",
      totalCost: 194.4,
    },
    {
      costPerUnit: 2.36,
      name: "Oat cleansing bar",
      outputUnits: 96,
      status: "Costed",
      totalCost: 226.56,
    },
  ],
};

const newUserDashboard: DashboardViewModel = {
  batchCount: 0,
  materialCount: 0,
  recentBatches: [],
  recordedBatchCosts: 0,
};

export function getMockDashboard(journey: "new" | "returning") {
  return journey === "returning" ? returningUserDashboard : newUserDashboard;
}

export function formatCurrency(amount: number, currency: CurrencyCode) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}
