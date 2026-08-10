"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [testString, setTestString] = useState("");
  const [flags, setFlags] = useState("g");
  const [matches, setMatches] = useState<string[]>([]);
  const [error, setError] = useState("");

  function testRegex() {
    if (!pattern.trim()) {
      setMatches([]);
      setError("Please enter a regular expression.");
      return;
    }

    if (!testString) {
      setMatches([]);
      setError("Please enter text to test.");
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const foundMatches = testString.match(regex);

      setMatches(foundMatches ?? []);
      setError("");
    } catch {
      setMatches([]);
      setError("The provided regular expression or flags are not valid.");
    }
  }

  function clearFields() {
    setPattern("");
    setTestString("");
    setFlags("g");
    setMatches([]);
    setError("");
  }

  return (
    <ToolLayout
      title="Regex Tester"
      description="Test regular expressions against text and inspect the matching results."
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="regex-pattern"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Regular Expression
          </label>

          <input
            id="regex-pattern"
            type="text"
            value={pattern}
            onChange={(event) => {
              setPattern(event.target.value);
              setError("");
            }}
            placeholder="e.g. \d+"
            spellCheck={false}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="regex-flags"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Flags
          </label>

          <input
            id="regex-flags"
            type="text"
            value={flags}
            onChange={(event) => {
              setFlags(event.target.value);
              setError("");
            }}
            placeholder="e.g. gim"
            spellCheck={false}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="regex-test-string"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Test String
          </label>

          <textarea
            id="regex-test-string"
            value={testString}
            onChange={(event) => {
              setTestString(event.target.value);
              setError("");
            }}
            placeholder="Enter the text you want to test..."
            spellCheck={false}
            className="h-64 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={testRegex}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Test Regex
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!pattern && !testString}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {error && <p className="font-medium text-red-400">{error}</p>}
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Matches</h2>

            <span className="text-sm text-gray-500">
              {matches.length} {matches.length === 1 ? "match" : "matches"}
            </span>
          </div>

          <div
            aria-label="Regex matches"
            className="min-h-32 max-h-[32rem] overflow-auto rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
          >
            {matches.length > 0 ? (
              <ul className="space-y-2">
                {matches.map((match, index) => (
                  <li
                    key={`${match}-${index}`}
                    className="rounded-lg border border-gray-800 bg-gray-900 p-3"
                  >
                    {match}
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-gray-500">
                Regex matches will appear here.
              </span>
            )}
          </div>
        </div>
      </div>
    </ToolLayout>
  );
}
