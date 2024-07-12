"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.section
      animate={controls}
      variants={variants}
      transition={{ duration: 1, damping: 20 }}
      initial="hidden"
      ref={ref}
      className="xl:gap-40 mt-0 flex flex-1 flex-col md:mt-12 md:flex-row lg:gap-24"
    >
      <DesktopPicture />
      <MobilePicture />
      <div className="flex flex-1 flex-col justify-center gap-8 text-center md:text-start">
        <h2>Meet Leona</h2>
        <Image
          src="/assets/title-separator.png"
          width={267}
          height={32}
          alt=""
          className="mx-auto md:ml-0"
        />
        <p>
          Leona is a psychic tarot reader and astrologer. She founded Tarot
          Witch Davao in 2018, a brand that helps individuals receive spiritual
          guidance through her psychic tarot messages, past-life readings,
          fortune-telling, and more. In 2024, she established Tarot by Leona, a
          brand that caters not only to the Philippines but also to clients
          across the globe.
        </p>
        <p>
          She is also adept at providing birth chart analysis via astrology,
          offering detailed information on topics such as love life, career, and
          Astro therapy (healing through self-awareness).
        </p>
        <p>
          Leona is a free spirit who has dedicated her life to finding her soul
          purpose. She discovered her gifts through soul work, meditation, and
          her magical practice in spirituality. As an emotional projector, her
          soul purpose is to use her psychic gifts as a guide to help
          individuals she encounters in this lifetime.
        </p>
      </div>
    </motion.section>
  );
}

function DesktopPicture() {
  return (
    <div className="relative hidden md:block">
      <Image
        src="/assets/stars.png"
        width={304}
        height={345}
        alt=""
        className="absolute -left-20 -top-20 rotate-180"
      />
      <Image
        src="/assets/leona.png"
        width={409}
        height={761}
        alt="Leona Aoki"
      />
      <Image
        src="/assets/stars.png"
        width={304}
        height={345}
        alt=""
        className="absolute -bottom-20 -right-20"
      />
    </div>
  );
}

function MobilePicture() {
  return (
    <div className="relative flex justify-center md:hidden">
      <Image
        src="/assets/leona-mobile.png"
        width={409}
        height={761}
        alt="Leona Aoki"
      />
    </div>
  );
}
