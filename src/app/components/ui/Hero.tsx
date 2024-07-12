"use client";

import { Button } from "@/app/components/Button";
import {
  motion,
  MotionConfig,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { MouseParallax } from "react-just-parallax";
import { Navbar } from "./Navbar";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const transformY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y = useSpring(transformY, { damping: 20 });

  const variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const transition = {
    duration: 2,
    ease: "easeInOut",
  };

  const style = {
    y,
  };

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[calc(100vh-136px)]">
        <div
          className="flex h-full flex-1 flex-col items-center justify-center gap-8 px-6 md:px-0"
          ref={ref}
        >
          <MotionConfig transition={transition}>
            <motion.h1
              style={style}
              initial="hidden"
              animate="visible"
              variants={variants}
              className="text-white mx-auto w-full max-w-[992px] text-center"
            >
              Are you in need of a sign or cosmic guidance?
            </motion.h1>
            <motion.p
              style={style}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ...transition, delay: 0.3 }}
              className="text-white mx-auto w-full max-w-[768px] text-center text-2xl"
            >
              With us, you can receive help in finding what you need through our
              psychic readings and esoteric knowledge.
            </motion.p>
            <motion.div
              style={style}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ ...transition, delay: 0.6 }}
            >
              <Button>Know more</Button>
            </motion.div>
          </MotionConfig>
        </div>
      </div>
      <Image
        src="/assets/hero-bg.png"
        fill
        alt=""
        className="absolute -z-20 object-cover"
        placeholder="blur"
        blurDataURL="/assets/hero-bg-blurred.png"
      />
      <div className="container absolute inset-1 top-[20%] -z-10 overflow-clip opacity-75 md:overflow-visible">
        <MouseParallax isAbsolutelyPositioned strength={0.05} lerpEase={0.1}>
          <Image
            src="/assets/white-star-2.png"
            width={32}
            height={32}
            alt=""
            className="absolute top-10"
          />
          <Image
            src="/assets/white-star-1.png"
            width={59}
            height={59}
            alt=""
            className="absolute top-[50%]"
          />
          <Image
            src="/assets/white-star-2.png"
            width={28}
            height={28}
            alt=""
            className="absolute left-[30%] top-[60%]"
          />
          <Image
            src="/assets/white-star-1.png"
            width={59}
            height={59}
            alt=""
            className="absolute bottom-[10%] left-[20%]"
          />
          <Image
            src="/assets/white-star-1.png"
            width={28}
            height={28}
            alt=""
            className="absolute left-[50%]"
          />
          <Image
            src="/assets/white-star-1.png"
            width={52}
            height={52}
            alt=""
            className="absolute right-4 top-[10%]"
          />
          <Image
            src="/assets/white-star-2.png"
            width={36}
            height={36}
            alt=""
            className="absolute bottom-[40%] right-[30%]"
          />
          <Image
            src="/assets/white-star-2.png"
            width={48}
            height={48}
            alt=""
            className="absolute bottom-[10%] right-0"
          />
        </MouseParallax>
      </div>
      <div className="absolute bottom-0 h-[96px] w-full">
        <Image src="/assets/rip-1.png" fill alt="" className="object-cover" />
      </div>
    </div>
  );
}
