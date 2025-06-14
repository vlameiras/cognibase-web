'use client';

import { FadeIn } from "@/components/animations";
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';
import IndustryBenefits from '@/components/IndustryBenefits';
import PageTemplate from '@/components/PageTemplate';
import { Analytics } from "@vercel/analytics/react"

export default function RealEstatePage() {
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
                {t('realEstate.title')}
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
                {t('realEstate.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openModal('demo')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('contact.demo')}
                </button>
                <button
                  onClick={() => openModal('contact')}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  {t('chat.contactSales')}
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
                {t('realEstate.overview.title')}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                {t('realEstate.overview.description')}
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
              {t('realEstate.useCases.title')}
            </h2>
            <p className="text-center text-slate-300 mb-10 max-w-3xl mx-auto">
              {t('realEstate.useCases.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case1.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case1.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case1.impact')}
                  </span>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case2.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case2.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case2.impact')}
                  </span>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case3.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case3.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case3.impact')}
                  </span>
                </div>
              </div>

              {/* Case 4: Relatórios de Mercado Automatizados */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case4.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case4.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case4.impact')}
                  </span>
                </div>
              </div>

              {/* Case 5: Avaliação Automática (AVM) */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case5.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case5.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case5.impact')}
                  </span>
                </div>
              </div>

              {/* Case 6: Análise de Investimento */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case6.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case6.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case6.impact')}
                  </span>
                </div>
              </div>

              {/* Case 7: Previsão de Tendências de Mercado */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case7.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case7.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case7.impact')}
                  </span>
                </div>
              </div>

              {/* Case 8: Recomendações de Imóveis */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case8.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case8.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case8.impact')}
                  </span>
                </div>
              </div>

              {/* Case 9: Virtual Home Staging */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case9.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case9.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case9.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 10: Listing Description Generator */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case10.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case10.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case10.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 11: Client Communication Assistant */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case11.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case11.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case11.impact')}
                  </span>
                </div>
              </div>
              
              {/* Case 12: Showing Scheduler */}
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold">{t('realEstate.useCases.case12.title')}</h3>
                </div>
                <p className="text-slate-300 mb-4">{t('realEstate.useCases.case12.description')}</p>
                <div className="flex items-center">
                  <div className="h-1 w-16 bg-blue-600 rounded-full mr-3"></div>
                  <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {t('realEstate.useCases.case12.impact')}
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
            <h2 className="text-3xl font-bold mb-6">{t('realEstate.cta.title')}</h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('realEstate.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('contact.demo')}
              </button>
              <button
                onClick={() => openModal('contact')}
                className="bg-transparent border border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-colors"
              >
                {t('chat.contactSales')}
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
