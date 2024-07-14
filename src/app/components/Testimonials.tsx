"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

export function Testimonials() {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(slidesRef, { once: true });

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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  const containerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const slidesVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative h-auto w-full pb-[60px] md:pb-[80px]">
      <Image
        src="/assets/last-quarter-moon.png"
        width={61}
        height={121}
        alt=""
        className="absolute -top-3 left-[48%]"
      />
      <div className="flex flex-col items-center justify-center gap-8 pt-16 md:pt-32">
        <h2 className="text-white">What my clients say</h2>
        <Image
          src="/assets/title-separator-white.png"
          width={267}
          height={32}
          alt=""
        />
      </div>
      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
          className="flex"
          ref={slidesRef}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={slidesVariants}
              className="embla__slide"
            >
              <p className="italic">{t.text}</p>
              <span className="self-end font-title text-2xl">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
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
