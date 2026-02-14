"use client";

import {
  Code,
  Bot,
  Smartphone,
  Settings,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const capabilities = [
  "Web applications that load fast and scale with your business",
  "Mobile apps for iOS and Android from a single codebase",
  "Backend systems and APIs that power your product",
  "Database design built for performance and growth",
  "Product design and user experience",
  "App store submission and deployment",
  "AI-powered features and automation",
];

const process = [
  {
    step: "1",
    title: "Discovery",
    description: "We discuss your product, goals, and technical requirements.",
  },
  {
    step: "2",
    title: "Architecture & Build",
    description:
      "We design the system and build iteratively with regular progress updates.",
  },
  {
    step: "3",
    title: "QA & Review",
    description:
      "Thorough testing across devices and environments before launch.",
  },
  {
    step: "4",
    title: "Deployment & Maintenance",
    description:
      "We deploy to production and provide ongoing support as needed.",
  },
];


const additionalCapabilities = [
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Smart features powered by AI — chatbots, content tools, and workflow automation.",
    features: [
      "Chatbots and virtual assistants",
      "Content generation tools",
      "Workflow automation",
      "Data processing and insights",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-quality apps for iOS and Android, built from a single codebase.",
    features: [
      "Cross-platform (one app, both stores)",
      "App Store submission",
      "Google Play submission",
      "Works offline",
    ],
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Bespoke applications for specific product or business needs.",
    features: [
      "SaaS products",
      "Internal business tools",
      "Third-party integrations",
      "Custom dashboards and portals",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-4">
            Capabilities
          </h1>
          <p className="text-lg text-theme-muted">
            What we build and how we work.
          </p>
        </div>
      </Section>

      {/* Web & App Development - Primary */}
      <Section className="bg-theme" id="development">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-4">
              Web & App Development
            </h2>
            <p className="text-theme-muted mb-6">
              Full-stack development for web and mobile applications. We build
              products from concept through deployment and beyond.
            </p>

            <h3 className="text-xl font-semibold text-theme mb-3">
              What We Build
            </h3>
            <ul className="space-y-2 mb-8">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-theme">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-theme mb-3">
              Our Approach
            </h3>
            <p className="text-theme-muted">
              We use modern, industry-standard technologies chosen for
              reliability, performance, and long-term maintainability. Every
              project is built to scale with your business.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-theme mb-6">
              How We Work
            </h3>
            <div className="space-y-4">
              {process.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme">{step.title}</h4>
                    <p className="text-theme-muted text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Scope */}
        <div className="mt-12 p-6 bg-theme-secondary rounded-lg border border-theme">
          <h3 className="text-lg font-semibold text-theme mb-2">
            Project Scope
          </h3>
          <p className="text-theme-muted">
            We take on projects ranging from focused feature builds to full
            product development. Every engagement starts with a discovery
            conversation. Reach out to discuss scope and timeline.
          </p>
          <div className="mt-4">
            <Button href="/contact" variant="secondary">
              Start a Conversation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Additional Capabilities */}
      <Section className="bg-theme-secondary">
        <h2 className="text-3xl font-semibold text-theme mb-8">
          Additional Capabilities
        </h2>
        <div className="space-y-8">
          {additionalCapabilities.map((service) => (
            <Card key={service.title} hover={false} className="p-8">
              <div className="grid md:grid-cols-[auto,1fr] gap-6 items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-theme mb-2">
                    {service.title}
                  </h3>
                  <p className="text-theme-muted mb-4">{service.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm bg-theme-secondary text-theme px-3 py-1 rounded-full border border-theme"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to start a project?
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            Tell us what you&apos;re building.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>
    </div>
  );
}
