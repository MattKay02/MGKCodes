"use client";

import { FC, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  href,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark active:bg-primary-dark",
    secondary:
      "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
    ghost:
      "text-primary bg-transparent hover:bg-primary/10",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
