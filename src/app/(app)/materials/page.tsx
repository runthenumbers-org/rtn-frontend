import type { Metadata } from "next";

import { MaterialsCatalogue } from "@/components/materials/materials-catalogue";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Manage material prices, suppliers, and stock for accurate production costing.",
};

export default function MaterialsPage() {
  return <MaterialsCatalogue />;
}
