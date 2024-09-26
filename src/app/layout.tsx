import type { Metadata } from "next";
import { Ubuntu, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import CustomerCare from "@/components/CustomerCare/CustomerCare";

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Padi UMKM",
  description: "Padi UMKM",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/src/app/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${ubuntu.className} ${openSans.className}`}>
        <Navbar/>
        {children}
        <CustomerCare/>
        <Footer/>
      </body>
    </html>
  );
}
