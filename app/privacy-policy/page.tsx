"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('privacy.title')}</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-gray-600 mb-8">{t('privacy.effectiveDate')}</p>
          
          <p className="mb-6">{t('privacy.intro')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section1.title')}</h2>
          <p>{t('privacy.section1.content')}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.section1.item1')}</li>
            <li>{t('privacy.section1.item2')}</li>
            <li>{t('privacy.section1.item3')}</li>
            <li>{t('privacy.section1.item4')}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section2.title')}</h2>
          <p>{t('privacy.section2.content')}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.section2.item1')}</li>
            <li>{t('privacy.section2.item2')}</li>
            <li>{t('privacy.section2.item3')}</li>
            <li>{t('privacy.section2.item4')}</li>
          </ul>
          <p>{t('privacy.section2.note')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section3.title')}</h2>
          <p>{t('privacy.section3.content')}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.section3.item1')}</li>
            <li>{t('privacy.section3.item2')}</li>
            <li>{t('privacy.section3.item3')}</li>
            <li>{t('privacy.section3.item4')}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section4.title')}</h2>
          <p>{t('privacy.section4.content')}</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>{t('privacy.section4.item1')}</li>
            <li>{t('privacy.section4.item2')}</li>
            <li>{t('privacy.section4.item3')}</li>
            <li>{t('privacy.section4.item4')}</li>
            <li>{t('privacy.section4.item5')}</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section5.title')}</h2>
          <p>{t('privacy.section5.content')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section6.title')}</h2>
          <p>{t('privacy.section6.content')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section7.title')}</h2>
          <p>{t('privacy.section7.content')}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section8.title')}</h2>
          <p>{t('privacy.section8.content')}</p>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-600">{t('privacy.footer')}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
