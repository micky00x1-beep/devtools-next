import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTML Formatter",
  description:
    "Format and validate HTML online with a fast and easy-to-use developer tool.",
};

export default function HtmlFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
