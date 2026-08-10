import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON to CSV Converter",
  description:
    "Convert JSON to CSV and CSV to JSON online with a fast and easy-to-use developer tool.",
};

export default function JsonCsvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
