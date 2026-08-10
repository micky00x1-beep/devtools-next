import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("URL Encoder & Decoder");

export default function UrlEncoderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
