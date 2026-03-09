import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Leads } from "./pages/Leads";
import { Students } from "./pages/Students";
import { Applications } from "./pages/Applications";
import { Documents } from "./pages/Documents";
import { Communication } from "./pages/Communication";
import { Tasks } from "./pages/Tasks";
import { Analytics } from "./pages/Analytics";
import { Marketing } from "./pages/Marketing";
import { AIAssistant } from "./pages/AIAssistant";
import { UserManagement } from "./pages/UserManagement";
import { Settings } from "./pages/Settings";
import { Contacts } from "./pages/crm/Contacts";
import { Companies } from "./pages/crm/Companies";
import { Deals } from "./pages/crm/Deals";
import { Tickets } from "./pages/crm/Tickets";
import { Orders } from "./pages/crm/Orders";
import { Segments } from "./pages/crm/Segments";
import { Inbox } from "./pages/crm/Inbox";
import { Calls } from "./pages/crm/Calls";
import { TasksCRM } from "./pages/crm/TasksCRM";
import { Playbooks } from "./pages/crm/Playbooks";
import { MessageTemplates } from "./pages/crm/MessageTemplates";
import { Snippets } from "./pages/crm/Snippets";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "leads", Component: Leads },
      {
        path: "students",
        Component: Students,
        children: [
          { path: "applications", Component: Applications },
          { path: "documents", Component: Documents },
        ],
      },
      { path: "communication", Component: Communication },
      { path: "tasks", Component: Tasks },
      { path: "analytics", Component: Analytics },
      { path: "marketing", Component: Marketing },
      { path: "ai-assistant", Component: AIAssistant },
      { path: "user-management", Component: UserManagement },
      { path: "settings", Component: Settings },
      /* CRM MODULE */
      { path: "crm/contacts", Component: Contacts },
      { path: "crm/companies", Component: Companies },
      { path: "crm/deals", Component: Deals },
      { path: "crm/tickets", Component: Tickets },
      { path: "crm/orders", Component: Orders },
      { path: "crm/segments", Component: Segments },
      { path: "crm/inbox", Component: Inbox },
      { path: "crm/calls", Component: Calls },
      { path: "crm/tasks", Component: TasksCRM },
      { path: "crm/playbooks", Component: Playbooks },
      { path: "crm/message-templates", Component: MessageTemplates },
      { path: "crm/snippets", Component: Snippets },
    ],
  },
]);
