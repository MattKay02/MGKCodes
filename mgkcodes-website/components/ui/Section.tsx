"use client";

import { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode;
  container?: boolean;
}

export const Section: FC<SectionProps> = ({
  children,
  container = true,
  className,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      {container ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      ) : (
        children
      )}
    </motion.section>
  );
};
