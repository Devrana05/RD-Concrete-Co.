import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "R D Concrete Co. — Quality Precast Concrete Products",
  description:
    "Leading manufacturer of high-quality precast concrete products including Pavers, U-Drains, Kerb Stones, RCC Manhole Chambers, and SFRC Railings for robust infrastructure.",
  keywords: [
    "RD Concrete",
    "RD Concrete CO.",
    "R.D. Concrete Co.",
    "precast concrete",
    "concrete pavers",
    "u-drain systems",
    "rcc manhole chambers",
    "kerb stones",
    "precast hardscape",
    "sfrc railings",
    "chequered tiles",
    "boundary walls",
    "concrete blocks",
    "infrastructure materials"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${barlowCondensed.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-white">
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
