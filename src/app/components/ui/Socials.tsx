import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export function Socials() {
  return (
    <>
      <Link
        href="https://www.instagram.com/tarotbyleona/"
        className="text-white"
        target="_blank"
      >
        <FontAwesomeIcon icon={faInstagram} size="lg" />
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61551377159397"
        target="_blank"
        className="text-white"
      >
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </Link>
    </>
  );
}
