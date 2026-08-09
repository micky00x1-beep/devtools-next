import Container from "@/components/common/Container";
import FeatureCard from "@/components/common/FeatureCard";
import Section from "@/components/common/Section";
import SectionTitle from "@/components/common/SectionTitle";

export default function Features() {
  return (
    <Section>
      <Container>
        <SectionTitle
          title="Why DeToolBoost?"
          description="Simple developer tools built to make everyday tasks faster and easier."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            icon="⚡"
            title="Fast"
            description="Quick browser-based tools designed for everyday development tasks."
          />

          <FeatureCard
            icon="🛠️"
            title="Practical"
            description="Useful utilities for formatting, encoding, generating, and working with common developer tasks."
          />

          <FeatureCard
            icon="🔒"
            title="Browser-Based"
            description="Core tools run directly in your browser without requiring an external backend."
          />

          <FeatureCard
            icon="💸"
            title="Free Tools"
            description="Core developer tools are available to use without an account."
          />
        </div>
      </Container>
    </Section>
  );
}
