import type { Metadata } from "next";

import { BatchDetail } from "@/components/batches/batch-detail";

export const metadata: Metadata = {
  title: "Batch details",
  description:
    "Review batch output, formulation lines, and recorded production costs.",
};

export default async function BatchPage({
  params,
}: PageProps<"/batches/[batchId]">) {
  const { batchId } = await params;
  return <BatchDetail batchId={batchId} />;
}
