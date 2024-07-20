import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import { keywords, siteUrl } from "./constants";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--cinzel-regular" });
const luthier = localFont({
  src: "./fonts/Luthier-Regular.ttf",
  variable: "--luthier-regular",
});
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  keywords,
  title: {
    default: "Tarot by Leona",
    template: "%s | Tarot by Leona",
  },
  openGraph: {
    description:
      "Receive help in finding what you need through our psychic readings and esoteric knowledge through tarot, astrology, or oracle readings.",
    images: ["/assets/logo.png", "/assets/leona.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${luthier.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
