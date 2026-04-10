import React, { useEffect, useMemo, useState } from "react";
import {
  Eye,
  LayoutGrid,
  List,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { Modal } from "antd";

type BlogStatus = "Draft" | "Scheduled" | "Published";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  status: BlogStatus;
  coverColor: string;
  createdAt: string;
  updatedAt: string;
}

const STORAGE_KEY = "iquanta.content.blogs";
const AUTHORS = ["Iquanta Team", "Sarah Johnson", "Mike Davis", "Emily Brown"];
const CATEGORIES = ["Admissions", "Marketing", "Student Success", "Product"];
const COVER_COLORS = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#e9d5ff"];

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "How to build an admissions funnel that converts",
    slug: "admissions-funnel-that-converts",
    excerpt: "A practical guide to turning interest into applications with better content and follow-up.",
    content:
      "<h1>How to build an admissions funnel that converts</h1><p>Use blog content to answer common applicant questions, build trust early, and guide readers toward action.</p><h2>Start with intent</h2><p>Map the questions students ask before they are ready to apply.</p>",
    author: "Iquanta Team",
    category: "Admissions",
    status: "Published",
    coverColor: "#dbeafe",
    createdAt: "2026-04-02T09:00:00.000Z",
    updatedAt: "2026-04-09T08:30:00.000Z",
  },
  {
    id: "2",
    title: "5 email sequences every coaching business should test",
    slug: "email-sequences-coaching-businesses",
    excerpt: "These sequence ideas help you educate leads and increase qualified conversations.",
    content:
      "<h1>5 email sequences every coaching business should test</h1><p>Each sequence should have one job: educate, qualify, or convert.</p>",
    author: "Sarah Johnson",
    category: "Marketing",
    status: "Draft",
    coverColor: "#dcfce7",
    createdAt: "2026-04-05T10:15:00.000Z",
    updatedAt: "2026-04-08T13:45:00.000Z",
  },
];

interface BlogDraft {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  status: BlogStatus;
  coverColor: string;
}

