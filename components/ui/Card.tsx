import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  framed?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  hover = false,
  framed = false,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative bg-[var(--color-surface)] border border-[var(--color-border)] p-6 transition-colors duration-300",
        hover && "hover:border-[var(--color-border-strong)]",
        framed && "before:absolute before:-top-px before:-left-2 before:w-4 before:h-px before:bg-[var(--color-accent-quiet)] after:absolute after:-bottom-px after:-right-2 after:w-4 after:h-px after:bg-[var(--color-accent-quiet)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
