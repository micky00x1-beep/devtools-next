"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function formatJson() {
    try {
      const formatted = JSON.stringify(JSON.parse(input), null, 2);
      setOutput(formatted);
      setError("");
    } catch {
      setOutput("");
      setError("The provided JSON is not valid");
    }
  }

  function copyToClipboard() {
    if (!output) return;

    navigator.clipboard.writeText(output);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function clearFields() {
    setInput("");
    setOutput("");
    setError("");
    setCopied(false);
  }

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Paste your JSON below and format it instantly."
    >
      <h1 className="text-5xl font-bold">JSON Formatter</h1>

      <p className="mt-4 text-gray-400">
        Paste your JSON below and format it instantly.
      </p>

      <div className="mt-10 space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON here..."
          className="h-80 w-full rounded-xl border border-gray-800 bg-gray-900 p-4 outline-none"
        />

        <div className="flex gap-4">
          <button
            onClick={formatJson}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            Format JSON
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800"
          >
            Copy
          </button>

          <button
            onClick={clearFields}
            disabled={!input && !output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800"
          >
            Clear
          </button>
        </div>

        {error && <p className="font-medium text-red-500">{error}</p>}

        {copied && (
          <p className="text-green-500 font-medium">Copied to clipboard!</p>
        )}

        <pre className="min-h-80 rounded-xl border border-gray-800 bg-gray-900 p-4">
          {output}
        </pre>
      </div>
    </ToolLayout>
  );
}
