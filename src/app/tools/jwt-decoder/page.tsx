"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

type JwtPart = Record<string, unknown>;

function decodeBase64Url(value: string): string {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    "="
  );

  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  return new TextDecoder().decode(bytes);
}

function decodeJwt(token: string): {
  header: JwtPart;
  payload: JwtPart;
} {
  const parts = token.trim().split(".");

  if (parts.length !== 3) {
    throw new Error("Invalid JWT format. A JWT must contain three parts.");
  }

  const header = JSON.parse(decodeBase64Url(parts[0]));
  const payload = JSON.parse(decodeBase64Url(parts[1]));

  if (
    typeof header !== "object" ||
    header === null ||
    Array.isArray(header) ||
    typeof payload !== "object" ||
    payload === null ||
    Array.isArray(payload)
  ) {
    throw new Error("Invalid JWT header or payload.");
  }

  return {
    header,
    payload,
  };
}

export default function JwtDecoderPage() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function handleDecode() {
    if (!input.trim()) {
      setHeader("");
      setPayload("");
      setError("Please enter a JWT to decode.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      const decoded = decodeJwt(input);

      setHeader(JSON.stringify(decoded.header, null, 2));
      setPayload(JSON.stringify(decoded.payload, null, 2));
      setError("");
      setCopied(false);
      setCopyError(false);
    } catch {
      setHeader("");
      setPayload("");
      setError("The provided JWT is not valid.");
      setCopied(false);
      setCopyError(false);
    }
  }

  async function copyToClipboard() {
    if (!header && !payload) return;

    const output = [
      header ? `Header:\n${header}` : "",
      payload ? `Payload:\n${payload}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");

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
    setHeader("");
    setPayload("");
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="JWT Decoder"
      description="Decode JSON Web Tokens and inspect their header and payload."
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
          placeholder="Paste your JWT here..."
          aria-label="JWT input"
          spellCheck={false}
          className="h-64 w-full resize-y rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleDecode}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Decode JWT
          </button>

          <button
            type="button"
            onClick={copyToClipboard}
            disabled={!header && !payload}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Copy
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!input && !header && !payload}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {error && <p className="font-medium text-red-400">{error}</p>}

          {copied && (
            <p className="font-medium text-green-500">
              JWT decoded data copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the decoded data. Please copy it manually.
            </p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Header</h2>

            <pre
              aria-label="Decoded JWT header"
              className="min-h-64 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
            >
              {header || (
                <span className="text-gray-500">
                  Decoded JWT header will appear here.
                </span>
              )}
            </pre>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">Payload</h2>

            <pre
              aria-label="Decoded JWT payload"
              className="min-h-64 max-h-[32rem] overflow-auto whitespace-pre-wrap break-words rounded-xl border border-gray-800 bg-gray-950 p-4 font-mono text-sm text-gray-200"
            >
              {payload || (
                <span className="text-gray-500">
                  Decoded JWT payload will appear here.
                </span>
              )}
            </pre>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          Decoding a JWT does not verify its signature or prove that the token
          is authentic.
        </p>
      </div>
    </ToolLayout>
  );
}
