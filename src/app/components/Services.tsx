import Image from "next/image";
import { Tarot } from "./Tarot";
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
      <div className="bg-pink-500/5 px-6 pb-12">
        <div className="container flex flex-col items-center gap-8 pt-12 md:pt-0">
          <Title title="My Services" />
          <Tarot />
        </div>
      </div>
    </section>
  );
}
