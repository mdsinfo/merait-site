import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@/components/layout/analytics";
import { ChatWidget } from "@/components/layout/chat-widget";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { OrganizationJsonLd } from "@/components/seo/json-ld";
import { seoKeywords, siteConfig } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Consultoria SAP, AMS e Integrações | MERAIT",
    template: "%s | MERAIT",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  keywords: [...seoKeywords],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: "Consultoria SAP, AMS e Integrações | MERAIT",
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria SAP, AMS e Integrações | MERAIT",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = {
  themeColor: "#2D2E91",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Link
          href="/agendamento"
          className="fixed bottom-5 left-5 z-30 inline-flex items-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20"
        >
          Agendar reunião
        </Link>
        <ChatWidget />
        <Analytics />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
