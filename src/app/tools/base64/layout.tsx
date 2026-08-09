import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder",
  description:
    "Encode and decode Base64 strings online with a fast and easy-to-use developer tool.",
};

export default function Base64Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
