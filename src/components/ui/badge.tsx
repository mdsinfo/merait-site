import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold tracking-wide text-foreground",
        className,
      )}
      {...props}
    />
  );
}
