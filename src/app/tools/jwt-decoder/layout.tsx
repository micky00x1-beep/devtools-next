import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder",
  description:
    "Decode JSON Web Tokens online and inspect JWT headers and payloads.",
};

export default function JwtDecoderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
