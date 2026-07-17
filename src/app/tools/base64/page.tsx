"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function encodeBase64() {
    try {
      const encoded = btoa(input);

      setOutput(encoded);
      setError("");
    } catch {
      setOutput("");
      setError("Unable to encode the provided text.");
    }
  }

  function decodeBase64() {
    try {
      const decoded = atob(input);

      setOutput(decoded);
      setError("");
    } catch {
      setOutput("");
      setError("Invalid Base64 string.");
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
      title="Base64 Encoder / Decoder"
      description="Encode and decode Base64 strings instantly"
    >
      <div className="mt-10 space-y-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text or Base64 string..."
          className="h-80 w-full rounded-xl border border-gray-800 bg-gray-900 p-4 outline-none"
        />

        <div className="flex gap-4">
          <button
            onClick={encodeBase64}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            Encode
          </button>

          <button
            onClick={decodeBase64}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
          >
            Decode
          </button>

          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            onClick={clearFields}
            disabled={!input && !output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
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
