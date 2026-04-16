import Image from "next/image";
import { buildWhatsAppUrl, navItems } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-[rgba(247,242,235,0.8)] backdrop-blur-2xl">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <a className="flex min-w-0 items-center gap-4" href="#topo">
          <div className="relative h-14 w-14 overflow-hidden rounded-[1.2rem] bg-white shadow-soft sm:h-16 sm:w-16">
            <Image
              alt="Marca Papel de Axe"
              className="object-contain"
              fill
              priority
              sizes="64px"
              src="/imagens/logo-completa.png"
            />
          </div>
          <div className="min-w-0">
            <p className="font-display text-[1.95rem] leading-none text-deep sm:text-[2.2rem]">
              Papel de Axe
            </p>
            <p className="text-sm text-deep/60">Papelaria afetiva e personalizados</p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex items-center gap-2 rounded-full border border-deep/10 bg-white/60 p-1.5">
            {navItems.map((item) => (
              <a
                className="rounded-full px-4 py-2 text-sm font-medium text-deep/72 transition hover:bg-white hover:text-deep"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#a61598,#e71f99)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            href={buildWhatsAppUrl(
              "Oi Papel de Axe! Quero pedir informacoes sobre um personalizado."
            )}
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
