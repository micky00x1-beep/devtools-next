import type { Metadata } from "next";
import ToolLayout from "@/components/common/ToolLayout";
import RegexExplainerForm from "@/components/ai/RegexExplainerForm";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegexExplainerPage() {
  return (
    <ToolLayout
      title="Regex Explainer"
      description="Paste a regular expression and let AI explain what it does."
    >
      <RegexExplainerForm />
    </ToolLayout>
  );
}
