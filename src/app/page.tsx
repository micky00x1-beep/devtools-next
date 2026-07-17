import Hero from "@/components/home/Hero";
import ToolCard from "@/components/common/ToolCard";
import { tools } from "@/data/tools";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="mx-auto mt-20 max-w-5xl px-6">
        <h2 className="mb-8 text-3xl font-bold">Popular Tools</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.href}
              title={tool.title}
              description={tool.description}
              href={tool.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
