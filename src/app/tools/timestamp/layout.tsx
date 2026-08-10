import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter",
  description:
    "Convert Unix timestamps to UTC dates and UTC dates to Unix timestamps.",
};

export default function TimestampLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
