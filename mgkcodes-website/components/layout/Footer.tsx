"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Web Development",
  "SEO Optimization",
  "AI Integration",
  "Mobile Apps",
  "Custom Software",
];

export function Footer() {
  const { theme, mounted } = useTheme();

  return (
    <footer className="bg-black text-white dark:bg-white dark:text-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {mounted ? (
                <Image
                  src={
                    theme === "dark"
                      ? "/images/logo/svg/logo-no-background.svg"
                      : "/images/logo/svg/logo-white.svg"
                  }
                  alt="MGKCodes"
                  width={180}
                  height={54}
                  className="h-14 w-auto"
                />
              ) : (
                <div className="h-14 w-[180px] bg-white/10 dark:bg-black/10 rounded animate-pulse" />
              )}
            </Link>
            <p className="text-gray-400 dark:text-gray-600 text-sm leading-relaxed">
              Professional web development and software solutions for small
              businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:mgkcodes@gmail.com"
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Mail size={18} />
                  mgkcodes@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447454745917"
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Phone size={18} />
                  (+44) 7454745917
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/mgkcodes_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  <Instagram size={18} />
                  @mgkcodes_
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 dark:text-gray-600 text-sm">
            © 2026 MGKCodes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 dark:text-gray-600 hover:text-primary transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
