import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  createFollowUp,
  deleteFollowUp,
  getFollowUps,
  updateFollowUp,
  type CreateFollowUpPayload,
  type PortalFollowUp,
} from "../../../api/admissionsEntitiesApi";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import { Plus } from "lucide-react";
import { TaskList } from "./components/TaskList";
import { TaskSummaryCards } from "./components/TaskSummaryCards";

const emptyTaskForm: CreateFollowUpPayload = {
  followUpId: "",
  leadId: "",
  studentId: "",
  title: "",
  status: "Open",
  priority: "Medium",
  assignedTo: "",
  dueDate: "",
  relatedTo: "",
};

function RequiredMark() {
  return <span className="text-red-500">*</span>;
}

function buildFollowUpId() {
  return `FU-${new Date().getFullYear()}-${Date.now().toString().slice(-6)}`;
}

function toTaskForm(task?: PortalFollowUp | null): CreateFollowUpPayload {
  if (!task) {
    return {
      ...emptyTaskForm,
      followUpId: buildFollowUpId(),
      dueDate: new Date().toISOString().slice(0, 10),
    };
  }

  return {
    followUpId: task.followUpId,
    leadId: task.leadId ?? "",
    studentId: task.studentId ?? "",
    title: task.title,
    status: task.status,
    priority: task.priority,
    assignedTo: task.assignedTo,
    dueDate: task.dueDate.slice(0, 10),
    relatedTo: task.relatedTo,
  };
}

function sortTasksByDueDate(tasks: PortalFollowUp[]) {
  return [...tasks].sort(
    (left, right) =>
      new Date(left.dueDate).getTime() - new Date(right.dueDate).getTime(),
  );
}

