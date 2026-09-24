import type { Metadata } from "next";

import { BatchesCatalogue } from "@/components/batches/batches-catalogue";

export const metadata: Metadata = {
  title: "Batches",
  description:
    "Find production batches and review their output, status, and recorded costs.",
};

export default function BatchesPage() {
  return <BatchesCatalogue />;
}
