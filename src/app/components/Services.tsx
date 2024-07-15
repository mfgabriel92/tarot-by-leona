"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Title } from "./ui/Title";

export function Services() {
  return (
    <section className="relative mt-8 w-full">
      <Image
        src="/assets/moon.png"
        width={72}
        height={96}
        alt=""
        className="absolute -top-6 left-[46%] md:left-[48.5%] md:top-0"
      />
      <Image
        src="/assets/services-bg.png"
        width={1920}
        height={100}
        alt=""
        className="w-full"
      />
      <div className="bg-pink-500/5 px-6 pb-0 md:pb-12">
        <div className="container flex flex-col items-center gap-6 pt-12 md:pt-0">
          <Title title="My Services" />
          <div className="flex flex-1 flex-col gap-0 md:gap-20">
            <Tarot />
            <Astrology />
            <Oracle />
          </div>
        </div>
      </div>
    </section>
  );
}

const tarotCardsRotation = ["-30deg", "-10deg", "10deg", "30deg"];

function Tarot() {
  return (
    <div className="container flex flex-col items-center gap-6 md:items-start">
      <h2 className="text-start">Tarot</h2>
      <div className="flex flex-col gap-24 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-4 text-center md:text-start">
          <p>
            Tarot reading is a form of divination that has been practiced for
            centuries. It involves using a set of cards (usually containing 78
            pieces in one deck) to gain insights, clarity, and guidance about an
            individual's past, present, and future. Through intuition, a reader
            receives psychic messages through the cards' illustrations, numbers,
            and symbolism.
          </p>
          <p>
            Leona is famous for using her Shadowscapes Tarot for versatile
            readings. She believes that choosing a deck that resonates with your
            interests and personality will help you create a deeper connection
            with your cards. This deeper connection, in turn, will help you
            receive profound insights and accurate messages
          </p>
        </div>
        <Image
          src="/assets/v-separator.png"
          width={43}
          height={212}
          alt=""
          className="hidden self-center md:block"
        />
        <div className="relative -top-16 flex min-h-[400px] flex-1 items-center justify-center">
          {tarotCardsRotation?.map((rotate, i) => (
            <motion.img
              key={i}
              src={`/assets/services/tarot/tarot-${i + 1}.png`}
              width={203}
              height={442}
              initial={{ rotate: 0 }}
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileInView={{
                rotate,
              }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "backInOut",
                damping: 20,
              }}
              className="absolute origin-bottom cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Astrology() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const rotateValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["0deg", "-180deg"],
  );
  const rotate = useSpring(rotateValue, { damping: 20 });

  return (
    <div className="container flex flex-col">
      <div className="order-first flex flex-col gap-6 md:flex-row md:gap-8">
        <motion.div
          ref={ref}
          style={{ rotate }}
          className="order-last flex flex-1 justify-center md:order-first"
        >
          <Image
            src="/assets/services/astrology/astrology-chart.png"
            width={520}
            height={480}
            alt="Astrology"
            className="object-contain"
          />
        </motion.div>
        <Image
          src="/assets/v-separator.png"
          width={43}
          height={212}
          alt=""
          className="hidden self-center md:block"
        />
        <div className="flex flex-1 flex-col items-center gap-6 md:items-start">
          <h2>Astrology</h2>
          <p>
            Astrology is an ancient divination practice that developed thousands
            of years ago, dating back to ancient Mesopotamia. Back then,
            astronomy and astrology were once a single study. Through the study
            of astrology, it is believed that the movements of heavenly bodies
            (the planets, asteroids, and stars) and their planetary alignments
            influence a human's life, and thus, astrology was created.
          </p>
          <p>
            A birth chart, or natal chart, is an astronomical snapshot of the
            heavenly bodies at the exact time, location, and day of your birth.
          </p>
          <p>
            By analyzing an individual's birth chart, a person can gain a deeper
            understanding of their strengths and weaknesses and life
            experiences. It is also believed to help unlock hidden potential,
            creating room for personal growth, overall wellness, and
            development.
          </p>
        </div>
      </div>
    </div>
  );
}

const oracleCardsRotation = ["-20deg", "0deg", "20deg"];

function Oracle() {
  return (
    <div className="container flex flex-col items-center gap-6 md:items-start">
      <h2>Oracle</h2>
      <div className="flex flex-col gap-24 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-4 text-center md:text-start">
          <p>
            Oracle card reading is a form of divination that consists of varying
            numbers of cards. Unlike tarot cards, it is free-form and does not
            follow any specific structure.
          </p>
          <p>
            Centuries ago, ancient civilizations, most notably the Greeks,
            Celts, and Egyptians, sought to understand divine will and used
            various symbolic objects to gain future insights and spiritual
            guidance.
          </p>
          <p>
            The earliest form of oracle cards began during the Renaissance
            period when several artistic forms of oracle cards, much like tarot
            cards, were created.
          </p>
          <p>
            Nowadays, oracle cards are loved by many and used all around the
            world. Different themes, art styles, and illustrations are produced
            to match a specific theme, mood, or topic, and are most notably used
            during rituals and divinatory sessions.
          </p>
        </div>
        <Image
          src="/assets/v-separator.png"
          width={43}
          height={212}
          alt=""
          className="hidden self-center md:block"
        />
        <div className="relative -top-16 flex min-h-[400px] flex-1 items-center justify-center">
          {oracleCardsRotation?.map((rotate, i) => (
            <motion.img
              key={i}
              src={`/assets/services/oracle/oracle-${i + 1}.png`}
              width={240}
              height={483}
              initial={{ rotate: 0 }}
              drag
              dragConstraints={{
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              whileInView={{
                rotate,
              }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "backInOut",
                damping: 20,
              }}
              className="absolute origin-bottom cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
