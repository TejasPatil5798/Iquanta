import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { BookmarkProvider } from "./context/BookmarkContext";

export default function App() {
  return (
    <BookmarkProvider>
      <RouterProvider router={router} />
      <Toaster />
    </BookmarkProvider>
  );
}