"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { nav, productPaths, solutionPaths } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/solucoes") return solutionPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  if (href === "/#produtos") return productPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="brand-line" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" aria-label="MERAIT, página inicial">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            if ("children" in item) {
              return (
                <div key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
                      active && "text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="size-3.5" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-20 w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-border bg-card p-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-xl px-3 py-2 text-sm text-foreground hover:bg-foreground/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
                  active && "text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <Link href="/contato">Agendar diagnóstico</Link>
          </Button>
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-border xl:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/60" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-card p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-sm font-semibold tracking-[0.18em]">MENU</Dialog.Title>
                  <Dialog.Close className="inline-flex size-10 items-center justify-center rounded-full border border-border" aria-label="Fechar menu">
                    <X className="size-5" />
                  </Dialog.Close>
                </div>
                <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                  {nav.map((item) => (
                    <div key={item.href}>
                      <Link href={item.href} className="block rounded-xl px-3 py-3 text-base font-semibold">
                        {item.label}
                      </Link>
                      {"children" in item
                        ? item.children.map((child) => (
                            <Link key={child.label} href={child.href} className="block rounded-xl px-6 py-2 text-sm text-muted">
                              {child.label}
                            </Link>
                          ))
                        : null}
                    </div>
                  ))}
                </nav>
                <Button asChild className="mt-6">
                  <Link href="/contato">Agendar diagnóstico</Link>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
