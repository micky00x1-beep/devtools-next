"use client";

import { useState } from "react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

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

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
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

        <button
          onClick={formatJson}
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200"
        >
          Format JSON
        </button>

        {error && <p className="font-medium text-red-500">{error}</p>}

        <pre className="min-h-80 rounded-xl border border-gray-800 bg-gray-900 p-4">
          {output}
        </pre>
      </div>
    </main>
  );
}
