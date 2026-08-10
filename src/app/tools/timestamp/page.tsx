"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

function formatUtcDate(date: Date) {
  return date.toISOString();
}

export default function TimestampPage() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function timestampToDate() {
    if (!timestamp.trim()) {
      setDate("");
      setError("Please enter a Unix timestamp.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    const numericTimestamp = Number(timestamp.trim());

    if (!Number.isInteger(numericTimestamp)) {
      setDate("");
      setError("Please enter a valid Unix timestamp.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    const milliseconds = numericTimestamp * 1000;
    const result = new Date(milliseconds);

    if (Number.isNaN(result.getTime())) {
      setDate("");
      setError("The provided Unix timestamp is not valid.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    setDate(formatUtcDate(result));
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  function dateToTimestamp() {
    if (!date.trim()) {
      setTimestamp("");
      setError("Please enter a UTC date.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    const parsedDate = new Date(date.trim());

    if (Number.isNaN(parsedDate.getTime())) {
      setTimestamp("");
      setError("Please enter a valid UTC date.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    setTimestamp(Math.floor(parsedDate.getTime() / 1000).toString());
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  async function copyToClipboard() {
    const output = date || timestamp;

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
    setTimestamp("");
    setDate("");
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="Unix Timestamp Converter"
      description="Convert Unix timestamps and UTC dates quickly and easily."
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="timestamp"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Unix Timestamp
          </label>

          <input
            id="timestamp"
            type="text"
            value={timestamp}
            onChange={(event) => {
              setTimestamp(event.target.value);
              setError("");
              setCopied(false);
              setCopyError(false);
            }}
            placeholder="e.g. 1754913600"
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={timestampToDate}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Timestamp → UTC
          </button>
        </div>

        <div>
          <label
            htmlFor="utc-date"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            UTC Date
          </label>

          <input
            id="utc-date"
            type="text"
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
              setError("");
              setCopied(false);
              setCopyError(false);
            }}
            placeholder="e.g. 2025-08-11T12:00:00.000Z"
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={dateToTimestamp}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            UTC → Timestamp
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={!timestamp && !date}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!timestamp && !date}
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

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">
              Unix Timestamp
            </h2>

            <pre className="min-h-32 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200">
              {timestamp || (
                <span className="text-gray-500">
                  Unix timestamp will appear here.
                </span>
              )}
            </pre>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">UTC Date</h2>

            <pre className="min-h-32 overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200">
              {date || (
                <span className="text-gray-500">
                  UTC date will appear here.
                </span>
              )}
            </pre>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          All date conversions use UTC to provide consistent results across
          devices and time zones.
        </p>
      </div>
    </ToolLayout>
  );
}
