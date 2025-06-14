"use client";

import Image from "next/image";
import ChatWidget from "../components/ChatWidget";
import { FadeIn, FloatingElement } from "../components/animations";
import { 
  DataFlowAnimation,
  ServiceFlowAnimation
} from "../components/ClientAnimations";
import { useLanguage, useTooltip } from '@/context/LanguageContext';
import Header from '@/components/Header';
import { TooltipTrigger } from '@/components/Tooltip';
import { useModal } from '@/context/ModalContext';
import Footer from "@/components/Footer";
export default function AIAgencyLanding() {
  const { t } = useLanguage();
  const { openModal } = useModal();
  const { showTooltip, hideTooltip } = useTooltip();
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-x-hidden w-full">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <FadeIn className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            {t('hero.title')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{t('hero.titleHighlight')}</span>
          </h1>
          <p className="text-blue-300 text-xl md:text-2xl font-medium my-4">
            {t('hero.subtitle')}
          </p>
          <p className="text-slate-300 text-lg md:text-xl max-w-xl">
            {t('hero.description')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xs">✓</span>
              </div>
              <p className="text-slate-300 text-sm">{t('hero.feature1')}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xs">✓</span>
              </div>
              <p className="text-slate-300 text-sm">{t('hero.feature2')}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xs">✓</span>
              </div>
              <p className="text-slate-300 text-sm">{t('hero.feature3')}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => openModal('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all py-3 px-8 rounded-full font-medium shadow-lg shadow-blue-900/20 text-center w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t('chat.contactSales')}
            </button>
          </div>
        </FadeIn>
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-30"></div>
          <Image 
            src="/landing_1.png" 
            alt="AI Agency Landing" 
            width={500} 
            height={375}
            className="rounded-xl shadow-2xl w-full max-w-md relative z-10 border border-slate-700/50"
          />
        </div>
      </section>

      {/* Why ZettaBase Section */}
      <section id="why" className="container mx-auto px-4 py-20 md:py-32 bg-gradient-to-b from-slate-950 to-slate-900 rounded-3xl my-12 relative overflow-hidden">
        <FadeIn>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <div className="inline-block bg-blue-500/10 px-4 py-1 rounded-full mb-4">
              <p className="text-blue-400 font-medium text-sm">{t('why.eyebrow')}</p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">{t('why.title')}</h2>
            <p className="text-blue-300 text-xl mb-4">{t('why.subtitle')}</p>
            <p className="text-slate-300 text-lg">{t('why.description')}</p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <TooltipTrigger tooltipKey="why.feature1.tooltip">
                <h3 className="text-xl font-bold mb-2">{t('why.feature1.title')}</h3>
              </TooltipTrigger>
              <p className="text-slate-300">{t('why.feature1.description')}</p>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <TooltipTrigger tooltipKey="why.feature2.tooltip">
                <h3 className="text-xl font-bold mb-2">{t('why.feature2.title')}</h3>
              </TooltipTrigger>
              <p className="text-slate-300">{t('why.feature2.description')}</p>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <TooltipTrigger tooltipKey="why.feature3.tooltip">
                <h3 className="text-xl font-bold mb-2">{t('why.feature3.title')}</h3>
              </TooltipTrigger>
              <p className="text-slate-300">{t('why.feature3.description')}</p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">{t('why.comparison.title')}</h3>
            <div className="overflow-hidden rounded-2xl shadow-lg shadow-blue-900/10">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-900/50 to-slate-800/80 p-1">
                <div className="p-5 font-medium text-lg"></div>
                <div className="p-5 font-bold text-blue-300 text-center text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                    {t('why.comparison.zettabase')}
                  </div>
                </div>
                <div className="p-5 font-medium text-center text-lg">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-3 h-3 bg-slate-400 rounded-full"></span>
                    {t('why.comparison.generic')}
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/40 backdrop-blur-sm">
                {/* Row 1 */}
                <div className="grid grid-cols-3 border-t border-slate-700/50">
                  <div className="p-5 font-medium bg-slate-900/30 text-blue-100">
                    <TooltipTrigger tooltipKey="why.comparison.row1.tooltip">
                      {t('why.comparison.row1.title')}
                    </TooltipTrigger>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 bg-blue-900/5 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 absolute left-2">✓</span>
                      <span className="ml-4">{t('why.comparison.row1.zettabase')}</span>
                    </div>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 text-slate-300">
                    <div className="flex items-center gap-2 ml-4">
                      {t('why.comparison.row1.generic')}
                    </div>
                  </div>
                </div>
                
                {/* Row 2 */}
                <div className="grid grid-cols-3 border-t border-slate-700/50">
                  <div className="p-5 font-medium bg-slate-900/30 text-blue-100">
                    <TooltipTrigger tooltipKey="why.comparison.row2.tooltip">
                      {t('why.comparison.row2.title')}
                    </TooltipTrigger>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 bg-blue-900/5 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 absolute left-2">✓</span>
                      <span className="ml-4">{t('why.comparison.row2.zettabase')}</span>
                    </div>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 text-slate-300">
                    <div className="flex items-center gap-2 ml-4">
                      {t('why.comparison.row2.generic')}
                    </div>
                  </div>
                </div>
                
                {/* Row 3 */}
                <div className="grid grid-cols-3 border-t border-slate-700/50">
                  <div className="p-5 font-medium bg-slate-900/30 text-blue-100">
                    <TooltipTrigger tooltipKey="why.comparison.row3.tooltip">
                      {t('why.comparison.row3.title')}
                    </TooltipTrigger>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 bg-blue-900/5 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 absolute left-2">✓</span>
                      <span className="ml-4">{t('why.comparison.row3.zettabase')}</span>
                    </div>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 text-slate-300">
                    <div className="flex items-center gap-2 ml-4">
                      {t('why.comparison.row3.generic')}
                    </div>
                  </div>
                </div>
                
                {/* Row 4 */}
                <div className="grid grid-cols-3 border-t border-slate-700/50">
                  <div className="p-5 font-medium bg-slate-900/30 text-blue-100">
                    <TooltipTrigger tooltipKey="why.comparison.row4.tooltip">
                      {t('why.comparison.row4.title')}
                    </TooltipTrigger>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 bg-blue-900/5 relative">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 absolute left-2">✓</span>
                      <span className="ml-4">{t('why.comparison.row4.zettabase')}</span>
                    </div>
                  </div>
                  <div className="p-5 border-l border-slate-700/50 text-slate-300">
                    <div className="flex items-center gap-2 ml-4">
                      {t('why.comparison.row4.generic')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* About Us Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.title')}</h2>
            <p className="text-slate-300 text-lg mb-8">
              {t('about.description')}
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FadeIn delay={0.1} className="text-center">
            <div className="bg-blue-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.experience')}</h3>
            <p className="text-slate-400">{t('about.experienceDesc')}</p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="text-center">
            <div className="bg-blue-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.innovation')}</h3>
            <p className="text-slate-400">{t('about.innovationDesc')}</p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="text-center">
            <div className="bg-blue-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.client')}</h3>
            <p className="text-slate-400">{t('about.clientDesc')}</p>
          </FadeIn>

          <FadeIn delay={0.4} className="text-center">
            <div className="bg-blue-500/10 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('about.security')}</h3>
            <p className="text-slate-400">{t('about.securityDesc')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Our Products Section */}
      <section id="products" className="container mx-auto px-4 py-20">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('products.title')}</h2>
            <p className="text-slate-400">{t('products.description')}</p>
          </div>
        </FadeIn>

        {/* Internal Chat Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <FadeIn className="order-2 md:order-1">
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('products.internal.title')}</h3>
              <p className="text-slate-300 mb-6">
                {t('products.internal.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('products.internal.privacy')}</h4>
                    <p className="text-slate-400 text-sm">{t('products.internal.privacyDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('chat.integrations.title')}</h4>
                    <p className="text-slate-400 text-sm mb-2">{t('chat.integrations.description')}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <Image src="/slack_732245.png" alt="Slack" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/teams.png" alt="Microsoft Teams" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/gmail.png" alt="Gmail" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/outlook.png" alt="Outlook" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/google-drive.png" alt="Google Drive" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/onedrive.png" alt="OneDrive" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/dropbox.png" alt="Dropbox" width={24} height={24} className="h-6 w-auto" />
                      <Image src="/airtable.png" alt="Airtable" width={24} height={24} className="h-6 w-auto" />
                      <div className="flex items-center gap-1 bg-blue-500/20 rounded-full px-3 py-1 text-xs text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>{t('chat.integrations.comingSoon')}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('products.internal.learning')}</h4>
                    <p className="text-slate-400 text-sm">{t('products.internal.learningDesc')}</p>
                  </div>
                </div>
                
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-blue-400">{t('products.internal.benefits')}</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">30%</div>
                      <div className="text-white">{t('products.internal.benefit1')}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">20-40%</div>
                      <div className="text-white">{t('products.internal.benefit2')}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">30-65%</div>
                      <div className="text-white">{t('products.internal.benefit3')}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-8 rounded-full font-medium w-fit"
              >
                {t('products.internal.cta')}
              </button>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2} className="order-1 md:order-2">
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-[520px] relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"></div>
                
                {/* Data flow animation in the background */}
                <div className="absolute inset-0 opacity-30">
                  <DataFlowAnimation />
                </div>
                
                {/* Product Image Instead of Chat Window */}
                <div className="relative w-[90%] h-[90%] bg-slate-800/70 rounded-lg border border-slate-700 shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 bg-slate-900/80 p-3 border-b border-slate-700 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-sm font-medium">{t('products.internal.title')}</div>
                  </div>
                  
                  <div className="p-4 pt-16 flex flex-col h-full">
                    <div className="flex-grow flex flex-col space-y-4 overflow-y-auto">
                      <div className="flex items-start gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">ZB</div>
                        <div className="bg-slate-700/50 rounded-lg p-3 text-sm max-w-[80%]">
                          {t('chat.welcome')}
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 justify-end self-end max-w-[85%]">
                        <div className="bg-blue-500/30 rounded-lg p-3 text-sm max-w-[80%]">
                          {t('chat.internal.question')}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold">TM</div>
                      </div>
                      
                      <div className="flex items-start gap-3 max-w-[85%]">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">ZB</div>
                        <div className="bg-slate-700/50 rounded-lg p-3 text-sm relative max-w-[80%]">
                          {t('chat.internal.answer')}
                          <div className="flex items-center gap-1 mt-1 justify-end">
                            <span className="text-blue-400 text-xs">Google Drive</span>
                            <Image src="/google-drive.png" alt="Google Drive" width={16} height={16} className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat input box */}
                    <div className="mt-4 border-t border-slate-700 pt-3">
                      <div className="flex items-center gap-2">
                        <div 
                          className="flex-1 bg-slate-700/50 border border-slate-600 rounded-full px-3 py-2 text-xs text-slate-400 select-none pointer-events-none"
                        >
                          {t('chat.internal.placeholder')}
                        </div>
                        <div className="bg-blue-500 p-1.5 rounded-full shadow-lg select-none pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Public Widget */}
        <div id="public" className="grid grid-cols-1 md:grid-cols-2 gap-12 scroll-mt-24">
          <FadeIn>
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-lg h-[520px] relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"></div>
                
                {/* Service flow animation in the background */}
                <div className="absolute inset-0 opacity-30">
                  <ServiceFlowAnimation />
                </div>
                
                {/* Product Image Instead of Chat Window */}
                <div className="relative w-[90%] h-[90%]">
                  {/* Chat bubble removed */}
                  
                  <div className="bg-slate-800/90 border border-slate-700 rounded-lg shadow-xl w-full h-full flex flex-col">
                    <div className="p-3 border-b border-slate-700 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">ZB</div>
                        <span className="font-medium">{t('chat.assistantTitle')}</span>
                      </div>
                      <button className="text-slate-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="p-4 flex-grow overflow-y-auto">
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">ZB</div>
                          <div className="bg-slate-700/50 rounded-lg p-3 text-sm relative max-w-[60%]">
                            {t('chat.greeting')}
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3 justify-end">
                          <div className="bg-blue-500/30 rounded-lg p-3 text-sm max-w-[70%]">
                            {t('chat.servicesQuestion')}
                          </div>
                          <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold">TM</div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">ZB</div>
                          <div className="bg-slate-700/50 rounded-lg p-3 text-sm relative max-w-[70%]">
                            {t('chat.services')}
                          </div>
                        </div>
                        

                      </div>
                    </div>
                    
                    <div className="p-3 border-t border-slate-700">
                      <div className="flex items-center gap-2">
                        <div 
                           className="flex-1 bg-slate-700/50 border border-slate-600 rounded-full px-4 py-2.5 text-sm text-slate-400 select-none pointer-events-none"
                         >
                           {t('chat.internal.placeholder')}
                         </div>
                        <div className="bg-blue-500 p-2.5 rounded-full shadow-lg select-none pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-center text-slate-500">
                        {t('chat.sendHint')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="h-full flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('products.public.title')}</h3>
              <p className="text-slate-300 mb-6">
                {t('products.public.description')}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('products.public.integration')}</h4>
                    <p className="text-slate-400 text-sm">{t('products.public.integrationDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('products.public.languages')}</h4>
                    <p className="text-slate-400 text-sm">{t('products.public.languagesDesc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{t('products.public.knowledge')}</h4>
                    <p className="text-slate-400 text-sm">{t('products.public.knowledgeDesc')}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-blue-400">{t('products.public.benefits')}</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">30-45%</div>
                      <div className="text-white">{t('products.public.benefit1')}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">90%</div>
                      <div className="text-white">{t('products.public.benefit2')}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 p-3 rounded-lg border border-blue-700/30">
                    <div className="flex items-center">
                      <div className="text-blue-400 text-xl font-bold mr-2">80%</div>
                      <div className="text-white">{t('products.public.benefit3')}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-8 rounded-full font-medium w-fit"
              >
                {t('chat.requestDemo')}
              </button>
            </div>
          </FadeIn>
        </div>

        {/*
        <div id="workflows" className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 mt-24">
          <FadeIn>
            <div className="h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl md:text-3xl font-bold">{t('products.workflows.title') || 'AI Workflows & Multi-Agent Orchestration'}</h3>
                <span className="bg-blue-500/30 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{t('products.workflows.comingSoon') || 'Coming Soon'}</span>
              </div>
              <p className="text-slate-300 mb-6">
                {t('products.workflows.description') || 'Orchestrate entire business processes with coordinated AI agents—no code required.'}
              </p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-blue-400">{t('products.workflows.whyLove') || 'Why You\'ll Love It'}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">{t('products.workflows.feature1') || 'Agent generator that builds the right agent for any use-case'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">{t('products.workflows.feature2') || 'Visual drag-and-drop workflow builder'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">{t('products.workflows.feature3') || 'Multi-agent collaboration out-of-the-box'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">{t('products.workflows.feature4') || 'Human-in-the-loop approvals when you need them'}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">
                        {t('products.workflows.feature5') || 'Pre-built connectors'} 
                        <span className="text-slate-400 text-sm italic">{t('products.workflows.connectors') || '(Slack, HubSpot, Jira, Salesforce, …)'}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-300">{t('products.workflows.feature6') || 'Enterprise-grade security & audit trail'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => openModal('contact')}
                className="bg-blue-600 hover:bg-blue-700 transition-colors py-3 px-8 rounded-full font-medium w-fit"
              >
                {t('products.workflows.joinWaitlist') || 'Join Waitlist'}
              </button>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-xl h-[520px] relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full"></div>
                

                <div className="absolute inset-0 opacity-30">
                  <DataFlowAnimation />
                </div>
                

                <div className="relative w-[90%] h-[90%] bg-slate-800/70 rounded-lg border border-slate-700 shadow-xl overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 bg-slate-900/80 p-3 border-b border-slate-700 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex-1 text-center text-sm font-medium">{t('products.workflows.workflowBuilder') || 'Workflow Builder'}</div>
                  </div>
                  
                  <div className="p-4 pt-16 h-full flex flex-col">
                    <div className="flex-grow grid grid-cols-3 gap-4">
                      {}
                      <div className="bg-slate-900/50 rounded-lg border border-slate-700 p-3 flex flex-col">
                        <div className="text-xs font-medium text-slate-400 mb-2">{t('products.workflows.agents') || 'AGENTS'}</div>
                        <div className="space-y-2 overflow-y-auto">
                          <div className="bg-blue-500/20 border border-blue-500/30 rounded p-2 cursor-pointer">
                            <div className="text-sm font-medium">Data Analyst</div>
                            <div className="text-xs text-slate-400">Processes & visualizes data</div>
                          </div>
                          <div className="bg-purple-500/20 border border-purple-500/30 rounded p-2 cursor-pointer">
                            <div className="text-sm font-medium">Customer Support</div>
                            <div className="text-xs text-slate-400">Handles customer inquiries</div>
                          </div>
                          <div className="bg-green-500/20 border border-green-500/30 rounded p-2 cursor-pointer">
                            <div className="text-sm font-medium">Content Writer</div>
                            <div className="text-xs text-slate-400">Creates marketing copy</div>
                          </div>
                          <div className="bg-slate-700/50 border border-slate-600 rounded p-2 cursor-pointer">
                            <div className="text-sm font-medium">+ Custom Agent</div>
                          </div>
                        </div>
                      </div>
                      
                      {}
                      <div className="col-span-2 bg-slate-900/50 rounded-lg border border-slate-700 p-3 flex flex-col">
                        <div className="text-xs font-medium text-slate-400 mb-2">{t('products.workflows.canvas') || 'WORKFLOW CANVAS'}</div>
                        <div className="flex-grow relative">
                          {}
                          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                            <div className="text-xs text-center">Data<br/>Processor</div>
                          </div>
                          <div className="absolute top-2/4 left-2/4 w-24 h-24 bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                            <div className="text-xs text-center">Support<br/>Agent</div>
                          </div>
                          <div className="absolute top-1/4 left-2/3 w-24 h-24 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center">
                            <div className="text-xs text-center">Content<br/>Creator</div>
                          </div>
                          
                          {}
                          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                            <line x1="30%" y1="35%" x2="50%" y2="60%" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4" />
                            <line x1="70%" y1="35%" x2="60%" y2="60%" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4" />
                          </svg>
                          
                          {}
                          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center">
                            <div className="text-xs text-center">Human Approval</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        */}
      </section>

      {/* Consulting Services: Custom AI Solutions */}
      <section id="consulting" className="container mx-auto px-4 py-20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('consulting.title')}</h2>
            <p className="text-slate-400">{t('consulting.description')}</p>
          </div>
        </FadeIn>

        {/* Examples of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FadeIn delay={0.1} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('consulting.digital')}</h3>
            <p className="text-slate-400">{t('consulting.digitalDesc')}</p>
          </FadeIn>
          

          <FadeIn delay={0.2} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('consulting.analytics')}</h3>
            <p className="text-slate-400">{t('consulting.analyticsDesc')}</p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">{t('consulting.process')}</h3>
            <p className="text-slate-400">{t('consulting.processDesc')}</p>
          </FadeIn>
        </div>

        {/* Our Process */}
        <h3 className="text-2xl font-bold mb-8 text-center">{t('consulting.ourProcess')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            {
              step: "01",
              title: t('consulting.discovery'),
              desc: t('consulting.discoveryDesc')
            },
            {
              step: "02",
              title: t('consulting.design'),
              desc: t('consulting.designDesc')
            },
            {
              step: "03",
              title: t('consulting.implementation'),
              desc: t('consulting.implementationDesc')
            },
            {
              step: "04",
              title: t('consulting.support'),
              desc: t('consulting.supportDesc')
            }
          ].map((phase, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-6 h-full bg-slate-800/50 border border-slate-700 rounded-xl">
                <div className="text-4xl text-blue-500 font-bold mb-4">{phase.step}</div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-400">{phase.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4">{t('consulting.benefits')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xs">✓</span>
              </div>
              <p className="text-slate-300">{t('consulting.benefit1')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 text-xs">✓</span>
              </div>
              <p className="text-slate-300">{t('consulting.benefit2')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Partners Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('security.title')}</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              {t('security.description')}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.openai'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/OpenAI-white-monoblossom.svg" alt="OpenAI Logo" width={140} height={40} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.anthropic'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/anthropic2.svg" alt="Anthropic Logo" width={140} height={40} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.gemini'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/gemini.svg" alt="Gemini Logo" width={140} height={40} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.google'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/gcp.svg" alt="Google Cloud Platform Logo" width={140} height={40} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.microsoft'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/azure.svg" alt="Microsoft Azure Logo" width={140} height={40} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              <div 
                className="relative" 
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  showTooltip(t('security.provider.aws'), rect.left + rect.width/2, rect.top);
                }}
                onMouseLeave={hideTooltip}
              >
                <Image src="/aws-logo.svg" alt="AWS Logo" width={140} height={40} className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>
          
          {/* Add subtle data flow in the background */}
          <div className="absolute inset-0 opacity-20">
            <DataFlowAnimation />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
                <p className="text-xl text-slate-300 mb-6">
                  {t('contact.description')}
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-white text-sm">{t('contact.feature1')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-white text-sm">{t('contact.feature2')}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-white text-sm">{t('contact.feature3')}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => openModal('demo')}
                    className="bg-white text-slate-900 hover:bg-slate-100 transition-colors py-3 px-8 rounded-full font-medium"
                  >
                    {t('contact.demo')}
                  </button>
                  <button 
                    onClick={() => openModal('contact')}
                    className="bg-transparent border border-white hover:bg-white/10 transition-colors py-3 px-8 rounded-full font-medium"
                  >
                    {t('chat.contactSales')}
                  </button>
                </div>
              </FadeIn>
            </div>
            <div className="md:w-1/3">
              <FloatingElement>
                <div className="aspect-square max-w-[300px] bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('contact.start')}</h3>
                    <p className="text-sm text-slate-300">{t('contact.startDesc')}</p>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}
