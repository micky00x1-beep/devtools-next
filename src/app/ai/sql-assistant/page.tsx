import type { Metadata } from "next";
import ToolLayout from "@/components/common/ToolLayout";
import SQLAssistantForm from "@/components/ai/SQLAssistantForm";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function SQLAssistantPage() {
  return (
    <ToolLayout
      title="SQL Assistant"
      description="Describe the query you need and let AI generate SQL for you."
    >
      <SQLAssistantForm />
    </ToolLayout>
  );
}
