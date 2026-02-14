import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | MGKCodes",
  description: "Privacy policy for MGKCodes website and services.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold text-theme mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg">
            <p className="text-muted">
              Last updated: February 2026
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              When you contact us through our website, we collect the information
              you provide, including your name, email address, and project
              details.
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to your inquiries, provide our
              services, and communicate with you about your projects.
            </p>
            <h2 className="text-2xl font-semibold text-theme mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at hello@mgkcodes.com.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
