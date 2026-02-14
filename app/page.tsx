"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
import { useTheme } from "@/components/providers/ThemeProvider";

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
  {
    title: "Red Cross Reigate",
    type: "Web",
    description:
      "Landing page for a traditional local pub in Reigate, Surrey.",
    status: "Live",
    link: "https://red-cross-reigate.vercel.app",
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Home() {
  const { theme, mounted } = useTheme();

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center bg-theme-secondary transition-colors duration-300 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.8 }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"
          />
        </div>

        {/* Side decorations - left */}
        <div className="hidden lg:block absolute left-8 xl:left-16 top-0 bottom-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-full flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "80px" }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "120px" }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "60px" }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent"
            />
          </motion.div>
        </div>

        {/* Side decorations - right */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-0 bottom-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="h-full flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "60px" }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent"
            />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "120px" }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            />
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "80px" }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            />
          </motion.div>
        </div>

        {/* Corner accents */}
        <div className="hidden xl:block absolute top-24 left-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="w-16 h-px bg-primary/15" />
            <div className="w-px h-16 bg-primary/15" />
          </motion.div>
        </div>
        <div className="hidden xl:block absolute bottom-24 right-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col items-end"
          >
            <div className="w-16 h-px bg-primary/15" />
            <div className="w-px h-16 bg-primary/15 self-end" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Logo */}
            <motion.div variants={fadeUp} className="mb-8">
              {mounted ? (
                <Image
                  src={
                    theme === "dark"
                      ? "/images/logo/svg/logo-white-elements.svg"
                      : "/images/logo/svg/logo-no-background.svg"
                  }
                  alt="MGKCodes"
                  width={400}
                  height={120}
                  className="h-24 md:h-32 lg:h-36 w-auto mx-auto"
                  priority
                />
              ) : (
                <div className="h-24 md:h-32 lg:h-36 w-[400px] mx-auto bg-gray-100 dark:bg-zinc-800 rounded animate-pulse" />
              )}
            </motion.div>

            {/* Accent line */}
            <motion.div
              variants={fadeUp}
              className="flex justify-center mb-8"
            >
              <div className="w-16 h-1 bg-primary rounded-full" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-theme-muted mb-3"
            >
              Development studio building web and mobile applications.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-theme mb-10 max-w-2xl mx-auto"
            >
              Custom SaaS development · Product design · Full-stack engineering
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button href="/projects" variant="secondary">
                View Our Work
              </Button>
              <Button href="/contact" variant="ghost">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-theme-muted/40 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Current Work */}
      <Section className="bg-theme relative overflow-hidden">
        {/* Side accent - left vertical line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block absolute left-8 xl:left-16 top-16 bottom-16 pointer-events-none"
        >
          <div className="h-full w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        </motion.div>

        {/* Side accent - right dot pattern */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:flex absolute right-8 xl:right-16 top-0 bottom-0 flex-col items-center justify-center gap-4 pointer-events-none"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-primary/15"
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme">
              Current Work
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 bg-primary rounded-full"
            />
          </div>
          <p className="text-theme-muted">What we&apos;re building right now.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={scaleIn}>
              <Card className="h-full group">
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
                    className="inline-flex items-center gap-2 text-primary mt-4 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button href="/projects" variant="ghost">
            All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </Section>

      {/* Capabilities */}
      <Section className="bg-theme-secondary relative overflow-hidden">
        {/* Side decorative brackets - left */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block absolute left-6 xl:left-14 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="flex flex-col items-start gap-0">
            <div className="w-6 h-px bg-primary/15" />
            <div className="w-px h-24 bg-primary/10" />
            <div className="w-6 h-px bg-primary/15" />
          </div>
        </motion.div>

        {/* Side decorative brackets - right */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="flex flex-col items-end gap-0">
            <div className="w-6 h-px bg-primary/15" />
            <div className="w-px h-24 bg-primary/10 self-end" />
            <div className="w-6 h-px bg-primary/15" />
          </div>
        </motion.div>

        {/* Subtle grid dots - top left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden xl:block absolute top-12 left-12 pointer-events-none"
        >
          <div className="grid grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary/10" />
            ))}
          </div>
        </motion.div>

        {/* Subtle grid dots - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden xl:block absolute bottom-12 right-12 pointer-events-none"
        >
          <div className="grid grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary/10" />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-theme">
              Capabilities
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 bg-primary rounded-full"
            />
          </div>
          <p className="text-theme-muted">What we build.</p>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div key={cap.title} variants={scaleIn}>
              <Card className="h-full group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-theme mb-1">
                  {cap.title}
                </h3>
                <p className="text-theme-muted text-sm">{cap.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300 relative overflow-hidden">
        {/* Decorative gradient line - top */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Side gradient streaks */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-32 xl:w-48 h-px bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        >
          <div className="w-32 xl:w-48 h-px bg-gradient-to-l from-primary/20 to-transparent" />
        </motion.div>

        <div className="text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
