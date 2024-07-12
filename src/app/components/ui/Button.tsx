import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

export function Button({ children }: Props) {
  return (
    <motion.div
      className="w-fit rounded-lg border-2 border-purple-400 p-2"
      whileHover={{ scale: 1.05, y: -5, rotate: "-2.5deg" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button className="font-title text-white font-lg relative h-14 w-fit rounded-lg bg-pink-300 px-24 font-black transition-all hover:bg-pink-500">
        <span className="z-10">{children}</span>
        <Image
          src="/assets/btn-bg.png"
          fill
          alt="Tarot by Leona"
          className="absolute left-0 top-0 object-cover"
        />
      </button>
    </motion.div>
  );
}
