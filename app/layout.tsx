import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Providers } from "./providers";

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
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
