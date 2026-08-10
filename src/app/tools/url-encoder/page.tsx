"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleEncode() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter a URL or text to encode.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      setOutput(encodeURIComponent(input));
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("Unable to encode the provided input.");
      setCopied(false);
      setCopyError(false);
    }
  }

  function handleDecode() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter an encoded URL or text to decode.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      setOutput(decodeURIComponent(input));
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("The provided input is not valid URL encoding.");
      setCopied(false);
      setCopyError(false);
    }
  }

  async function copyToClipboard() {
    if (!output) return;

    try {
      await navigator.clipboard.writeText(output);

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
    setOutput("");
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="URL Encoder & Decoder"
      description="Encode and decode URLs and text quickly and easily."
    >
      <div className="space-y-6">
        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setError("");
            setCopied(false);
            setCopyError(false);
          }}
          placeholder="Enter your URL or text here..."
          aria-label="URL input"
          spellCheck={false}
          className="h-80 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleEncode}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Encode
          </button>

          <button
            type="button"
            onClick={handleDecode}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Decode
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={!output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!input && !output}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {error && <p className="font-medium text-red-400">{error}</p>}

          {copied && (
            <p className="font-medium text-green-500">
              Output copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the output. Please copy it manually.
            </p>
          )}
        </div>

        <pre
          aria-label="URL encoded or decoded output"
          className="min-h-80 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
        >
          {output || (
            <span className="text-gray-500">
              Encoded or decoded output will appear here.
            </span>
          )}
        </pre>
      </div>
    </ToolLayout>
  );
}
