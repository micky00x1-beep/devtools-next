"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function UuidPage() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function generateUuid() {
    setUuid(crypto.randomUUID());
    setCopied(false);
    setCopyError(false);
  }

  async function copyToClipboard() {
    if (!uuid) return;

    try {
      await navigator.clipboard.writeText(uuid);
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

  function clearUuid() {
    setUuid("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate secure UUIDs instantly."
    >
      <div className="space-y-6">
        <div
          className="min-h-16 rounded-xl border border-gray-800 bg-gray-950 px-5 py-4"
          aria-live="polite"
        >
          {uuid ? (
            <code className="break-all font-mono text-sm text-gray-200">
              {uuid}
            </code>
          ) : (
            <p className="text-gray-500">
              Your generated UUID will appear here.
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={generateUuid}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Generate
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={!uuid}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={clearUuid}
            disabled={!uuid}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {copied && (
            <p className="font-medium text-green-500">
              UUID copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the UUID. Please copy it manually.
            </p>
          )}
        </div>
      </div>
    </ToolLayout>
  );
}
