import Image from "next/image";
import { buildWhatsAppUrl, navItems } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-[rgba(247,242,235,0.8)] backdrop-blur-2xl">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <a className="flex min-w-0 items-center gap-4" href="#topo">
          <div className="relative h-24 w-72 overflow-hidden rounded-2xl bg-white p-3 shadow-md border border-gray-200 sm:h-28 sm:w-80">
            <Image
              alt="Marca Papel de Axe"
              className="object-contain"
              fill
              priority
              sizes="64px"
              src="/imagens/LOGOTIPO Papel de Axe-04.jpg"
            />
          </div>
          </a>

        <div className="hidden items-center gap-2 lg:flex">
          <nav className="flex items-center gap-3 rounded-full border border-deep/10 bg-white/70 px-4 py-2 shadow-sm">
            {navItems.map((item) => (
              <a
                className="rounded-full px-5 py-2.5 text-base font-medium text-deep/80 transition hover:bg-white hover:text-deep"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#a61598,#e71f99)] px-6 py-3 text-base font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
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
