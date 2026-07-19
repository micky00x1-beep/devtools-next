import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: "DevBoost | Free Developer Tools",
    template: "%s | DevBoost",
  },

  description:
    "Fast, free developer tools and AI-powered assistants built to boost your productivity.",

  keywords: [
    "developer tools",
    "json formatter",
    "uuid generator",
    "base64 encoder",
    "AI developer tools",
    "web development",
    "frontend tools",
    "online utilities",
  ],

  authors: [
    {
      name: "DevBoost",
    },
  ],

  creator: "DevBoost",

  applicationName: "DevBoost",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "DevBoost | Free Developer Tools",
    description:
      "Fast, free developer tools and AI-powered assistants built to boost your productivity.",
    url: "https://example.com",
    siteName: "DevBoost",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DevBoost | Free Developer Tools",
    description:
      "Fast, free developer tools and AI-powered assistants built to boost your productivity.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
