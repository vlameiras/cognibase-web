'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './animations';
import KnowledgeBaseChat from './KnowledgeBaseChat';
import { useLanguage } from '../context/LanguageContext';

export default function UseCases() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'public' | 'private'>('public');
  
  const tabVariants = {
    inactive: { opacity: 0.6 },
    active: { opacity: 1 }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="w-full py-12">
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('kb.title')}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            {t('kb.description')}
          </p>
        </div>
      </FadeIn>
      
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 md:p-10 max-w-5xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800 p-1 rounded-full flex">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'public' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('public')}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === 'public' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              {t('kb.public')}
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'private' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('private')}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === 'private' ? 'bg-blue-600 text-white' : 'text-slate-400'
              }`}
            >
              {t('kb.internal')}
            </motion.button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
          >
            {activeTab === 'public' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t('kb.customer.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.customer.point1')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.customer.point2')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.customer.point3')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.customer.point4')}</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <KnowledgeBaseChat isPublic={true} />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{t('kb.internal.title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.internal.point1')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.internal.point2')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.internal.point3')}</p>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-xs">✓</span>
                      </div>
                      <p>{t('kb.internal.point4')}</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <KnowledgeBaseChat isPublic={false} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
