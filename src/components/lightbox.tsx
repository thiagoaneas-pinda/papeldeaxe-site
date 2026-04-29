"use client";

import { useState } from "react";

export function Lightbox({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* THUMBNAIL */}
      <img
        src={images[0]}
        alt=""
        className="cursor-pointer rounded-xl"
        onClick={() => setOpen(true)}
      />

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          
          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={images[index]}
            alt=""
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
          />

          {/* PREV */}
          <button
            className="absolute left-6 text-white text-3xl"
            onClick={prev}
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            className="absolute right-6 text-white text-3xl"
            onClick={next}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}