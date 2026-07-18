"use client";

import { useState } from "react";
import { explainRegex } from "@/lib/ai/explainRegex";

export default function RegexExplainerForm() {
  const [regex, setRegex] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleExplain() {
    if (!regex.trim()) {
      return;
    }

    setIsLoading(true);
    setExplanation("");

    const result = await explainRegex(regex);

    setExplanation(result);
    setIsLoading(false);
  }

  async function handleCopy() {
    if (!explanation) {
      return;
    }

    await navigator.clipboard.writeText(explanation);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleClear() {
    setRegex("");
    setExplanation("");
    setCopied(false);
  }

  return (
    <div className="space-y-6">
      <textarea
        value={regex}
        onChange={(event) => setRegex(event.target.value)}
        placeholder="Paste your regular expression..."
        className="h-52 w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-white"
      />

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleExplain}
          disabled={!regex.trim() || isLoading}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
        >
          {isLoading ? "Explaining..." : "Explain Regex"}
        </button>

        <button
          onClick={handleCopy}
          disabled={!explanation}
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
            🤖 AI is analyzing your regex...
          </p>
        ) : (
          <pre className="whitespace-pre-wrap text-gray-300">
            {explanation || "AI explanation will appear here..."}
          </pre>
        )}
      </div>
    </div>
  );
}
