import React from 'react';
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex animate-text-gradient bg-[linear-gradient(to_right,#E8600A,theme(colors.amber.400),#E8600A)] bg-[200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
