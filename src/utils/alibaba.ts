import { Locale } from '@/i18n/config';

export function getAlibabaUrl(locale: Locale, path: string = ''): string {
  const baseUrls: Record<Locale, string> = {
    en: 'https://cdzywh.en.alibaba.com',
    zh: 'https://cdzywh.en.alibaba.com',
    de: 'https://cdzywh.en.alibaba.com/de_DE/',
    es: 'https://cdzywh.en.alibaba.com/es_ES/',
    fr: 'https://cdzywh.en.alibaba.com/fr_FR/',
    it: 'https://cdzywh.en.alibaba.com/it_IT/',
    ar: 'https://cdzywh.en.alibaba.com/ar_SA/',
  };

  const baseUrl = baseUrls[locale];
  return path ? `${baseUrl}${path}` : baseUrl;
}

export function getAlibabaDomainDisplay(locale: Locale): string {
  const domainMappings: Record<Locale, string> = {
    en: 'cdzywh.en.alibaba.com',
    zh: 'cdzywh.en.alibaba.com',
    de: 'cdzywh.en.alibaba.com/de_DE/',
    es: 'cdzywh.en.alibaba.com/es_ES/',
    fr: 'cdzywh.en.alibaba.com/fr_FR/',
    it: 'cdzywh.en.alibaba.com/it_IT/',
    ar: 'cdzywh.en.alibaba.com/ar_SA/',
  };

  return domainMappings[locale];
}