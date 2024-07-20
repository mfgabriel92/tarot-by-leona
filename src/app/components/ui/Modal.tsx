import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  id: number;
  image: string;
  name: string;
  nickname?: string;
  description: string;
  price: number;
  toggle: () => void;
}

export function Modal({
  image,
  name,
  nickname,
  description,
  price,
  toggle,
}: Props) {
  const variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      onClick={toggle}
      className="fixed inset-0 z-10 bg-gray-900 bg-opacity-75 transition-opacity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fixed inset-0 z-20 w-screen overflow-y-auto"
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative w-full max-w-2xl transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="flex flex-col gap-3 bg-white">
              <div className="relative h-[300px] md:h-[500px]">
                <Image
                  src={`/assets/shop/${image}`}
                  fill
                  className="rounded-t-lg object-cover"
                  alt={name}
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex flex-col text-left xs:flex-row sm:gap-2">
                  <h3 className="text-3xl">{name}</h3>
                  {nickname && (
                    <span className="flex items-center text-lg italic text-gray-400">
                      <i className="hidden px-2 xs:block">-</i> "{nickname}"
                    </span>
                  )}
                </div>
                <hr />
                <p className="text-justify">{description}</p>
                <span className="text-end text-2xl">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "PHP",
                  }).format(price)}
                </span>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={toggle}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
