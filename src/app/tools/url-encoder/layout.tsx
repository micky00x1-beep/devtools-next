import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder",
  description:
    "Encode and decode URLs online with a fast and easy-to-use developer tool.",
};

export default function UrlEncoderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
