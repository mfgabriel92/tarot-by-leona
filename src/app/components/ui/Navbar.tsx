import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
      <nav className="text-white mx-8 flex flex-1 justify-end gap-8">
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
      <nav className="text-white flex flex-1 justify-end gap-8">
        <Link href="#">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </Link>
      </nav>
    </header>
  );
}
