import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("JSON ↔ CSV Converter");

export default function JsonCsvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
