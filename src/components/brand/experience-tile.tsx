export function ExperienceTile({
  name,
  logoSrc,
  caption,
}: {
  name: string;
  logoSrc?: string;
  caption?: string;
}) {
  const initials = name
    .replace(/[()]/g, "")
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <article aria-label={name} className="logo-tile glass-card-dark group flex h-28 flex-col items-center justify-center px-3 text-center">
      {logoSrc ? (
        // SVG autorizado em public. Enquanto não houver arquivo, o nome permanece como marca.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logoSrc} alt={name} className="h-8 w-auto max-w-[80%] object-contain" />
      ) : (
        <>
          <span className="text-[11px] font-semibold tracking-[0.18em] text-cyan/80">{initials || "ME"}</span>
          <span className="mt-2 text-sm font-semibold leading-5 text-white/80 group-hover:text-white">{name}</span>
        </>
      )}
      {caption ? <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/40">{caption}</span> : null}
    </article>
  );
}
