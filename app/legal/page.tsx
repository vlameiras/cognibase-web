'use client';

import { FadeIn } from "@/components/animations";
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import IndustryBenefits from '@/components/IndustryBenefits';
import PageTemplate from '@/components/PageTemplate';
import { Analytics } from "@vercel/analytics/react"

export default function LegalPage() {
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
                {t('legal.hero.title')}
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                {t('legal.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('demo')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('legal.hero.demo')}
                </button>
                <button
                  onClick={() => openModal('expert')}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('legal.hero.talk')}
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
                {t('legal.overview.title')}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t('legal.overview.description')}
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
              {t('legal.useCases.title')}
            </h2>
            <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto">
              {t('legal.useCases.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Case 1: Intelligent Document Review */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case1.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case1.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case1.impact')}
                  </span>
                </div>
              </div>

              {/* Case 2: Legal Research Assistance */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case2.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case2.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case2.impact')}
                  </span>
                </div>
              </div>

              {/* Case 3: Client Service Enhancement */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case3.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case3.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case3.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 4: Contract Management */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case4.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case4.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case4.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 5: Predictive Case Analytics */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case5.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case5.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case5.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 6: Compliance Monitoring */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case6.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case6.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case6.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 7: Billing Optimization */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case7.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case7.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case7.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 8: Back-Office Automation */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case8.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case8.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case8.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 9: Data Extraction & Analysis */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case9.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case9.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case9.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 10: Legal Calendar Management */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case10.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case10.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case10.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 11: Legal Memo Generation */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case11.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case11.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case11.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 12: Intellectual Property Monitoring */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('legal.useCases.case12.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('legal.useCases.case12.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('legal.useCases.case12.impact')}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us Section */}
      <IndustryBenefits title={t('common.whyUs.title')} />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl mx-4 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('legal.nextStep.title')}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('legal.nextStep.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('legal.nextStep.demo')}
              </button>
              <button
                onClick={() => openModal('contact')}
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('legal.nextStep.talk')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Analytics />
    </PageTemplate>
  );
}
