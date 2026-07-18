import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ToolCard from "@/components/common/ToolCard";

const aiTools = [
  {
    title: "Explain Code",
    description: "Understand code instantly with AI explanations.",
    href: "/ai/explain-code",
  },
  {
    title: "Commit Generator",
    description: "Generate Conventional Commit messages.",
    href: "/ai/commit-generator",
  },
  {
    title: "Regex Explainer",
    description: "Understand complex regular expressions.",
    href: "/ai/regex-explainer",
  },
  {
    title: "SQL Assistant",
    description: "Generate SQL queries from natural language.",
    href: "/ai/sql-assistant",
  },
];

export default function AITools() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="AI Tools"
          description="Boost your productivity with AI-powered developer assistants."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool) => (
            <ToolCard
              key={tool.href}
              title={tool.title}
              description={tool.description}
              href={tool.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
