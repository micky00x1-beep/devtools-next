"use client";

import { useState } from "react";
import { generateCommit } from "@/lib/ai/generateCommit";

export default function CommitGeneratorForm() {
  const [description, setDescription] = useState("");
  const [commit, setCommit] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!description.trim()) {
      return;
    }

    setIsLoading(true);
    setCommit("");

    const result = await generateCommit(description);

    setCommit(result);
    setIsLoading(false);
  }

  async function handleCopy() {
    if (!commit) {
      return;
    }

    await navigator.clipboard.writeText(commit);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function handleClear() {
    setDescription("");
    setCommit("");
    setCopied(false);
  }

  return (
    <div className="space-y-6">
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Describe your changes..."
        className="h-52 w-full rounded-xl border border-gray-700 bg-gray-900 p-4 outline-none transition focus:border-white"
      />

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleGenerate}
          disabled={!description.trim() || isLoading}
          className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300"
        >
          {isLoading ? "Generating..." : "Generate Commit"}
        </button>

        <button
          onClick={handleCopy}
          disabled={!commit}
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

      <div className="min-h-32 rounded-xl border border-gray-700 bg-gray-900 p-6">
        {isLoading ? (
          <p className="animate-pulse text-violet-400">
            🤖 AI is generating your commit...
          </p>
        ) : (
          <pre className="whitespace-pre-wrap font-mono text-gray-300">
            {commit || "Generated commit message will appear here..."}
          </pre>
        )}
      </div>
    </div>
  );
}
