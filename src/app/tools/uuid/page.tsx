"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function UuidPage() {
  const [uuid, setUuid] = useState("");
  const [copied, setCopied] = useState(false);

  function generateUuid() {
    setUuid(crypto.randomUUID());
  }

  function copyToClipboard() {
    if (!uuid) return;

    navigator.clipboard.writeText(uuid);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function clearUuid() {
    setUuid("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate secure UUIDs instantly."
    >
      <div className="space-y-6">
        <div className="flex h-20 w-full items-center rounded-xl border border-gray-800 bg-gray-900 p-4 text-lg">
          <span className="truncate">{uuid}</span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={generateUuid}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            Generate
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!uuid}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            onClick={clearUuid}
            disabled={!uuid}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        {copied && (
          <p className="font-medium text-green-500">Copied to clipboard!</p>
        )}
      </div>
    </ToolLayout>
  );
}
