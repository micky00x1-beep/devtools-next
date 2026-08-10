import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Color Converter");

export default function ColorConverterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
