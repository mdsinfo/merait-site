import Image from "next/image";
import { cn } from "@/lib/utils";

const size = { width: 394, height: 61 };

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  if (light) {
    return (
      <span className={cn("inline-flex items-center", className)}>
        <Image src="/brand/merait-logo-light.png" alt="MERAIT" {...size} priority className="h-8 w-auto" />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image src="/brand/merait-logo.png" alt="MERAIT" {...size} priority className="h-8 w-auto dark:hidden" />
      <Image src="/brand/merait-logo-light.png" alt="" {...size} priority className="hidden h-8 w-auto dark:block" />
    </span>
  );
}
