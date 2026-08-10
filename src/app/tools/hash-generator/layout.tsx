import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Hash Generator");

export default function HashGeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
