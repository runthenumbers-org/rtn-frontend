import type { Metadata } from "next";

import { DashboardOverview } from "@/components/dashboard/dashboard-overview";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Review activity across your RTN production workspace.",
};

export default function DashboardPage() {
  return <DashboardOverview />;
}
