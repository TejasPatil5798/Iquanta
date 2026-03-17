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
import { SalesTargetAccounts } from "./pages/sales/sales-target-accounts";
import { SalesProspectingAgent } from "./pages/sales/sales-prospecting-agent";
import { SalesDocuments } from "./pages/sales/sales-documents";
import { SalesMeetingsScheduler } from "./pages/sales/sales-meetings-scheduler";
import { SalesSequences } from "./pages/sales/sales-sequences";
import { SalesActivityFeed } from "./pages/sales/sales-activity-feed";
import { SalesForecast } from "./pages/sales/sales-forecast";
import { SalesCoachingPlaylists } from "./pages/sales/sales-coaching-playlists";
import { SalesAnalytics } from "./pages/sales/sales-analytics";
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
      { path: "leads", element: <Leads /> },
      {
        path: "students",
        element: <Students />,
        children: [
          { path: "applications", element: <Applications /> },
          { path: "documents", element: <Documents /> },
        ],
      },
      { path: "communication", element: <Communication /> },
      { path: "tasks", element: <Tasks /> },
      { path: "analytics", element: <Analytics /> },
      { path: "marketing", element: <MktMarketing />},
      { path: "ai-assistant", element: <AIAssistant />},
      { path: "user-management", element: <UserManagement />},
      { path: "settings", element: <Settings />},
      /* CRM MODULE */
      { path: "crm/contacts", element: <Contacts /> },
      { path: "crm/companies", element: <Companies /> },
      { path: "crm/deals", element: <Deals />},
      { path: "crm/tickets", element: <Tickets />},
      { path: "crm/orders", element: <Orders/> },
      { path: "crm/segments", element: <Segments/> },
      { path: "crm/inbox", element: <Inbox/> },
      { path: "crm/calls", element: <Calls/> },
      { path: "crm/tasks", element: <TasksCRM/> },
      { path: "crm/playbooks", element: <Playbooks/> },
      { path: "crm/message-templates", element: <MessageTemplates/> },
      { path: "crm/snippets", element: <Snippets/> },
      // Marketing sub-routes
      { path: "marketing/campaigns", element: <MktMarketing/>},
      { path: "marketing/email", element: <MktEmail /> },
      { path: "marketing/social", element: <MktSocial/> },
      { path: "marketing/ads", element: <MktAds/> },
      { path: "marketing/events", element: <MktEvents/> },
      { path: "marketing/forms", element: <MktForms/> },
      { path: "marketing/buyer-intent", element: <MktBuyerIntent/> },
      { path: "marketing/lead-scoring", element: <MktLeadScoring/> },
      // Content sub-routes
      { path: "content/website-pages", element: <CntWebsitePages/> },
      { path: "content/landing-pages", element: <CntLandingPages/> },
      { path: "content/blogs", element: <CntBlogs/> },
      { path: "content/videos", element: <CntVideos/> },
      { path: "content/podcast", element: <CntPodcast/> },
      { path: "content/case-studies", element: <CntCaseStudies/> },
      { path: "content/embeds", element: <CntEmbeds/> },
      { path: "content/remix", element: <CntRemix/> },
      { path: "content/seo", element: <CntSeo/> },
      { path: "content/memberships", element: <CntMemberships/> },
      { path: "content/design-manager", element: <CntDesignManager/> },
      { path: "content/brand", element: <CntBrand/> },
      // Sales sub-routes
      { path: "sales/workspace", element: <SalesWorkspace/> },
      { path: "sales/target-accounts", element: <SalesTargetAccounts/> },
      { path: "sales/prospecting-agent", element: <SalesProspectingAgent/> },
      { path: "sales/documents", element: <SalesDocuments/> },
      { path: "sales/meetings-scheduler", element: <SalesMeetingsScheduler/> },
      { path: "sales/sequences", element: <SalesSequences/> },
      { path: "sales/activity-feed", element: <SalesActivityFeed/> },
      { path: "sales/forecast", element: <SalesForecast/> },
      { path: "sales/coaching-playlists", element: <SalesCoachingPlaylists/> },
      { path: "sales/analytics", element: <SalesAnalytics/> },
      // Commerce sub-routes
      { path: "commerce/overview", element: <ComOverview/> },
      { path: "commerce/quotes", element: <ComQuotes/> },
      { path: "commerce/products", element: <ComProducts/> },
      { path: "commerce/invoices", element: <ComInvoices/> },
      { path: "commerce/payments", element: <ComPayments/> },
      { path: "commerce/payment-links", element: <ComPaymentLinks/> },
      { path: "commerce/subscriptions", element: <ComSubscriptions/> },
      { path: "commerce/analytics", element: <ComAnalytics/> },
      // Service sub-routes
      { path: "service/help-desk", element: <ServHelpDesk/> },
      { path: "service/customer-success", element: <ServCustomerSuccess/> },
      { path: "service/customer-agent", element: <ServCustomerAgent/> },
      { path: "service/chat-flows", element: <ServChatFlows/> },
      { path: "service/knowledge-base", element: <ServKnowledgeBase/> },
      { path: "service/customer-portal", element: <ServCustomerPortal/> },
      { path: "service/feedback-surveys", element: <ServFeedbackSurveys/> },
      { path: "service/analytics", element: <ServAnalytics/> },
      // Automation sub-routes
      { path: "automation/overview", element: <AutoOverview/> },
      { path: "automation/workflows", element: <AutoWorkflows/> },
      // Reporting sub-routes
      { path: "reporting/dashboards", element: <RepDashboards/> },
      { path: "reporting/reports", element: <RepReports/> },
      { path: "reporting/goals", element: <RepGoals/> },
      // Data Management sub-routes
      { path: "data-management/data-agent", element: <DataAgent/> },
      { path: "data-management/data-integration", element: <DataIntegration/> },
      { path: "data-management/event-management", element: <EventManagement/> },
      { path: "data-management/data-quality", element: <DataQuality/> },
      { path: "data-management/data-studio", element: <DataStudio/> },
      { path: "data-management/data-model", element: <DataModel/> },
      { path: "data-management/data-enrichment", element: <DataEnrichment/> },
      // Breeze Studio sub-routes
      { path: "breeze/studio", element: <BrzStudio/> },
      { path: "breeze/knowledge-vaults", element: <BrzKnowledgeVaults/> },
      { path: "breeze/marketplace", element: <BrzMarketplace/> },
      // Development sub-routes
      { path: "development", element: <DevDevelopment/> },
    ],
  },
]);
