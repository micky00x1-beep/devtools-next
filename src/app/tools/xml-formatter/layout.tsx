import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XML Formatter",
  description:
    "Format and validate XML online with a fast and easy-to-use developer tool.",
};

export default function XmlFormatterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