export function TasksPage() {
  const [tasks, setTasks] = useState<PortalFollowUp[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<PortalFollowUp | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<CreateFollowUpPayload>(toTaskForm());

  useEffect(() => {
    let isMounted = true;

    const loadTasks = async () => {
      try {
        const response = await getFollowUps();
        if (isMounted) {
          setTasks(response.data);
        }
      } catch (error) {
        console.error("Unable to load follow-ups", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTasks();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (open) {
      setForm(toTaskForm(editingTask));
    } else {
      setEditingTask(null);
      setForm(toTaskForm());
    }
  }, [open, editingTask]);

  const updateField = <K extends keyof CreateFollowUpPayload>(
    key: K,
    value: CreateFollowUpPayload[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const pendingTasks = tasks.filter((task) => task.status === "Open");
  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  );
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  );

  const dialogTitle = useMemo(
    () => (editingTask ? "Edit Task" : "Create Task"),
    [editingTask],
  );

  const dialogDescription = useMemo(
    () =>
      editingTask
        ? "Update the selected follow-up task."
        : "Create a new follow-up task for the admissions team.",
    [editingTask],
  );

  const handleCreateClick = () => {
    setEditingTask(null);
    setOpen(true);
  };

  const handleEditClick = (task: PortalFollowUp) => {
    setEditingTask(task);
    setOpen(true);
  };

  const handleDeleteClick = async (task: PortalFollowUp) => {
    const confirmed = window.confirm(
      `Delete task "${task.title}"? This action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteFollowUp(task._id);
      setTasks((current) => current.filter((item) => item._id !== task._id));

      if (editingTask?._id === task._id) {
        setOpen(false);
      }

      toast.success("Task deleted successfully");
    } catch (error) {
      console.error("Failed to delete task", error);
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : "Failed to delete task";
      toast.error(errorMessage);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        leadId: form.leadId?.trim() || "",
        studentId: form.studentId?.trim() || "",
      };

      if (editingTask?._id) {
        const response = await updateFollowUp(editingTask._id, payload);
        setTasks((current) =>
          sortTasksByDueDate(
            current.map((task) =>
              task._id === editingTask._id ? response.data : task,
            ),
          ),
        );
        toast.success("Task updated successfully");
      } else {
        const response = await createFollowUp(payload);
        setTasks((current) => sortTasksByDueDate([...current, response.data]));
        toast.success("Task created successfully");
      }

      setOpen(false);
    } catch (error) {
      console.error(
        editingTask ? "Failed to update task" : "Failed to create task",
        error,
      );
      const errorMessage = axios.isAxiosError(error)
        ? error.response?.data?.message || error.message
        : editingTask
          ? "Failed to update task"
          : "Failed to create task";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Tasks & Follow-ups
          </h1>
          <p className="mt-1 text-gray-500">
            Manage your tasks and student follow-ups
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleCreateClick}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{dialogTitle}</DialogTitle>
              <DialogDescription>{dialogDescription}</DialogDescription>
              <p className="text-xs text-slate-500">
                Fields marked with{" "}
                <span className="font-semibold text-red-500">*</span> are
                required.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="follow-up-id">
                    Task ID <RequiredMark />
                  </Label>
                  <Input
                    id="follow-up-id"
                    value={form.followUpId}
                    onChange={(event) =>
                      updateField("followUpId", event.target.value)
                    }
                    placeholder="FU-2026-123456"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-title">
                    Title <RequiredMark />
                  </Label>
                  <Input
                    id="follow-up-title"
                    value={form.title}
                    onChange={(event) => updateField("title", event.target.value)}
                    placeholder="Call applicant about pending documents"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-related-to">
                    Related To <RequiredMark />
                  </Label>
                  <Input
                    id="follow-up-related-to"
                    value={form.relatedTo}
                    onChange={(event) =>
                      updateField("relatedTo", event.target.value)
                    }
                    placeholder="Rahul Sharma"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-assigned-to">
                    Assigned To <RequiredMark />
                  </Label>
                  <Input
                    id="follow-up-assigned-to"
                    value={form.assignedTo}
                    onChange={(event) =>
                      updateField("assignedTo", event.target.value)
                    }
                    placeholder="Priya Patel"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select
                    value={form.status}
                    onValueChange={(value) =>
                      updateField(
                        "status",
                        value as CreateFollowUpPayload["status"],
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select task status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Priority</Label>
                  <Select
                    value={form.priority}
                    onValueChange={(value) =>
                      updateField(
                        "priority",
                        value as CreateFollowUpPayload["priority"],
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select task priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-due-date">
                    Due Date <RequiredMark />
                  </Label>
                  <Input
                    id="follow-up-due-date"
                    type="date"
                    value={form.dueDate}
                    onChange={(event) =>
                      updateField("dueDate", event.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-lead-id">Lead ID</Label>
                  <Input
                    id="follow-up-lead-id"
                    value={form.leadId ?? ""}
                    onChange={(event) => updateField("leadId", event.target.value)}
                    placeholder="LEAD-2026-001"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="follow-up-student-id">Student ID</Label>
                  <Input
                    id="follow-up-student-id"
                    value={form.studentId ?? ""}
                    onChange={(event) =>
                      updateField("studentId", event.target.value)
                    }
                    placeholder="STU-2026-010"
                  />
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  disabled={submitting}
                >
                  {submitting
                    ? editingTask
                      ? "Updating..."
                      : "Saving..."
                    : editingTask
                      ? "Update Task"
                      : "Save Task"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <TaskSummaryCards
        total={tasks.length}
        pending={pendingTasks.length}
        inProgress={inProgressTasks.length}
        completed={completedTasks.length}
      />

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="inprogress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {loading ? (
            <div className="text-sm text-gray-500">Loading follow-ups...</div>
          ) : null}
          <TaskList
            tasks={tasks}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        </TabsContent>

        <TabsContent value="pending">
          <TaskList
            tasks={pendingTasks}
            compact
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        </TabsContent>

        <TabsContent value="inprogress">
          <TaskList
            tasks={inProgressTasks}
            compact
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        </TabsContent>

        <TabsContent value="completed">
          <TaskList
            tasks={completedTasks}
            completedView
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
