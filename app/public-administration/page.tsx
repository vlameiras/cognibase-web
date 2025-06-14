"use client";

import { FadeIn } from "@/components/animations";
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import IndustryBenefits from '@/components/IndustryBenefits';
import PageTemplate from '@/components/PageTemplate';

export default function PublicAdministrationPage() {
  const { t } = useLanguage();
  const { openModal } = useModal();

  return (
    <PageTemplate>
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {t('publicAdmin.hero.title')}
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                {t('publicAdmin.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('demo')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('publicAdmin.nextStep.demo')}
                </button>
                <button
                  onClick={() => openModal('contact')}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('publicAdmin.nextStep.talk')}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                {t('publicAdmin.overview.title')}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t('publicAdmin.overview.description')}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">
              {t('publicAdmin.useCases.title')}
            </h2>
            <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto">
              Soluções impulsionadas por Inteligência Artificial para transformar e modernizar os serviços públicos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case1.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case1.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case1.impact')}
                  </span>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case2.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case2.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case2.impact')}
                  </span>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case3.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case3.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case3.impact')}
                  </span>
                </div>
              </div>

              {/* Case 4 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case4.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case4.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case4.impact')}
                  </span>
                </div>
              </div>

              {/* Case 5 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case5.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case5.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case5.impact')}
                  </span>
                </div>
              </div>

              {/* Case 6 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case6.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case6.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case6.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 7 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case7.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case7.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case7.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 8 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case8.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case8.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case8.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 9 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case9.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case9.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case9.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 10 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case10.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case10.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case10.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 11 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case11.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case11.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case11.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 12 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('publicAdmin.useCases.case12.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('publicAdmin.useCases.case12.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('publicAdmin.useCases.case12.impact')}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Sources Section */}
      <section className="py-8 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-sm text-slate-400 hover:text-slate-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('publicAdmin.sources.title')}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 text-sm text-slate-400 bg-slate-800/30 p-4 rounded-lg border border-slate-700/50">
                  <h4 className="font-medium text-slate-300 mb-2">{t('publicAdmin.sources.subtitle')}</h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    <li>{t('publicAdmin.sources.consultants')}</li>
                    <li>{t('publicAdmin.sources.publicOrgs')}</li>
                    <li>{t('publicAdmin.sources.vendors')}</li>
                  </ul>
                  
                  <h4 className="font-medium text-slate-300 mt-4 mb-2">{t('publicAdmin.sources.examples')}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-slate-300">{t('publicAdmin.sources.case1.title')}</p>
                      <ul className="list-disc pl-5 text-xs">
                        <li>{t('publicAdmin.sources.case1.source1')}</li>
                        <li>{t('publicAdmin.sources.case1.source2')}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium text-slate-300">{t('publicAdmin.sources.case2.title')}</p>
                      <ul className="list-disc pl-5 text-xs">
                        <li>{t('publicAdmin.sources.case2.source1')}</li>
                        <li>{t('publicAdmin.sources.case2.source2')}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium text-slate-300">{t('publicAdmin.sources.case3.title')}</p>
                      <ul className="list-disc pl-5 text-xs">
                        <li>{t('publicAdmin.sources.case3.source1')}</li>
                        <li>{t('publicAdmin.sources.case3.source2')}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-xs italic">
                    {t('publicAdmin.sources.note')}
                  </p>
                </div>
              </details>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us Section */}
      <IndustryBenefits title={t('common.whyUs.title')} />

      {/* CTA Section */}
<section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl mx-4 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('publicAdmin.nextStep.title')}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('publicAdmin.nextStep.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('publicAdmin.nextStep.demo')}
              </button>
              <button
                onClick={() => openModal('contact')}
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('publicAdmin.nextStep.talk')}
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Navigation and Footer are handled by PageTemplate */}
      </div>
    </PageTemplate>
  );
}
