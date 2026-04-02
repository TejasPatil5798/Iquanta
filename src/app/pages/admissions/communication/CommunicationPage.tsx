import { useEffect, useState } from "react";
import {
  getInteractions,
  type PortalInteraction,
} from "../../../api/admissionsEntitiesApi";
import { Button } from "../../../components/ui/button";
import { CommunicationSummaryCards } from "./components/CommunicationSummaryCards";
import { CommunicationTimeline } from "./components/CommunicationTimeline";

export function CommunicationPage() {
  const [interactions, setInteractions] = useState<PortalInteraction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadInteractions = async () => {
      try {
        const response = await getInteractions();
        if (isMounted) {
          setInteractions(response.data);
        }
      } catch (error) {
        console.error("Unable to load interactions", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadInteractions();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Communication Center
          </h1>
          <p className="mt-1 text-gray-500">
            Track all student interactions and communications
          </p>
        </div>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          + New Communication
        </Button>
      </div>

      <CommunicationSummaryCards interactions={interactions} />
      {loading ? <div className="text-sm text-gray-500">Loading communication timeline...</div> : null}
      <CommunicationTimeline interactions={interactions} />
    </div>
  );
}
