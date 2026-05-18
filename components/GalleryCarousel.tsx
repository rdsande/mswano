"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

interface GalleryCarouselProps {
  images: string[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-1">
          {images.map((image, index) => (
            <div
              key={image + index}
              className={`relative shrink-0 overflow-hidden ${
                index % 3 === 1
                  ? "h-[340px] w-[86vw] md:h-[460px] md:w-[58vw] lg:w-[54vw]"
                  : "h-[340px] w-[64vw] md:h-[460px] md:w-[25vw] lg:w-[22vw]"
              }`}
            >
              <Image
                src={image}
                alt={`Mswano Apartments gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 86vw, (max-width: 1024px) 58vw, 54vw"
                className="object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3 px-5 md:px-10">
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-mswano-primary shadow-sm transition hover:bg-mswano-primary hover:text-white"
        >
          <NavArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={scrollNext}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-mswano-primary shadow-sm transition hover:bg-mswano-primary hover:text-white"
        >
          <NavArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
