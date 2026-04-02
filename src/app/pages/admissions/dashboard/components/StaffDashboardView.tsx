import { useEffect, useState } from "react";
import {
  getApplications,
  getFollowUps,
  getInteractions,
  getLeads,
  type PortalApplication,
  type PortalFollowUp,
  type PortalInteraction,
  type PortalLead,
} from "../../../../api/admissionsEntitiesApi";
import { Badge } from "../../../../components/ui/badge";
import { Card } from "../../../../components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  buildAdmissionsInsights,
  buildRecentActivities,
  buildVisibleTasks,
} from "../../../../lib/admissionsInsights";
import { dashboardChartColors } from "../dashboardData";

export function StaffDashboardView({
  role,
  userName,
}: {
  role: string;
  userName?: string;
}) {
  const [leads, setLeads] = useState<PortalLead[]>([]);
  const [applications, setApplications] = useState<PortalApplication[]>([]);
  const [followUps, setFollowUps] = useState<PortalFollowUp[]>([]);
  const [interactions, setInteractions] = useState<PortalInteraction[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadStaffData = async () => {
      try {
        const [leadsResponse, applicationsResponse, followUpsResponse, interactionsResponse] =
          await Promise.all([
            getLeads(),
            getApplications(),
            getFollowUps(),
            getInteractions(),
          ]);

        if (isMounted) {
          setLeads(leadsResponse.data);
          setApplications(applicationsResponse.data);
          setFollowUps(followUpsResponse.data);
          setInteractions(interactionsResponse.data);
        }
      } catch (error) {
        console.error("Unable to load dashboard insights", error);
      }
    };

    loadStaffData();

    return () => {
      isMounted = false;
    };
  }, []);

  const insights = buildAdmissionsInsights(leads, applications);
  const visibleTasks = buildVisibleTasks(role, userName, followUps);
  const visibleActivities = buildRecentActivities(role, leads, interactions);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Admission Trends
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={insights.admissionTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="enrolled"
                stroke="#2563EB"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#7C3AED"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Lead Sources
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={insights.leadSourceData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {insights.leadSourceData.map((entry, index) => (
                  <Cell
                    key={`lead-source-${entry.name}`}
                    fill={dashboardChartColors[index % dashboardChartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {role === "user" ? "My Tasks" : "Operations Queue"}
            </h3>
            <span className="text-sm font-medium text-blue-600">
              {visibleTasks.length} items
            </span>
          </div>

          <div className="space-y-3">
            {visibleTasks.slice(0, 5).map((task) => (
              <div
                key={task._id}
                className="rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {task.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {task.relatedTo}
                    </p>
                  </div>
                  <Badge
                    className={
                      task.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : task.priority === "Medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <p className="mt-3 text-xs text-gray-500">
                  Due {new Date(task.dueDate).toLocaleDateString()} · Related to {task.relatedTo}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {visibleActivities.slice(0, 5).map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 border-b border-gray-100 pb-4 last:border-b-0"
              >
                <div className="mt-2 h-2 w-2 rounded-full bg-blue-600"></div>
                <div>
                  <p className="text-sm text-gray-900">
                    {activity.action} for{" "}
                    <span className="font-medium">{activity.target}</span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {role === "manager" && (
        <Card className="p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Counselor Performance
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={insights.counselorPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversions" fill="#2563EB" />
              <Bar dataKey="leads" fill="#7C3AED" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      )}
    </>
  );
}
