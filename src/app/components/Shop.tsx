"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { products } from "../utils/products";
import { Title } from "./ui";

export function Shop() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

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

  const itemsVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="container mx-auto mt-12 flex flex-col items-center gap-6">
      <Title title="Check out my products" className="mx-auto" />
      <p className="text-center">
        If you are interested in purchasing any of these bracelets, please send
        me a message on Facebook!
      </p>
      <p>Click on them to know more!</p>
      <motion.div
        className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-0 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        layout
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={itemsVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="flex cursor-pointer flex-col border border-gray-300 transition-all hover:border-pink-200"
          >
            <div className="relative h-[263px]">
              <Image
                src={`/assets/shop/${product.image}`}
                fill
                className="object-cover"
                alt={product.name}
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-xl">{product.name}</h3>
              <span className="text-end">
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "PHP",
                }).format(product.price)}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
