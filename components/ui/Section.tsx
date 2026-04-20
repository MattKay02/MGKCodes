"use client";

import { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLMotionProps<"section">, "children"> {
  children: React.ReactNode;
  container?: boolean;
  width?: "narrow" | "wide";
}

export const Section: FC<SectionProps> = ({
  children,
  container = true,
  width = "wide",
  className,
  ...props
}) => {
  const inner =
    width === "narrow"
      ? "max-w-[720px] mx-auto px-6"
      : "max-w-[1080px] mx-auto px-6";

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
      {...props}
    >
      {container ? <div className={inner}>{children}</div> : children}
    </motion.section>
  );
};
