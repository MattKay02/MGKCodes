import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect | MGKCodes",
  description: "Quick links — Matthew Kay, MGKCodes Ltd",
};

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
