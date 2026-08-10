import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for DeToolBoost.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="prose prose-invert max-w-none">
        <h1>Terms of Service</h1>

        <p>
          <strong>Last updated:</strong> August 10, 2026
        </p>

        <h2>1. About DeToolBoost</h2>

        <p>
          DeToolBoost provides free online developer tools and utilities
          intended to assist users with common development and technical tasks.
        </p>

        <h2>2. Use of the Service</h2>

        <p>
          You may use the available tools for lawful purposes and in accordance
          with these Terms.
        </p>

        <p>
          You must not use DeToolBoost to violate applicable laws, infringe the
          rights of others, distribute malicious content, interfere with the
          operation of the website, or attempt to gain unauthorized access to
          systems or data.
        </p>

        <h2>3. Tool Output</h2>

        <p>
          DeToolBoost provides tools for convenience and productivity. Generated
          or processed results should be reviewed by the user before being used
          in production systems or other consequential applications.
        </p>

        <p>
          DeToolBoost does not guarantee that every result will be suitable for
          a particular purpose or use case.
        </p>

        <h2>4. User Responsibility</h2>

        <p>
          You are responsible for the information and data you enter into the
          tools and for ensuring that you have the necessary rights and
          permissions to process such information.
        </p>

        <p>
          You should not submit confidential, highly sensitive, or regulated
          information unless you have independently determined that doing so is
          appropriate for the specific tool and environment.
        </p>

        <h2>5. Availability</h2>

        <p>
          DeToolBoost is provided on an availability basis. We may modify,
          suspend or discontinue individual tools or parts of the website when
          necessary.
        </p>

        <h2>6. Intellectual Property</h2>

        <p>
          Unless otherwise stated, the DeToolBoost name, branding, website
          design, source code, original content and software components are
          protected by applicable intellectual property laws.
        </p>

        <p>
          The availability of a tool does not transfer ownership of DeToolBoost
          software, branding or other protected material to the user.
        </p>

        <h2>7. Third-Party Services</h2>

        <p>
          DeToolBoost may rely on third-party infrastructure and services to
          operate the website. Their own terms and privacy policies may apply to
          their services.
        </p>

        <h2>8. Disclaimer</h2>

        <p>
          To the maximum extent permitted by applicable law, DeToolBoost is
          provided without warranties regarding uninterrupted availability,
          accuracy, completeness or suitability for a particular purpose.
        </p>

        <h2>9. Limitation of Liability</h2>

        <p>
          To the maximum extent permitted by applicable law, DeToolBoost and its
          operator shall not be liable for indirect, incidental or consequential
          damages arising from the use of the website or its tools.
        </p>

        <h2>10. Changes to These Terms</h2>

        <p>
          These Terms may be updated when necessary. The date shown at the
          beginning of this document indicates when they were last updated.
        </p>

        <h2>11. Contact</h2>

        <p>For questions regarding these Terms, contact:</p>

        <p>
          <strong>privacy@detoolboost.com</strong>
        </p>
      </article>
    </main>
  );
}
