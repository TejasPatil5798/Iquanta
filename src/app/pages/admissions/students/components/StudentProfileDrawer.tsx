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
      <DrawerContent className="ml-auto h-full z-90 w-full sm:w-[95%] md:w-[80%] lg:w-[72%] xl:w-[68%] overflow-x-hidden overflow-y-auto">
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
