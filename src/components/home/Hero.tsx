import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Section from "@/components/common/Section";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            🚀 Modern Developer Toolkit
          </p>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Build Faster with{" "}
            <span className="text-violet-500">Developer Tools</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Fast, practical tools for developers. Format JSON, encode Base64,
            generate UUIDs, and more — all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/tools">Explore Tools</Button>

            <Button href="/ai">AI Tools — Coming Soon</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
