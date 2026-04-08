import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../../../../components/ui/drawer";
import type { PortalStudent } from "../../../../api/studentsApi";
import { StudentAcademicSummary } from "./StudentAcademicSummary";
import { StudentProfileCard } from "./StudentProfileCard";
import { X } from "lucide-react";

export function StudentProfileDrawer({
  student,
  open,
  onOpenChange,
}: {
  student: PortalStudent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="ml-auto z-100 h-full w-full sm:!max-w-[90vw] md:!max-w-[80vw] lg:!max-w-[75vw] xl:!max-w-[70vw] overflow-x-hidden overflow-y-auto">
        {" "}
        {student ? (
          <>
            <DrawerHeader className="sticky top-0 z-10 bg-white border-b border-slate-100 px-6 py-5 text-left relative">
              <DrawerTitle className="text-xl text-slate-900">
                Student Profile
              </DrawerTitle>

              <DrawerDescription>
                Review the student&apos;s admissions record, counselor
                ownership, and current progress.
              </DrawerDescription>

              {/* Close Button */}
              <button
                onClick={() => onOpenChange(false)}
                className="absolute right-4 top-4 rounded-md p-2 hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5 text-slate-600" />
              </button>
            </DrawerHeader>

            <div className="min-w-0 space-y-6 p-6">
              <StudentProfileCard student={student} />
              <StudentAcademicSummary student={student} />
            </div>
          </>
        ) : null}
      </DrawerContent>
    </Drawer>
  );
}
