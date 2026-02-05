import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  hover = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-theme-surface border border-theme rounded-lg p-6 shadow-sm transition-all duration-300",
        hover && "hover:shadow-lg hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
