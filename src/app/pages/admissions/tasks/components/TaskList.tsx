import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import type { PortalFollowUp } from "../../../../api/admissionsEntitiesApi";
import { Calendar, Flag, Pencil, Trash2, User } from "lucide-react";
import { getTaskPriorityColor, getTaskStatusColor } from "../taskUtils";

export function TaskList({
  tasks,
  compact = false,
  completedView = false,
  onEdit,
  onDelete,
}: {
  tasks: PortalFollowUp[];
  compact?: boolean;
  completedView?: boolean;
  onEdit?: (task: PortalFollowUp) => void;
  onDelete?: (task: PortalFollowUp) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        <Card
          key={task._id}
          className={`p-5 transition-shadow hover:shadow-lg ${
            completedView ? "opacity-75" : ""
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3
                  className={`font-semibold text-gray-900 ${
                    completedView ? "line-through" : ""
                  }`}
                >
                  {task.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{task.relatedTo}</p>
              </div>
              <div className="flex items-start gap-2">
                {onEdit ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => onEdit(task)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                ) : null}
                {onDelete ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => onDelete(task)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                ) : null}
              </div>
            </div>

            {!compact && (
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-gray-700">{task.relatedTo}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-gray-400" />
              <span className="text-gray-700">
                {completedView ? "Completed" : "Due"}:{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </span>
            </div>

            {!completedView && (
              <div
                className={`flex items-center gap-2 ${
                  compact ? "" : "border-t border-gray-200 pt-3"
                }`}
              >
                <Badge className={getTaskPriorityColor(task.priority)}>
                  <Flag className="mr-1 h-3 w-3" />
                  {task.priority}
                </Badge>
                {!compact && (
                  <Badge className={getTaskStatusColor(task.status)}>
                    {task.status}
                  </Badge>
                )}
              </div>
            )}

            {!compact && (
              <div className="border-t border-gray-200 pt-3">
                <p className="text-xs text-gray-500">Assigned to</p>
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {task.assignedTo}
                </p>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
