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
// other imports...

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
      { path: "marketing", Component: MktMarketing },
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
      // Marketing sub-routes
      { path: "marketing/campaigns", Component: MktMarketing },
      { path: "marketing/email", Component: MktEmail },
      { path: "marketing/social", Component: MktSocial },
      { path: "marketing/ads", Component: MktAds },
      { path: "marketing/events", Component: MktEvents },
      { path: "marketing/forms", Component: MktForms },
      { path: "marketing/buyer-intent", Component: MktBuyerIntent },
      { path: "marketing/lead-scoring", Component: MktLeadScoring },
      // Content sub-routes
      { path: "content/website-pages", Component: CntWebsitePages },
      { path: "content/landing-pages", Component: CntLandingPages },
      { path: "content/blogs", Component: CntBlogs },
      { path: "content/videos", Component: CntVideos },
      { path: "content/podcast", Component: CntPodcast },
      { path: "content/case-studies", Component: CntCaseStudies },
      { path: "content/embeds", Component: CntEmbeds },
      { path: "content/remix", Component: CntRemix },
      { path: "content/seo", Component: CntSeo },
      { path: "content/memberships", Component: CntMemberships },
      { path: "content/design-manager", Component: CntDesignManager },
      { path: "content/brand", Component: CntBrand },
      // Sales sub-routes
      { path: "sales/workspace", Component: SalesWorkspace },
      { path: "sales/target-accounts", Component: SalesTargetAccounts },
      { path: "sales/prospecting-agent", Component: SalesProspectingAgent },
      { path: "sales/documents", Component: SalesDocuments },
      { path: "sales/meetings-scheduler", Component: SalesMeetingsScheduler },
      { path: "sales/sequences", Component: SalesSequences },
      { path: "sales/activity-feed", Component: SalesActivityFeed },
      { path: "sales/forecast", Component: SalesForecast },
      { path: "sales/coaching-playlists", Component: SalesCoachingPlaylists },
      { path: "sales/analytics", Component: SalesAnalytics },
      // Commerce sub-routes
      { path: "commerce/overview", Component: ComOverview },
      { path: "commerce/quotes", Component: ComQuotes },
      { path: "commerce/products", Component: ComProducts },
      { path: "commerce/invoices", Component: ComInvoices },
      { path: "commerce/payments", Component: ComPayments },
      { path: "commerce/payment-links", Component: ComPaymentLinks },
      { path: "commerce/subscriptions", Component: ComSubscriptions },
      { path: "commerce/analytics", Component: ComAnalytics },
      // Service sub-routes
      { path: "service/help-desk", Component: ServHelpDesk },
      { path: "service/customer-success", Component: ServCustomerSuccess },
      { path: "service/customer-agent", Component: ServCustomerAgent },
      { path: "service/chat-flows", Component: ServChatFlows },
      { path: "service/knowledge-base", Component: ServKnowledgeBase },
      { path: "service/customer-portal", Component: ServCustomerPortal },
      { path: "service/feedback-surveys", Component: ServFeedbackSurveys },
      { path: "service/analytics", Component: ServAnalytics },
      // Automation sub-routes
      { path: "automation/overview", Component: AutoOverview },
      { path: "automation/workflows", Component: AutoWorkflows },
      // Reporting sub-routes
      { path: "reporting/dashboards", Component: RepDashboards },
      { path: "reporting/reports", Component: RepReports },
      { path: "reporting/goals", Component: RepGoals },
      // Data Management sub-routes
      { path: "data-management/data-agent", Component: DataAgent },
      { path: "data-management/data-integration", Component: DataIntegration },
      { path: "data-management/event-management", Component: EventManagement },
      { path: "data-management/data-quality", Component: DataQuality },
      { path: "data-management/data-studio", Component: DataStudio },
      { path: "data-management/data-model", Component: DataModel },
      { path: "data-management/data-enrichment", Component: DataEnrichment },
      // Breeze Studio sub-routes
      { path: "breeze/studio", Component: BrzStudio },
      { path: "breeze/knowledge-vaults", Component: BrzKnowledgeVaults },
      { path: "breeze/marketplace", Component: BrzMarketplace },
      // Development sub-routes
      { path: "development", Component: DevDevelopment },
    ],
  },
]);
