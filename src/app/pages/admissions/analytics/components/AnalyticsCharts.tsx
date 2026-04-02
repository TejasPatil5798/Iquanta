import { Card } from "../../../../components/ui/card";
import type { AdmissionsInsights } from "../../../../lib/admissionsInsights";
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
import { analyticsColors } from "../analyticsData";

export function AnalyticsCharts({ insights }: { insights: AdmissionsInsights }) {
  return (
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
              strokeWidth={3}
              name="Enrolled"
            />
            <Line
              type="monotone"
              dataKey="applications"
              stroke="#7C3AED"
              strokeWidth={3}
              name="Applications"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Lead Sources Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={insights.leadSourceData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              dataKey="value"
            >
              {insights.leadSourceData.map((entry, index) => (
                <Cell
                  key={`lead-source-${entry.name}`}
                  fill={analyticsColors[index % analyticsColors.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          Lead Conversion Funnel
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={insights.conversionFunnelData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="stage" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="count" fill="#2563EB" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

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
            <Bar dataKey="leads" fill="#2563EB" name="Leads" />
            <Bar dataKey="conversions" fill="#10B981" name="Conversions" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
