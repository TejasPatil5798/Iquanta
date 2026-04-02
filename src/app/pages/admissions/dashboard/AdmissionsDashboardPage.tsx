import { useEffect, useState } from "react";
import type { AdmissionsSummary } from "../../../api/admissionsApi";
import { getAdmissionsSummary } from "../../../api/admissionsApi";
import { Badge } from "../../../components/ui/badge";
import { useAuth } from "../../../context/AuthContext";
import { getRoleLabel } from "../../../lib/portalRoles";
import { StaffDashboardView } from "./components/StaffDashboardView";
import { StatGrid } from "./components/StatGrid";
import { StudentDashboardView } from "./components/StudentDashboardView";

export function AdmissionsDashboardPage() {
  const { user } = useAuth();
  const role = user?.role ?? "user";
  const userName = user?.name;
  const roleLabel = getRoleLabel(role);
  const [summary, setSummary] = useState<AdmissionsSummary | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadSummary = async () => {
      try {
        const response = await getAdmissionsSummary();
        if (isMounted) {
          setSummary(response.data);
        }
      } catch (error) {
        console.error("Unable to load admissions summary", error);
      } finally {
        if (isMounted) {
          setSummaryLoading(false);
        }
      }
    };

    loadSummary();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {role === "student"
              ? "Student Admission Portal"
              : "Admissions Dashboard"}
          </h1>
          <p className="mt-1 text-gray-500">
            {role === "student"
              ? "Track your application progress, documents, and admission updates."
              : `Welcome back. Here's what matters today for the ${roleLabel.toLowerCase()} view.`}
          </p>
        </div>
        <Badge className="w-fit bg-slate-100 text-slate-700 hover:bg-slate-100">
          {roleLabel}
        </Badge>
      </div>

      <StatGrid
        role={role}
        summary={summary}
        loading={summaryLoading}
      />

      {role === "student" ? (
        <StudentDashboardView userName={userName} />
      ) : (
        <StaffDashboardView role={role} userName={userName} />
      )}
    </div>
  );
}
