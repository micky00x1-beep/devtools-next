"use client";

import { useState } from "react";
import ToolLayout from "@/components/common/ToolLayout";

type ColorFormat = "HEX" | "RGB" | "HSL";

type ColorValues = {
  hex: string;
  rgb: string;
  hsl: string;
};

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "").trim();

  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) {
    throw new Error("HEX must contain exactly 6 hexadecimal characters.");
  }

  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16),
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()}`;
}

function rgbToHsl(r: number, g: number, b: number) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const delta = max - min;

    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case red:
        h = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        h = (blue - red) / delta + 2;
        break;
      default:
        h = (red - green) / delta + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(h: number, s: number, l: number) {
  const saturation = s / 100;
  const lightness = l / 100;

  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;

  const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));

  const m = lightness - chroma / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) {
    r = chroma;
    g = x;
  } else if (h < 120) {
    r = x;
    g = chroma;
  } else if (h < 180) {
    g = chroma;
    b = x;
  } else if (h < 240) {
    g = x;
    b = chroma;
  } else if (h < 300) {
    r = x;
    b = chroma;
  } else {
    r = chroma;
    b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function parseRgb(value: string) {
  const match = value.match(
    /^\s*(?:rgb\(\s*)?(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*\))?\s*$/i
  );

  if (!match) {
    throw new Error("RGB must use the format R, G, B.");
  }

  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);

  if ([r, g, b].some((channel) => channel < 0 || channel > 255)) {
    throw new Error("RGB values must be between 0 and 255.");
  }

  return { r, g, b };
}

function parseHsl(value: string) {
  const match = value.match(
    /^\s*(?:hsl\(\s*)?(-?\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%(?:\s*\))?\s*$/i
  );

  if (!match) {
    throw new Error("HSL must use the format H, S%, L%.");
  }

  const h = Number(match[1]);
  const s = Number(match[2]);
  const l = Number(match[3]);

  if (h < 0 || h > 360) {
    throw new Error("HSL hue must be between 0 and 360.");
  }

  if (s < 0 || s > 100 || l < 0 || l > 100) {
    throw new Error("HSL saturation and lightness must be between 0 and 100.");
  }

  return { h, s, l };
}

export default function ColorConverterPage() {
  const [format, setFormat] = useState<ColorFormat>("HEX");
  const [input, setInput] = useState("");
  const [color, setColor] = useState<ColorValues | null>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  function convertColor() {
    if (!input.trim()) {
      setColor(null);
      setError("Please enter a color value.");
      setCopied(false);
      setCopyError(false);
      return;
    }

    try {
      let rgb: { r: number; g: number; b: number };

      if (format === "HEX") {
        rgb = hexToRgb(input);
      } else if (format === "RGB") {
        rgb = parseRgb(input);
      } else {
        const hsl = parseHsl(input);

        rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
      }

      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

      setColor({
        hex: rgbToHex(rgb.r, rgb.g, rgb.b),
        rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
        hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      });

      setError("");
      setCopied(false);
      setCopyError(false);
    } catch (conversionError) {
      setColor(null);
      setError(
        conversionError instanceof Error
          ? conversionError.message
          : "Unable to convert the provided color."
      );
      setCopied(false);
      setCopyError(false);
    }
  }

  async function copyToClipboard(value: string) {
    try {
      await navigator.clipboard.writeText(value);

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
    setColor(null);
    setError("");
    setCopied(false);
    setCopyError(false);
  }

  return (
    <ToolLayout
      title="Color Converter"
      description="Convert colors between HEX, RGB and HSL formats."
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="color-format"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Input Format
          </label>

          <select
            id="color-format"
            value={format}
            onChange={(event) => {
              setFormat(event.target.value as ColorFormat);
              setInput("");
              setColor(null);
              setError("");
              setCopied(false);
              setCopyError(false);
            }}
            className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          >
            <option value="HEX">HEX</option>
            <option value="RGB">RGB</option>
            <option value="HSL">HSL</option>
          </select>
        </div>

        <input
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
            setError("");
            setCopied(false);
            setCopyError(false);
          }}
          placeholder={
            format === "HEX"
              ? "#8B5CF6"
              : format === "RGB"
                ? "139, 92, 246"
                : "258, 90%, 66%"
          }
          aria-label="Color input"
          spellCheck={false}
          className="w-full rounded-xl border border-gray-800 bg-gray-900 p-4 font-mono text-sm text-gray-200 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
        />

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={convertColor}
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Convert
          </button>

          <button
            type="button"
            onClick={clearFields}
            disabled={!input && !color}
            className="rounded-lg border border-gray-700 px-6 py-3 transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent"
          >
            Clear
          </button>
        </div>

        <div aria-live="polite" className="min-h-6">
          {error && <p className="font-medium text-red-400">{error}</p>}

          {copied && (
            <p className="font-medium text-green-500">
              Color copied to clipboard.
            </p>
          )}

          {copyError && (
            <p className="font-medium text-red-400">
              Unable to copy the color. Please copy it manually.
            </p>
          )}
        </div>

        {color ? (
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="min-h-48 rounded-xl border border-gray-800"
              style={{ backgroundColor: color.hex }}
              aria-label="Color preview"
            />

            <div className="space-y-4">
              {[
                ["HEX", color.hex],
                ["RGB", color.rgb],
                ["HSL", color.hsl],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4"
                >
                  <div>
                    <p className="text-sm text-gray-400">{label}</p>
                    <p className="mt-1 break-all font-mono text-sm text-gray-200">
                      {value}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(value)}
                    className="shrink-0 rounded-lg border border-gray-700 px-4 py-2 text-sm transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="min-h-48 rounded-xl border border-gray-800 bg-gray-950 p-6 font-mono text-sm text-gray-500">
            Converted color values will appear here.
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
