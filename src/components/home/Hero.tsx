import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
            🚀 Free Developer Toolkit
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Build Faster with{" "}
            <span className="text-violet-500">Modern Developer Tools</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to boost your development workflow. Free
            developer utilities and AI-powered assistants, all in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/tools">Explore Tools</Button>

            <Button href="/ai">Explore AI</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
