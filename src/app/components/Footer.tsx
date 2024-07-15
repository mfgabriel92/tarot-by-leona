import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
}

function DesktopFooter() {
  return (
    <footer className="relative hidden w-full py-4 md:block">
      <Image
        src="/assets/yellow-star.png"
        width={97}
        height={97}
        className="absolute -top-6 left-[48%]"
        alt=""
      />
      <Image
        src="/assets/rip-4.png"
        width={1920}
        height={49}
        className="absolute top-0 -z-10 object-cover"
        alt=""
      />
      <div className="container flex h-full flex-1 items-center justify-between pt-[49px]">
        <nav className="flex flex-1 items-center gap-4">
          <Link className="font-title text-sm text-white" href="#">
            Privacy Policy
          </Link>
          <Link className="font-title text-sm text-white" href="#">
            Terms of Service
          </Link>
        </nav>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <Image
            src="/assets/logo.png"
            width={252}
            height={116}
            alt="Tarot by Leona"
          />
          <p className="font-title text-xs text-white">
            Leona Aoki © 2024 all rights reserved
          </p>
        </div>
        <div className="flex flex-1 flex-col items-end gap-2">
          <nav className="flex justify-end gap-8 text-white">
            <Link href="#" className="text-white">
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </Link>
            <Link href="#" className="text-white">
              <FontAwesomeIcon icon={faFacebook} size="sm" />
            </Link>
          </nav>
          <div className="flex flex-col items-center gap-1">
            <span className="text-title text-xs text-white">Developed By</span>
            <a href="https://gabrielmf.dev" target="_blank">
              <Image
                src="/assets/gmf.png"
                width={61}
                height={17}
                alt="Gabriel Monteiro Fernandes"
              />
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/assets/footer-bg.png"
        fill
        className="absolute bottom-0 -z-20 w-full"
        alt=""
        placeholder="blur"
        blurDataURL="/assets/footer-bg-blurred.png"
      />
    </footer>
  );
}

function MobileFooter() {
  return (
    <footer className="relative block w-full py-4 md:hidden">
      <Image
        src="/assets/yellow-star.png"
        width={97}
        height={97}
        className="absolute -top-10 left-[45.5%]"
        alt=""
      />
      <Image
        src="/assets/rip-4.png"
        width={1920}
        height={49}
        className="absolute top-0 -z-10 object-cover"
        alt=""
      />
      <div className="container flex flex-col items-center gap-6 pb-6 pt-12">
        <Image
          src="/assets/logo.png"
          width={252}
          height={116}
          alt="Tarot by Leona"
          className="mb-6"
        />
        <nav className="flex flex-1 items-center gap-4">
          <Link className="font-title text-sm text-white" href="#">
            Privacy Policy
          </Link>
          <Link className="font-title text-sm text-white" href="#">
            Terms of Service
          </Link>
        </nav>
        <nav className="flex gap-10 text-white">
          <Link href="#" className="text-white">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link href="#" className="text-white">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
        </nav>
        <div className="flex flex-col items-center gap-1">
          <span className="text-title text-xs text-white">Developed By</span>
          <a href="https://gabrielmf.dev" target="_blank">
            <Image
              src="/assets/gmf.png"
              width={61}
              height={17}
              alt="Gabriel Monteiro Fernandes"
            />
          </a>
        </div>
      </div>
      <Image
        src="/assets/footer-bg.png"
        fill
        className="absolute -z-20 w-full object-cover"
        alt=""
        placeholder="blur"
        blurDataURL="/assets/footer-bg-blurred.png"
      />
    </footer>
  );
}
