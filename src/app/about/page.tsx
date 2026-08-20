export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-12">
        {/* Introduction */}
        <div>
          <h1 className="text-5xl font-bold">About DeToolBoost</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            DeToolBoost is a collection of practical, browser-based developer
            tools created to make common development tasks faster and easier.
            The platform brings frequently used utilities together in one simple
            and accessible place, allowing developers to work directly from
            their browser without unnecessary setup.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
            The project focuses on useful tools for everyday development
            workflows, with an emphasis on simplicity, speed and clear
            interfaces.
          </p>
        </div>

        {/* Mission / Current Platform */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>

            <p className="leading-7 text-gray-400">
              DeToolBoost aims to provide developers with a growing collection
              of reliable utilities for everyday development tasks. Instead of
              searching for a different website for every small problem,
              developers can access multiple tools from one platform.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Each tool is designed around a specific task, keeping the
              interface focused and making the functionality easy to understand.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-4 text-2xl font-semibold">The Platform Today</h2>

            <p className="leading-7 text-gray-400">
              DeToolBoost currently provides 14 developer tools covering a
              variety of common development tasks, including data formatting,
              encoding, identifiers, text processing and other development
              utilities.
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              The tools are available directly in the browser and are designed
              to provide immediate results without requiring users to create an
              account.
            </p>
          </div>
        </div>

        {/* Built for Developers */}
        <div className="rounded-2xl border border-violet-800/40 bg-violet-950/20 p-8">
          <h2 className="text-2xl font-semibold">Built for Developers</h2>

          <p className="mt-4 leading-7 text-gray-300">
            DeToolBoost is built around a simple idea: frequently used
            development utilities should be easy to find and easy to use. Every
            tool focuses on a specific problem and provides a straightforward
            interface designed to work directly from the browser.
          </p>

          <p className="mt-4 leading-7 text-gray-300">
            The platform is developed with a focus on responsive design,
            usability and practical functionality across different devices and
            screen sizes.
          </p>
        </div>

        {/* How the Tools Work */}
        <div>
          <h2 className="text-3xl font-semibold">How DeToolBoost Works</h2>

          <p className="mt-4 leading-7 text-gray-400">
            DeToolBoost provides tools that process user input directly through
            the website. Depending on the tool, users can enter or paste data,
            select an action and immediately view the generated or processed
            result.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            The goal is to keep individual workflows simple: open the required
            tool, provide the necessary input and get the result without
            unnecessary steps.
          </p>
        </div>

        {/* AI */}
        <div>
          <h2 className="text-3xl font-semibold">AI Tools in Development</h2>

          <p className="mt-4 leading-7 text-gray-400">
            DeToolBoost also includes a dedicated AI section that is currently
            under development and is not part of the platform&apos;s available
            production tools at this stage.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            The planned AI tools are focused on practical development tasks,
            including explaining code, generating Git commit messages,
            explaining regular expressions and assisting with SQL.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            These features will be introduced progressively as they are
            completed, tested and ready for public use.
          </p>
        </div>

        {/* Development */}
        <div>
          <h2 className="text-3xl font-semibold">A Growing Project</h2>

          <p className="mt-4 leading-7 text-gray-400">
            DeToolBoost is an evolving project. The platform is continuously
            developed with the goal of adding new utilities, improving existing
            tools and making the overall experience more useful for developers.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            Future development will focus on expanding the tool collection,
            improving existing functionality and introducing additional features
            while maintaining the project&apos;s focus on practical development
            workflows.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-3 text-xl font-semibold">Simplicity</h2>

            <p className="leading-7 text-gray-400">
              Focused interfaces that make individual tools straightforward to
              understand and use.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-3 text-xl font-semibold">Practicality</h2>

            <p className="leading-7 text-gray-400">
              Tools are designed around common tasks that developers encounter
              during everyday work.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-3 text-xl font-semibold">Accessibility</h2>

            <p className="leading-7 text-gray-400">
              The tools are available directly through the browser without
              unnecessary setup or account requirements.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900 p-8">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-4 leading-7 text-gray-400">
            For questions, feedback or suggestions regarding DeToolBoost, please
            use the contact information provided on the website.
          </p>
        </div>
      </section>
    </main>
  );
}
