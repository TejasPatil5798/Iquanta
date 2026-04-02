export interface AdmissionsModuleDefinition {
  key: string;
  label: string;
  routeBase: string;
  pageDirectory: string;
  recommendedFiles: string[];
  purpose: string;
}

export const admissionsModules: AdmissionsModuleDefinition[] = [
  {
    key: "dashboard",
    label: "Admissions Dashboard",
    routeBase: "/",
    pageDirectory: "src/app/pages/admissions/dashboard",
    recommendedFiles: [
      "src/app/pages/admissions/dashboard/AdmissionsDashboardPage.tsx",
      "src/app/pages/admissions/dashboard/components/AdminDashboardView.tsx",
      "src/app/pages/admissions/dashboard/components/CounselorDashboardView.tsx",
      "src/app/pages/admissions/dashboard/components/MarketingDashboardView.tsx",
      "src/app/pages/admissions/dashboard/components/ManagementDashboardView.tsx",
      "src/app/pages/admissions/dashboard/components/StudentDashboardView.tsx",
    ],
    purpose: "Role-specific home screens and KPI summaries.",
  },
  {
    key: "leads",
    label: "Lead Management",
    routeBase: "/leads",
    pageDirectory: "src/app/pages/admissions/leads",
    recommendedFiles: [
      "src/app/pages/admissions/leads/LeadsPage.tsx",
      "src/app/pages/admissions/leads/components/LeadPipeline.tsx",
      "src/app/pages/admissions/leads/components/LeadTable.tsx",
      "src/app/pages/admissions/leads/components/LeadFilters.tsx",
      "src/app/pages/admissions/leads/components/LeadDetailsDrawer.tsx",
    ],
    purpose: "Capture, qualify, assign, and track student admission leads.",
  },
  {
    key: "students",
    label: "Student Records",
    routeBase: "/students",
    pageDirectory: "src/app/pages/admissions/students",
    recommendedFiles: [
      "src/app/pages/admissions/students/StudentsPage.tsx",
      "src/app/pages/admissions/students/components/StudentTable.tsx",
      "src/app/pages/admissions/students/components/StudentProfileCard.tsx",
      "src/app/pages/admissions/students/components/StudentAcademicSummary.tsx",
    ],
    purpose: "Store student profile, program, counselor, and enrollment records.",
  },
  {
    key: "applications",
    label: "Application Processing",
    routeBase: "/students/applications",
    pageDirectory: "src/app/pages/admissions/applications",
    recommendedFiles: [
      "src/app/pages/admissions/applications/ApplicationsPage.tsx",
      "src/app/pages/admissions/applications/components/ApplicationPipeline.tsx",
      "src/app/pages/admissions/applications/components/ApplicationCards.tsx",
      "src/app/pages/admissions/applications/components/ApplicationTimeline.tsx",
    ],
    purpose: "Manage application stages from started to offer and enrollment.",
  },
  {
    key: "documents",
    label: "Document Verification",
    routeBase: "/students/documents",
    pageDirectory: "src/app/pages/admissions/documents",
    recommendedFiles: [
      "src/app/pages/admissions/documents/DocumentsPage.tsx",
      "src/app/pages/admissions/documents/components/DocumentQueue.tsx",
      "src/app/pages/admissions/documents/components/DocumentStatusBoard.tsx",
      "src/app/pages/admissions/documents/components/VerificationPanel.tsx",
    ],
    purpose: "Review, approve, reject, and audit required admission documents.",
  },
  {
    key: "communication",
    label: "Communication Center",
    routeBase: "/communication",
    pageDirectory: "src/app/pages/admissions/communication",
    recommendedFiles: [
      "src/app/pages/admissions/communication/CommunicationPage.tsx",
      "src/app/pages/admissions/communication/components/CommunicationTimeline.tsx",
      "src/app/pages/admissions/communication/components/MessageComposer.tsx",
      "src/app/pages/admissions/communication/components/ChannelFilters.tsx",
    ],
    purpose: "Track email, call, WhatsApp, SMS, and meeting interactions.",
  },
  {
    key: "tasks",
    label: "Tasks and Follow-ups",
    routeBase: "/tasks",
    pageDirectory: "src/app/pages/admissions/tasks",
    recommendedFiles: [
      "src/app/pages/admissions/tasks/TasksPage.tsx",
      "src/app/pages/admissions/tasks/components/TaskBoard.tsx",
      "src/app/pages/admissions/tasks/components/TaskList.tsx",
      "src/app/pages/admissions/tasks/components/TaskSummaryCards.tsx",
    ],
    purpose: "Manage counselor follow-ups, document reviews, and deadlines.",
  },
  {
    key: "analytics",
    label: "Admissions Analytics",
    routeBase: "/analytics",
    pageDirectory: "src/app/pages/admissions/analytics",
    recommendedFiles: [
      "src/app/pages/admissions/analytics/AnalyticsPage.tsx",
      "src/app/pages/admissions/analytics/components/ConversionCharts.tsx",
      "src/app/pages/admissions/analytics/components/CounselorPerformance.tsx",
      "src/app/pages/admissions/analytics/components/LeadSourceInsights.tsx",
    ],
    purpose: "Measure funnel conversion, counselor productivity, and campaign impact.",
  },
  {
    key: "users",
    label: "Role and Access Management",
    routeBase: "/user-management",
    pageDirectory: "src/app/pages/admissions/users",
    recommendedFiles: [
      "src/app/pages/admissions/users/UserManagementPage.tsx",
      "src/app/pages/admissions/users/components/RolePermissionsGrid.tsx",
      "src/app/pages/admissions/users/components/UsersTable.tsx",
      "src/app/pages/admissions/users/components/UserFormDialog.tsx",
    ],
    purpose: "Admin-only control over roles, access policies, and admissions staff.",
  },
  {
    key: "student-portal",
    label: "Student Self-Service Portal",
    routeBase: "/student-portal",
    pageDirectory: "src/app/pages/admissions/student-portal",
    recommendedFiles: [
      "src/app/pages/admissions/student-portal/StudentPortalPage.tsx",
      "src/app/pages/admissions/student-portal/components/ApplicationStatusCard.tsx",
      "src/app/pages/admissions/student-portal/components/DocumentChecklist.tsx",
      "src/app/pages/admissions/student-portal/components/AdmissionUpdatesFeed.tsx",
    ],
    purpose: "Student-facing application tracking, document checklist, and updates.",
  },
  {
    key: "settings",
    label: "Admissions Settings",
    routeBase: "/settings",
    pageDirectory: "src/app/pages/admissions/settings",
    recommendedFiles: [
      "src/app/pages/admissions/settings/SettingsPage.tsx",
      "src/app/pages/admissions/settings/components/GeneralSettingsPanel.tsx",
      "src/app/pages/admissions/settings/components/NotificationSettingsPanel.tsx",
      "src/app/pages/admissions/settings/components/SecuritySettingsPanel.tsx",
      "src/app/pages/admissions/settings/components/IntegrationsPanel.tsx",
    ],
    purpose: "Configure admissions operations, notifications, security, and integrations.",
  },
  {
    key: "reports",
    label: "Admissions Reporting",
    routeBase: "/reporting",
    pageDirectory: "src/app/pages/admissions/reports",
    recommendedFiles: [
      "src/app/pages/admissions/reports/ReportDashboardsPage.tsx",
      "src/app/pages/admissions/reports/ReportsPage.tsx",
      "src/app/pages/admissions/reports/GoalsPage.tsx",
      "src/app/pages/admissions/reports/components/ReportsKpiCards.tsx",
      "src/app/pages/admissions/reports/components/ReportsLibrary.tsx",
      "src/app/pages/admissions/reports/components/GoalsTracker.tsx",
    ],
    purpose: "Track admissions dashboards, reusable reports, and operational goals.",
  },
];

export const admissionsDataLocations = {
  mockData: "src/app/data/mockData.ts",
  futureFeatureData: "src/app/data/admissions",
  roleDefinitions: "src/app/lib/portalRoles.ts",
  routing: "src/app/routes.tsx",
  navigation: "src/app/layout/Sidebar.tsx",
};
