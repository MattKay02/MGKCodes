"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Folder, Code, Smartphone, ExternalLink, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  status?: string;
  image?: string;
  link?: string;
  slug?: string;
}

const categories = [
  { id: "all", label: "All", icon: Folder },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "web", label: "Web Apps", icon: Code },
];

const projects: Project[] = [
  {
    id: 1,
    category: "mobile",
    categoryLabel: "Mobile App",
    title: "Liftio",
    description:
      "Fitness tracking application for iOS and Android with workout logging, progress analytics, and social features.",
    status: "In Development",
    slug: "liftio",
  },
  {
    id: 2,
    category: "web",
    categoryLabel: "Web",
    title: "Matthew Simpson Architecture",
    description:
      "Portfolio website for architect Matthew Simpson showcasing architectural projects and practice.",
    image: "/images/Portfolio_images/MSA-screenshot.png",
    link: "https://matthewsimpsonarchitecture.vercel.app",
    slug: "matthew-simpson-architecture",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-4">
            Projects
          </h1>
          <p className="text-lg text-theme-muted">
            What we&apos;ve built and what we&apos;re working on.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section className="bg-theme py-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === cat.id
                  ? "bg-primary text-white"
                  : "bg-theme-secondary text-theme border border-theme hover:bg-primary/10"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-theme pt-0">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {/* Image */}
                {project.image && (
                  <div className="aspect-video bg-theme-secondary rounded-lg mb-4 border border-theme overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.categoryLabel}
                  </span>
                  {project.status && (
                    <span className="text-xs text-theme-muted">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-theme mb-2">
                  {project.title}
                </h3>
                <p className="text-theme-muted text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                    >
                      View Live <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.slug && (
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-theme-muted hover:text-primary font-medium text-sm transition-colors"
                    >
                      Details <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-theme-muted">
              No projects in this category yet.
            </p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Have a project?
          </h2>
          <p className="text-gray-400 dark:text-gray-600 mb-6">
            Tell us what you&apos;re building.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
