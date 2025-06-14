'use client';

import { FadeIn } from "@/components/animations";
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import IndustryBenefits from '@/components/IndustryBenefits';
import PageTemplate from '@/components/PageTemplate';
import { Analytics } from "@vercel/analytics/react"

export default function HealthcarePage() {
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
                {t('healthcare.hero.title')}
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                {t('healthcare.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('demo')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('healthcare.nextStep.demo')}
                </button>
                <button
                  onClick={() => openModal('expert')}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('healthcare.nextStep.talk')}
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
                {t('healthcare.overview.title')}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t('healthcare.overview.description')}
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
              {t('healthcare.useCases.title')}
            </h2>
            <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto">
              {t('healthcare.useCases.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case1.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case1.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case1.impact')}
                  </span>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case2.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case2.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case2.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 3 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case3.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case3.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case3.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 4 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case4.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case4.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case4.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 5 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case5.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case5.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case5.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 6 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case6.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case6.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case6.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 7 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case7.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case7.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case7.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 8 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case8.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case8.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case8.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 9 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case9.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case9.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case9.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 10 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case10.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case10.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case10.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 11 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case11.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case11.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case11.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 12 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('healthcare.useCases.case12.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('healthcare.useCases.case12.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('healthcare.useCases.case12.impact')}
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
            <h2 className="text-3xl font-bold mb-6">{t('healthcare.nextStep.title')}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('healthcare.nextStep.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('healthcare.nextStep.demo')}
              </button>
              <button
                onClick={() => openModal('contact')}
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('healthcare.nextStep.talk')}
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
