import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
} from "../components/ui/command";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Example CRM data (replace later with API)
  const students = [
    { id: 1, name: "Rahul Sharma", path: "/students" },
    { id: 2, name: "Priya Sinha", path: "/students" },
    { id: 3, name: "Aditya Joshi", path: "/students" },
  ];

  const leads = [
    { id: 1, name: "Rahul Desai", path: "/leads" },
    { id: 2, name: "Ananya Gupta", path: "/leads" },
  ];

  // Open with Ctrl + K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search leads, students, pages..." />

      <CommandList>

        {/* Navigation */}
        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => {
              navigate("/");
              setOpen(false);
            }}
          >
            Dashboard
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/leads");
              setOpen(false);
            }}
          >
            Leads
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/students");
              setOpen(false);
            }}
          >
            Students
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/applications");
              setOpen(false);
            }}
          >
            Applications
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/analytics");
              setOpen(false);
            }}
          >
            Analytics
          </CommandItem>
        </CommandGroup>

        {/* Students */}
        <CommandGroup heading="Students">
          {students.map((student) => (
            <CommandItem
              key={student.id}
              onSelect={() => {
                navigate(student.path);
                setOpen(false);
              }}
            >
              {student.name}
            </CommandItem>
          ))}
        </CommandGroup>

        {/* Leads */}
        <CommandGroup heading="Leads">
          {leads.map((lead) => (
            <CommandItem
              key={lead.id}
              onSelect={() => {
                navigate(lead.path);
                setOpen(false);
              }}
            >
              {lead.name}
            </CommandItem>
          ))}
        </CommandGroup>

        {/* Quick Actions */}
        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() => {
              navigate("/leads/new");
              setOpen(false);
            }}
          >
            Create Lead
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/students/new");
              setOpen(false);
            }}
          >
            Add Student
          </CommandItem>

          <CommandItem
            onSelect={() => {
              navigate("/tasks/new");
              setOpen(false);
            }}
          >
            Create Task
          </CommandItem>
        </CommandGroup>

      </CommandList>
    </CommandDialog>
  );
}