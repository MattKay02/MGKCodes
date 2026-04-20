import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | MGKCodes",
  description: "Apps and products built by MGKCodes.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
