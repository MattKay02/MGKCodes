"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cpu,
  ArrowRight,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const featuredProjects = [
  {
    title: "Liftio",
    type: "Mobile App",
    description:
      "Fitness tracking application for iOS and Android with workout logging, progress analytics, and social features.",
    status: "In Development",
    link: null,
  },
  {
    title: "Matthew Simpson Architecture",
    type: "Web",
    description:
      "Portfolio website for an architecture firm showcasing projects and practice.",
    status: "Live",
    link: "https://matthewsimpsonarchitecture.vercel.app",
  },
];

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Custom apps for iOS and Android, built to scale.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Fast, modern web apps designed to perform.",
  },
  {
    icon: Cpu,
    title: "SaaS Products",
    description: "Custom software products built from the ground up.",
  },
  {
    icon: Globe,
    title: "AI Integration",
    description: "Smart automation and AI-powered features for your product.",
  },
];

export default function Home() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-theme leading-tight mb-4">
              MGKCodes
            </h1>
            <p className="text-lg md:text-xl text-theme-muted mb-3">
              Development studio building web and mobile applications.
            </p>
            <p className="text-base md:text-lg text-theme mb-8 max-w-2xl mx-auto">
              Custom SaaS development · Product design · Full-stack engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/projects" variant="secondary">
                View Our Work
              </Button>
              <Button href="/contact" variant="ghost">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Work */}
      <Section className="bg-theme">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-2">
            Current Work
          </h2>
          <p className="text-theme-muted">What we&apos;re building right now.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span className="text-xs text-theme-muted">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-theme mb-2">
                  {project.title}
                </h3>
                <p className="text-theme-muted mb-4">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary mt-4 font-medium text-sm hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/projects" variant="ghost">
            All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-theme-secondary">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-theme mb-2">
            Capabilities
          </h2>
          <p className="text-theme-muted">What we build.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <cap.icon className="w-6 h-6 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-theme mb-1">
                  {cap.title}
                </h3>
                <p className="text-theme-muted text-sm">{cap.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            We work with founders and companies to design and build web and
            mobile applications.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
