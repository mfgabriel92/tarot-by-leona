import {
  About,
  Footer,
  Hero,
  Services,
  Shop,
  Testimonials,
} from "@/app/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Shop />
      <Footer />
      <Link href="https://m.me/61551377159397" target="_blank">
        <Image
          src="/assets/messenger.png"
          width={64}
          height={64}
          alt="Tarot by Leona Messenger"
          className="fixed bottom-24 right-24 z-30"
        />
      </Link>
    </>
  );
}
