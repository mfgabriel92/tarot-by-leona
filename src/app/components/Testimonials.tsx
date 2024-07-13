"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet sequi dicta omnis, aliquam qui laudantium dolores, veritatis voluptates corrupti perferendis assumenda consequuntur iusto excepturi quam odit officiis labore maxime.",
    name: "John Doe",
  },
];

const noOfDots = testimonials.length / 3;

export function Testimonials() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const prev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const next = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  useEffect(() => {
    emblaApi?.on("select", () => {
      setSelectedSlide(emblaApi?.selectedScrollSnap());
    });
  }, [emblaApi]);

  console.log(selectedSlide);

  return (
    <section className="relative h-[768px] w-full">
      <div className="flex flex-col items-center justify-center gap-8 pt-32">
        <h2 className="text-white">What my clients say</h2>
        <Image
          src="/assets/title-separator-white.png"
          width={267}
          height={32}
          alt=""
          className=""
        />
      </div>
      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="mx-3 flex flex-col gap-8 rounded-md bg-white p-8"
              style={{ flex: "0 0 40%" }}
            >
              <p className="italic">{t.text}</p>
              <span className="self-end font-title text-2xl">{t.name}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex items-center justify-center gap-12">
          <Image
            src="/assets/right-arrow.png"
            width={27}
            height={44}
            alt="right"
            onClick={prev}
          />
          <div className="flex items-center gap-4">
            {testimonials.map((_, i) => (
              <div
                className={`size-4 rounded-full ${selectedSlide === i ? "bg-yellow-400" : "bg-white"}`}
              ></div>
            ))}
          </div>
          <Image
            src="/assets/left-arrow.png"
            width={27}
            height={44}
            alt="left"
            onClick={next}
          />
        </div>
      </div>
      <Image
        src="/assets/rip-2.png"
        width={1920}
        height={60}
        alt=""
        className="absolute -top-[0.7px] -z-10 w-full"
      />
      <Image
        src="/assets/testimonials-bg.png"
        fill
        alt=""
        className="absolute -z-20 object-cover"
        placeholder="blur"
        blurDataURL="/assets/testimonials-bg-blurred.png"
      />
      <Image
        src="/assets/rip-3.png"
        width={1920}
        height={72}
        alt=""
        className="absolute bottom-0 -z-10 w-full"
      />
    </section>
  );
}
