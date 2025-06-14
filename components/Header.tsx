'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
    <nav className="container mx-auto py-6 px-4 flex justify-between items-center sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo_transparent.png" alt="ZettaBase Logo" width={48} height={48} className="h-12 w-auto" />
          <span className="text-[#0078FF] text-xl font-semibold">ZettaBase</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <Link href="/#why" className="hover:text-blue-400 transition-colors font-medium">{t('nav.why')}</Link>
        <Link href="/#about" className="hover:text-blue-400 transition-colors font-medium">{t('nav.about')}</Link>
        <div className="relative group">
          <button className="hover:text-blue-400 transition-colors font-medium flex items-center gap-1.5">
            {t('footer.solutions')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <Link href="/#products" className="block px-4 py-2 hover:bg-slate-700 text-sm rounded-t-lg">{t('footer.internal')}</Link>
            <Link href="/#public" className="block px-4 py-2 hover:bg-slate-700 text-sm">{t('footer.public')}</Link>
            <Link href="/#consulting" className="block px-4 py-2 hover:bg-slate-700 text-sm rounded-b-lg">{t('footer.custom')}</Link>
          </div>
        </div>
        <div className="relative group">
          <button className={`hover:text-blue-400 transition-colors font-medium flex items-center gap-1.5 ${pathname?.startsWith('/public-administration') || pathname?.startsWith('/e-commerce-retail') || pathname?.startsWith('/healthcare') || pathname?.startsWith('/finance') || pathname?.startsWith('/insurance') || pathname?.startsWith('/legal') || pathname?.startsWith('/real-estate') ? 'text-blue-400' : ''}`}>
            {t('footer.industries')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute left-0 mt-2 w-56 bg-slate-800 rounded-lg shadow-lg border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <Link 
              href="/healthcare" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm rounded-t-lg ${pathname?.startsWith('/healthcare') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.healthcare')}
            </Link>
            <Link 
              href="/finance" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm ${pathname?.startsWith('/finance') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.finance')}
            </Link>
            <Link 
              href="/insurance" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm ${pathname?.startsWith('/insurance') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.insurance')}
            </Link>
            <Link 
              href="/legal" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm ${pathname?.startsWith('/legal') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.legal')}
            </Link>
            <Link 
              href="/real-estate" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm ${pathname?.startsWith('/real-estate') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.realEstate')}
            </Link>
            <Link 
              href="/e-commerce-retail" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm ${pathname?.startsWith('/e-commerce-retail') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.ecommerce')}
            </Link>
            <Link 
              href="/public-administration" 
              className={`block px-4 py-2 hover:bg-slate-700 text-sm rounded-b-lg ${pathname?.startsWith('/public-administration') ? 'bg-slate-700 font-bold' : ''}`}
            >
              {t('footer.publicAdmin')}
            </Link>
          </div>
        </div>
        {/* Contact link moved to the right side */}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative" tabIndex={0} onBlur={() => setIsLangMenuOpen(false)}>
          <button 
            className="flex items-center gap-1.5 hover:bg-slate-800 transition-colors py-2 px-3 rounded-full text-sm border border-slate-700/50"
            onClick={() => setIsLangMenuOpen(prev => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{language.toUpperCase()}</span>
          </button>
          
          {/* Dropdown */}
          <div className={`absolute right-0 mt-2 w-40 bg-slate-800 rounded-lg shadow-lg border border-slate-700 transition-all duration-200 z-50 ${isLangMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="p-1">
              <button 
                onClick={() => { setLanguage('en'); setIsLangMenuOpen(false); }} 
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${language === 'en' ? 'bg-blue-600' : 'hover:bg-slate-700'} transition-colors`}
              >
                English
              </button>
              <button 
                onClick={() => { setLanguage('pt'); setIsLangMenuOpen(false); }} 
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${language === 'pt' ? 'bg-blue-600' : 'hover:bg-slate-700'} transition-colors`}
              >
                Português
              </button>
            </div>
          </div>
        </div>
        
        <Link 
          href="/#contact" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all py-2 px-6 rounded-full font-medium shadow-lg shadow-blue-900/20 text-white hidden md:block"
        >
          {t('nav.contactUs')}
        </Link>
        
        <button 
          className="md:hidden z-50" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/95 z-40 md:hidden flex flex-col pt-24 pb-6 px-6 overflow-y-auto">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/#why" 
              className="text-lg py-2 border-b border-slate-800 hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.why')}
            </Link>
            <Link 
              href="/#about" 
              className="text-lg py-2 border-b border-slate-800 hover:text-blue-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            
            {/* Solutions Submenu */}
            <div className="py-2 border-b border-slate-800">
              <div className="text-lg font-medium mb-2">{t('footer.solutions')}</div>
              <div className="pl-4 flex flex-col space-y-3">
                <Link 
                  href="/#products" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.internal')}
                </Link>
                <Link 
                  href="/#public" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.public')}
                </Link>
                <Link 
                  href="/#consulting" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.custom')}
                </Link>
              </div>
            </div>
            
            {/* Industries Submenu */}
            <div className="py-2 border-b border-slate-800">
              <div className="text-lg font-medium mb-2">{t('footer.industries')}</div>
              <div className="pl-4 flex flex-col space-y-3">
                <Link 
                  href="/healthcare" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.healthcare')}
                </Link>
                <Link 
                  href="/finance" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.finance')}
                </Link>
                <Link 
                  href="/insurance" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.insurance')}
                </Link>
                <Link 
                  href="/legal" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.legal')}
                </Link>
                <Link 
                  href="/real-estate" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.realEstate')}
                </Link>
                <Link 
                  href="/e-commerce-retail" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.ecommerce')}
                </Link>
                <Link 
                  href="/public-administration" 
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('footer.publicAdmin')}
                </Link>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="py-2 border-b border-slate-800">
              <div className="text-lg font-medium mb-2">Language</div>
              <div className="pl-4 flex flex-col space-y-3">
                <button 
                  onClick={() => { setLanguage('en'); (document.activeElement as HTMLElement)?.blur(); }} 
                  className={`text-left ${language === 'en' ? 'text-blue-400 font-medium' : 'text-slate-300'}`}
                >
                  English
                </button>
                <button 
                  onClick={() => { setLanguage('pt'); (document.activeElement as HTMLElement)?.blur(); }} 
                  className={`text-left ${language === 'pt' ? 'text-blue-400 font-medium' : 'text-slate-300'}`}
                >
                  Português
                </button>
              </div>
            </div>
            
            {/* Contact Button */}
            <Link 
              href="/#contact" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all py-3 px-6 rounded-full font-medium shadow-lg shadow-blue-900/20 text-white text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contactUs')}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
