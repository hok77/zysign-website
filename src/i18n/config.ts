export const locales = ['en', 'ar', 'fr', 'de', 'es', 'it', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames = {
  en: '🇺🇸 English',
  ar: '🇸🇦 العربية',
  fr: '🇫🇷 Français',
  de: '🇩🇪 Deutsch',
  es: '🇪🇸 Español',
  it: '🇮🇹 Italiano',
  zh: '🇨🇳 中文',
} as const;

export const localeDirections = {
  en: 'ltr',
  ar: 'rtl',
  fr: 'ltr',
  de: 'ltr',
  es: 'ltr',
  it: 'ltr',
  zh: 'ltr',
} as const;