import type { ReactNode } from "react";
import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layout/MainLayout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Leads } from "./pages/Leads";
import { Students } from "./pages/Students";
import { Applications } from "./pages/Applications";
import { Documents } from "./pages/Documents";
import { Communication } from "./pages/Communication";
import { Tasks } from "./pages/Tasks";
import { Analytics } from "./pages/Analytics";
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
import { MktMarketing } from "./pages/marketing/mkt-marketing";
import { MktEmail } from "./pages/marketing/mkt-email";
import { MktSocial } from "./pages/marketing/mkt-social";
import { MktAds } from "./pages/marketing/mkt-ads";
import { MktEvents } from "./pages/marketing/mkt-events";
import { MktForms } from "./pages/marketing/mkt-forms";
import { MktBuyerIntent } from "./pages/marketing/mkt-buyer-intent";
import { MktLeadScoring } from "./pages/marketing/mkt-lead-scoring";
// CONTENT MODULE
import { CntWebsitePages } from "./pages/content/cnt-website-pages";
import { CntLandingPages } from "./pages/content/cnt-landing-pages";
import { CntBlogs } from "./pages/content/cnt-blogs";
import { CntVideos } from "./pages/content/cnt-videos";
import { CntPodcast } from "./pages/content/cnt-podcast";
import { CntCaseStudies } from "./pages/content/cnt-case-studies";
import { CntEmbeds } from "./pages/content/cnt-embeds";
import { CntRemix } from "./pages/content/cnt-remix";
import { CntSeo } from "./pages/content/cnt-seo";
import { CntMemberships } from "./pages/content/cnt-memberships";
import { CntDesignManager } from "./pages/content/cnt-design-manager";
import { CntBrand } from "./pages/content/cnt-brand";
// SALES MODULE
import { SalesWorkspace } from "./pages/sales/sales-workspace";
import { SalesDocuments } from "./pages/sales/sales-documents";
import { SalesMeetingsScheduler } from "./pages/sales/sales-meetings-scheduler";
import { SalesSequences } from "./pages/sales/sales-sequences";
import { SalesActivityFeed } from "./pages/sales/sales-activity-feed";
import { SalesForecast } from "./pages/sales/sales-forecast";
import { SalesAnalytics } from "./pages/sales/sales-analytics";
import { StudentPortalPage } from "./pages/admissions/student-portal/StudentPortalPage";
// COMMERCE MODULE
import { ComOverview } from "./pages/commerce/com-overview";
import { ComQuotes } from "./pages/commerce/com-quotes";
import { ComProducts } from "./pages/commerce/com-products";
import { ComInvoices } from "./pages/commerce/com-invoices";
import { ComPayments } from "./pages/commerce/com-payments";
import { ComPaymentLinks } from "./pages/commerce/com-payment-links";
import { ComSubscriptions } from "./pages/commerce/com-subscriptions";
import { ComAnalytics } from "./pages/commerce/com-analytics";
//service module
import { ServHelpDesk } from "./pages/service/serv-help-desk";
import { ServCustomerSuccess } from "./pages/service/serv-customer-success";
import { ServCustomerAgent } from "./pages/service/serv-customer-agent";
import { ServChatFlows } from "./pages/service/serv-chat-flows";
import { ServKnowledgeBase } from "./pages/service/serv-knowledge-base";
import { ServCustomerPortal } from "./pages/service/serv-customer-portal";
import { ServFeedbackSurveys } from "./pages/service/serv-feedback-surveys";
import { ServAnalytics } from "./pages/service/serv-analytics";
// automation module
import { AutoOverview } from "./pages/automation/auto-overview";
import { AutoWorkflows } from "./pages/automation/auto-workflows";
// reporting module
import { RepDashboards } from "./pages/reporting/rep-dashboards";
import { RepReports } from "./pages/reporting/rep-reports";
import { RepGoals } from "./pages/reporting/rep-goals";
// data management module
import { DataAgent } from "./pages/data-management/data-agent";
import { DataIntegration } from "./pages/data-management/data-integration";
import { EventManagement } from "./pages/data-management/event-management";
import { DataQuality } from "./pages/data-management/data-quality";
import { DataStudio } from "./pages/data-management/data-studio";
import { DataModel } from "./pages/data-management/data-model";
import { DataEnrichment } from "./pages/data-management/data-enrichment";
// Breeze Studio
import { BrzStudio } from "./pages/breeze/brz-studio";
import { BrzKnowledgeVaults } from "./pages/breeze/brz-knowledge-vaults";
import { BrzMarketplace } from "./pages/breeze/brz-marketplace";
// development module
import { DevDevelopment } from "./pages/development/dev-development";
import { Signup } from "./pages/Signup";
// other imports...
import { ProtectedRoute } from "./components/ProtectedRoute";
import { RoleRoute } from "./components/RoleRoute";

