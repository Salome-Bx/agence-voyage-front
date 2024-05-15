import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
          <div className="w-full"><img className="w-full" src="header.jpg" alt="allTravels" /></div>

        <Toaster position="top-right"></Toaster>
        <div>{children}</div>
      
      </body>
    </html>
  );
}