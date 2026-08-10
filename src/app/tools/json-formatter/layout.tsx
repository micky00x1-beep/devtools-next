import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("JSON Formatter");

export default function JsonFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
