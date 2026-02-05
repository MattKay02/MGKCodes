"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram, MapPin, Send, Loader2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
}

const serviceOptions = [
  { value: "", label: "Select a service..." },
  { value: "web-development", label: "Web Development" },
  { value: "seo", label: "SEO Optimization" },
  { value: "ai", label: "AI Integration" },
  { value: "mobile", label: "Mobile App" },
  { value: "social", label: "Social Media Solutions" },
  { value: "custom", label: "Custom Software" },
  { value: "general", label: "Not Sure / General Inquiry" },
];

const budgetOptions = [
  { value: "", label: "Select budget range (optional)..." },
  { value: "under-500", label: "Under £500" },
  { value: "500-1000", label: "£500 - £1,000" },
  { value: "1000-5000", label: "£1,000 - £5,000" },
  { value: "5000-plus", label: "£5,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mgkcodes@gmail.com",
    href: "mailto:mgkcodes@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+44) 7454745917",
    href: "tel:+447454745917",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@mgkcodes_",
    href: "https://instagram.com/mgkcodes_",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Worldwide Remote Service",
    href: null,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const { theme, mounted } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          service: data.service,
          budget: data.budget || "Not specified",
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border border-theme rounded-lg bg-theme-surface text-theme focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-medium text-theme mb-1";
  const errorClasses = "text-red-500 text-sm mt-1";

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-theme-secondary">
        <div className="text-center max-w-3xl mx-auto">
          {/* Hero Logo */}
          <div className="mb-8">
            {mounted ? (
              <Image
                src={
                  theme === "dark"
                    ? "/images/logo/svg/logo-white.svg"
                    : "/images/logo/svg/logo-no-background.svg"
                }
                alt="MGKCodes"
                width={280}
                height={84}
                className="h-20 md:h-24 w-auto mx-auto"
                priority
              />
            ) : (
              <div className="h-20 md:h-24 w-[280px] mx-auto bg-theme rounded animate-pulse" />
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-theme-muted">
            Ready to start your project? Get in touch and we'll get back to you
            within 24 hours.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="bg-theme">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card hover={false} className="p-8">
              <h2 className="text-2xl font-semibold text-theme mb-6">
                Send Us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-600 dark:text-green-400">
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={cn(inputClasses, errors.name && "border-red-500")}
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className={errorClasses}>{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={cn(inputClasses, errors.email && "border-red-500")}
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={errorClasses}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="Your phone number (optional)"
                      {...register("phone")}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      className={cn(inputClasses, errors.service && "border-red-500")}
                      {...register("service", {
                        required: "Please select a service",
                      })}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className={errorClasses}>{errors.service.message}</p>
                    )}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className={labelClasses}>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    className={inputClasses}
                    {...register("budget")}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(inputClasses, errors.message && "border-red-500")}
                    placeholder="Tell us about your project..."
                    {...register("message", {
                      required: "Please describe your project",
                    })}
                  />
                  {errors.message && (
                    <p className={errorClasses}>{errors.message.message}</p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-theme mb-6">
              Direct Contact
            </h2>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <Card key={item.label} hover={false} className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-theme-muted">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="font-medium text-theme hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-theme">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-theme-secondary rounded-lg border border-theme">
              <h3 className="font-semibold text-theme mb-2">Response Time</h3>
              <p className="text-theme-muted text-sm">
                We typically respond within 24 hours during business days. For
                urgent inquiries, please call or message us on Instagram.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
