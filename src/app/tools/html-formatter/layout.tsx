import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("HTML Formatter");

export default function HtmlFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
