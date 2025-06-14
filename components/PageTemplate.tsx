'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
