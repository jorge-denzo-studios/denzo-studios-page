import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Denzo Studios Pro | Neo",
  description: "A cinematic AI digital platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.variable, "antialiased bg-black text-white relative min-h-screen")}>
        <div className="hero-glow" />
        {children}
      </body>
    </html>
  );
}
