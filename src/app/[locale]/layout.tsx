import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { localeDirections, type Locale } from '@/i18n/config';
import { notFound } from 'next/navigation';
import HtmlAttributesUpdater from '@/components/HtmlAttributesUpdater';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  // Validate locale
  if (!locale || !['en', 'ar', 'fr', 'de', 'es', 'it', 'zh'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = localeDirections[locale as Locale];

  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <HtmlAttributesUpdater />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}