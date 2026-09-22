import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/brand/social";
import { productLinks, siteConfig, solutionLinks, whatsappHref } from "@/lib/site";

const platform = [
  { href: "/agendamento", label: "Agendar consultoria" },
  { href: "/materiais", label: "Materiais" },
  { href: "/calculadora-roi", label: "Calculadora de ROI" },
  { href: "/area-cliente", label: "Área do cliente" },
  { href: "/portal-ams", label: "Portal AMS" },
  { href: "/dashboard", label: "Dashboard de KPIs" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="brand-line" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Consultoria SAP para médio e grande porte. S/4HANA, AMS, integração e inteligência artificial, com especialistas seniores e decisão curta.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={siteConfig.linkedin} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInIcon className="size-4" />
            </a>
            <a href={siteConfig.instagram} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="Instagram" target="_blank" rel="noreferrer">
              <InstagramIcon className="size-4" />
            </a>
            <a href={whatsappHref("Olá, quero falar com um especialista MERAIT.")} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:bg-white/10" aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <WhatsAppIcon className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Sobre</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link className="hover:text-white" href="/quem-somos">Quem Somos</Link></li>
            <li><Link className="hover:text-white" href="/segmentos">Segmentos</Link></li>
            <li><Link className="hover:text-white" href="/projetos">Projetos</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Soluções</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {solutionLinks.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
            {productLinks.map((item) => (
              <li key={item.label}>
                <Link className="hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Clientes</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link className="hover:text-white" href="/clientes">Clientes</Link></li>
            <li><Link className="hover:text-white" href="/clientes-e-experiencia">Experiência</Link></li>
            <li><Link className="hover:text-white" href="/cases">Cases</Link></li>
            <li><Link className="hover:text-white" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-white" href="/contato">Contato</Link></li>
          </ul>
          <p className="mt-6 text-sm font-semibold">Plataforma</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {platform.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} MERAIT. Todos os direitos reservados.</p>
          <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
    </footer>
  );
}
