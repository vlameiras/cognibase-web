"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function DynamicTitle() {
  const { t } = useLanguage();

  useEffect(() => {
    // Atualiza o título da página quando o idioma mudar
    document.title = t('site.title');
  }, [t]);

  return null;
}
