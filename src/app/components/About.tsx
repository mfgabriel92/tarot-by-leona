"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Title } from "./ui";

export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  const variants = {
    hidden: {
      opacity: 0,
      marginTop: 25,
    },
    visible: {
      opacity: 1,
      marginTop: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <>
      <Image
        src="/assets/constelation.png"
        width={586}
        height={1293}
        alt=""
        className="absolute -right-0 opacity-70"
      />
      <motion.section
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 1 }}
        ref={ref}
        className="xl:gap-40 container mt-0 flex h-full flex-1 flex-col md:mt-12 md:flex-row lg:gap-12"
      >
        <DesktopPicture />
        <MobilePicture />
        <div className="flex flex-1 flex-col justify-center gap-8 text-center md:text-start">
          <Title title="Meet Leona" className="mx-auto md:ml-0" />
          <p>
            Leona is a psychic tarot reader and astrologer. She founded Tarot
            Witch Davao in 2018, a brand that helps individuals receive
            spiritual guidance through her psychic tarot messages, past-life
            readings, fortune-telling, and more. In 2024, she established Tarot
            by Leona, a brand that caters not only to the Philippines but also
            to clients across the globe.
          </p>
          <p>
            She is also adept at providing birth chart analysis via astrology,
            offering detailed information on topics such as love life, career,
            and Astro therapy (healing through self-awareness).
          </p>
          <p>
            Leona is a free spirit who has dedicated her life to finding her
            soul purpose. She discovered her gifts through soul work,
            meditation, and her magical practice in spirituality. As an
            emotional projector, her soul purpose is to use her psychic gifts as
            a guide to help individuals she encounters in this lifetime.
          </p>
        </div>
      </motion.section>
    </>
  );
}

function DesktopPicture() {
  return (
    <Image
      src="/assets/leona.png"
      width={552}
      height={1056}
      alt="Leona Aoki"
      className="hidden md:block"
    />
  );
}

function MobilePicture() {
  return (
    <Image
      src="/assets/leona-mobile.png"
      width={409}
      height={761}
      alt="Leona Aoki"
      className="mx-auto md:hidden"
    />
  );
}
