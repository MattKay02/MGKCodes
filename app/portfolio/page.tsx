"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Folder, Code, Smartphone, Bot, Search, Share2, Settings, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  isPlaceholder?: boolean;
}

const categories = [
  { id: "all", label: "All Projects", icon: Folder },
  { id: "web", label: "Web Development", icon: Code },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "ai", label: "AI Integration", icon: Bot },
  { id: "seo", label: "SEO Projects", icon: Search },
  { id: "social", label: "Social Media", icon: Share2 },
  { id: "custom", label: "Custom Solutions", icon: Settings },
];

const projects: Project[] = [
  {
    id: 1,
    category: "web",
    categoryLabel: "Web Development",
    title: "Matthew Simpson Architecture",
    description: "Professional portfolio website for architect Matthew Simpson showcasing architectural projects and portfolio work.",
    image: "/images/Portfolio_images/MSA-screenshot.png",
    link: "https://matthewsimpsonarchitecture.vercel.app",
  },
  { id: 2, category: "web", categoryLabel: "Web Development", title: "Project Coming Soon", description: "We're currently working on exciting projects. Check back soon!", isPlaceholder: true },
  { id: 3, category: "mobile", categoryLabel: "Mobile App", title: "Project Coming Soon", description: "We're currently working on exciting projects. Check back soon!", isPlaceholder: true },
  { id: 4, category: "ai", categoryLabel: "AI Integration", title: "Project Coming Soon", description: "We're currently working on exciting projects. Check back soon!", isPlaceholder: true },
  { id: 5, category: "seo", categoryLabel: "SEO Project", title: "Project Coming Soon", description: "We're currently working on exciting projects. Check back soon!", isPlaceholder: true },
  { id: 6, category: "custom", categoryLabel: "Custom Solution", title: "Project Coming Soon", description: "We're currently working on exciting projects. Check back soon!", isPlaceholder: true },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { theme, mounted } = useTheme();

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
            Our Portfolio
          </h1>
          <p className="text-lg text-theme-muted">
            Explore our recent projects and see what we can build for you.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section className="bg-theme py-8">
        <div className="flex flex-wrap justify-center gap-2">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden flex flex-col">
                {/* Image or Placeholder */}
                <div className="aspect-video bg-theme-secondary rounded-lg mb-4 flex items-center justify-center border border-theme overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Folder className="w-12 h-12 text-theme-muted opacity-30" />
                  )}
                </div>

                {/* Category Badge */}
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded mb-2">
                  {project.categoryLabel}
                </span>

                {/* Content */}
                <h3 className="text-lg font-semibold text-theme mb-2">
                  {project.title}
                </h3>
                <p className="text-theme-muted text-sm flex-grow">
                  {project.description}
                </p>

                {/* Link Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mt-4 font-medium text-sm"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-theme-muted">No projects in this category yet.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center max-w-2xl mx-auto">
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-gray-400 dark:text-gray-600 mb-6">
            We're ready to help you bring your project to life. Let's discuss
            what we can build together.
          </p>
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </Section>
    </div>
  );
}
