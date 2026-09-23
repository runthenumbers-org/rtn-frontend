import type { Metadata } from "next";

import { FirstTimeDashboard } from "@/components/dashboard/first-time-dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Review activity across your RTN production workspace.",
};

export default function DashboardPage() {
  return <FirstTimeDashboard />;
}
