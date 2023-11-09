import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../common/style/globals.css";
import Navbar from "@/common/component/navbar/Navbar";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drink App",
  description: "Drink Landing Page Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Drink Landing Page</title>
        <meta name="description" content="Drink Landing Page"  />
      </Head>
      <body className={`${inter.className}`}>
        <div className="flex justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
