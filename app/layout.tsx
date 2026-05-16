import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-satoshi" });

export const metadata: Metadata = {
  title: "Hamza — HC Devs | Full-Stack Developer",
  description: "Portfolio of Hamza, Full-Stack Developer at HC Devs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-text`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
