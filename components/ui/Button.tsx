import { FC, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-tight rounded-none transition-colors duration-200 focus:outline-none focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:opacity-40 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-white text-[#08090d] hover:bg-[var(--color-accent-strong)] hover:text-white",
  secondary:
    "border border-[var(--color-border-strong)] text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]",
  ghost:
    "text-[var(--color-text-muted)] hover:text-white",
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  href,
  external,
  children,
  className,
  ...props
}) => {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
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
