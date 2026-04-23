import Image from "next/image";
import { buildWhatsAppUrl, navItems } from "@/content/site";
import { MessageCircle } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-deep/10 bg-[rgba(247,242,235,0.8)] backdrop-blur-2xl">
      <div className="shell flex items-center justify-between gap-4 py-3">

        {/* LOGO */}
        <a className="flex min-w-0 items-center gap-4" href="#topo">
          <div className="relative h-24 w-72 overflow-hidden rounded-2xl bg-white p-3 shadow-md border border-gray-200 sm:h-28 sm:w-80">
            <Image
              alt="Marca Papel de Axe"
              className="object-contain"
              fill
              priority
              sizes="64px"
              src="/imagens/logo-header.jpg"
            />
          </div>
        </a>

        {/* MENU + ÍCONES */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* MENU */}
          <nav className="flex items-center gap-3 rounded-full border border-deep/10 bg-white/70 px-4 py-2 shadow-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-5 py-2.5 text-base font-medium text-deep/80 transition hover:bg-white hover:text-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* ÍCONES */}
          <div className="flex items-center gap-3">

            {/* WhatsApp */}
            <a
              href={buildWhatsAppUrl(
                "Oi Papel de Axé! Quero pedir informações sobre um personalizado."
              )}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-deep/10 bg-white text-deep transition hover:scale-110 hover:bg-white"
            >
              <MessageCircle size={22} strokeWidth={2} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/papeldeaxe"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-deep/10 bg-white text-deep transition hover:scale-110 hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 1 1-2.37-2.37 4 4 0 0 1 2.37 2.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
}