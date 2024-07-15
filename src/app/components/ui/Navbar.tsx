import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return <DesktopNavbar />;
}

function DesktopNavbar() {
  return (
    <header className="mx-auto hidden w-full max-w-[1488px] items-center justify-between px-6 pt-4 md:flex">
      <Image
        src="/assets/logo.png"
        width={352}
        height={116}
        alt="Tarot by Leona"
      />
      <nav className="mx-8 flex flex-1 justify-end gap-8">
        <Link className="font-title text-white" href="#about">
          About
        </Link>
        <Link className="font-title text-white" href="#services">
          Services
        </Link>
        <Link className="font-title text-white" href="#testimonials">
          Testimonials
        </Link>
        <Link className="font-title text-white" href="#shop">
          Shop
        </Link>
      </nav>
      <nav className="flex flex-1 justify-end gap-8 text-white">
        <Link href="#" className="text-white">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </Link>
        <Link href="#" className="text-white">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </Link>
      </nav>
    </header>
  );
}
