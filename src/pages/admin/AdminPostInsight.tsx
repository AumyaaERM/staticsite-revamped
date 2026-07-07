// src/pages/admin/AdminPostInsight.tsx
// Admin editor to create and publish an Insight: fill the form, upload images,
// preview it live (card + article), then submit to the Google Form / Sheet.
import React, { useEffect, useMemo, useState } from "react";
import type { Insight, ServiceCategory } from "../../types/insight";
import { InsightCard } from "../../components/insights/InsightCard";
import InsightDetailPage from "../insights/InsightDetailPage";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdqbzwWHrqtksWtt76EwjkCAB1RD-4jIa88svCc2vCt0HWicQ/formResponse";

const ENTRY = {
  title: "entry.1853405599",
  date: "entry.525178279",
  category: "entry.1280525612",
  serviceCategory: "entry.285034978",
  description: "entry.2080296849",
  coverImage: "entry.1360249933",
  featured: "entry.416533866",
  content: "entry.301448782",
  status: "entry.699503547",
};

const CATEGORIES = [
  "Blog",
  "Bulletin",
  "Case Study",
  "Podcast",
  "Survey Report",
] as const;
const SERVICE_CATEGORIES: ServiceCategory[] = [
  "Business",
  "Tech",
  "ESG",
  "Risk",
];

const CLOUD_NAME = "ddvyqkmbt";
const UPLOAD_PRESET = "insights_unsigned";
const optimized = (url: string) =>
  url.replace("/upload/", "/upload/w_900,q_auto,f_auto/");
const coverTransform = (url: string) =>
  url.replace("/upload/", "/upload/c_fill,g_auto,w_1200,h_675,q_auto,f_auto/");

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const PLACEHOLDER_COVER =
  "data:image/svg+xml," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' fill='#9ca3af' font-family='sans-serif' font-size='40' text-anchor='middle' dominant-baseline='middle'>Cover preview</text></svg>",
  );

const headingFont = { fontFamily: "Days One, sans-serif" };

const FORMATTER_PROMPT = `Convert the text I give you into beautiful, well-structured Markdown code for Aumyaa Insights content (blogs, bulletins, case studies, survey reports, etc. from a business, tech, ESG, risk & compliance consultancy).
- Don't add or change any facts, numbers, names, or claims — only format what I give you. You may fix grammar and wording.
- Structure it well using your own judgment: ## for sections and ### for sub-points (never # / H1, since the title is added automatically).
- Use whatever fits the content: > blockquotes for key stats or quotes (they render as yellow callout boxes), tables for comparisons or structured data, **bold** for key terms, bulleted/numbered lists, and --- dividers between major sections.
- Images: only if I give you a URL — place it on its own line as ![alt text](url) where I indicate. Never invent image URLs.
Links: if the raw text contains a URL — whether it's a source, citation, reference, "read more at...", or just a bare link pasted inline — always convert it into a proper clickable Markdown link using clear, descriptive link text, e.g. [World Economic Forum](https://...) or [read the full report](https://...). Never leave a raw URL as plain text, and never invent or guess a URL that isn't explicitly present in what I give you.
- Put down the content "sources" as blue clickable bullet points.
- Output ONLY the final Markdown code file which will be rendered by ReactMarkdown, nothing else.

Now format this:
[PASTE YOUR RAW CONTENT HERE]`;

type BodyImage = { filename: string; url: string };

const emptyForm = {
  title: "",
  date: "",
  category: "Blog" as string,
  serviceCategory: "" as ServiceCategory | "",
  description: "",
  coverUrl: "",
  featured: false,
  content: "",
  status: "Draft" as "Published" | "Draft",
};

const EyeIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Small eye icon that reveals a plain-English explanation of the field on hover.
const Hint: React.FC<{ text: string }> = ({ text }) => (
  <span className="relative inline-flex group">
    <span tabIndex={0} className="text-gray-400 hover:text-black cursor-help">
      <EyeIcon />
    </span>
    <span className="pointer-events-none absolute left-0 top-full mt-1 w-56 rounded-lg bg-gray-900 text-white text-[11px] font-normal normal-case tracking-normal leading-snug px-3 py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity z-30 shadow-lg">
      {text}
    </span>
  </span>
);

