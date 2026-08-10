import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("UUID Generator");

export default function UuidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
