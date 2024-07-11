import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="container flex items-center justify-between pt-4">
      <Image
        src="/assets/logo.png"
        width={352}
        height={116}
        alt="Tarot by Leona"
      />
      <nav className="text-white flex gap-8">
        <Link className="font-title" href="#about">
          About
        </Link>
        <Link className="font-title" href="#services">
          Services
        </Link>
        <Link className="font-title" href="#testimonials">
          Testimonials
        </Link>
        <Link className="font-title" href="#shop">
          Shop
        </Link>
      </nav>
      <nav className="text-white flex w-full max-w-[352px] justify-end gap-8">
        <Link href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </nav>
    </header>
  );
}
