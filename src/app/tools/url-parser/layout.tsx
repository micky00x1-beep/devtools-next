import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("URL Parser");

export default function UrlParserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
