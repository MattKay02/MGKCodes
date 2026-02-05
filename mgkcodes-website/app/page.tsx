"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Search,
  Cpu,
  ArrowRight,
  MessageSquare,
  Wrench,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { useTheme } from "@/components/providers/ThemeProvider";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Professional websites built to convert visitors into customers.",
    price: "Starting at £99",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Get found online with search engine optimization that works.",
    price: "£40/month package available",
  },
  {
    icon: Cpu,
    title: "Software Solutions",
    description:
      "Custom software, AI integration, and mobile apps for your business.",
    price: "Get a Quote",
  },
];

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Contact Us",
    description:
      "Tell us what you need and we'll discuss the best solution for your business.",
  },
  {
    icon: Wrench,
    step: "2",
    title: "We Build",
    description: "Fast, professional development with regular updates on progress.",
  },
  {
    icon: Rocket,
    step: "3",
    title: "You Launch",
    description: "Go live with hosting and SEO support to help you succeed.",
  },
];

const pricing = [
  { name: "Landing Page", price: "£99" },
  { name: "Custom Website", price: "Contact for Quote" },
  { name: "Hosting + SEO", price: "£40/month" },
];

export default function Home() {
  const { theme, mounted } = useTheme();

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center bg-theme-secondary transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Hero Logo */}
            <div className="mb-10">
              {mounted ? (
                <Image
                  src={
                    theme === "dark"
                      ? "/images/logo/svg/logo-white.svg"
                      : "/images/logo/svg/logo-no-background.svg"
                  }
                  alt="MGKCodes"
                  width={400}
                  height={120}
                  className="h-28 md:h-36 lg:h-40 w-auto mx-auto"
                  priority
                />
              ) : (
                <div className="h-28 md:h-36 lg:h-40 w-[400px] mx-auto bg-gray-100 dark:bg-zinc-800 rounded animate-pulse" />
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-theme leading-tight mb-6">
              Professional Websites Built for{" "}
              <span className="text-primary">Small Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-theme-muted mb-8 max-w-2xl mx-auto">
              Custom web development, SEO optimization, and software solutions to
              grow your business online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="/contact" variant="primary">
                Get Your Website
              </Button>
              <Button href="/portfolio" variant="secondary">
                View Our Work
              </Button>
            </div>
            <p className="text-sm text-theme-muted">
              From £99 | Worldwide Service | Ready to Launch
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-theme">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-4">
            What We Do
          </h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            From simple landing pages to complex software solutions, we help
            businesses succeed online.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-theme mb-2">
                  {service.title}
                </h3>
                <p className="text-theme-muted mb-4">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/services" variant="ghost">
            View All Services <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-theme-secondary">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-4">
            How It Works
          </h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            Getting your website built is simple. Here's how we work together.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-2xl font-semibold">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/20" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-theme mb-2">
                {step.title}
              </h3>
              <p className="text-theme-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Snapshot */}
      <Section className="bg-theme">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-4">
            Transparent Pricing
          </h2>
          <p className="text-theme-muted max-w-2xl mx-auto">
            No hidden fees. Know exactly what you're paying for.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {pricing.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <p className="text-theme-muted mb-2">{item.name}</p>
                <p className="text-2xl font-semibold text-theme">
                  {item.price}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/services" variant="secondary">
            See Full Pricing
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
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
                className="h-20 md:h-24 w-auto mx-auto"
              />
            ) : (
              <div className="h-20 md:h-24 w-[280px] mx-auto bg-white/10 dark:bg-black/10 rounded animate-pulse" />
            )}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss your project and find the perfect solution for your
            business.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us Today
          </Button>
        </div>
      </Section>
    </div>
  );
}
