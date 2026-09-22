import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus-visible:ring-2 focus-visible:ring-cyan",
        className,
      )}
      {...props}
    />
  );
}
