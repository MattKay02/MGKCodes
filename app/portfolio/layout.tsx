import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | MGKCodes",
  description:
    "View our portfolio of web development, mobile apps, AI integration, and custom software projects.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
