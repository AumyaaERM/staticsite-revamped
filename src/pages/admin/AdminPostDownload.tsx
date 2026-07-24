import React, { useState } from 'react';

const headingFont = { fontFamily: 'Days One, sans-serif' };

/* ── Cloudinary ── */
const CLOUD_NAME = 'ddvyqkmbt';
const UPLOAD_PRESET = 'downloads_unsigned';
const CLOUDINARY_HOST = 'api.cloudinary.com';
const CLOUDINARY_URL = `https://${CLOUDINARY_HOST}/v1_1/${CLOUD_NAME}/raw/upload`;

/* ── Downloads Google Form ── */
const FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSd3iDDemRy0kumIP1ru6d9iluLQB8XRLdhBtOFvvwD5GsyZfQ/formResponse';

const ENTRY = {
  title: 'entry.673380568',
  category: 'entry.1057278745',
  description: 'entry.2117211538',
  date: 'entry.1652060664',
  pdfUrl: 'entry.1673572068',
  featured: 'entry.154353300',
  status: 'entry.400096937',
};

const CATEGORIES = ['Newsletter', 'Firm Profile', 'Survey Reports'] as const;

export const AdminPostDownload: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('Newsletter');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [featured, setFeatured] = useState(false);
  const [status, setStatus] = useState<'Published' | 'Draft'>('Published');
  const [file, setFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const uploadPdf = async (pdf: File): Promise<string> => {
    const form = new FormData();
    form.append('file', pdf);
    form.append('upload_preset', UPLOAD_PRESET);
    form.append('folder', 'downloads');
    const res = await fetch(CLOUDINARY_URL, { method: 'POST', body: form });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Cloudinary upload failed: ${errText}`);
    }
    const data = await res.json();
    return data.secure_url as string;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget; 
    setMessage(null);
  
    if (!file) {
      setMessage({ type: 'error', text: 'Please choose a PDF file.' });
      return;
    }

    const MAX_PDF_BYTES = 10 * 1024 * 1024;
if (file.size > MAX_PDF_BYTES) {
  setMessage({
    type: 'error',
    text: `PDF is ${(file.size / 1024 / 1024).toFixed(1)} MB — the maximum is 10 MB. Please compress it and try again.`,
  });
  return;
}
  
    setUploading(true);
    try {
      const pdfUrl = await uploadPdf(file);
  
      const body = new FormData();
      body.append(ENTRY.title, title);
      body.append(ENTRY.category, category);
      body.append(ENTRY.description, description);
      body.append(ENTRY.date, date);
      body.append(ENTRY.pdfUrl, pdfUrl);
      body.append(ENTRY.featured, featured ? 'Yes' : 'No');
      body.append(ENTRY.status, status);
  
      await fetch(FORM_ACTION, { method: 'POST', mode: 'no-cors', body });
  
      setMessage({ type: 'success', text: 'Download posted! It will appear on the page within a minute.' });
  
      setTitle(''); setDescription(''); setDate('');
      setFeatured(false); setStatus('Published'); setCategory('Newsletter'); setFile(null);
      formEl.reset(); // ✅ uses the captured ref, not e.currentTarget
    } catch (err) {
      console.error('Post download failed:', err);
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setUploading(false);
    }
  };

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#fcd421] focus:ring-2 focus:ring-[#fcd421]/40 transition';

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8" style={headingFont}>
          Post a Download
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-black mb-1.5">Title</label>
            <input className={inputClass} placeholder="Enter the title of the download that will appear on the card" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-black mb-1.5">Category</label>
            <select
              className={inputClass}
              value={category}
              onChange={(e) => setCategory(e.target.value as (typeof CATEGORIES)[number])}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-black mb-1.5">Description</label>
            <textarea
              className={`${inputClass} min-h-[120px] resize-y`}
              placeholder="Enter the description of the download that will appear on the card"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-bold text-black mb-1.5">Date</label>
            <input
              className={inputClass}
              placeholder="e.g. April, 2026"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* PDF file */}
          <div>
            <label className="block text-sm font-bold text-black mb-1.5">PDF file (Keep under 10MB)</label>
            <input
              type="file"
              accept="application/pdf,.pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className="w-full text-sm file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:bg-[#fcd421] file:text-black file:font-bold hover:file:bg-yellow-400 file:cursor-pointer cursor-pointer"
              required
            />
          </div>

          {/* Featured + Status */}
          <div className="flex flex-wrap items-center gap-6">
            <label className="flex items-center gap-2 text-sm font-bold text-black cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 accent-[#fcd421]"
              />
              Featured
            </label>

            <div className="flex items-center gap-2">
              <label className="text-sm font-bold text-black">Status</label>
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#fcd421]"
                value={status}
                onChange={(e) => setStatus(e.target.value as 'Published' | 'Draft')}
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={uploading}
            style={headingFont}
            className="w-full bg-black text-[#fcd421] font-bold py-4 rounded-lg hover:bg-gray-900 transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {uploading ? 'Uploading…' : 'Post Download'}
          </button>

          {message && (
            <p className={`text-sm font-semibold ${message.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
              {message.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};