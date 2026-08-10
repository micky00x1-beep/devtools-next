"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

function formatXml(xml: string): string {
  const parser = new DOMParser();
  const document = parser.parseFromString(xml, "application/xml");

  const parserError = document.querySelector("parsererror");

  if (parserError) {
    throw new Error("Invalid XML");
  }

  const serializer = new XMLSerializer();
  const serialized = serializer.serializeToString(document);

  let formatted = "";
  let indent = 0;

  const nodes = serialized
    .replace(/>\s*</g, "><")
    .replace(/</g, "\n<")
    .trim()
    .split("\n");

  nodes.forEach((node) => {
    const trimmedNode = node.trim();

    if (!trimmedNode) return;

    if (trimmedNode.startsWith("</")) {
      indent = Math.max(indent - 1, 0);
    }

    formatted += `${"  ".repeat(indent)}${trimmedNode}\n`;

    if (
      trimmedNode.startsWith("<") &&
      !trimmedNode.startsWith("</") &&
      !trimmedNode.startsWith("<?") &&
      !trimmedNode.startsWith("<!")
    ) {
      const isSelfClosing = trimmedNode.endsWith("/>");
      const hasClosingTag = trimmedNode.includes("</");

      if (!isSelfClosing && !hasClosingTag) {
        indent += 1;
      }
    }
  });

  return formatted.trim();
}

export default function XmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleFormat() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter XML to format.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const formatted = formatXml(input);

      setOutput(formatted);
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("The provided XML is not valid.");
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
      title="XML Formatter"
      description="Format and validate XML online quickly and easily."
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
          placeholder="Paste your XML here..."
          aria-label="XML input"
          spellCheck={false}
          className="h-80 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleFormat}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Format XML
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
              XML copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the XML. Please copy it manually.
            </p>
          )}
        </div>

        <pre
          aria-label="Formatted XML output"
          className="min-h-80 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
        >
          {output || (
            <span className="text-gray-500">
              Formatted XML will appear here.
            </span>
          )}
        </pre>
      </div>
    </ToolLayout>
  );
}
