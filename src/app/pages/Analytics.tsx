import { Card } from '../components/ui/card';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  conversionFunnelData, 
  admissionTrendData, 
  leadSourceData, 
  counselorPerformanceData 
} from '../data/mockData';

const COLORS = ['#2563EB', '#7C3AED', '#DB2777', '#EA580C', '#CA8A04'];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <p className="text-gray-500 mt-1">Comprehensive insights and performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">₹5.1M</h3>
              <p className="text-sm text-green-600 mt-1">+18.2% vs last month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">23.8%</h3>
              <p className="text-sm text-green-600 mt-1">+3.1% improvement</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Leads</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">1,234</h3>
              <p className="text-sm text-blue-600 mt-1">+156 this month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Growth Rate</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">+42%</h3>
              <p className="text-sm text-green-600 mt-1">Year over year</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Admission Trends */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Admission Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={admissionTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="enrolled" stroke="#2563EB" strokeWidth={3} name="Enrolled" />
              <Line type="monotone" dataKey="applications" stroke="#7C3AED" strokeWidth={3} name="Applications" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Lead Sources */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Sources Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={leadSourceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {leadSourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Lead Conversion Funnel */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="stage" type="category" width={150} />
              <Tooltip />
              <Bar dataKey="count" fill="#2563EB" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Counselor Performance */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Counselor Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={counselorPerformanceData}>
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

      {/* Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Counselors */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Counselors</h3>
          <div className="space-y-4">
            {counselorPerformanceData.map((counselor, index) => (
              <div key={counselor.name} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{counselor.name}</p>
                  <p className="text-sm text-gray-500">
                    {counselor.conversions} conversions from {counselor.leads} leads
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ₹{(counselor.revenue / 100000).toFixed(1)}L
                  </p>
                  <p className="text-xs text-gray-500">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Lead Sources */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Lead Sources</h3>
          <div className="space-y-4">
            {leadSourceData.map((source, index) => (
              <div key={source.name} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS[index] }}>
                  <span className="text-sm font-bold text-white">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{source.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${(source.value / Math.max(...leadSourceData.map(s => s.value))) * 100}%`,
                        backgroundColor: COLORS[index]
                      }}
                    ></div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{source.value}</p>
                  <p className="text-xs text-gray-500">Leads</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
