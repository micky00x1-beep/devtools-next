import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for DeToolBoost.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <article className="prose prose-invert max-w-none">
        <h1>Privacy Policy</h1>

        <p>
          <strong>Last updated:</strong> August 10, 2026
        </p>

        <p>
          This Privacy Policy explains how DeToolBoost processes information
          when you visit and use the website available at{" "}
          <strong>https://detoolboost.com</strong>.
        </p>

        <h2>1. Data Controller</h2>

        <p>The data controller is:</p>

        <p>
          <strong>Micky Famoso</strong>
          <br />
          Email: <strong>privacy@detoolboost.com</strong>
        </p>

        <p>
          For privacy-related questions or requests, you can contact DeToolBoost
          at <strong>privacy@detoolboost.com</strong>.
        </p>

        <h2>2. Information We Process</h2>

        <p>
          DeToolBoost is designed to provide developer tools directly in the
          browser. The tools currently available on the website do not require
          users to create an account or provide personal information.
        </p>

        <p>
          Where you use a tool, the data you enter is processed by the
          application for the purpose of providing the requested functionality.
          DeToolBoost does not intentionally collect the content entered into
          the tools for the purpose of creating user profiles.
        </p>

        <h2>3. Server and Technical Information</h2>

        <p>
          Like most websites, the infrastructure used to operate DeToolBoost may
          process technical information necessary to deliver, secure and
          maintain the website. This may include information such as IP address,
          request information, browser and device information, and technical
          logs.
        </p>

        <p>
          Such information may be processed by the hosting and infrastructure
          provider used to operate the website.
        </p>

        <h2>4. Vercel Web Analytics</h2>

        <p>
          DeToolBoost uses Vercel Web Analytics to understand aggregated website
          usage, such as visited pages, referrers, approximate geographic
          information, operating system, browser and device type.
        </p>

        <p>
          According to Vercel's documentation, Web Analytics does not use
          cookies for visitor identification. Visitors are identified using a
          hash generated from the incoming request, and the generated visitor
          identifier is automatically discarded after 24 hours. Vercel states
          that the system is designed so that visitors cannot be tracked across
          different websites or different days.
        </p>

        <p>
          Vercel also states that Web Analytics is designed to provide
          aggregated and anonymized information and does not collect personal
          identifiers for cross-site tracking.
        </p>

        <p>
          For further information, please consult Vercel's{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Analytics Privacy and Compliance documentation
          </a>
          .
        </p>

        <h2>5. Purpose of Processing</h2>

        <p>Information may be processed for the following purposes:</p>

        <ul>
          <li>providing and operating the website;</li>
          <li>maintaining website security and reliability;</li>
          <li>diagnosing technical problems;</li>
          <li>understanding aggregated website usage;</li>
          <li>complying with applicable legal obligations.</li>
        </ul>

        <h2>6. Legal Basis</h2>

        <p>
          Depending on the specific processing activity, the legal basis may
          include the performance of a service requested by the user, compliance
          with a legal obligation, or the legitimate interests of the controller
          in operating, securing and improving the website, where permitted by
          applicable law.
        </p>

        <h2>7. Data Retention</h2>

        <p>
          Personal information is retained only for as long as necessary for the
          purposes for which it is processed, or for the periods required by
          applicable law.
        </p>

        <p>
          Vercel states that its Web Analytics visitor identifier is
          automatically discarded after 24 hours.
        </p>

        <h2>8. Data Sharing and Service Providers</h2>

        <p>
          DeToolBoost may rely on service providers necessary to host, maintain,
          secure and operate the website. Such providers may process technical
          information on behalf of the controller where applicable.
        </p>

        <p>DeToolBoost does not sell personal information to third parties.</p>

        <h2>9. International Transfers</h2>

        <p>
          Some service providers used to operate the website may process data
          outside the European Economic Area. Where applicable, such transfers
          are carried out using the safeguards required by applicable data
          protection law.
        </p>

        <h2>10. Your Rights</h2>

        <p>
          Where the GDPR applies, you may have rights including access,
          rectification, erasure, restriction of processing, objection,
          portability and the right to withdraw consent where processing is
          based on consent.
        </p>

        <p>You may exercise applicable rights by contacting:</p>

        <p>
          <strong>privacy@detoolboost.com</strong>
        </p>

        <p>
          You also have the right to lodge a complaint with the competent data
          protection supervisory authority.
        </p>

        <h2>11. Changes to this Policy</h2>

        <p>
          This Privacy Policy may be updated when necessary to reflect changes
          to the website, the services used, or applicable legal requirements.
          The date shown at the beginning of this document indicates when it was
          last updated.
        </p>

        <h2>12. Contact</h2>

        <p>
          For questions regarding this Privacy Policy or the processing of
          personal information, contact:
        </p>

        <p>
          <strong>privacy@detoolboost.com</strong>
        </p>
      </article>
    </main>
  );
}
