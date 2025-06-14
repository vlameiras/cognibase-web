"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext';
import { useModal } from '@/context/ModalContext';

export default function Footer() {
  const { t } = useLanguage();
  const { openModal } = useModal();
  
  return (
    <footer className="bg-slate-900 border-t border-slate-800/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and description */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo_transparent.png" alt="ZettaBase Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-[#0078FF] text-xl font-semibold">ZettaBase</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              {t('footer.companyDescription')}
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
          
          {/* Footer sections aligned to the right */}
          <div className="md:w-2/3 flex justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
              <div>
                <h3 className="font-semibold mb-4">{t('footer.solutions')}</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/#products" className="hover:text-white transition-colors">{t('footer.internal')}</Link></li>
                  <li><Link href="/#products" className="hover:text-white transition-colors">{t('footer.public')}</Link></li>
                  <li><Link href="/#consulting" className="hover:text-white transition-colors">{t('footer.custom')}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/#about" className="hover:text-white transition-colors">{t('footer.aboutZettabase')}</Link></li>
                  <li><button onClick={() => openModal('contact')} className="hover:text-white transition-colors text-left w-full">{t('footer.contact')}</button></li>
                  <li><Link href="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">{t('footer.industries')}</h3>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/healthcare" className="hover:text-white transition-colors">{t('footer.healthcare')}</Link></li>
                  <li><Link href="/finance" className="hover:text-white transition-colors">{t('footer.finance')}</Link></li>
                  <li><Link href="/insurance" className="hover:text-white transition-colors">{t('footer.insurance')}</Link></li>
                  <li><Link href="/legal" className="hover:text-white transition-colors">{t('footer.legal')}</Link></li>
                  <li><Link href="/real-estate" className="hover:text-white transition-colors">{t('footer.realEstate')}</Link></li>
                  <li><Link href="/e-commerce-retail" className="hover:text-white transition-colors">{t('footer.ecommerce')}</Link></li>
                  <li><Link href="/public-administration" className="hover:text-white transition-colors">{t('footer.publicAdmin')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm">
            &copy;{t('footer.rights').replace('{year}', new Date().getFullYear().toString())}
          </div>
        </div>
      </div>
    </footer>
  );
}
