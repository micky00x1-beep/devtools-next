import ToolLayout from "@/components/common/ToolLayout";
import CommitGeneratorForm from "@/components/ai/CommitGeneratorForm";

export default function CommitGeneratorPage() {
  return (
    <ToolLayout
      title="Commit Generator"
      description="Describe your changes and let AI generate a Conventional Commit message."
    >
      <CommitGeneratorForm />
    </ToolLayout>
  );
}
