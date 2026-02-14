import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | MGKCodes",
  description:
    "Projects built by MGKCodes — web and mobile applications.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
