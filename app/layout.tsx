import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import { DynamicTitle } from "@/components/DynamicTitle";
import "./globals.css";
import "@/styles/chat-widget.css";
import { Analytics } from "@vercel/analytics/react"
import { BackToTopButton } from '@/components/BackToTopButton';
import ChatWidget from '@/components/ChatWidget';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZettaBase | Reinvent Your Business with AI",
  description: "We deliver AI solutions that help businesses automate processes, gain insights, and scale operations efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <ModalProvider>
            <DynamicTitle />
            <div className="w-full max-w-[100vw] overflow-x-hidden">
              {children}
            </div>
            <BackToTopButton />
            <ChatWidget />
          </ModalProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
