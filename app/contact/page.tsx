"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Mail, Send, Loader2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  budget?: string;
  message: string;
}

const budgetOptions = [
  { value: "", label: "Select budget range (optional)..." },
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mgkcodes.com",
    href: "mailto:hello@mgkcodes.com",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

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
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error("EmailJS configuration missing");
      }

      await emailjs.send(serviceId, templateId, {
        to_name: "MGKCodes",
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        budget: data.budget || "Not specified",
        message: data.message,
      });

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
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
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-theme mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-theme-muted">
            Have a project in mind? Send us a message and we&apos;ll respond
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
                  Thanks for reaching out! We&apos;ll get back to you within 24
                  hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email us directly at
                  hello@mgkcodes.com.
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
                      className={cn(
                        inputClasses,
                        errors.name && "border-red-500"
                      )}
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
                      className={cn(
                        inputClasses,
                        errors.email && "border-red-500"
                      )}
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
                    className={cn(
                      inputClasses,
                      errors.message && "border-red-500"
                    )}
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
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
