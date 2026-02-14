"use client";

import {
  Code,
  Bot,
  Smartphone,
  Settings,
  Globe,
  Zap,
  Users,
  MessageSquare,
  Shield,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const expertise = [
  { icon: Code, label: "Web Development" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Bot, label: "AI Integration" },
  { icon: Settings, label: "Custom Software" },
  { icon: Globe, label: "SaaS Products" },
  { icon: Globe, label: "Worldwide" },
];

const whyWorkWithUs = [
  {
    icon: Zap,
    title: "Technical Depth",
    description:
      "Full-stack expertise across web, mobile, and backend systems.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description: "Regular updates and transparent progress throughout.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description:
      "You work directly with the engineers, not account managers.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Built with modern best practices and tested thoroughly.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-4">
            About MGKCodes
          </h1>
          <p className="text-lg text-theme-muted">
            Development studio. Working worldwide.
          </p>
        </div>
      </Section>

      {/* Company Overview */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-theme leading-relaxed">
              MGKCodes is a development studio specializing in web and mobile
              application development. We work with founders and businesses to
              design, build, and ship software products.
            </p>
            <p className="text-lg text-theme leading-relaxed">
              We build our own products alongside client work. Our current focus
              is Liftio, a fitness application for iOS and Android. We care
              about craftsmanship and building things that work.
            </p>
            <p className="text-lg text-theme leading-relaxed">
              Based in London, working with clients worldwide. We bring strong
              technical execution and direct communication to every project.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Do Best */}
      <Section className="bg-theme-secondary">
        <h2 className="text-3xl font-semibold text-theme mb-8 text-center">
          What We Do Best
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {expertise.map((item) => (
            <Card key={item.label} className="text-center p-4">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm font-medium text-theme">{item.label}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Work With Us */}
      <Section className="bg-theme-secondary">
        <h2 className="text-3xl font-semibold text-theme mb-8 text-center">
          Why Work With Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithUs.map((item) => (
            <Card key={item.title} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-theme mb-2">
                {item.title}
              </h3>
              <p className="text-theme-muted text-sm">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            We work with founders and companies building software products.
            Let&apos;s talk.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
