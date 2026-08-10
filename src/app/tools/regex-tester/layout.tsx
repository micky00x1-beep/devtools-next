import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("Regex Tester");

export default function RegexTesterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
