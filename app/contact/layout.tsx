import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | MGKCodes",
  description: "Where to reach MGKCodes.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
