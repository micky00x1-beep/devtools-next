import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://detoolboost.com"),

  title: {
    default: "DeToolBoost | Free Developer Tools",
    template: "%s | DeToolBoost",
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
      name: "DeToolBoost",
    },
  ],

  creator: "DeToolBoost",

  applicationName: "DeToolBoost",
  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "DeToolBoost | Free Developer Tools",
    description:
      "Fast, free developer tools and AI-powered assistants built to boost your productivity.",
    url: "https://detoolboost.com",
    siteName: "DeToolBoost",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DeToolBoost | Free Developer Tools",
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
        <Analytics />
      </body>
    </html>
  );
}
