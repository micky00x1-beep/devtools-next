import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Markdown Previewer");

export default function MarkdownPreviewerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
