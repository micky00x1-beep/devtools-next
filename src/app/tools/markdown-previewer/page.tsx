"use client";

import { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { marked } from "marked";
import ToolLayout from "@/components/common/ToolLayout";

export default function MarkdownPreviewerPage() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const preview = useMemo(() => {
    if (!input) return "";

    const html = marked.parse(input, {
      async: false,
    });

    return DOMPurify.sanitize(html);
  }, [input]);

  async function copyHtml() {
    if (!preview) return;

    try {
      await navigator.clipboard.writeText(preview);

      setCopied(true);
      setCopyError(false);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  function clearFields() {
    setInput("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="Markdown Previewer"
      description="Write Markdown and preview the rendered result instantly."
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setCopied(false);
            setCopyError(false);
          }}
          placeholder="Write your Markdown here..."
          aria-label="Markdown input"
          spellCheck={false}
          className="h-80 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={copyHtml}
            disabled={!preview}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy HTML
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!input}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {copied && (
            <p className="font-medium text-green-500">
              HTML copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the HTML. Please copy it manually.
            </p>
          )}
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">Preview</h2>

          <div
            aria-label="Markdown preview"
            className="min-h-80 overflow-auto rounded-xl border border-gray-800 bg-gray-950 p-6 text-gray-200"
          >
            {preview ? (
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: preview }}
              />
            ) : (
              <span className="text-gray-500">
                Markdown preview will appear here.
              </span>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
