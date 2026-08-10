import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hash Generator",
  description:
    "Generate SHA-256, SHA-384 and SHA-512 hashes from text with a fast and easy-to-use developer tool.",
};

export default function HashGeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
