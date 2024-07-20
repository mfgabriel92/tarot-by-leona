import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Socials } from "./Socials";

export function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
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
        <Socials />
      </nav>
    </header>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="flex w-full items-center px-8 md:hidden">
        <Image
          src="/assets/logo.png"
          width={302}
          height={66}
          alt="Tarot by Leona"
          className="mx-auto"
        />
        <FontAwesomeIcon
          icon={faBars}
          size="2xl"
          className="text-white"
          onClick={toggle}
        />
      </header>
      <div
        className={clsx(
          "fixed inset-0 z-40 h-full w-full bg-gray-900/75 transition-all",
          { visible: isOpen },
          { hidden: !isOpen },
        )}
      ></div>
      <div
        className={clsx(
          "fixed right-0 top-0 z-50 flex h-full w-2/3 flex-col items-start bg-pink-900 transition-all",
          {
            "translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          },
        )}
      >
        <div className="flex w-full items-center justify-between px-8">
          <Image
            src="/assets/logo.png"
            width={302}
            height={66}
            alt="Tarot by Leona"
            className="mx-auto"
          />
          <FontAwesomeIcon
            icon={faClose}
            size="2xl"
            className="text-white"
            onClick={toggle}
          />
        </div>
        <nav className="mt-20 flex h-full w-full flex-col items-center gap-12">
          <Link
            className="font-title text-2xl text-white"
            href="#about"
            onClick={toggle}
          >
            About
          </Link>
          <Link
            className="font-title text-2xl text-white"
            href="#services"
            onClick={toggle}
          >
            Services
          </Link>
          <Link
            className="font-title text-2xl text-white"
            href="#testimonials"
            onClick={toggle}
          >
            Testimonials
          </Link>
          <Link
            className="font-title text-2xl text-white"
            href="#shop"
            onClick={toggle}
          >
            Shop
          </Link>
        </nav>
        <nav className="m-auto mb-12 flex flex-1 gap-8 text-white">
          <Socials />
        </nav>
      </div>
    </>
  );
}
