import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("XML Formatter");

export default function XmlFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
