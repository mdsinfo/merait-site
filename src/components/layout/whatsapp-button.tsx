import { WhatsAppIcon } from "@/components/brand/social";
import { whatsappHref } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref("Olá, quero falar com um especialista MERAIT.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-[#128C7E] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
