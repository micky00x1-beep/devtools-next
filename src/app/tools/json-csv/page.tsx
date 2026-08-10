"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

function escapeCsvValue(value: unknown): string {
  const stringValue =
    value === null || value === undefined ? "" : String(value);

  if (
    stringValue.includes(",") ||
    stringValue.includes('"') ||
    stringValue.includes("\n")
  ) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }

  return stringValue;
}

function jsonToCsv(input: string): string {
  const parsed = JSON.parse(input);

  if (!Array.isArray(parsed)) {
    throw new Error("JSON must contain an array of objects.");
  }

  if (parsed.length === 0) {
    throw new Error("JSON array cannot be empty.");
  }

  if (
    !parsed.every(
      (item) =>
        item !== null && typeof item === "object" && !Array.isArray(item)
    )
  ) {
    throw new Error("JSON must contain an array of objects.");
  }

  const headers = Array.from(
    new Set(parsed.flatMap((item) => Object.keys(item)))
  );

  const rows = parsed.map((item) =>
    headers.map((header) => escapeCsvValue(item[header])).join(",")
  );

  return [headers.map(escapeCsvValue).join(","), ...rows].join("\n");
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let current = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];

    if (character === '"') {
      if (insideQuotes && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (character === "," && !insideQuotes) {
      values.push(current);
      current = "";
    } else {
      current += character;
    }
  }

  if (insideQuotes) {
    throw new Error("Invalid CSV: unclosed quotation mark.");
  }

  values.push(current);

  return values;
}

function csvToJson(input: string): string {
  const lines = input
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .filter((line) => line.trim() !== "");

  if (lines.length < 2) {
    throw new Error("CSV must contain a header and at least one data row.");
  }

  const headers = parseCsvLine(lines[0]);

  if (headers.length === 0 || headers.some((header) => !header.trim())) {
    throw new Error("CSV headers cannot be empty.");
  }

  const objects = lines.slice(1).map((line) => {
    const values = parseCsvLine(line);

    if (values.length !== headers.length) {
      throw new Error("CSV rows must contain the same number of columns.");
    }

    return headers.reduce<Record<string, string>>((object, header, index) => {
      object[header] = values[index];
      return object;
    }, {});
  });

  return JSON.stringify(objects, null, 2);
}

export default function JsonCsvPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"json-to-csv" | "csv-to-json">(
    "json-to-csv"
  );
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleConvert() {
    if (!input.trim()) {
      setOutput("");
      setError(
        mode === "json-to-csv"
          ? "Please enter JSON to convert."
          : "Please enter CSV to convert."
      );
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const result =
        mode === "json-to-csv" ? jsonToCsv(input) : csvToJson(input);

      setOutput(result);
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch (conversionError) {
      setOutput("");
      setError(
        conversionError instanceof Error
          ? conversionError.message
          : "Unable to convert the provided data."
      );
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
      title="JSON ↔ CSV Converter"
      description="Convert JSON arrays to CSV and CSV data to JSON quickly and easily."
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="conversion-mode"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Conversion
          </label>

          <select
            id="conversion-mode"
            value={mode}
            onChange={(event) => {
              setMode(event.target.value as "json-to-csv" | "csv-to-json");
              setInput("");
              setOutput("");
              setError("");
              setCopied(false);
              setCopyError(false);
            }}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          >
            <option value="json-to-csv">JSON → CSV</option>
            <option value="csv-to-json">CSV → JSON</option>
          </select>
        </div>

        <textarea
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setError("");
            setCopied(false);
            setCopyError(false);
          }}
          placeholder={
            mode === "json-to-csv"
              ? '[{"name":"Mario","age":25},{"name":"Luigi","age":30}]'
              : "name,age\nMario,25\nLuigi,30"
          }
          aria-label="Conversion input"
          spellCheck={false}
          className="h-80 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleConvert}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Convert
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
          aria-label="Conversion output"
          className="min-h-80 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
        >
          {output || (
            <span className="text-gray-500">
              Converted output will appear here.
            </span>
          )}
        </pre>
      </div>
    </ToolLayout>
  );
}
