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
          description="Everything you need to improve your development workflow."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            icon="⚡"
            title="Fast"
            description="Instant developer tools with no unnecessary complexity."
          />

          <FeatureCard
            icon="🤖"
            title="AI Powered"
            description="Modern AI assistants to help you code more efficiently."
          />

          <FeatureCard
            icon="🔒"
            title="Privacy First"
            description="Your data stays with you. No unnecessary tracking."
          />

          <FeatureCard
            icon="💸"
            title="Free"
            description="Core developer tools available for everyone."
          />
        </div>
      </Container>
    </Section>
  );
}
