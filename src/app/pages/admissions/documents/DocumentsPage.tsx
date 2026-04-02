import { useEffect, useState } from "react";
import { getDocuments, type PortalDocument } from "../../../api/admissionsEntitiesApi";
import { Button } from "../../../components/ui/button";
import { Upload } from "lucide-react";
import { DocumentCategoryGrid } from "./components/DocumentCategoryGrid";
import { DocumentQueue } from "./components/DocumentQueue";
import { DocumentSummaryCards } from "./components/DocumentSummaryCards";

export function DocumentsPage() {
  const [documents, setDocuments] = useState<PortalDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadDocuments = async () => {
      try {
        const response = await getDocuments();
        if (isMounted) {
          setDocuments(response.data);
        }
      } catch (error) {
        console.error("Unable to load documents", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadDocuments();

    return () => {
      isMounted = false;
    };
  }, []);

  const documentStats = {
    total: documents.length,
    verified: documents.filter((document) => document.status === "Verified")
      .length,
    pending: documents.filter((document) => document.status === "Pending")
      .length,
    rejected: documents.filter((document) => document.status === "Rejected")
      .length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Document Management
          </h1>
          <p className="mt-1 text-gray-500">
            Manage and verify student documents
          </p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <Upload className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <DocumentSummaryCards stats={documentStats} />
      <DocumentCategoryGrid />
      {loading ? <div className="text-sm text-gray-500">Loading documents...</div> : null}
      <DocumentQueue documents={documents} />
    </div>
  );
}
