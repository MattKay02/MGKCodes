"use client";

import Image from "next/image";
import {
  Code,
  Search,
  Bot,
  Smartphone,
  Share2,
  Settings,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";

const webDevFeatures = [
  "Landing pages",
  "Business websites",
  "E-commerce stores",
  "Portfolio sites",
  "Web applications",
];

const webDevProcess = [
  {
    step: "1",
    title: "Consultation",
    description: "We discuss your needs, goals, and vision for your website.",
  },
  {
    step: "2",
    title: "Design & Development",
    description: "We build your site using modern technologies and best practices.",
  },
  {
    step: "3",
    title: "Testing",
    description: "Thorough testing across devices to ensure everything works perfectly.",
  },
  {
    step: "4",
    title: "Launch & Support",
    description: "We launch your site and provide ongoing support as needed.",
  },
];

const webDevPricing = [
  {
    name: "Landing Page",
    price: "£99",
    features: [
      "Single page design",
      "Mobile responsive",
      "Contact form",
      "SEO basics",
      "Fast delivery",
    ],
  },
  {
    name: "Multi-Page Website",
    price: "Custom Quote",
    features: [
      "Multiple pages",
      "Custom design",
      "Full functionality",
      "CMS integration",
      "Ongoing support available",
    ],
  },
  {
    name: "Hosting + SEO",
    price: "£40/month",
    features: [
      "Fast, reliable hosting",
      "SSL certificate",
      "Monthly SEO optimization",
      "Performance monitoring",
      "Regular backups",
      "Security updates",
    ],
  },
];

const otherServices = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Get found online with comprehensive search engine optimization.",
    features: [
      "Keyword research",
      "On-page SEO",
      "Technical SEO",
      "Local SEO",
      "Performance optimization",
    ],
    pricing: "Included in £40/month package or standalone custom quote",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Leverage artificial intelligence to automate and enhance your business.",
    features: [
      "Custom chatbots",
      "Content generation",
      "Process automation",
      "Data analysis",
      "AI-powered tools",
    ],
    pricing: "Custom quote based on requirements",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS applications",
      "Android applications",
      "Cross-platform (React Native)",
      "Progressive Web Apps",
      "App store deployment",
    ],
    pricing: "Custom quote based on requirements",
  },
  {
    icon: Share2,
    title: "Social Media Solutions",
    description: "Tools and automation to manage your social media presence.",
    features: [
      "Management tools",
      "Automation systems",
      "Analytics dashboards",
    ],
    pricing: "Custom quote based on requirements",
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description: "Bespoke software built to solve your specific business challenges.",
    features: [
      "Business process automation",
      "Custom web applications",
      "API development",
      "System integrations",
    ],
    pricing: "Custom quote based on requirements",
  },
];

export default function ServicesPage() {
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
                    ? "/images/logo/svg/logo-white.svg"
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
            Our Services
          </h1>
          <p className="text-lg text-theme-muted">
            From simple websites to complex software solutions, we provide
            everything you need to succeed online.
          </p>
        </div>
      </Section>

      {/* Web Development - Featured Service */}
      <Section className="bg-theme" id="web-development">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Featured Service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-4">
              Web Development
            </h2>
            <p className="text-theme-muted mb-6">
              Professional websites built with modern technologies. We create
              fast, responsive, and SEO-optimized sites that help your business
              grow.
            </p>

            <h3 className="text-xl font-semibold text-theme mb-3">
              What We Build
            </h3>
            <ul className="space-y-2 mb-8">
              {webDevFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-theme">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-theme mb-3">
              Our Tech Stack
            </h3>
            <p className="text-theme-muted mb-2">
              We use modern, proven technologies:
            </p>
            <p className="text-theme">
              React, Next.js, Tailwind CSS, TypeScript — all mobile-first and
              SEO-optimized.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-theme mb-6">
              Our Process
            </h3>
            <div className="space-y-4">
              {webDevProcess.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-theme">{step.title}</h4>
                    <p className="text-theme-muted text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Web Dev Pricing */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-theme mb-8 text-center">
            Web Development Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {webDevPricing.map((plan) => (
              <Card key={plan.name} className="text-center">
                <h4 className="text-lg font-semibold text-theme mb-2">
                  {plan.name}
                </h4>
                <p className="text-3xl font-semibold text-primary mb-4">
                  {plan.price}
                </p>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-theme">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <p className="text-center text-theme-muted mt-4 text-sm">
            Need website updates? Contact us for a separate quote.
          </p>
        </div>
      </Section>

      {/* Other Services */}
      <Section className="bg-theme-secondary">
        <h2 className="text-3xl font-semibold text-theme mb-8 text-center">
          More Services
        </h2>
        <div className="space-y-8">
          {otherServices.map((service) => (
            <Card key={service.title} hover={false} className="p-8">
              <div className="grid md:grid-cols-[auto,1fr,auto] gap-6 items-start">
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
                <div className="text-right">
                  <p className="text-sm text-theme-muted">{service.pricing}</p>
                </div>
              </div>
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
                    : "/images/logo/svg/logo-white.svg"
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
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>
    </div>
  );
}
