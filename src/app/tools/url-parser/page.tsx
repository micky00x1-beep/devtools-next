"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

type ParsedUrl = {
  protocol: string;
  username: string;
  password: string;
  hostname: string;
  port: string;
  pathname: string;
  search: string;
  hash: string;
};

type QueryParameter = {
  key: string;
  value: string;
};

export default function UrlParserPage() {
  const [input, setInput] = useState("");
  const [parsedUrl, setParsedUrl] = useState<ParsedUrl | null>(null);
  const [parameters, setParameters] = useState<QueryParameter[]>([]);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function parseUrl() {
    if (!input.trim()) {
      setParsedUrl(null);
      setParameters([]);
      setError("Please enter a URL to parse.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const url = new URL(input.trim());

      const parsed: ParsedUrl = {
        protocol: url.protocol,
        username: url.username,
        password: url.password,
        hostname: url.hostname,
        port: url.port,
        pathname: url.pathname,
        search: url.search,
        hash: url.hash,
      };

      const queryParameters = Array.from(url.searchParams.entries()).map(
        ([key, value]) => ({
          key,
          value,
        })
      );

      setParsedUrl(parsed);
      setParameters(queryParameters);
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setParsedUrl(null);
      setParameters([]);
      setError("The provided URL is not valid.");
      setCopied(false);
      setCopyError(false);
    }
  }

  function getOutput() {
    if (!parsedUrl) return "";

    const lines = [
      `Protocol: ${parsedUrl.protocol}`,
      `Username: ${parsedUrl.username || "(none)"}`,
      `Password: ${parsedUrl.password || "(none)"}`,
      `Hostname: ${parsedUrl.hostname}`,
      `Port: ${parsedUrl.port || "(default)"}`,
      `Pathname: ${parsedUrl.pathname || "/"}`,
      `Query: ${parsedUrl.search || "(none)"}`,
      `Hash: ${parsedUrl.hash || "(none)"}`,
    ];

    if (parameters.length > 0) {
      lines.push("", "Query Parameters:");

      parameters.forEach(({ key, value }) => {
        lines.push(`${key}: ${value}`);
      });
    }

    return lines.join("\n");
  }

  async function copyToClipboard() {
    const output = getOutput();

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
    setParsedUrl(null);
    setParameters([]);
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="URL Parser"
      description="Parse URLs and inspect their components and query parameters."
    >
      <div className="space-y-6">
        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setError("");
            setCopied(false);
            setCopyError(false);
          }}
          placeholder="https://example.com/path?id=123&category=tech#details"
          aria-label="URL input"
          spellCheck={false}
          className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={parseUrl}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Parse URL
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={!parsedUrl}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!input && !parsedUrl}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {error && <p className="font-medium text-red-400">{error}</p>}

          {copied && (
            <p className="font-medium text-green-500">
              URL components copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the URL components. Please copy them manually.
            </p>
          )}
        </div>

        {parsedUrl ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {Object.entries(parsedUrl).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-xl border border-gray-800 bg-gray-900 p-4"
                >
                  <p className="mb-2 text-sm font-medium capitalize text-gray-400">
                    {key}
                  </p>

                  <p className="break-all font-mono text-sm text-gray-200">
                    {value || "(none)"}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold text-white">
                Query Parameters
              </h2>

              <div className="overflow-hidden rounded-xl border border-gray-800">
                {parameters.length > 0 ? (
                  <div className="divide-y divide-gray-800">
                    {parameters.map(({ key, value }, index) => (
                      <div
                        key={`${key}-${value}-${index}`}
                        className="grid gap-2 bg-gray-900 p-4 md:grid-cols-2"
                      >
                        <p className="break-all font-mono text-sm text-violet-400">
                          {key}
                        </p>

                        <p className="break-all font-mono text-sm text-gray-200">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="bg-gray-950 p-4 text-sm text-gray-500">
                    No query parameters found.
                  </p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-64 rounded-xl border border-gray-800 bg-gray-950 p-6 font-mono text-sm text-gray-500">
            Parsed URL components will appear here.
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
