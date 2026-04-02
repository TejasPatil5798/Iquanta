import type {
  PortalApplication,
  PortalFollowUp,
  PortalInteraction,
  PortalLead,
} from "../api/admissionsEntitiesApi";

export type TrendPoint = {
  month: string;
  applications: number;
  enrolled: number;
};

export type SourcePoint = {
  name: string;
  value: number;
};

export type CounselorPerformancePoint = {
  name: string;
  leads: number;
  conversions: number;
  revenue: number;
};

export type FunnelPoint = {
  stage: string;
  count: number;
};

export type AdmissionsInsights = {
  admissionTrendData: TrendPoint[];
  leadSourceData: SourcePoint[];
  counselorPerformanceData: CounselorPerformancePoint[];
  conversionFunnelData: FunnelPoint[];
};

const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
});

export function buildAdmissionsInsights(
  leads: PortalLead[],
  applications: PortalApplication[],
): AdmissionsInsights {
  const now = new Date();
  const lastSixMonths = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - (5 - index), 1);
    return {
      key: `${date.getFullYear()}-${date.getMonth()}`,
      month: monthFormatter.format(date),
      applications: 0,
      enrolled: 0,
    };
  });

  const monthMap = new Map(lastSixMonths.map((item) => [item.key, item]));

  applications.forEach((application) => {
    const submittedAt = new Date(application.submittedAt);
    const key = `${submittedAt.getFullYear()}-${submittedAt.getMonth()}`;
    const bucket = monthMap.get(key);

    if (bucket) {
      bucket.applications += 1;
      if (["Admission Offered", "Enrolled"].includes(application.status)) {
        bucket.enrolled += 1;
      }
    }
  });

  const leadSourceData = Object.entries(
    leads.reduce<Record<string, number>>((accumulator, lead) => {
      accumulator[lead.source] = (accumulator[lead.source] ?? 0) + 1;
      return accumulator;
    }, {}),
  ).map(([name, value]) => ({ name, value }));

  const counselorNames = new Set<string>();
  leads.forEach((lead) => {
    if (lead.assignedCounselor) {
      counselorNames.add(lead.assignedCounselor);
    }
  });
  applications.forEach((application) => {
    if (application.counselor) {
      counselorNames.add(application.counselor);
    }
  });

  const counselorPerformanceData = Array.from(counselorNames).map((name) => {
    const counselorLeads = leads.filter((lead) => lead.assignedCounselor === name);
    const counselorConversions = applications.filter(
      (application) =>
        application.counselor === name &&
        ["Admission Offered", "Enrolled"].includes(application.status),
    );

    return {
      name,
      leads: counselorLeads.length,
      conversions: counselorConversions.length,
      revenue: counselorConversions.length * 85000,
    };
  });

  const conversionFunnelData = [
    { stage: "Total Leads", count: leads.length },
    {
      stage: "Qualified Leads",
      count: leads.filter((lead) =>
        ["Qualified", "Interested", "Application Started"].includes(lead.status),
      ).length,
    },
    { stage: "Applications", count: applications.length },
    {
      stage: "Under Review",
      count: applications.filter((application) => application.status === "Under Review").length,
    },
    {
      stage: "Offered",
      count: applications.filter((application) => application.status === "Admission Offered").length,
    },
    {
      stage: "Enrolled",
      count: applications.filter((application) => application.status === "Enrolled").length,
    },
  ];

  return {
    admissionTrendData: lastSixMonths.map(({ month, applications: appCount, enrolled }) => ({
      month,
      applications: appCount,
      enrolled,
    })),
    leadSourceData,
    counselorPerformanceData,
    conversionFunnelData,
  };
}

export function buildVisibleTasks(
  role: string,
  userName: string | undefined,
  followUps: PortalFollowUp[],
) {
  return role === "user"
    ? followUps.filter((task) => task.assignedTo === userName)
    : followUps.filter((task) => task.status !== "Completed");
}

export function buildRecentActivities(
  role: string,
  leads: PortalLead[],
  interactions: PortalInteraction[],
) {
  if (role === "teacher") {
    return leads.map((lead) => ({
      id: lead._id,
      action: `${lead.source} lead captured`,
      target: lead.name,
      time: new Date(lead.createdAt).toLocaleString(),
    }));
  }

  return interactions.map((interaction) => ({
    id: interaction._id,
    action: interaction.type,
    target: interaction.personName,
    time: new Date(interaction.timestamp).toLocaleString(),
  }));
}
