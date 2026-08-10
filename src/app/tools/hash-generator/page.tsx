"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

const algorithms = ["SHA-256", "SHA-384", "SHA-512"] as const;

type HashAlgorithm = (typeof algorithms)[number];

async function generateHash(
  value: string,
  algorithm: HashAlgorithm
): Promise<string> {
  const data = new TextEncoder().encode(value);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>("SHA-256");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function handleGenerate() {
    if (!input) {
      setOutput("");
      setError("Please enter text to hash.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const hash = await generateHash(input, algorithm);

      setOutput(hash);
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("Unable to generate the hash.");
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
      title="Hash Generator"
      description="Generate secure SHA hashes from text quickly and easily."
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
          placeholder="Enter text to hash..."
          aria-label="Text to hash"
          spellCheck={false}
          className="h-64 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div>
          <label
            htmlFor="hash-algorithm"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Algorithm
          </label>

          <select
            id="hash-algorithm"
            value={algorithm}
            onChange={(event) => {
              setAlgorithm(event.target.value as HashAlgorithm);
              setError("");
              setCopied(false);
              setCopyError(false);
            }}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          >
            {algorithms.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleGenerate}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Generate Hash
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
              Hash copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the hash. Please copy it manually.
            </p>
          )}
        </div>

        <pre
          aria-label="Generated hash"
          className="min-h-32 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
        >
          {output || (
            <span className="text-gray-500">
              Generated hash will appear here.
            </span>
          )}
        </pre>
      </div>
    </ToolLayout>
  );
}
