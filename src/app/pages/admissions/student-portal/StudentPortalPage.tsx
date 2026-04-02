import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Bell, FileCheck2, LifeBuoy } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import {
  getApplications,
  getDocuments,
  getInteractions,
} from "../../../api/admissionsEntitiesApi";
import { useAuth } from "../../../context/AuthContext";
import { ApplicationStatusCard } from "./components/ApplicationStatusCard";
import { DocumentChecklist } from "./components/DocumentChecklist";
import { AdmissionUpdatesFeed } from "./components/AdmissionUpdatesFeed";
import {
  buildStudentPortalRecord,
  type StudentPortalRecord,
} from "./studentPortalData";

export function StudentPortalPage() {
  const { user } = useAuth();
  const [record, setRecord] = useState<StudentPortalRecord | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadRecord = async () => {
      try {
        const [applicationsResponse, documentsResponse, interactionsResponse] =
          await Promise.all([
            getApplications(),
            getDocuments(),
            getInteractions(),
          ]);

        if (isMounted) {
          setRecord(
            buildStudentPortalRecord(
              applicationsResponse.data,
              documentsResponse.data,
              interactionsResponse.data,
              user?.name,
            ),
          );
        }
      } catch (error) {
        console.error("Unable to load student portal record", error);
      }
    };

    loadRecord();

    return () => {
      isMounted = false;
    };
  }, [user?.name]);

  if (!record) {
    return <div className="text-sm text-gray-500">Loading student portal...</div>;
  }

  const verifiedCount = record.documents.filter(
    (document) => document.status === "Verified",
  ).length;
  const pendingCount = record.documents.filter(
    (document) => document.status === "Pending" || document.status === "Not Submitted",
  ).length;

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 px-6 py-8 text-white shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge className="bg-white/15 text-white hover:bg-white/15">
              Student Self-Service Portal
            </Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight">
              Welcome, {record.studentName}
            </h1>
            <p className="mt-3 text-sm leading-6 text-blue-50 sm:text-base">
              Track your application, review document verification, and stay up to
              date with every admission milestone from one place.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
                Program
              </p>
              <p className="mt-2 text-lg font-semibold">{record.application.program}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
                Verified Docs
              </p>
              <p className="mt-2 text-lg font-semibold">{verifiedCount}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">
                Pending Actions
              </p>
              <p className="mt-2 text-lg font-semibold">{pendingCount}</p>
            </div>
          </div>
        </div>
      </section>

      <ApplicationStatusCard application={record.application} />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <DocumentChecklist documents={record.documents} />

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">
              Next Actions
            </CardTitle>
            <p className="text-sm text-slate-500">
              Quick shortcuts for the most common student tasks.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                  <FileCheck2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Review required documents
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Upload or correct any pending files to avoid delays.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Watch for status updates
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Admission decisions and counselor notes will appear below.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                  <LifeBuoy className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Need help from admissions?
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Reach your counselor from the communication center.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700">
              <Link to="/communication">
                Open Communication Center
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <AdmissionUpdatesFeed updates={record.updates} />
    </div>
  );
}
