import Container from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";
import ToolCard from "@/components/common/ToolCard";
import { tools } from "@/data/tools";

export default function PopularTools() {
  const popularTools = tools.filter((tool) =>
    ["/tools/json-formatter", "/tools/base64", "/tools/uuid"].includes(
      tool.href
    )
  );
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Popular Tools"
          description="Free utilities designed to simplify your daily workflow."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => (
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
