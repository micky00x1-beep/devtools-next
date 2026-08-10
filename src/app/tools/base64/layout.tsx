import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Base64 Encoder");

export default function Base64Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