const withRoles = (element: ReactNode, allowedRoles: string[]) => (
  <RoleRoute allowedRoles={allowedRoles}>{element}</RoleRoute>
);

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "leads", element: withRoles(<Leads />, ["admin", "user", "teacher", "manager"]) },
      {
        path: "students",
        element: withRoles(<Students />, ["admin", "user", "manager", "student"]),
        children: [
          { path: "applications", element: withRoles(<Applications />, ["admin", "user", "manager", "student"]) },
          { path: "documents", element: withRoles(<Documents />, ["admin", "user", "manager", "student"]) },
        ],
      },
      { path: "student-portal", element: withRoles(<StudentPortalPage />, ["student"]) },
      { path: "communication", element: withRoles(<Communication />, ["admin", "user", "manager", "student"]) },
      { path: "tasks", element: withRoles(<Tasks />, ["admin", "user"]) },
      { path: "analytics", element: withRoles(<Analytics />, ["admin", "user", "teacher", "manager"]) },
      { path: "marketing", element: withRoles(<MktMarketing />, ["admin", "teacher", "manager"])},
      { path: "ai-assistant", element: withRoles(<AIAssistant />, ["admin", "user", "manager"])},
      { path: "user-management", element: withRoles(<UserManagement />, ["admin"])},
      { path: "settings", element: <Settings />},
      /* CRM MODULE */
      { path: "crm/contacts", element: withRoles(<Contacts />, ["admin"]) },
      { path: "crm/companies", element: withRoles(<Companies />, ["admin"]) },
      { path: "crm/deals", element: withRoles(<Deals />, ["admin"])},
      { path: "crm/tickets", element: withRoles(<Tickets />, ["admin"])},
      { path: "crm/orders", element: withRoles(<Orders/>, ["admin"]) },
      { path: "crm/segments", element: withRoles(<Segments/>, ["admin"]) },
      { path: "crm/inbox", element: withRoles(<Inbox/>, ["admin"]) },
      { path: "crm/calls", element: withRoles(<Calls/>, ["admin"]) },
      { path: "crm/tasks", element: withRoles(<TasksCRM/>, ["admin"]) },
      { path: "crm/playbooks", element: withRoles(<Playbooks/>, ["admin"]) },
      { path: "crm/message-templates", element: withRoles(<MessageTemplates/>, ["admin"]) },
      { path: "crm/snippets", element: withRoles(<Snippets/>, ["admin"]) },
      // Marketing sub-routes
      { path: "marketing/campaigns", element: withRoles(<MktMarketing/>, ["admin", "teacher", "manager"])},
      { path: "marketing/email", element: withRoles(<MktEmail />, ["admin", "teacher", "manager"]) },
      { path: "marketing/social", element: withRoles(<MktSocial/>, ["admin", "teacher", "manager"]) },
      { path: "marketing/ads", element: withRoles(<MktAds/>, ["admin", "teacher", "manager"]) },
      { path: "marketing/events", element: withRoles(<MktEvents/>, ["admin", "teacher", "manager"]) },
      { path: "marketing/forms", element: withRoles(<MktForms/>, ["admin", "teacher", "manager"]) },
      { path: "marketing/buyer-intent", element: withRoles(<MktBuyerIntent/>, ["admin", "teacher", "manager"]) },
      { path: "marketing/lead-scoring", element: withRoles(<MktLeadScoring/>, ["admin", "teacher", "manager"]) },
      // Content sub-routes
      { path: "content/website-pages", element: withRoles(<CntWebsitePages/>, ["admin", "teacher"]) },
      { path: "content/landing-pages", element: withRoles(<CntLandingPages/>, ["admin", "teacher"]) },
      { path: "content/blogs", element: withRoles(<CntBlogs/>, ["admin", "teacher"]) },
      { path: "content/videos", element: withRoles(<CntVideos/>, ["admin", "teacher"]) },
      { path: "content/podcast", element: withRoles(<CntPodcast/>, ["admin", "teacher"]) },
      { path: "content/case-studies", element: withRoles(<CntCaseStudies/>, ["admin", "teacher"]) },
      { path: "content/embeds", element: withRoles(<CntEmbeds/>, ["admin", "teacher"]) },
      { path: "content/remix", element: withRoles(<CntRemix/>, ["admin", "teacher"]) },
      { path: "content/seo", element: withRoles(<CntSeo/>, ["admin", "teacher"]) },
      { path: "content/memberships", element: withRoles(<CntMemberships/>, ["admin", "teacher"]) },
      { path: "content/design-manager", element: withRoles(<CntDesignManager/>, ["admin", "teacher"]) },
      { path: "content/brand", element: withRoles(<CntBrand/>, ["admin", "teacher"]) },
      // Sales sub-routes
      { path: "sales/workspace", element: withRoles(<SalesWorkspace/>, ["admin"]) },
      { path: "sales/documents", element: withRoles(<SalesDocuments/>, ["admin"]) },
      { path: "sales/meetings-scheduler", element: withRoles(<SalesMeetingsScheduler/>, ["admin"]) },
      { path: "sales/sequences", element: withRoles(<SalesSequences/>, ["admin"]) },
      { path: "sales/activity-feed", element: withRoles(<SalesActivityFeed/>, ["admin"]) },
      { path: "sales/forecast", element: withRoles(<SalesForecast/>, ["admin"]) },
      { path: "sales/analytics", element: withRoles(<SalesAnalytics/>, ["admin"]) },
      // Commerce sub-routes
      { path: "commerce/overview", element: withRoles(<ComOverview/>, ["admin"]) },
      { path: "commerce/quotes", element: withRoles(<ComQuotes/>, ["admin"]) },
      { path: "commerce/products", element: withRoles(<ComProducts/>, ["admin"]) },
      { path: "commerce/invoices", element: withRoles(<ComInvoices/>, ["admin"]) },
      { path: "commerce/payments", element: withRoles(<ComPayments/>, ["admin"]) },
      { path: "commerce/payment-links", element: withRoles(<ComPaymentLinks/>, ["admin"]) },
      { path: "commerce/subscriptions", element: withRoles(<ComSubscriptions/>, ["admin"]) },
      { path: "commerce/analytics", element: withRoles(<ComAnalytics/>, ["admin"]) },
      // Service sub-routes
      { path: "service/help-desk", element: withRoles(<ServHelpDesk/>, ["admin"]) },
      { path: "service/customer-success", element: withRoles(<ServCustomerSuccess/>, ["admin"]) },
      { path: "service/customer-agent", element: withRoles(<ServCustomerAgent/>, ["admin"]) },
      { path: "service/chat-flows", element: withRoles(<ServChatFlows/>, ["admin"]) },
      { path: "service/knowledge-base", element: withRoles(<ServKnowledgeBase/>, ["admin"]) },
      { path: "service/customer-portal", element: withRoles(<ServCustomerPortal/>, ["admin"]) },
      { path: "service/feedback-surveys", element: withRoles(<ServFeedbackSurveys/>, ["admin"]) },
      { path: "service/analytics", element: withRoles(<ServAnalytics/>, ["admin"]) },
      // Automation sub-routes
      { path: "automation/overview", element: withRoles(<AutoOverview/>, ["admin"]) },
      { path: "automation/workflows", element: withRoles(<AutoWorkflows/>, ["admin"]) },
      // Reporting sub-routes
      { path: "reporting/dashboards", element: withRoles(<RepDashboards/>, ["admin", "manager"]) },
      { path: "reporting/reports", element: withRoles(<RepReports/>, ["admin", "manager"]) },
      { path: "reporting/goals", element: withRoles(<RepGoals/>, ["admin", "manager"]) },
      // Data Management sub-routes
      { path: "data-management/data-agent", element: withRoles(<DataAgent/>, ["admin"]) },
      { path: "data-management/data-integration", element: withRoles(<DataIntegration/>, ["admin"]) },
      { path: "data-management/event-management", element: withRoles(<EventManagement/>, ["admin"]) },
      { path: "data-management/data-quality", element: withRoles(<DataQuality/>, ["admin"]) },
      { path: "data-management/data-studio", element: withRoles(<DataStudio/>, ["admin"]) },
      { path: "data-management/data-model", element: withRoles(<DataModel/>, ["admin"]) },
      { path: "data-management/data-enrichment", element: withRoles(<DataEnrichment/>, ["admin"]) },
      // Breeze Studio sub-routes
      { path: "breeze/studio", element: withRoles(<BrzStudio/>, ["admin"]) },
      { path: "breeze/knowledge-vaults", element: withRoles(<BrzKnowledgeVaults/>, ["admin"]) },
      { path: "breeze/marketplace", element: withRoles(<BrzMarketplace/>, ["admin"]) },
      // Development sub-routes
      { path: "development", element: withRoles(<DevDevelopment/>, ["admin"]) },
    ],
  },
]);
