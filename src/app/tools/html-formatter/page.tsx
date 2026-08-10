"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

function formatHtml(html: string): string {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  if (!document.body) {
    throw new Error("Invalid HTML");
  }

  function formatNode(node: Node, level: number): string {
    const indent = "  ".repeat(level);

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();

      if (!text) return "";

      return `${indent}${text}`;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      return "";
    }

    const element = node as Element;

    const attributes = Array.from(element.attributes)
      .map((attribute) => ` ${attribute.name}="${attribute.value}"`)
      .join("");

    const children = Array.from(element.childNodes)
      .map((child) => formatNode(child, level + 1))
      .filter(Boolean);

    const openingTag = `<${element.tagName.toLowerCase()}${attributes}>`;
    const closingTag = `</${element.tagName.toLowerCase()}>`;

    const voidElements = new Set([
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ]);

    if (voidElements.has(element.tagName.toLowerCase())) {
      return `${indent}${openingTag}`;
    }

    if (children.length === 0) {
      return `${indent}${openingTag}${closingTag}`;
    }

    if (children.length === 1 && !element.children.length) {
      return `${indent}${openingTag}${children[0].trim()}${closingTag}`;
    }

    return [
      `${indent}${openingTag}`,
      ...children,
      `${indent}${closingTag}`,
    ].join("\n");
  }

  const formatted = Array.from(document.body.childNodes)
    .map((node) => formatNode(node, 0))
    .filter(Boolean)
    .join("\n");

  if (!formatted) {
    throw new Error("Invalid HTML");
  }

  return formatted;
}

export default function HtmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleFormat() {
    if (!input.trim()) {
      setOutput("");
      setError("Please enter HTML to format.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const formatted = formatHtml(input);

      setOutput(formatted);
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setOutput("");
      setError("The provided HTML is not valid.");
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
      title="HTML Formatter"
      description="Format and validate HTML online quickly and easily."
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
          placeholder="Paste your HTML here..."
          aria-label="HTML input"
          spellCheck={false}
          className="h-80 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleFormat}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Format HTML
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
              HTML copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the HTML. Please copy it manually.
            </p>
          )}
        </div>

        <pre
          aria-label="Formatted HTML output"
          className="min-h-80 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
        >
          {output || (
            <span className="text-gray-500">
              Formatted HTML will appear here.
            </span>
          )}
        </pre>
      </div>
    </ToolLayout>
  );
}
