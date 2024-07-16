"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useModal } from "../hooks";
import { type Product, products } from "../utils/products";
import { Title } from "./ui";
import { Modal } from "./ui/Modal";

export function Shop() {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });
  const { isOpen, toggle } = useModal();
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  );

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    toggle();
  }

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
    <section
      id="shop"
      className="container relative mx-auto mb-12 flex flex-col justify-center gap-6 pt-8 text-center md:mb-6"
    >
      <div className="flex w-full justify-center">
        <div className="absolute -top-14 h-[96px] w-[72px]">
          <Image
            src="/assets/moon.png"
            fill
            className="object-fit absolute rotate-180"
            alt=""
          />
        </div>
      </div>
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
            className="flex cursor-pointer flex-col rounded-lg border border-gray-300 transition-all hover:border-pink-200"
            onClick={() => handleSelectProduct(product)}
          >
            <div className="relative h-[263px]">
              <Image
                src={`/assets/shop/${product.image}`}
                fill
                className="rounded-t-lg object-cover"
                alt={product.name}
              />
            </div>
            <div className="flex items-end gap-4 p-4">
              <div className="flex flex-1 flex-col">
                <h3 className="flex-1 text-xl">{product.name}</h3>{" "}
                {product.nickname && (
                  <span className="text-lg italic text-gray-500">
                    "{product.nickname}"
                  </span>
                )}
              </div>
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
      <AnimatePresence>
        {isOpen && <Modal {...selectedProduct!} toggle={toggle} />}
      </AnimatePresence>
    </section>
  );
}
