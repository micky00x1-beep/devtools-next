import { getToolMetadata } from "@/lib/toolMetadata";

export const metadata = getToolMetadata("JWT Decoder");

export default function JwtDecoderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
