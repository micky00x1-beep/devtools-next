import ToolLayout from "@/components/common/ToolLayout";
import SQLAssistantForm from "@/components/ai/SQLAssistantForm";

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
