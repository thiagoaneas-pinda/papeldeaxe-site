import Image from "next/image";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  aboutFeatures,
  buildWhatsAppUrl,
  heroNotes,
  products,
  steps,
  valuePills
} from "@/content/site";

export default function Home() {
  return (
    <main id="topo">
      <SiteHeader />

      <section className="relative overflow-hidden pb-20 pt-10 sm:pb-24 lg:pb-28 lg:pt-16">
        <div className="soft-grid absolute inset-0 opacity-30" />
        <div className="absolute left-[-8rem] top-[-5rem] h-64 w-64 rounded-full bg-azure/15 blur-3xl" />
        <div className="absolute right-[-6rem] top-12 h-72 w-72 rounded-full bg-rose/12 blur-3xl" />
        <div className="shell relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-deep/10 bg-white/70 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-deep/78">
              <span className="h-2.5 w-2.5 rounded-full bg-[linear-gradient(135deg,#11b3f1,#e71f99)] shadow-[0_0_18px_rgba(231,31,153,0.35)]" />
              Papelaria personalizada com delicadeza e presenca
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.26em] text-deep/42">Papel de Axe</p>
              <h1 className="max-w-4xl text-balance text-[3rem] font-semibold leading-[0.92] text-deep sm:text-[4rem] xl:text-[4.9rem]">
                Pecas afetivas para{" "}
                <span className="headline">
                  registrar historias, presentear com significado e levar mais beleza
                  ao seu axe.
                </span>
              </h1>
              <p className="max-w-xl text-[1.04rem] leading-8 text-deep/68 sm:text-[1.08rem]">
                Cadernos, planners, kits e personalizados feitos sob encomenda para
                umbanda e candomble, com acabamento caprichado, identidade autoral e
                atendimento proximo em cada detalhe.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#a61598,#e71f99)] px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                href="#produtos"
              >
                Ver colecoes em destaque
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-deep/12 bg-white/70 px-7 py-3 text-sm font-semibold text-deep transition hover:-translate-y-0.5 hover:bg-white"
                href={buildWhatsAppUrl(
                  "Oi Papel de Axe! Quero saber mais sobre os personalizados."
                )}
                rel="noreferrer"
                target="_blank"
              >
                Pedir informacoes no WhatsApp
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {heroNotes.map((item) => (
                <article
                  className="premium-card rounded-[1.45rem] border border-deep/10 bg-white/65 p-5"
                  key={item.title}
                >
                  <h2 className="text-base font-semibold text-deep">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-deep/64">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="premium-card overflow-hidden rounded-[2.35rem] border border-deep/10 bg-white/68 p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
              <article className="relative overflow-hidden rounded-[1.8rem] border border-white/50 bg-[linear-gradient(160deg,rgba(17,179,241,0.12),rgba(231,31,153,0.08))] p-6">
                <div className="absolute inset-0 bg-[url('/imagens/MARCA D AGUAAtivo 11.png')] bg-[length:13rem] bg-right-bottom bg-no-repeat opacity-[0.12]" />
                <div className="relative space-y-5">
                  <span className="inline-flex rounded-full bg-white/72 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep">
                    Feito sob encomenda
                  </span>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold leading-tight text-deep">
                      Personalizados com identidade, afeto e capricho.
                    </h2>
                    <p className="text-base leading-8 text-deep/70">
                      Uma experiencia de compra mais proxima para transformar sua ideia em
                      uma peca especial e cheia de significado.
                    </p>
                  </div>
                  <ul className="grid gap-3 text-sm text-deep/78">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-lime" />
                      <span>Pecas para uso pessoal, presentes e casas de axe</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-azure" />
                      <span>Acabamento delicado com visual autoral</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose" />
                      <span>Atendimento por WhatsApp com alinhamento do pedido</span>
                    </li>
                  </ul>
                </div>
              </article>

              <div className="grid gap-4">
                <article className="premium-card overflow-hidden rounded-[1.8rem] border border-deep/10 bg-[linear-gradient(180deg,rgba(31,24,78,0.96),rgba(48,36,101,0.96))] p-5 text-white">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    Destaque
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">Cadernos e planners</h3>
                  <p className="mt-3 text-sm leading-7 text-white/76">
                    Organizacao bonita para estudos, giras, firmezas e presentes
                    com significado.
                  </p>
                </article>
                <article className="premium-card overflow-hidden rounded-[1.8rem] border border-deep/10 bg-white p-5">
                  <div className="relative mx-auto aspect-[4/3] w-full max-w-[18rem]">
                    <Image
                      alt="Mockup Papel de Axe"
                      className="object-contain"
                      fill
                      sizes="(max-width: 1024px) 100vw, 26vw"
                      src="/imagens/mockup 1.png"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="shell grid gap-4 md:grid-cols-3">
          {valuePills.map((item) => (
            <article
              className="premium-card rounded-[1.5rem] border border-deep/10 bg-white/68 px-5 py-5"
              key={item.title}
            >
              <h2 className="text-lg font-semibold text-deep">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-deep/64">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-deep/8 bg-white/28 py-20 sm:py-24" id="produtos">
        <div className="shell space-y-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <SectionHeading
              description="Cada modelo parte de uma base autoral, mas pode ser adaptado para refletir sua historia, sua casa e o cuidado que voce quer transmitir."
              eyebrow="Colecoes em destaque"
              title="Produtos pensados para encantar a primeira vista e no uso diario."
            />
            <aside className="premium-card rounded-[1.8rem] border border-deep/10 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-deep/45">Quer algo exclusivo?</p>
              <p className="mt-3 text-base leading-8 text-deep/68">
                Alem dos modelos em destaque, a marca tambem desenvolve composicoes
                especiais para pedidos personalizados e presentes afetivos.
              </p>
            </aside>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,rgba(31,24,78,0.98),rgba(48,36,101,0.96))] py-20 text-white sm:py-24" id="como-funciona">
        <div className="shell space-y-12">
          <SectionHeading
            description="A encomenda foi organizada para facilitar a decisao, valorizar a personalizacao e passar seguranca em cada etapa."
            eyebrow="Como funciona"
            inverted
            title="Um processo leve, claro e acolhedor do primeiro contato ate o pedido."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                className="rounded-[1.8rem] border border-white/12 bg-white/8 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                key={step.number}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#e71f99)] text-sm font-semibold text-white">
                  {step.number}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" id="sobre">
        <div className="shell grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-5">
            <p className="section-kicker">Sobre a marca</p>
            <h2 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.02] text-deep sm:text-[3.15rem]">
              Uma papelaria que transforma cuidado, memoria e identidade em presenca visual.
            </h2>
            <p className="text-lg leading-8 text-deep/68">
              A Papel de Axe nasceu para acolher historias, organizar vivencias e
              celebrar a beleza de quem trilha caminhos na umbanda e no candomble.
              Cada peca e desenvolvida com escuta, intencao e atencao aos detalhes.
            </p>
            <p className="text-lg leading-8 text-deep/68">
              O resultado e uma papelaria personalizada que une delicadeza,
              funcionalidade e percepcao premium, sem perder o toque artesanal e
              afetivo que faz a marca ser reconhecivel.
            </p>
          </div>

          <div className="grid gap-5">
            <article className="premium-card rounded-[1.9rem] border border-deep/10 bg-white/72 p-6">
              <h3 className="text-2xl font-semibold text-deep">O que voce encontra aqui</h3>
              <ul className="mt-5 grid gap-4 text-sm text-deep/78">
                {aboutFeatures.map((feature) => (
                  <li className="flex gap-3" key={feature}>
                    <span className="mt-2 h-2 w-2 rounded-full bg-[linear-gradient(135deg,#9bc927,#11b3f1)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="premium-card rounded-[1.9rem] border border-deep/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.76),rgba(231,241,153,0.34))] p-6">
              <h3 className="text-2xl font-semibold text-deep">Para quem a marca faz sentido</h3>
              <p className="mt-4 text-sm leading-7 text-deep/68">
                Filhos e filhas de santo, mediuns, dirigentes e casas de axe que
                valorizam organizacao, beleza e pecas com significado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
