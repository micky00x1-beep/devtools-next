"use client";

import { useState } from "react";
import { explainCode } from "@/lib/ai/explainCode";

export default function ExplainCodeForm() {
  const [code, setCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleExplain() {
    if (!code.trim()) {
      return;
    }

    setIsLoading(true);
    setExplanation("");

    const result = await explainCode(code);

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
    setCode("");
    setExplanation("");
  }

  return (
    <div className="space-y-6">
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        className="h-80 w-full rounded-xl border border-gray-700 bg-gray-900 p-4 font-mono text-sm outline-none focus:border-violet-500"
        placeholder="Paste your code here..."
      />

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleExplain}
          disabled={!code.trim() || isLoading}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
        >
          {isLoading ? "Explaining..." : "Explain Code"}
        </button>

        <button
          onClick={handleCopy}
          disabled={!explanation}
          className="rounded-xl border border-gray-700 px-6 py-3 font-semibold transition hover:border-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? "Copied!" : "Copy Explanation"}
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
            🤖 AI is analyzing your code...
          </p>
        ) : (
          <p className="whitespace-pre-wrap text-gray-400">
            {explanation || "AI explanation will appear here..."}
          </p>
        )}
      </div>
    </div>
  );
}
