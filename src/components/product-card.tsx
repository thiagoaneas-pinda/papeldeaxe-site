"use client";

import { useState } from "react";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/content/site";

type ProductCardProps = {
  product: {
    name: string;
    tag: string;
    badge: string;
    description: string;
    price: string;
    assets?: readonly string[];
    asset?: string | readonly string[];
    message: string;
    features: readonly string[];
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = (
    Array.isArray(product.assets) && product.assets.length > 0
      ? product.assets
      : Array.isArray(product.asset) && product.asset.length > 0
        ? product.asset
        : typeof product.asset === "string" && product.asset
          ? [product.asset]
          : []
  ).filter((img): img is string => Boolean(img && img.trim()));

  const handlePrev = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (images.length <= 1) return;
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <article className="premium-card flex h-full flex-col overflow-hidden rounded-[2rem] border border-deep/10 bg-white/70">
      <div className="relative min-h-[17rem] overflow-hidden bg-[linear-gradient(160deg,rgba(31,24,78,0.06),rgba(17,179,241,0.04))] p-6">
        <div className="absolute right-[-2.5rem] top-[-2rem] h-36 w-36 rounded-full bg-rose/10 blur-2xl" />
        <div className="absolute bottom-[-2rem] left-[-1rem] h-40 w-40 rounded-full bg-azure/10 blur-2xl" />

        <div className="relative mx-auto flex h-full max-w-[15rem] items-center justify-center rounded-[1.8rem] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,248,243,0.88))] p-5 shadow-[0_24px_30px_rgba(20,15,51,0.12)]">
          <div className="relative w-full">
            {images.length > 0 && images[currentImage] ? (
              <Image
                alt={product.name}
                className="h-auto w-full object-contain"
                height={420}
                src={images[currentImage]}
                width={320}
              />
            ) : (
              <div className="flex h-[420px] w-full items-center justify-center text-sm text-deep/40">
                Imagem indisponível
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  aria-label="Imagem anterior"
                  className="absolute left-[-0.5rem] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-deep shadow-md transition hover:scale-105"
                  onClick={handlePrev}
                  type="button"
                >
                  ‹
                </button>

                <button
                  aria-label="Próxima imagem"
                  className="absolute right-[-0.5rem] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg font-bold text-deep shadow-md transition hover:scale-105"
                  onClick={handleNext}
                  type="button"
                >
                  ›
                </button>

                <div className="mt-4 flex justify-center gap-2">
                  {images.map((_, index) => (
                    <button
                      aria-label={`Ir para imagem ${index + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        currentImage === index ? "bg-deep" : "bg-deep/20"
                      }`}
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      type="button"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <span className="rounded-full bg-deep/6 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-deep">
            {product.tag}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            {product.badge}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-semibold leading-tight text-deep">{product.name}</h3>
          <p className="text-sm leading-7 text-deep/68">{product.description}</p>
        </div>

        <ul className="grid gap-3 text-sm text-deep/78">
          {product.features.map((feature) => (
            <li className="flex gap-3" key={feature}>
              <span className="mt-2 h-2 w-2 rounded-full bg-[linear-gradient(135deg,#11b3f1,#e71f99)]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-4 border-t border-deep/8 pt-5">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-deep/45">A partir de</p>
            <p className="text-2xl font-bold text-deep">{product.price}</p>
          </div>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#11b3f1,#a61598,#e71f99)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            href={buildWhatsAppUrl(product.message)}
            rel="noreferrer"
            target="_blank"
          >
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}