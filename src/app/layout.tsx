"use client"

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { usePathname } from 'next/navigation';

const IsHomeCheck = () => {
    const pathName = usePathname();
    if ( pathName === "/") {
       return true
    } else {
       return false
    }
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {(IsHomeCheck())? <></>:<Navbar />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
