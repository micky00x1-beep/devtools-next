import type { Metadata } from "next";

import { tools } from "@/data/tools";

export function getToolMetadata(title: string): Metadata {
  const tool = tools.find((item) => item.title === title);

  if (!tool) {
    return {
      title: "Developer Tool | DeToolBoost",
      description:
        "Free online developer tools built to boost your productivity.",
    };
  }

  return {
    title: tool.seoTitle,
    description: tool.seoDescription,
    alternates: {
      canonical: tool.href,
    },
    openGraph: {
      title: tool.seoTitle,
      description: tool.seoDescription,
      url: tool.href,
      siteName: "DeToolBoost",
      type: "website",
    },
  };
}
