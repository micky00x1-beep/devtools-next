import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Unix Timestamp Converter");

export default function TimestampLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
