import type { Tool } from "@/types/tool";

type ToolSeoContentProps = {
  tool: Tool;
};

export default function ToolSeoContent({ tool }: ToolSeoContentProps) {
  return (
    <section className="mt-16 border-t border-gray-800 pt-12">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white">
            About {tool.title}
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            {tool.seoContent.intro}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            What is {tool.title}?
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            {tool.seoContent.whatIs}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            How to use {tool.title}
          </h2>

          <ol className="mt-4 max-w-3xl list-decimal space-y-3 pl-6 text-gray-400">
            {tool.seoContent.howTo.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Common use cases
          </h2>

          <ul className="mt-4 max-w-3xl list-disc space-y-3 pl-6 text-gray-400">
            {tool.seoContent.useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 max-w-3xl space-y-8">
            {tool.seoContent.faq.map((item) => (
              <div key={item.question}>
                <h3 className="text-lg font-medium text-white">
                  {item.question}
                </h3>

                <p className="mt-2 leading-7 text-gray-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
