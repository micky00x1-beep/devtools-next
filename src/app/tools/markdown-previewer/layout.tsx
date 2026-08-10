import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown Previewer",
  description:
    "Write and preview Markdown online with a fast and easy-to-use developer tool.",
};

export default function MarkdownPreviewerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
