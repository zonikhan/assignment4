import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";
// import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function UserLayout({children}: never) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />

        <div className="h-[345px]">

        <div className=" text-center w-[500px] h-auto mx-auto px-10 py-5  border-2 hover:shadow-red-500 hover:border-t-2 transition-all duration-500 hover:border-red-500 shadow-lg rounded-xl mt-5 hover:text-red-500">
        {children}
        </div>
        </div>

        <Footer />
        
      </body>
    </html>
  );
}