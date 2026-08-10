import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Parser",
  description:
    "Parse URLs online and inspect their components and query parameters.",
};

export default function UrlParserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
