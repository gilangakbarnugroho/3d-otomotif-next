import type { Metadata } from "next";
import localFont from "next/font/local";
import { FC, ReactNode } from 'react';
import "@/styles/globals.css";
import Header from "@/components/ui/Header";
import Nav from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import Help from "@/components/Help";
import { Toaster } from "react-hot-toast";

const plusJakartaSans = localFont({
  src: "./fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf",
  variable: "--font-sans",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "3D Otomotif - Pemeliharaan Mesin Kendaraan Ringan",
  description: "Multimedia Interaktif Simulasi Mesin 3D Pemeliharaan Mesin Kendaraan Ringan untuk SMK Teknik Kendaraan Ringan Otomotif",
  icons: {
    icon:"favicon.ico",
  },
  openGraph: {
    title: "3D Otomotif - Pemeliharaan Mesin Kendaraan Ringan",
    description:
      "Multimedia Interaktif Simulasi Mesin 3D Pemeliharaan Mesin Kendaraan Ringan untuk SMK Teknik Kendaraan Ringan Otomotif",
    images: [
      {
        url: "https://3d-otomotif.vercel.app/thumbnail.png",
      },
    ],
  },
  metadataBase: new URL("https://3d-otomotif.vercel.app"),
}
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">

      <body
        className={`${plusJakartaSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Help />

        <Header />
        <Toaster />
        <main className="relative z-10">
          {children}
        </main>
        <Nav />
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
