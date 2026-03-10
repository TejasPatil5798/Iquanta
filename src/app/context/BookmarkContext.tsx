import { createContext, useContext, useState, useEffect } from "react";

interface Bookmark {
  name: string;
  path: string;
}

interface BookmarkContextType {
  bookmarks: Bookmark[];
  addBookmark: (bookmark: Bookmark) => void;
  removeBookmark: (path: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined
);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks from localStorage on startup
  useEffect(() => {
    const saved = localStorage.getItem("iquanta-bookmarks");
    if (saved) {
      setBookmarks(JSON.parse(saved));
    }
  }, []);

  // Save bookmarks whenever they change
  useEffect(() => {
    localStorage.setItem("iquanta-bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark: Bookmark) => {
    setBookmarks((prev) => {
      if (prev.some((b) => b.path === bookmark.path)) return prev;
      return [...prev, bookmark];
    });
  };

  const removeBookmark = (path: string) => {
    setBookmarks((prev) => prev.filter((b) => b.path !== path));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarkProvider");
  }
  return context;
}