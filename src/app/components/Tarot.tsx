"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = ["-30deg", "-10deg", "10deg", "30deg"];

export function Tarot() {
  return (
    <div className="container flex flex-col gap-12">
      <h2>Tarot</h2>
      <div className="flex flex-col gap-24 md:flex-row md:gap-8">
        <div className="flex flex-1 flex-col gap-6">
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
        <div className="relative -top-16 flex min-h-[400px] flex-1 items-start justify-center">
          {cards?.map((rotate, i) => (
            <motion.img
              key={i}
              src={`/assets/services/tarot/tarot-${i + 1}.png`}
              width={243}
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
