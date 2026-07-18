export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold">About DevBoost</h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            DevBoost is a collection of modern developer tools designed to
            improve productivity. From everyday utilities like JSON formatting
            and UUID generation to AI-powered assistants, everything is built to
            help developers work faster and smarter.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>

            <p className="text-gray-400">
              Build a fast, modern and accessible platform that provides useful
              tools for developers in one place, with a clean interface and no
              unnecessary distractions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6">
            <h2 className="mb-3 text-2xl font-semibold">What You Can Find</h2>

            <ul className="space-y-2 text-gray-400">
              <li>• Developer utilities</li>
              <li>• AI-powered coding assistants</li>
              <li>• Fast and responsive tools</li>
              <li>• Free resources for developers</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-violet-800/40 bg-violet-950/20 p-8">
          <h2 className="text-2xl font-semibold">Built for Developers</h2>

          <p className="mt-4 text-gray-300">
            Every tool is designed with simplicity, speed and usability in mind.
            DevBoost aims to become a place where developers can solve everyday
            problems without switching between dozens of websites.
          </p>
        </div>
      </section>
    </main>
  );
}
