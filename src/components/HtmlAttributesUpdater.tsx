'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { localeDirections, type Locale } from '@/i18n/config';

export default function HtmlAttributesUpdater() {
  const locale = useLocale() as Locale;

  useEffect(() => {
    const direction = localeDirections[locale] || 'ltr';
    const htmlElement = document.documentElement;
    
    // Update lang attribute
    htmlElement.setAttribute('lang', locale);
    
    // Update dir attribute
    htmlElement.setAttribute('dir', direction);
    
  }, [locale]);

  return null;
}