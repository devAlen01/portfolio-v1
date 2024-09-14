import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import LayoutClient from "./(site)/layout";

const montserratSans = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio v1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable}`}>{children}</body>
    </html>
  );
}
