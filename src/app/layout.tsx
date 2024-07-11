import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--cinzel-regular" });
const luthier = localFont({
  src: "./fonts/Luthier-Regular.ttf",
  variable: "--luthier-regular",
});
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Tarot by Leona",
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
