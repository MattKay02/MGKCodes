import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Liftio",
  description:
    "Privacy policy for the Liftio iOS app by MGKCodes Ltd. Liftio does not collect, transmit, or share any personal data.",
};

export default function LiftioPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans pt-16">
      {/* Header */}
      <header className="px-6 py-8 border-b border-[#1e1e1e]">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white no-underline hover:text-[#aaa] transition-colors"
        >
          MGKCodes <span className="text-[#888] font-normal">Ltd</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-[720px] mx-auto px-6 py-16 pb-24">
        {/* App Logo */}
        <div className="mb-6">
          <Image
            src="/images/apps/liftio/liftio-high-resolution-logo.png"
            alt="Liftio logo"
            width={64}
            height={64}
            className="rounded-xl"
          />
        </div>

        {/* Tag */}
        <span className="inline-block text-xs font-semibold tracking-[1.5px] uppercase text-[#666] mb-4">
          Liftio App
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#555] mb-12">Last updated: 3 March 2026</p>

        {/* Summary Box */}
        <div className="bg-[#111] border border-[#1e1e1e] border-l-[3px] border-l-white rounded-sm px-6 py-5 mb-12">
          <p className="text-[#ccc] text-[15px]">
            <strong className="text-white">The short version:</strong> Liftio
            does not collect, transmit, or share any personal data. Everything
            stays on your device.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            1. Overview
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio is developed and operated by MGKCodes Ltd, a company
            registered in England and Wales. This privacy policy explains how
            Liftio handles your information. We have designed the app from the
            ground up to require no personal data whatsoever.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            2. Data We Collect
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            Liftio collects no personal data. The app does not require you to
            create an account, provide an email address, or share any
            identifying information.
          </p>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            All workout data you enter — exercises, sets, reps, weights, and
            timestamps — is stored exclusively on your device using local
            storage. This data never leaves your device and is never transmitted
            to any server.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            3. Data We Do Not Collect
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            To be explicit, Liftio does not collect:
          </p>
          <ul className="space-y-1">
            {[
              "Your name, email address, or any contact information",
              "Location data",
              "Device identifiers or advertising IDs",
              "Usage analytics or crash reports",
              "Health or fitness data via Apple HealthKit",
              "Payment information (handled entirely by Apple)",
              "Any form of tracking or behavioural data",
            ].map((item) => (
              <li
                key={item}
                className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            4. In-App Purchases and Subscriptions
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio offers an optional subscription via Apple&apos;s In-App
            Purchase system. All billing, payment processing, and transaction
            data is handled exclusively by Apple. MGKCodes Ltd does not receive,
            store, or process any payment information. Please refer to{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
            >
              Apple&apos;s Privacy Policy
            </a>{" "}
            for details on how they handle purchase data.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            5. Third-Party Services
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio does not integrate any third-party analytics, advertising, or
            tracking SDKs. There are no third-party services with access to your
            data.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            6. Data Security
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Because all data remains on your device, your workout data is
            protected by your device&apos;s built-in security, including any
            passcode or biometric lock you have enabled. We have no access to
            your data and therefore cannot be responsible for data loss
            resulting from device loss, damage, or factory reset.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            7. Children&apos;s Privacy
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            Liftio is rated 4+ on the App Store and does not knowingly collect
            data from users of any age, including children under 13.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            8. Changes to This Policy
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed">
            If we make material changes to this privacy policy — for example, if
            a future update introduces optional cloud sync — we will update this
            page and revise the &quot;last updated&quot; date. We will also
            notify users within the app where required by law.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-3 tracking-tight">
            9. Contact
          </h2>
          <p className="text-[#aaa] text-[15px] leading-relaxed mb-3">
            If you have any questions about this privacy policy or Liftio&apos;s
            data practices, please contact us:
          </p>
          <ul className="space-y-1 mb-6">
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Email:{" "}
              <a
                href="mailto:mgkcodes@gmail.com"
                className="text-white underline underline-offset-[3px] hover:text-[#aaa] transition-colors"
              >
                mgkcodes@gmail.com
              </a>
            </li>
            <li className="text-[#aaa] text-[15px] pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-[#444]">
              Company: MGKCodes Ltd
            </li>
          </ul>
          <Link
            href="/support/liftio"
            className="inline-block bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#e0e0e0] transition-colors"
          >
            Visit Support Page
          </Link>
        </section>

        {/* Divider */}
        <hr className="border-none border-t border-[#1a1a1a] my-10" />

        <p className="text-[13px] text-[#444]">
          This policy applies to the Liftio iOS application. MGKCodes Ltd
          operates under UK law and complies with the UK General Data Protection
          Regulation (UK GDPR).
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-8 text-center">
        <p className="text-[13px] text-[#444]">
          2026 MGKCodes Ltd &mdash;{" "}
          <a
            href="https://mgkcodes.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            mgkcodes.com
          </a>{" "}
          &mdash;{" "}
          <a
            href="mailto:mgkcodes@gmail.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            mgkcodes@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
