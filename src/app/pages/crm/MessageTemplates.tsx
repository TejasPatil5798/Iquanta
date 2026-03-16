import { Search, Plus, MoreHorizontal } from "lucide-react";

export function MessageTemplates() {
  const templates = [
    {
      id: 1,
      name: "Welcome Email",
      category: "Sales",
      createdBy: "Admin User",
      updated: "2 days ago",
    },
    {
      id: 2,
      name: "Follow-up Reminder",
      category: "Support",
      createdBy: "Admin User",
      updated: "5 days ago",
    },
    {
      id: 3,
      name: "Payment Confirmation",
      category: "Finance",
      createdBy: "Admin User",
      updated: "1 week ago",
    },
  ];

  return (
    <div className="p-6 bg-[#F5F8FA] min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-[#33475B]">
            Message Templates
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage reusable templates for emails, messages, and CRM communication.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
          <Plus className="w-4 h-4" />
          Create Template
        </button>
      </div>

      {/* Search + Filters */}
      <div className="bg-white rounded-xl shadow-sm border p-4 mb-6 flex items-center justify-between">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"/>
          <input
            type="text"
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
            All
          </button>
          <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
            Sales
          </button>
          <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
            Support
          </button>
          <button className="px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
            Finance
          </button>
        </div>
      </div>

      {/* Templates Table */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#F8FAFC] border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Template Name
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Category
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Created By
              </th>
              <th className="px-6 py-3 text-sm font-medium text-gray-600">
                Last Updated
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>

          <tbody>
            {templates.map((template) => (
              <tr key={template.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-[#33475B]">
                  {template.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {template.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {template.createdBy}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {template.updated}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreHorizontal className="w-4 h-4 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}