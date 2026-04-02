# Admissions Module Structure

This app already uses `src/app/pages/<domain>` for grouped feature areas like `crm`, `marketing`, and `sales`.

For the student admission portal, the proper location for new module files is:

- `src/app/pages/admissions/dashboard`
- `src/app/pages/admissions/leads`
- `src/app/pages/admissions/students`
- `src/app/pages/admissions/applications`
- `src/app/pages/admissions/documents`
- `src/app/pages/admissions/communication`
- `src/app/pages/admissions/tasks`
- `src/app/pages/admissions/analytics`
- `src/app/pages/admissions/users`
- `src/app/pages/admissions/student-portal`

Keep shared admission-specific helpers in:

- `src/app/lib/portalRoles.ts`
- `src/app/lib/admissions-modules.ts`
- `src/app/data/admissions`

Keep global shell wiring in:

- `src/app/routes.tsx`
- `src/app/layout/Sidebar.tsx`
- `src/app/layout/TopNavbar.tsx`

Recommended build order:

1. `dashboard`
2. `leads`
3. `applications`
4. `documents`
5. `communication`
6. `tasks`
7. `students`
8. `analytics`
9. `users`
10. `student-portal`
