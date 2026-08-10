import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regex Tester",
  description:
    "Test regular expressions online against text with a fast and easy-to-use developer tool.",
};

export default function RegexTesterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
