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
      <DrawerContent className="ml-auto h-full w-full max-w-none overflow-x-hidden overflow-y-auto sm:w-[60rem]">
        {student ? (
          <>
            <DrawerHeader className="border-b border-slate-100 px-6 py-5 text-left">
              <DrawerTitle className="text-xl text-slate-900">
                Student Profile
              </DrawerTitle>
              <DrawerDescription>
                Review the student&apos;s admissions record, counselor ownership,
                and current progress.
              </DrawerDescription>
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