import Image from "next/image";
import { buildWhatsAppUrl, contactDetails } from "@/content/site";

export function SiteFooter() {
  return (
    <>
      <a
        className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1db954,#17a74a)] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(23,167,74,0.28)] transition hover:-translate-y-0.5 max-sm:left-4"
        href={buildWhatsAppUrl(
          "Oi Papel de Axe! Quero fazer uma encomenda personalizada."
        )}
        rel="noreferrer"
        target="_blank"
      >
        WhatsApp
      </a>

      <footer className="border-t border-deep/10 bg-[rgba(255,248,243,0.86)]" id="contato">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
          <div className="space-y-6">
            <div className="premium-card overflow-hidden rounded-[2rem] border border-deep/10 bg-white/72 p-4">
              <div className="overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(17,179,241,0.12),rgba(231,31,153,0.1))] p-6">
                <Image
                  alt="Identidade visual Papel de Axe"
                  className="h-auto w-full object-contain"
                  height={580}
                  src="/imagens/logo-fundo-azul.png"
                  width={980}
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="section-kicker">Contato e orcamento</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] text-deep sm:text-[3rem]">
                Vamos transformar sua ideia em uma peca bonita, personalizada e memoravel.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-deep/68">
                Atendimento direto para alinhar personalizacao, valores, prazo e acabamento
                com leveza e clareza.
              </p>
            </div>
          </div>

          <div className="premium-card rounded-[2rem] border border-deep/10 bg-[linear-gradient(180deg,rgba(31,24,78,0.98),rgba(48,36,101,0.96))] p-6 text-white">
            <div className="space-y-5">
              <div className="relative h-16 w-[12.5rem] overflow-hidden rounded-2xl bg-white/10 p-2">
                <Image
                  alt="Marca Papel de Axe"
                  className="object-contain"
                  fill
                  sizes="200px"
                  src="/imagens/logo-completa.png"
                />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">Proximo passo</p>
              <div className="grid gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#a61598,#e71f99)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  href={buildWhatsAppUrl(
                    "Oi Papel de Axe! Quero fazer uma encomenda personalizada."
                  )}
                  rel="noreferrer"
                  target="_blank"
                >
                  Falar no WhatsApp
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
                  href="https://www.instagram.com/papeldeaxe"
                  rel="noreferrer"
                  target="_blank"
                >
                  Ver Instagram
                </a>
              </div>
              <ul className="grid gap-3 text-sm text-white/72">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-white">{item.label}:</span> {item.value}
                  </li>
                ))}
                <li>
                  <span className="font-semibold text-white">Stack:</span> Next.js, TypeScript,
                  Tailwind CSS e export estatico
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
