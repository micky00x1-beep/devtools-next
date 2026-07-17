import AIHero from "@/components/ai/AIHero";
import AIToolCard from "@/components/ai/AIToolCard";

import { Brain, GitCommitHorizontal, Search, Database } from "lucide-react";

export default function AiPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <AIHero />

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <AIToolCard
          title="Explain Code"
          description="Understand unfamiliar code with clear AI explanations."
          href="/ai/explain-code"
          icon={Brain}
        />

        <AIToolCard
          title="Commit Generator"
          description="Generate meaningful Git commit messages from your changes."
          href="/ai/commit-generator"
          icon={GitCommitHorizontal}
        />

        <AIToolCard
          title="Regex Explainer"
          description="Understand any regular expression in plain English."
          href="/ai/regex-explainer"
          icon={Search}
        />

        <AIToolCard
          title="SQL Assistant"
          description="Generate SQL queries from natural language."
          href="/ai/sql-assistant"
          icon={Database}
        />
      </section>
    </main>
  );
}
