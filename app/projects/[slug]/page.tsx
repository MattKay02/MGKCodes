import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface Project {
  title: string;
  category: string;
  heroImage: string;
  challenge: string;
  solution: string;
  features: string[];
  results: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Record<string, Project> = {
  liftio: {
    title: "Liftio",
    category: "Mobile App",
    heroImage: "",
    challenge:
      "Building a cross-platform fitness app that handles workout tracking, progress visualization, and social accountability in a single cohesive mobile experience.",
    solution:
      "A native-quality mobile app for both iOS and Android, powered by a cloud backend designed for speed and reliability. The app works offline and syncs automatically when connectivity returns.",
    features: [
      "Workout logging with custom exercise library",
      "Progress analytics and charting",
      "Personal records tracking",
      "Offline-first with background sync",
    ],
    results: ["Currently in active development", "Beta testing in progress"],
    images: [],
  },
  "matthew-simpson-architecture": {
    title: "Matthew Simpson Architecture",
    category: "Web",
    heroImage: "/images/Portfolio_images/MSA-screenshot.png",
    challenge:
      "Creating a portfolio website that communicates architectural vision while being fast, accessible, and easy to update.",
    solution:
      "A modern, mobile-first website with optimized image loading and clean typographic hierarchy. Built for speed and designed to look great on any device.",
    features: [
      "Portfolio grid with project detail pages",
      "Mobile-optimized layout",
      "Fast image loading",
      "Clean, minimal design",
    ],
    results: ["Live at matthewsimpsonarchitecture.vercel.app"],
    images: ["/images/Portfolio_images/MSA-screenshot.png"],
    liveUrl: "https://matthewsimpsonarchitecture.vercel.app",
  },
  "red-cross-reigate": {
    title: "Red Cross Reigate",
    category: "Web",
    heroImage: "/images/Portfolio_images/RedCrossReigate-screenshot.png",
    challenge:
      "A well-loved local pub in Reigate needed a modern online presence to attract customers and share key information like drinks menus, upcoming events, and opening hours.",
    solution:
      "A clean, inviting landing page that captures the pub's character with a strong hero image, easy navigation, and quick access to drinks, events, and contact details. Built mobile-first so customers can find what they need on the go.",
    features: [
      "Full-screen hero with pub imagery",
      "Drinks menu section",
      "What's On events listing",
      "About section with pub story",
      "Contact information and location",
      "Mobile-optimized responsive design",
    ],
    results: ["Live at red-cross-reigate.vercel.app"],
    images: ["/images/Portfolio_images/RedCrossReigate-screenshot.png"],
    liveUrl: "https://red-cross-reigate.vercel.app",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return { title: "Project Not Found | MGKCodes" };
  }

  return {
    title: `${project.title} | MGKCodes`,
    description: project.challenge,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <Button href="/projects" variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>
        <div className="max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mt-2 mb-6">
            {project.title}
          </h1>
        </div>
      </Section>

      {/* Hero Image */}
      {project.heroImage && (
        <Section className="bg-theme py-0">
          <div className="aspect-video bg-theme-secondary rounded-lg overflow-hidden border border-theme">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-full object-cover"
            />
          </div>
        </Section>
      )}

      {/* The Challenge */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-theme mb-4">The Challenge</h2>
          <p className="text-theme-muted text-lg">{project.challenge}</p>
        </div>
      </Section>

      {/* The Solution */}
      <Section className="bg-theme-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-theme mb-4">The Solution</h2>
          <p className="text-theme-muted text-lg">{project.solution}</p>
        </div>
      </Section>

      {/* Key Features */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-theme mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span className="text-theme-muted">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Results & Impact */}
      <Section className="bg-theme">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-theme mb-4">
            Results & Impact
          </h2>
          <ul className="space-y-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span className="text-theme-muted">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Project Links */}
      {(project.liveUrl || project.githubUrl) && (
        <Section className="bg-theme-secondary">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-theme mb-4">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-theme text-theme rounded-lg hover:bg-theme-secondary transition-colors"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-black dark:bg-white text-white dark:text-black transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Have a project?</h2>
          <p className="text-gray-400 dark:text-gray-600 max-w-2xl mx-auto mb-8">
            Reach out and tell us what you&apos;re building.
          </p>
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}
