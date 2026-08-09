import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter",
  description:
    "Format and validate JSON online with a fast and easy-to-use developer tool.",
};

export default function JsonFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
