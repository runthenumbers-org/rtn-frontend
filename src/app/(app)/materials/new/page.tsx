import type { Metadata } from "next";

import { MaterialForm } from "@/components/materials/material-form";

export const metadata: Metadata = {
  title: "Create material",
  description: "Add purchasing and stock details for a production material.",
};

export default function NewMaterialPage() {
  return <MaterialForm />;
}
