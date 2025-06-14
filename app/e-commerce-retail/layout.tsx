"use client";

import { useLanguage } from '@/context/LanguageContext';
import ChatWidget from "@/components/ChatWidget";
import { Analytics } from "@vercel/analytics/react"

export default function ECommerceRetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Using useLanguage hook to ensure context is available to children
  useLanguage();

  return (
    <>
      {/* Main Content */}
      {children}

      {/* Chat Widget */}
      <ChatWidget />
      <Analytics />
    </>
  );
}
