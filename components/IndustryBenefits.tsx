'use client';

import React from 'react';
import { FadeIn } from './animations';
import { useLanguage } from '../context/LanguageContext';

interface IndustryBenefitsProps {
  title: string;
}

export default function IndustryBenefits({ title }: IndustryBenefitsProps) {
  const { t } = useLanguage();
  return (
    <section className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {title}
            </h2>
            
            <div className="space-y-6">
              {/* Custom-Trained Intelligence with Brain Icon */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg" dangerouslySetInnerHTML={{ 
                    __html: t('common.whyUs.item1') || '<span class="font-bold">Custom‑Trained Intelligence</span> - 95%+ accurate answers because the AI is trained on your own documents, rules and terminology.'
                  }} />
                </div>
              </div>
              
              {/* Enterprise-Grade Security with Shield/Lock Icon */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg" dangerouslySetInnerHTML={{ 
                    __html: t('common.whyUs.item2') || '<span class="font-bold">Enterprise‑Grade Security & Compliance</span> - Strong encryption, strict access controls and private deployment options ensure your information stays private.'
                  }} />
                </div>
              </div>
              
              {/* Fast Integrations with Lightning Bolt Icon */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg" dangerouslySetInnerHTML={{ 
                    __html: t('common.whyUs.item3') || '<span class="font-bold">Fast Integrations</span> - Connect with your favorite tools and platforms faster.'
                  }} />
                </div>
              </div>
              
              {/* Tailored Solutions with Puzzle Icon */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg" dangerouslySetInnerHTML={{ 
                    __html: t('common.whyUs.item4') || '<span class="font-bold">Tailored Solutions</span> - We build solutions customized to your specific requirements and organizational needs.'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
