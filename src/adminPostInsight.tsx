// src/pages/admin/AdminPostInsight.tsx
import React, { useEffect, useState } from 'react';

const CLOUD_NAME = 'ddvyqkmbt';
const UPLOAD_PRESET = 'insights_unsigned'; // the unsigned preset you created in Cloudinary
const FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdqbzwWHrqtksWtt76EwjkCAB1RD-4jIa88svCc2vCt0HWicQ/viewform?embedded=true&hl=en';

const headingFont = { fontFamily: 'Days One, sans-serif' };

// body images: optimize only (no crop)
const optimized = (url: string) =>
  url.replace('/upload/', '/upload/w_900,q_auto,f_auto/');

// cover image: smart 16:9 crop + optimize
const coverTransform = (url: string) =>
  url.replace('/upload/', '/upload/c_fill,g_auto,w_1200,h_675,q_auto,f_auto/');

type BodyImage = { filename: string; url: string };

export const AdminPostInsight: React.FC = () => {
  const [coverUrl, setCoverUrl] = useState('');
  const [bodyImages, setBodyImages] = useState<BodyImage[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [open, setOpen] = useState(true);

  // load the Cloudinary widget script once (no index.html edit needed)
  useEffect(() => {
    if (document.getElementById('cloudinary-widget')) return;
    const s = document.createElement('script');
    s.id = 'cloudinary-widget';
    s.src = 'https://upload-widget.cloudinary.com/global/all.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const openWidget = (multiple: boolean, folder: string, onDone: (info: any) => void) => {
    const w = (window as any).cloudinary?.createUploadWidget(
      {
        cloudName: CLOUD_NAME,
        uploadPreset: UPLOAD_PRESET,
        folder,
        sources: ['local', 'url', 'camera'],
        multiple,
        clientAllowedFormats: ['image'],
        maxFileSize: 5000000, // 5 MB
      },
      (err: any, res: any) => { if (!err && res?.event === 'success') onDone(res.info); }
    );
    w?.open();
  };

  const pill =
    'bg-[#fcd421] text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors';
  const copyBtn =
    'shrink-0 text-xs font-semibold px-3 py-2 rounded-lg bg-black text-[#fcd421] hover:bg-gray-900 transition-colors';

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Page heading + embedded form */}
      <div className="max-w-2xl mx-auto px-4">
        <h1 style={headingFont} className="text-3xl md:text-4xl font-bold text-black mb-2">
          Post an Insight
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Upload images in the panel, copy the links into the form, then submit.
        </p>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <iframe
            title="Post an Insight"
            src={FORM_EMBED_URL}
            width="100%"
            height={1953}
            frameBorder={0}
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Floating image-uploader panel */}
      <div className="fixed top-4 right-4 z-50 w-80 max-w-[90vw]">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#fcd421] overflow-hidden">
          {/* header */}
          <div className="flex items-center justify-between bg-[#fcd421] px-4 py-3">
            <span style={headingFont} className="text-sm font-bold text-black">
              🖼️ Image Uploader
            </span>
            <button
              onClick={() => setOpen(o => !o)}
              className="text-black text-xs font-bold px-2 py-1 rounded hover:bg-yellow-400"
            >
              {open ? '— Hide' : '+ Show'}
            </button>
          </div>

          {open && (
            <div className="p-4 max-h-[75vh] overflow-y-auto space-y-5">
              {/* Cover → raw URL (smart-cropped) */}
              <div>
                <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Cover image</p>
                <button
                  className={pill}
                  onClick={() =>
                    openWidget(false, 'insights/covers', info => setCoverUrl(coverTransform(info.secure_url)))
                  }
                >
                  Upload cover
                </button>
                {coverUrl && (
                  <div className="mt-3 flex gap-2 items-center">
                    <input
                      readOnly
                      value={coverUrl}
                      className="flex-1 min-w-0 border rounded-lg px-2 py-2 text-xs bg-gray-50"
                    />
                    <button className={copyBtn} onClick={() => copy(coverUrl, 'cover')}>
                      {copied === 'cover' ? '✓' : 'Copy'}
                    </button>
                  </div>
                )}
                <p className="text-[11px] text-gray-400 mt-1">
                  Raw URL → paste into the <b>Cover Image URL</b> field.
                </p>
              </div>

              <hr className="border-gray-100" />

              {/* Insight images → Markdown snippets */}
              <div>
                <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Insight images</p>
                <button
                  className={pill}
                  onClick={() =>
                    openWidget(true, 'insights/body', info =>
                      setBodyImages(prev => [
                        ...prev,
                        { filename: info.original_filename, url: optimized(info.secure_url) },
                      ])
                    )
                  }
                >
                  Upload images
                </button>

                {bodyImages.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {bodyImages.map((img, i) => {
                      const snippet = `![${img.filename}](${img.url})`;
                      return (
                        <div key={i} className="flex gap-2 items-center">
                          <code className="flex-1 min-w-0 truncate border rounded-lg px-2 py-2 text-[11px] bg-gray-50">
                            {snippet}
                          </code>
                          <button className={copyBtn} onClick={() => copy(snippet, `img-${i}`)}>
                            {copied === `img-${i}` ? '✓' : 'Copy'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
                <p className="text-[11px] text-gray-400 mt-1">
                  Markdown → paste into the <b>Content</b> field where each image goes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPostInsight;