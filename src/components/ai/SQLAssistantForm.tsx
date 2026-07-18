"use client";

import { useState } from "react";
import { generateSQL } from "@/lib/ai/generateSQL";

export default function SQLAssistantForm() {
  const [prompt, setPrompt] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!prompt.trim()) {
      return;
    }

    setIsLoading(true);
    setQuery("");

    const result = await generateSQL(prompt);

    setQuery(result);
    setIsLoading(false);
  }

  async function handleCopy() {
    if (!query) {
      return;
    }

    await navigator.clipboard.writeText(query);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleClear() {
    setPrompt("");
    setQuery("");
    setCopied(false);
  }

  return (
    <div className="space-y-6">
      <textarea
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="Describe the SQL query you need..."
        className="h-52 w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-white"
      />

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isLoading}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
        >
          {isLoading ? "Generating..." : "Generate SQL"}
        </button>

        <button
          onClick={handleCopy}
          disabled={!query}
          className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <button
          onClick={handleClear}
          className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-white"
        >
          Clear
        </button>
      </div>

      <div className="min-h-60 rounded-xl border border-gray-700 bg-gray-900 p-6">
        {isLoading ? (
          <p className="animate-pulse text-violet-400">
            🤖 AI is generating your SQL query...
          </p>
        ) : (
          <pre className="whitespace-pre-wrap font-mono text-gray-300">
            {query || "Generated SQL query will appear here..."}
          </pre>
        )}
      </div>
    </div>
  );
}
