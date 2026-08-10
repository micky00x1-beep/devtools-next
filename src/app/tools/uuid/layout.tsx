import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator",
  description:
    "Generate UUIDs online with a fast and easy-to-use developer tool.",
};

export default function UuidLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
