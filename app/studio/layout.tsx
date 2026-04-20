import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | MGKCodes",
  description: "About the studio behind MGKCodes.",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
