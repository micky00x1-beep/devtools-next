import ToolCard from "@/components/common/ToolCard";
import { tools } from "@/data/tools";

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-5xl font-bold">Developer Tools</h1>

      <p className="mt-4 max-w-2xl text-gray-400">
        Browse all available developer tools.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
          />
        ))}
      </section>
    </main>
  );
}
