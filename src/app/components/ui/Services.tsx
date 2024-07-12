import Image from "next/image";
import { Title } from "../Title";

export function Services() {
  return (
    <section className="w-full">
      <Image
        src="/assets/moon.png"
        width={72}
        height={96}
        alt=""
        className="absolute left-[50%]"
      />
      <Image
        src="/assets/services-bg.png"
        width={1920}
        height={100}
        alt=""
        className="w-full"
      />
      <div className="relative bg-pink-500/5 px-6 pb-12">
        <div className="container flex flex-col items-center gap-12">
          <Title title="My Services" />
        </div>
      </div>
    </section>
  );
}
