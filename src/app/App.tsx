import { RouterProvider } from "react-router";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";
import { BookmarkProvider } from "./context/BookmarkContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BookmarkProvider>
        <RouterProvider router={router} />
        <Toaster />
      </BookmarkProvider>
    </AuthProvider>
  );
}