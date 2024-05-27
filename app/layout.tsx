import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./providers";
import ToasterProvider from "./providers/ToasterProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StayHub",
  description: "StayHub is an app where user can find and book place to stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <ToasterProvider />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
