"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

function encodeBase64(value: string) {
  const bytes = new TextEncoder().encode(value);

  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

function decodeBase64(value: string) {
  const binary = atob(value);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

export default function Base64Page() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleEncode() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter text to encode.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      setOutput(encodeBase64(input));
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("Unable to encode the provided text.");
      setCopied(false);
      setCopyError(false);
    }
  }

  function handleDecode() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter a Base64 string to decode.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      setOutput(decodeBase64(input));
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("Invalid Base64 string.");
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
      title="Base64 Encoder & Decoder"
      description="Encode and decode Base64 strings quickly and securely."
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
          placeholder="Enter your text or Base64 string..."
          aria-label="Base64 input"
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
          aria-label="Base64 output"
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
