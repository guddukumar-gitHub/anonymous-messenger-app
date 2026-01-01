import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/sonner"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: {
    default: "GhostWire — Where words travel without identity.",
    template: "%s | GhostWire",
  },
  description:
    "GhostWire is an anonymous messaging platform that lets you send and receive messages without revealing your identity. Speak freely. Stay unseen.",

  keywords: [
    "GhostWire",
    "anonymous messaging",
    "anonymous messages",
    "privacy messaging app",
    "confession app",
    "Next.js anonymous app",
  ],

  authors: [{ name: "Guddu Kumar" }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
          <Analytics />
        </body>
      </AuthProvider>
    </html>
  );
}
