import { ExperienceTile } from "@/components/brand/experience-tile";
import { experienceDisclaimer, experienceEntries } from "@/lib/experience";

export function ExperienceMarquee({ withDisclaimer = true }: { withDisclaimer?: boolean }) {
  const loop = [...experienceEntries, ...experienceEntries];
  return (
    <section className="bg-[#070B16] pb-16 text-white" id="clientes">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-lime">Clientes e mercado</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Experiência construída em grandes empresas</h2>
      </div>
      <div className="marquee mt-8 overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 px-5">
          {loop.map((item, index) => (
            <div key={`${item.id}-${index}`} className="w-52 shrink-0">
              <ExperienceTile name={item.name} logoSrc={item.logoSrc} />
            </div>
          ))}
        </div>
      </div>
      {withDisclaimer ? (
        <p className="mx-auto mt-6 max-w-3xl px-5 text-xs leading-5 text-white/55 md:px-8">{experienceDisclaimer}</p>
      ) : null}
    </section>
  );
}
