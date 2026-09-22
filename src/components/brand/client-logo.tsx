import type { ClientLogo, ClientMark } from "@/lib/company";

function Mark({ variant }: { variant: ClientMark }) {
  const common = "h-8 w-8 text-brand";
  if (variant === "bars") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <rect x="4" y="8" width="6" height="16" rx="1" fill="currentColor" />
        <rect x="13" y="4" width="6" height="20" rx="1" fill="#22D3EE" />
        <rect x="22" y="12" width="6" height="12" rx="1" fill="#7BEA23" />
      </svg>
    );
  }
  if (variant === "ring") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="16" cy="16" r="4" fill="#22D3EE" />
      </svg>
    );
  }
  if (variant === "diamond") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M16 3 29 16 16 29 3 16Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 9 23 16 16 23 9 16Z" fill="#7BEA23" />
      </svg>
    );
  }
  if (variant === "waves") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M3 12c4 0 4-4 8-4s4 4 8 4 4-4 8-4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M3 20c4 0 4-4 8-4s4 4 8 4 4-4 8-4" fill="none" stroke="#22D3EE" strokeWidth="2" />
      </svg>
    );
  }
  if (variant === "peak") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <path d="M4 26 16 6l12 20Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M11 26 16 16l5 10" fill="#22D3EE" />
      </svg>
    );
  }
  if (variant === "grid") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <rect x="4" y="4" width="10" height="10" fill="currentColor" />
        <rect x="18" y="4" width="10" height="10" fill="#22D3EE" />
        <rect x="4" y="18" width="10" height="10" fill="#7BEA23" />
        <rect x="18" y="18" width="10" height="10" fill="currentColor" />
      </svg>
    );
  }
  if (variant === "orbit") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <ellipse cx="16" cy="16" rx="12" ry="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="6" ry="12" fill="none" stroke="#22D3EE" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
      <path d="M6 22a10 10 0 0 1 20 0" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M10 22a6 6 0 0 1 12 0" fill="#7BEA23" />
    </svg>
  );
}

export function PlaceholderLogo({ client }: { client: ClientLogo }) {
  if (client.logoSrc) {
    return (
      <div className="flex h-16 min-w-52 items-center justify-center rounded-2xl border border-border bg-card px-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={client.logoSrc} alt={client.name} className="h-8 w-auto" />
      </div>
    );
  }

  return (
    <div className="flex h-16 min-w-56 items-center gap-3 rounded-2xl border border-border bg-card px-5">
      <Mark variant={client.mark} />
      <span>
        <span className="block text-sm font-semibold tracking-wide">{client.name}</span>
        <span className="block text-xs text-muted">{client.sector}</span>
      </span>
    </div>
  );
}