const emptyDraft = (): BlogDraft => ({
  title: "",
  slug: "",
  excerpt: "",
  content: "<h1>New post title</h1><p>Start writing your blog post here.</p>",
  author: AUTHORS[0],
  category: CATEGORIES[0],
  status: "Draft",
  coverColor: COVER_COLORS[0],
});

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function CntBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_POSTS;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return DEFAULT_POSTS;
    }

    try {
      return JSON.parse(saved) as BlogPost[];
    } catch {
      return DEFAULT_POSTS;
    }
  });
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [statusFilter, setStatusFilter] = useState<"All" | BlogStatus>("All");
  const [selectedPostId, setSelectedPostId] = useState<string | null>(DEFAULT_POSTS[0]?.id ?? null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<BlogDraft>(emptyDraft);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term);
      const matchesStatus = statusFilter === "All" || post.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [posts, search, statusFilter]);

  const selectedPost = posts.find((post) => post.id === selectedPostId) ?? null;

  const openCreate = (withAI = false) => {
    const nextDraft = emptyDraft();
    if (withAI) {
      nextDraft.title = "AI-generated blog draft";
      nextDraft.slug = "ai-generated-blog-draft";
      nextDraft.excerpt =
        "A starter draft generated to help your team go from idea to published article faster.";
      nextDraft.content =
        "<h1>AI-generated blog draft</h1><p>This starter draft gives your team a headline, supporting copy, and a structure to refine before publishing.</p><h2>Why it works</h2><p>It helps you move from blank page to review-ready draft quickly.</p>";
      nextDraft.status = "Draft";
      nextDraft.coverColor = COVER_COLORS[2];
    }

    setEditingId(null);
    setDraft(nextDraft);
    setPreviewMode(false);
    setIsModalOpen(true);
  };

  const openEdit = (post: BlogPost, preview = false) => {
    setEditingId(post.id);
    setSelectedPostId(post.id);
    setDraft({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      status: post.status,
      coverColor: post.coverColor,
    });
    setPreviewMode(preview);
    setIsModalOpen(true);
  };

  const savePost = () => {
    if (!draft.title.trim() || !draft.excerpt.trim()) {
      return;
    }

    const now = new Date().toISOString();
    const nextPost: BlogPost = {
      id: editingId ?? String(Date.now()),
      title: draft.title.trim(),
      slug: slugify(draft.slug || draft.title),
      excerpt: draft.excerpt.trim(),
      content: draft.content,
      author: draft.author,
      category: draft.category,
      status: draft.status,
      coverColor: draft.coverColor,
      createdAt: posts.find((post) => post.id === editingId)?.createdAt ?? now,
      updatedAt: now,
    };

    setPosts((current) =>
      editingId
        ? current.map((post) => (post.id === editingId ? nextPost : post))
        : [nextPost, ...current]
    );
    setSelectedPostId(nextPost.id);
    setIsModalOpen(false);
  };

  const deletePost = (postId: string) => {
    setPosts((current) => current.filter((post) => post.id !== postId));
    if (selectedPostId === postId) {
      setSelectedPostId(null);
    }
    if (editingId === postId) {
      setIsModalOpen(false);
    }
  };

  const duplicatePost = (post: BlogPost) => {
    const now = new Date().toISOString();
    const copy: BlogPost = {
      ...post,
      id: String(Date.now()),
      title: `${post.title} Copy`,
      slug: `${post.slug}-copy`,
      status: "Draft",
      createdAt: now,
      updatedAt: now,
    };
    setPosts((current) => [copy, ...current]);
  };

  const togglePublish = (postId: string) => {
    const now = new Date().toISOString();
    setPosts((current) =>
      current.map((post) =>
        post.id === postId
          ? {
              ...post,
              status: post.status === "Published" ? "Draft" : "Published",
              updatedAt: now,
            }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-gray-500">Blog posts</p>
            <h1 className="text-3xl font-semibold text-gray-900">
              Grow your audience with blog content that actually ships
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Create drafts, preview posts, publish them, and keep everything manageable from one page.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => openCreate(true)}
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            >
              <Sparkles size={16} />
              Start with AI
            </button>
            <button
              onClick={() => openCreate(false)}
              className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              <Plus size={16} />
              Start from scratch
            </button>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search posts"
            className="w-full rounded-md border border-gray-300 py-2 pl-9 pr-10 text-sm outline-none"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value as "All" | BlogStatus)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
          >
            <option value="All">All statuses</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Published">Published</option>
          </select>

          <button
            onClick={() => setViewMode("grid")}
            className={`rounded-md border px-3 py-2 text-sm ${
              viewMode === "grid"
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white text-gray-700"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <LayoutGrid size={14} />
              Grid
            </span>
          </button>

          <button
            onClick={() => setViewMode("list")}
            className={`rounded-md border px-3 py-2 text-sm ${
              viewMode === "list"
                ? "border-gray-900 bg-gray-900 text-white"
                : "border-gray-300 bg-white text-gray-700"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <List size={14} />
              List
            </span>
          </button>

          <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">
            {filteredPosts.length} posts
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          {filteredPosts.length === 0 ? (
            <div className="rounded-xl border border-dashed border-gray-300 bg-white p-12 text-center">
              <h2 className="text-xl font-semibold text-gray-900">No blog posts match this view</h2>
              <p className="mt-2 text-sm text-gray-500">
                Create a new draft or clear the search and filters to see existing content.
              </p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`rounded-xl border bg-white p-4 shadow-sm ${
                    selectedPostId === post.id ? "border-orange-300" : "border-gray-200"
                  }`}
                >
                  <div
                    className="mb-4 rounded-xl p-4"
                    style={{ backgroundColor: post.coverColor }}
                  >
                    <div className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
                      {post.status}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-2 text-sm text-gray-700">{post.excerpt}</p>
                  </div>
                  <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{formatDate(post.updatedAt)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedPostId(post.id)}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
                    >
                      <Eye size={14} />
                      Preview
                    </button>
                    <button
                      onClick={() => openEdit(post)}
                      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
                    >
                      <Pencil size={14} />
                      Edit
                    </button>
                    <button
                      onClick={() => togglePublish(post.id)}
                      className="rounded-md bg-gray-900 px-3 py-2 text-sm text-white"
                    >
                      {post.status === "Published" ? "Unpublish" : "Publish"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Updated</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-[#ff7a59]">{post.title}</td>
                      <td className="px-4 py-3">{post.author}</td>
                      <td className="px-4 py-3">{post.category}</td>
                      <td className="px-4 py-3">{post.status}</td>
                      <td className="px-4 py-3">{formatDate(post.updatedAt)}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedPostId(post.id)}
                            className="text-sm text-gray-600"
                          >
                            Preview
                          </button>
                          <button
                            onClick={() => openEdit(post)}
                            className="text-sm text-gray-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deletePost(post.id)}
                            className="text-sm text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#111827] p-5 text-white">
          {selectedPost ? (
            <>
              <div
                className="mb-5 rounded-2xl p-5 text-gray-900"
                style={{ backgroundColor: selectedPost.coverColor }}
              >
                <div className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
                  {selectedPost.status}
                </div>
                <h2 className="text-2xl font-semibold">{selectedPost.title}</h2>
                <p className="mt-3 text-sm">{selectedPost.excerpt}</p>
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{selectedPost.author}</p>
                  <p className="text-xs text-gray-400">
                    {selectedPost.category} • Updated {formatDate(selectedPost.updatedAt)}
                  </p>
                </div>
                <button
                  onClick={() => openEdit(selectedPost, true)}
                  className="rounded-md border border-gray-600 px-3 py-2 text-sm text-gray-200"
                >
                  Full preview
                </button>
              </div>

              <div className="max-h-[420px] overflow-auto rounded-xl bg-white p-4 text-gray-900">
                <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => openEdit(selectedPost)}
                  className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900"
                >
                  Edit post
                </button>
                <button
                  onClick={() => duplicatePost(selectedPost)}
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-200"
                >
                  Duplicate
                </button>
                <button
                  onClick={() => deletePost(selectedPost.id)}
                  className="rounded-md border border-red-400/40 px-4 py-2 text-sm text-red-300"
                >
                  Delete
                </button>
              </div>
            </>
          ) : (
            <div className="flex min-h-[320px] items-center justify-center text-sm text-gray-400">
              Select a blog post to preview it here.
            </div>
          )}
        </div>
      </div>

      <Modal
        title={editingId ? "Edit blog post" : "Create blog post"}
        open={isModalOpen}
        onCancel={() => {
          if (previewMode) {
            setPreviewMode(false);
            return;
          }
          setIsModalOpen(false);
        }}
        onOk={savePost}
        okText={editingId ? "Save changes" : "Create post"}
        footer={previewMode ? null : undefined}
        destroyOnHidden
        width={900}
        afterClose={() => setPreviewMode(false)}
      >
        {!previewMode ? (
          <div className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <label className="block text-sm text-gray-700">
                Title
                <input
                  value={draft.title}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      title: event.target.value,
                      slug: draft.slug || slugify(event.target.value),
                    })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="block text-sm text-gray-700">
                Slug
                <input
                  value={draft.slug}
                  onChange={(event) =>
                    setDraft({ ...draft, slug: slugify(event.target.value) })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </label>
            </div>

            <label className="block text-sm text-gray-700">
              Excerpt
              <textarea
                value={draft.excerpt}
                onChange={(event) => setDraft({ ...draft, excerpt: event.target.value })}
                rows={3}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </label>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <label className="block text-sm text-gray-700">
                Author
                <select
                  value={draft.author}
                  onChange={(event) => setDraft({ ...draft, author: event.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  {AUTHORS.map((author) => (
                    <option key={author}>{author}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-gray-700">
                Category
                <select
                  value={draft.category}
                  onChange={(event) => setDraft({ ...draft, category: event.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  {CATEGORIES.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-gray-700">
                Status
                <select
                  value={draft.status}
                  onChange={(event) =>
                    setDraft({ ...draft, status: event.target.value as BlogStatus })
                  }
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="Draft">Draft</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Published">Published</option>
                </select>
              </label>

              <label className="block text-sm text-gray-700">
                Cover color
                <select
                  value={draft.coverColor}
                  onChange={(event) => setDraft({ ...draft, coverColor: event.target.value })}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  {COVER_COLORS.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm text-gray-700">
              HTML content
              <textarea
                value={draft.content}
                onChange={(event) => setDraft({ ...draft, content: event.target.value })}
                rows={14}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 font-mono text-sm"
              />
            </label>

            <div className="flex justify-between">
              <button
                onClick={() => setPreviewMode(true)}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700"
              >
                Preview
              </button>
              {editingId && (
                <button
                  onClick={() => deletePost(editingId)}
                  className="inline-flex items-center gap-2 text-sm text-red-600"
                >
                  <Trash2 size={14} />
                  Delete this post
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4 pt-2">
            <div
              className="rounded-2xl p-5 text-gray-900"
              style={{ backgroundColor: draft.coverColor }}
            >
              <div className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
                {draft.status}
              </div>
              <h2 className="text-2xl font-semibold">{draft.title || "Untitled post"}</h2>
              <p className="mt-3 text-sm">{draft.excerpt || "Add an excerpt to summarize the post."}</p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{draft.author}</p>
                <p className="text-xs text-gray-500">
                  {draft.category} • /{slugify(draft.slug || draft.title || "new-post")}
                </p>
              </div>
              <button
                onClick={() => setPreviewMode(false)}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-700"
              >
                Back to editor
              </button>
            </div>
            <div className="max-h-[460px] overflow-auto rounded-xl border border-gray-200 bg-white p-4">
              <div dangerouslySetInnerHTML={{ __html: draft.content }} />
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CntBlogs;