const FieldLabel: React.FC<{
  text: string;
  hint: string;
  required?: boolean;
}> = ({ text, hint, required }) => (
  <div className="flex items-center gap-1.5 mb-1">
    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
      {text}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </span>
    <Hint text={hint} />
  </div>
);

export const AdminPostInsight: React.FC = () => {
  const [form, setForm] = useState({ ...emptyForm });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [previewMode, setPreviewMode] = useState<"card" | "article">("card");

  const [bodyImages, setBodyImages] = useState<BodyImage[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [mediaOpen, setMediaOpen] = useState(true);
  const [promptOpen, setPromptOpen] = useState(false);

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const preview: Insight = useMemo(
    () =>
      ({
        title: form.title || "Untitled insight",
        date: form.date,
        image: form.coverUrl || PLACEHOLDER_COVER,
        description: form.description || "Your description preview shows here…",
        category: form.category as Insight["category"],
        slug: slugify(form.title || "untitled"),
        contentFile: slugify(form.title || "untitled"),
        content: form.content || "_Start writing to see the article preview…_",
        featured: form.featured,
        serviceCategory: form.serviceCategory,
      }) as Insight,
    [form],
  );

  useEffect(() => {
    if (document.getElementById("cloudinary-widget")) return;
    const s = document.createElement("script");
    s.id = "cloudinary-widget";
    s.src = "https://upload-widget.cloudinary.com/global/all.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const openWidget = (
    multiple: boolean,
    folder: string,
    onDone: (info: any) => void,
  ) => {
    const w = (window as any).cloudinary?.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        folder,
        sources: ["local", "url", "camera"],
        multiple,
        clientAllowedFormats: ["image"],
        maxFileSize: 5000000,
      },
      (err: any, res: any) => {
        if (!err && res?.event === "success") onDone(res.info);
      },
    );
    w?.open();
  };

  const submit = async () => {
    if (!form.title.trim()) {
      alert("Title is required.");
      return;
    }
    setSubmitting(true);
    const fd = new FormData();
    fd.append(ENTRY.title, form.title);
    if (form.date) fd.append(ENTRY.date, form.date);
    fd.append(ENTRY.category, form.category);
    if (form.serviceCategory)
      fd.append(ENTRY.serviceCategory, form.serviceCategory);
    fd.append(ENTRY.description, form.description);
    if (form.coverUrl) fd.append(ENTRY.coverImage, form.coverUrl);
    fd.append(ENTRY.featured, form.featured ? "Yes" : "No");
    fd.append(ENTRY.content, form.content);
    fd.append(ENTRY.status, form.status);
    try {
      await fetch(FORM_ACTION, { method: "POST", mode: "no-cors", body: fd });
      setDone(true);
    } catch {
      alert("Submit failed — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const input =
    "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#fcd421] focus:ring-1 focus:ring-[#fcd421]";
  const pill =
    "bg-[#fcd421] text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors";
  const miniBtn =
    "shrink-0 text-xs font-semibold px-2.5 py-1.5 rounded-md bg-black text-[#fcd421] hover:bg-gray-900 transition-colors";
  const seg = (active: boolean) =>
    "px-3 py-1 text-xs font-bold rounded-md transition-colors " +
    (active ? "bg-black text-[#fcd421]" : "text-gray-500 hover:text-black");

  if (done) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 text-center max-w-md">
          <div className="text-4xl mb-3">✅</div>
          <h2 style={headingFont} className="text-xl font-bold text-black mb-2">
            Insight submitted
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            It lands in the Google Sheet instantly and appears on the site
            within ~1–5 min once its Status is <strong>Published</strong>.
          </p>
          <button
            onClick={() => {
              setForm({ ...emptyForm });
              setBodyImages([]);
              setDone(false);
            }}
            className="bg-[#fcd421] text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-400"
          >
            Post another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          <h1
            style={headingFont}
            className="text-lg sm:text-xl font-bold text-black"
          >
            Post an Insight
          </h1>
          <span className="hidden md:inline text-xs text-gray-400">
            Draft, preview, then publish
          </span>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <select
                value={form.status}
                onChange={(e) =>
                  set("status", e.target.value as "Published" | "Draft")
                }
                className="border border-gray-300 rounded-lg px-2.5 py-2 text-sm focus:outline-none focus:border-[#fcd421] focus:ring-1 focus:ring-[#fcd421]"
              >
                <option>Draft</option>
                <option>Published</option>
              </select>
              <Hint text="Draft = saved but hidden from the website. Published = live for everyone to see." />
            </div>
            <button
              type="button"
              disabled={submitting}
              onClick={submit}
              className="bg-black text-[#fcd421] font-bold text-sm px-5 py-2 rounded-full hover:bg-gray-900 disabled:opacity-50"
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <span
                style={headingFont}
                className="text-sm font-bold text-black"
              >
                🤖 AI formatter prompt
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => copy(FORMATTER_PROMPT, "prompt")}
                  className="text-xs font-semibold px-3 py-1.5 rounded-md bg-black text-[#fcd421] hover:bg-gray-900 transition-colors"
                >
                  {copied === "prompt" ? "✓ Copied" : "Copy prompt"}
                </button>
                <button
                  onClick={() => setPromptOpen((o) => !o)}
                  className="text-xs font-bold text-gray-500 hover:text-black px-2 py-1"
                >
                  {promptOpen ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            {promptOpen && (
              <div className="p-4">
                <p className="text-xs text-gray-500 mb-2">
                  Paste this into any AI (ChatGPT, Claude, Gemini), add your raw
                  text where indicated, then paste the result into the{" "}
                  <b>Content (Markdown)</b> field.
                </p>
                <pre className="whitespace-pre-wrap text-xs text-gray-700 bg-gray-50 border border-gray-200 rounded-lg p-3 max-h-64 overflow-y-auto font-mono">
                  {FORMATTER_PROMPT}
                </pre>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border-2 border-[#fcd421] overflow-hidden">
            <div className="flex items-center justify-between bg-[#fcd421] px-4 py-2.5">
              <span
                style={headingFont}
                className="text-sm font-bold text-black"
              >
                🖼️ Image Uploader
              </span>
              <button
                onClick={() => setMediaOpen((o) => !o)}
                className="text-black text-xs font-bold px-2 py-1 rounded hover:bg-yellow-400"
              >
                {mediaOpen ? "— Hide" : "+ Show"}
              </button>
            </div>

            {mediaOpen && (
              <div className="p-4 grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      Cover image
                    </span>
                    <Hint text="The main image at the top of the article. Uploading here auto-fills the Cover image URL field below." />
                  </div>
                  <button
                    className={pill}
                    onClick={() =>
                      openWidget(false, "insights/covers", (info) =>
                        set("coverUrl", coverTransform(info.secure_url)),
                      )
                    }
                  >
                    Upload cover
                  </button>
                  {form.coverUrl && (
                    <div className="mt-3">
                      <img
                        src={form.coverUrl}
                        alt=""
                        className="h-20 w-full object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                      Insight images
                    </span>
                    <Hint text="Images used inside the article body. Upload, then Copy the Markdown and paste it into Content where the image should appear." />
                  </div>
                  <button
                    className={pill}
                    onClick={() =>
                      openWidget(true, "insights/body", (info) =>
                        setBodyImages((prev) => [
                          ...prev,
                          {
                            filename: info.original_filename,
                            url: optimized(info.secure_url),
                          },
                        ]),
                      )
                    }
                  >
                    Upload images
                  </button>
                  {bodyImages.length > 0 && (
                    <div className="mt-3 space-y-2 max-h-40 overflow-y-auto pr-1">
                      {bodyImages.map((img, i) => {
                        const snippet =
                          "![" + img.filename + "](" + img.url + ")";
                        const key = "img-" + i;
                        return (
                          <div key={i} className="flex gap-1.5 items-center">
                            <img
                              src={img.url}
                              alt=""
                              className="h-7 w-9 object-cover rounded"
                            />
                            <span className="flex-1 min-w-0 truncate text-[11px] text-gray-500">
                              {img.filename}
                            </span>
                            <button
                              className={miniBtn}
                              onClick={() => copy(snippet, key)}
                            >
                              {copied === key ? "✓" : "Copy"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-4">
            <div>
              <FieldLabel
                text="Title"
                required
                hint="The headline of the insight. Shows as the big title on the article and on the insight card."
              />
              <input
                className={input}
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Why data governance is the backbone of DPDP compliance"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel
                  text="Date"
                  hint="The publish date shown on the article. Optional — leave blank to hide it."
                />
                <input
                  type="date"
                  className={input}
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                />
              </div>
              <div>
                <FieldLabel
                  text="Featured?"
                  hint="Choose Yes to highlight this insight in featured spots on the site."
                />
                <select
                  className={input}
                  value={form.featured ? "Yes" : "No"}
                  onChange={(e) => set("featured", e.target.value === "Yes")}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <FieldLabel
                  text="Category"
                  hint="The type of content: Blog, Bulletin, Case Study, Podcast, or Survey Report. Shows as the yellow badge."
                />
                <select
                  className={input}
                  value={form.category}
                  onChange={(e) => set("category", e.target.value)}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <FieldLabel
                  text="Service Category"
                  hint="Which practice it belongs to: Business, Tech, ESG, or Risk. Shows as the black badge."
                />
                <select
                  className={input}
                  value={form.serviceCategory}
                  onChange={(e) =>
                    set(
                      "serviceCategory",
                      e.target.value as ServiceCategory | "",
                    )
                  }
                >
                  <option value="">—</option>
                  {SERVICE_CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <FieldLabel
                text="Description"
                hint="A short 1–2 sentence summary shown on the insight card. This does not appear inside the article."
              />
              <textarea
                className={input}
                rows={3}
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="One or two sentences shown on the insight card."
              />
            </div>

            <div>
              <FieldLabel
                text="Cover image URL"
                hint="The main image link. Easiest way: use 'Upload cover' above and this fills in automatically. Or paste an image URL."
              />
              <input
                className={input}
                value={form.coverUrl}
                onChange={(e) => set("coverUrl", e.target.value)}
                placeholder="Use the uploader → Upload cover, or paste a URL"
              />
            </div>

            <div>
              <FieldLabel
                text="Content (Markdown)"
                hint="The full article body, written in Markdown. Use the AI formatter prompt above to turn raw text into Markdown, then paste it here."
              />
              <textarea
                className={`${input} font-mono`}
                rows={14}
                value={form.content}
                onChange={(e) => set("content", e.target.value)}
                placeholder="Use the AI formatter prompt above to turn your raw text into Markdown, then paste it here. For images, upload them in the Image Uploader above, Copy the link, and paste it where the image should appear."
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 lg:sticky lg:top-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Live preview
              </span>
              <div className="ml-auto inline-flex rounded-lg bg-gray-100 p-0.5">
                <button
                  onClick={() => setPreviewMode("card")}
                  className={seg(previewMode === "card")}
                >
                  Card
                </button>
                <button
                  onClick={() => setPreviewMode("article")}
                  className={seg(previewMode === "article")}
                >
                  Article
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {previewMode === "card" ? (
                <div className="max-w-sm mx-auto pointer-events-none">
                  <InsightCard insight={preview} />
                </div>
              ) : (
                <div className="bg-white rounded-xl">
                  <InsightDetailPage insight={preview} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostInsight;