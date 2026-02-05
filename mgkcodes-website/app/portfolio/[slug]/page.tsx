import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

// This would typically come from a CMS or database
const projects: Record<string, Project> = {
  // Add projects here when ready
};

interface Project {
  title: string;
  category: string;
  heroImage: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Project Not Found | MGKCodes",
    };
  }

  return {
    title: `${project.title} | MGKCodes Portfolio`,
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
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <Button href="/portfolio" variant="ghost" className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>
        <div className="max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-black mt-2 mb-6">
            {project.title}
          </h1>
        </div>
      </Section>

      {/* Hero Image */}
      <Section className="bg-white py-0">
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Replace with actual image */}
          <span className="text-gray-400">Project Hero Image</span>
        </div>
      </Section>

      {/* The Challenge */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">The Challenge</h2>
          <p className="text-muted text-lg">{project.challenge}</p>
        </div>
      </Section>

      {/* The Solution */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">The Solution</h2>
          <p className="text-muted text-lg">{project.solution}</p>
        </div>
      </Section>

      {/* Technologies Used */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section className="bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">Key Features</h2>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Results & Impact */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Results & Impact
          </h2>
          <ul className="space-y-2">
            {project.results.map((result) => (
              <li key={result} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Project Links */}
      {(project.liveUrl || project.githubUrl) && (
        <Section className="bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-black mb-4">
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
                  className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-black text-white">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Like What You See?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's discuss how we can build something amazing for your business.
          </p>
          <Button href="/contact" variant="primary">
            Start Your Project
          </Button>
        </div>
      </Section>
    </div>
  );
}
