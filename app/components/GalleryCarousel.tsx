"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

export type GallerySlide = {
  src: string;
  alt: string;
};

export function GalleryCarousel({ images }: { images: GallerySlide[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth < 480 ? 0.88 : 0.92;
    const delta = Math.max(el.clientWidth * step, 240) * direction;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return (
    <div className="relative -mx-1 sm:mx-0">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-10 items-center bg-linear-to-r from-[#fdf9f4] via-[#fdf9f4]/90 to-transparent sm:w-12 md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-10 items-center justify-end bg-linear-to-l from-[#fdf9f4] via-[#fdf9f4]/90 to-transparent sm:w-12 md:w-16" />

      <button
        type="button"
        onClick={() => scrollByPage(-1)}
        className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full border border-[#d8c1ab] bg-white/95 text-[#4c3225] shadow-md backdrop-blur transition hover:bg-[#fff7ee] sm:left-0 sm:h-11 sm:w-11 md:h-12 md:w-12"
        aria-label="Show previous photos"
      >
        <ChevronIcon className="-scale-x-100" />
      </button>
      <button
        type="button"
        onClick={() => scrollByPage(1)}
        className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c1ab] bg-white/95 text-[#4c3225] shadow-md backdrop-blur transition hover:bg-[#fff7ee] md:h-12 md:w-12"
        aria-label="Show more photos"
      >
        <ChevronIcon />
      </button>

      <div
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label="Past meet ups photo carousel"
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-10 py-1 [-ms-overflow-style:none] [scrollbar-width:none] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8f5d42] focus-visible:ring-offset-2 sm:gap-4 sm:px-12 [&::-webkit-scrollbar]:hidden"
      >
        {images.map((image) => (
          <figure
            key={image.src}
            className="w-[min(82vw,320px)] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#e5d2bf] md:w-[calc((min(72rem,100vw)-10rem)/3)] md:max-w-none"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={700}
              height={900}
              sizes="(max-width: 640px) 88vw, (max-width: 768px) 82vw, 33vw"
              className="aspect-3/4 h-64 w-full object-cover transition-transform duration-300 hover:scale-105 sm:h-72 md:h-80"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${className ?? ""}`}
      aria-hidden
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
