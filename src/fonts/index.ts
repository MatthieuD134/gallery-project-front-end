import { Noto_Sans, Staatliches } from "next/font/google";
import localFont from "next/font/local";

export const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const komika_slim = localFont({ src: "./KOMIKASL.ttf" });
