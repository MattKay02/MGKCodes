"use client";

import Image from "next/image";
import {
  Code,
  Search,
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
import { useTheme } from "@/components/providers/ThemeProvider";

const expertise = [
  { icon: Code, label: "Web Development" },
  { icon: Search, label: "SEO Optimization" },
  { icon: Bot, label: "AI Integration" },
  { icon: Smartphone, label: "Mobile Apps" },
  { icon: Settings, label: "Custom Software" },
  { icon: Globe, label: "Worldwide Service" },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "React Native",
];

const whyWorkWithUs = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work efficiently to get your project live quickly.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    description: "Regular updates and transparent progress throughout.",
  },
  {
    icon: MessageSquare,
    title: "Ongoing Support",
    description: "We're here to help even after your project launches.",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Built with modern best practices and tested thoroughly.",
  },
];

export default function AboutPage() {
  const { theme, mounted } = useTheme();

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Logo */}
          <div className="mb-8">
            {mounted ? (
              <Image
                src={
                  theme === "dark"
                    ? "/images/logo/svg/logo-white-elements.svg"
                    : "/images/logo/svg/logo-no-background.svg"
                }
                alt="MGKCodes"
                width={280}
                height={84}
                className="h-20 md:h-24 w-auto mx-auto"
                priority
              />
            ) : (
              <div className="h-20 md:h-24 w-[280px] mx-auto bg-theme rounded animate-pulse" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-6">
            About MGKCodes
          </h1>
          <p className="text-lg text-theme-muted">
            Building software solutions that help businesses grow.
          </p>
        </div>
      </Section>

      {/* Company Overview */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-theme leading-relaxed">
              MGKCodes is a software solutions company specializing in custom web
              development and modern technology integration. We help small
              businesses and growing companies establish their online presence and
              leverage technology to achieve their goals.
            </p>
            <p className="text-lg text-theme leading-relaxed">
              We've always had a passion for design and creating something real.
              That passion drives every project we take on — from simple landing
              pages to complex AI integrations. We believe great software should
              be accessible, affordable, and built to last.
            </p>
            <p className="text-lg text-theme leading-relaxed">
              We work remotely with clients worldwide, bringing modern development
              practices and clear communication to every project. Whether you need
              a new website, mobile app, or custom software solution, we're here
              to help you build it right.
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

      {/* Our Technology */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-theme mb-4">
            Our Technology
          </h2>
          <p className="text-theme-muted mb-8">
            We use modern, proven technologies to build fast, reliable, and
            maintainable software.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-theme-secondary border border-theme rounded-full text-sm font-medium text-theme"
              >
                {tech}
              </span>
            ))}
          </div>
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
          {/* CTA Logo */}
          <div className="mb-8">
            {mounted ? (
              <Image
                src={
                  theme === "dark"
                    ? "/images/logo/svg/logo-no-background.svg"
                    : "/images/logo/svg/logo-white-elements.svg"
                }
                alt="MGKCodes"
                width={280}
                height={84}
                className="h-16 md:h-20 w-auto mx-auto"
              />
            ) : (
              <div className="h-16 md:h-20 w-[280px] mx-auto bg-white/10 dark:bg-black/10 rounded animate-pulse" />
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            Ready to discuss your project? We'd love to hear about what you're
            building.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
