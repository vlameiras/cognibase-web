"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{language === 'en' ? 'Terms of Service' : 'Termos de Serviço'}</h1>
        
        <div className="prose prose-blue max-w-none">
          {language === 'en' ? (
            <>
              <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
              <p className="text-gray-600 mb-8">{t('terms.effectiveDate')}</p>
              
              <p className="mb-6">{t('terms.intro')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section1.title')}</h2>
              <p>{t('terms.section1.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section2.title')}</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t('terms.section2.item1')}</li>
                <li>{t('terms.section2.item2')}</li>
                <li>{t('terms.section2.item3')}</li>
              </ul>
              <p>{t('terms.section2.footer')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section3.title')}</h2>
              <p className="mb-2">{t('terms.section3.intro')}</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t('terms.section3.item1')}</li>
                <li>{t('terms.section3.item2')}</li>
                <li>{t('terms.section3.item3')}</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section4.title')}</h2>
              <p>{t('terms.section4.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section5.title')}</h2>
              <p>{t('terms.section5.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section6.title')}</h2>
              <p>{t('terms.section6.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section7.title')}</h2>
              <p>{t('terms.section7.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section8.title')}</h2>
              <p>{t('terms.section8.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section9.title')}</h2>
              <p>{t('terms.section9.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section10.title')}</h2>
              <p>{t('terms.section10.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section11.title')}</h2>
              <p>{t('terms.section11.content')}</p>
              
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
              <p className="text-gray-600 mb-8">{t('terms.effectiveDate')}</p>
              
              <p className="mb-6">{t('terms.intro')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section1.title')}</h2>
              <p>{t('terms.section1.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section2.title')}</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t('terms.section2.item1')}</li>
                <li>{t('terms.section2.item2')}</li>
                <li>{t('terms.section2.item3')}</li>
              </ul>
              <p>{t('terms.section2.footer')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section3.title')}</h2>
              <p className="mb-2">{t('terms.section3.intro')}</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>{t('terms.section3.item1')}</li>
                <li>{t('terms.section3.item2')}</li>
                <li>{t('terms.section3.item3')}</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section4.title')}</h2>
              <p>{t('terms.section4.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section5.title')}</h2>
              <p>{t('terms.section5.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section6.title')}</h2>
              <p>{t('terms.section6.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section7.title')}</h2>
              <p>{t('terms.section7.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section8.title')}</h2>
              <p>{t('terms.section8.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section9.title')}</h2>
              <p>{t('terms.section9.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section10.title')}</h2>
              <p>{t('terms.section10.content')}</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">{t('terms.section11.title')}</h2>
              <p>{t('terms.section11.content')}</p>
              
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
