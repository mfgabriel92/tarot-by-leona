import Image from "next/image";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Image
        src="/assets/hero-bg.png"
        fill
        alt=""
        className="absolute -z-10"
        placeholder="blur"
        blurDataURL="/assets/hero-bg-blurred.png"
      />
    </div>
  );
}
