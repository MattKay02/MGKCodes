import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "MGKCodes | Development Studio",
  description:
    "Development studio building web and mobile applications. Custom SaaS development, product design, and full-stack engineering.",
  openGraph: {
    title: "MGKCodes | Development Studio",
    description:
      "Development studio building web and mobile applications. Custom SaaS development, product design, and full-stack engineering.",
    url: "https://mgkcodes.com",
    siteName: "MGKCodes",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
