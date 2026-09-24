import type { Metadata } from "next";

import { BatchForm } from "@/components/batches/batch-form";

export const metadata: Metadata = {
  title: "Create batch",
  description: "Plan a production batch and calculate its material costs.",
};

export default function NewBatchPage() {
  return <BatchForm />;
}
