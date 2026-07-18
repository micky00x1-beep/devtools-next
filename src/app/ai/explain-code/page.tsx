import ToolLayout from "@/components/common/ToolLayout";
import ExplainCodeForm from "@/components/ai/ExplainCodeForm";

export default function ExplainCodePage() {
  return (
    <ToolLayout
      title="Explain Code"
      description="Paste your code below and let AI explain what it does."
    >
      <ExplainCodeForm />
    </ToolLayout>
  );
}
