import React from "react";

export function DevDevelopment() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-lg font-semibold mb-4">Development</h1>

        <nav className="space-y-2 text-sm">
          <div className="bg-gray-100 p-2 rounded font-medium">Overview</div>
          <div className="p-2 hover:bg-gray-100 rounded">Projects</div>
          <div className="p-2 hover:bg-gray-100 rounded">Legacy Apps</div>
          <div className="p-2 hover:bg-gray-100 rounded flex justify-between">
            MCP Auth Apps
            <span className="text-xs bg-purple-100 px-2 rounded">Beta</span>
          </div>
          <div className="p-2 hover:bg-gray-100 rounded">Design Manager</div>

          <div className="mt-4 text-gray-500 text-xs">Monitoring</div>
          <div className="p-2 hover:bg-gray-100 rounded">Keys</div>

          <div className="mt-4 text-gray-500 text-xs">Testing</div>
          <div className="p-2 hover:bg-gray-100 rounded">Test Accounts</div>
          <div className="p-2 hover:bg-gray-100 rounded">Domain</div>

          <div className="mt-4 text-gray-500 text-xs">App Listings</div>
          <div className="p-2 hover:bg-gray-100 rounded">
            Technology Partner
          </div>

          <div className="mt-4 p-2 hover:bg-gray-100 rounded">
            Documentation ↗
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Your Header (Added as requested) */}
        <div>
          <h1 className="text-3xl font-bold">Development</h1>
          <p className="mt-4 mb-6">
            Developer tools and integrations
          </p>
        </div>

        {/* HubSpot Section */}
        <h2 className="text-xl font-semibold mb-4">
          Customize experiences with HubSpot Development
        </h2>

        <ul className="space-y-2 text-sm mb-6">
          <li>→ Create App Cards and other extensions using React</li>
          <li>→ Define custom CRM objects and properties</li>
          <li>→ Request access to advanced features</li>
          <li>→ Publish on the App Marketplace</li>
        </ul>

        {/* CLI */}
        <h3 className="text-lg font-semibold mb-2">
          Install the HubSpot CLI to get started
        </h3>
        <div className="bg-black text-white p-3 rounded mb-2 text-sm">
          npm install -g @hubspot/cli && hs init
        </div>
        <p className="text-sm text-gray-600 mb-6">
          HubSpot apps use JavaScript. Node.js is required.
        </p>

        {/* Create App */}
        <h3 className="text-lg font-semibold mb-2">
          Create your first HubSpot app
        </h3>
        <div className="bg-black text-white p-3 rounded mb-6 text-sm">
          hs get-started
        </div>

        {/* CMS Box */}
        <div className="border rounded p-4 mb-6 bg-white flex justify-between items-center">
          <div>
            <h4 className="font-medium mb-1">
              Looking for the HubSpot CMS?
            </h4>
            <p className="text-sm text-gray-600">
              Start in Design Manager to create websites and more.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded text-sm">
              Start in Design Manager
            </button>
            <button className="text-sm text-gray-500">
              Dismiss
            </button>
          </div>
        </div>

        {/* Help */}
        <h3 className="font-semibold mb-2">
          Not sure where to start?
        </h3>

        <div className="border rounded p-4 mb-6 bg-white flex justify-between items-center">
          <div>
            <h4 className="font-medium mb-1">See how it all works</h4>
            <p className="text-sm text-gray-600">
              Learn what you can build with HubSpot's tools.
            </p>
          </div>
          <div className="w-32 h-20 bg-gray-200 rounded"></div>
        </div>

        {/* Docs + Samples */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">Read our docs</h4>
            <p className="text-sm text-gray-600 mb-2">
              Understand best practices and guidelines.
            </p>
            <button className="text-blue-600 text-sm">
              View developer docs ↗
            </button>
          </div>

          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">View sample apps</h4>
            <p className="text-sm text-gray-600 mb-2">
              Explore sample apps to guide you.
            </p>
            <button className="text-blue-600 text-sm">
              View Sample Apps ↗
            </button>
          </div>
        </div>

        {/* Advanced */}
        <h3 className="font-semibold mb-4">
          Advanced features
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">App Objects</h4>
            <p className="text-sm text-gray-600 mb-2">
              Define custom data models inside CRM.
            </p>
            <button className="text-blue-600 text-sm">
              Learn more ↗
            </button>
          </div>

          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">App Events</h4>
            <p className="text-sm text-gray-600 mb-2">
              Send and receive event-driven data.
            </p>
            <button className="text-blue-600 text-sm">
              Learn more ↗
            </button>
          </div>

          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">Agent Tools</h4>
            <p className="text-sm text-gray-600 mb-2">
              Create intelligent agents.
            </p>
            <div className="flex justify-between">
              <button className="text-blue-600 text-sm">
                Learn more ↗
              </button>
              <button className="text-blue-600 text-sm">
                Join beta ↗
              </button>
            </div>
          </div>

          <div className="border rounded p-4 bg-white">
            <h4 className="font-medium mb-2">
              HubSpot remote MCP server
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              Build secure integrations powered by data.
            </p>
            <div className="flex justify-between">
              <button className="text-blue-600 text-sm">
                Learn more ↗
              </button>
              <button className="text-blue-600 text-sm">
                Join beta ↗
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}