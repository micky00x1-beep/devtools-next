import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Converter",
  description:
    "Convert colors between HEX, RGB and HSL formats with a fast and easy-to-use developer tool.",
};

export default function ColorConverterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
