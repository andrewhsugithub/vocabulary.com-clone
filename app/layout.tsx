import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vocabulary.com - Learn Words - English Dictionary",
  description: "vocabulary.com clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white text-slate-900 antialiased",
          inter.className
        )}
      >
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
