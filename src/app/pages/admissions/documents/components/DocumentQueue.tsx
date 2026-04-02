import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import type { PortalDocument } from "../../../../api/admissionsEntitiesApi";
import { Download, FileText } from "lucide-react";
import {
  getDocumentStatusColor,
  getDocumentStatusIcon,
} from "../documentUtils";

export function DocumentQueue({ documents }: { documents: PortalDocument[] }) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student Name</TableHead>
            <TableHead>Document Type</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Verified By</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((document) => (
            <TableRow key={document._id}>
              <TableCell>
                <p className="font-medium text-gray-900">{document.studentName}</p>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-900">
                    {document.documentType}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-900">
                  {new Date(document.submittedAt).toLocaleDateString()}
                </p>
              </TableCell>
              <TableCell>
                <Badge
                  className={`${getDocumentStatusColor(document.status)} flex w-fit items-center gap-1`}
                >
                  {getDocumentStatusIcon(document.status)}
                  {document.status}
                </Badge>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-900">
                  {document.verifiedBy || "-"}
                </p>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  {document.status === "Pending" && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-green-600 hover:text-green-700"
                      >
                        Approve
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700"
                      >
                        Reject
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
