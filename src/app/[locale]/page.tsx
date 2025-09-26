import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n/config';
import { getAlibabaUrl, getAlibabaDomainDisplay } from '@/utils/alibaba';
import { Locale } from '@/i18n/config';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  return (
    <div className="min-h-screen">
      <Header messages={t.raw('nav')} />
      <Hero messages={t.raw('hero')} />
      
      {/* Alibaba Store Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('alibaba.title')}
              </h2>
              
              <p className="text-gray-600 mb-6 max-w-lg">
                {t('alibaba.description')}
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('alibaba.features.securePayment')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('alibaba.features.verifiedSupplier')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {t('alibaba.features.tradeAssurance')}
                </li>
              </ul>
              
              <a 
                href={getAlibabaUrl(locale)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors animate-pulse"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t('alibaba.visitStore')}
              </a>
            </div>
            <div className="md:w-5/12">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-1 bg-orange-100 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-xs text-gray-600">{getAlibabaDomainDisplay(locale)}</div>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">Alibaba Store</h3>
                    <p className="text-orange-100">Premium Signage Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">
            {t('common.trustedBy')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8">
                <div className="h-full w-24 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Products messages={t.raw('products')} />

      {/* Shipping Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('shipping.title')}
            </h2>
            
            <p className="text-gray-600 text-lg">
              {t('shipping.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('shipping.worldwide.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('shipping.worldwide.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('shipping.compliance.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('shipping.compliance.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('shipping.support.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('shipping.support.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600">{t('about.stats.yearsExperience')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <p className="text-gray-600">{t('about.stats.countriesServed')}</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">{t('about.stats.happyClients')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('caseStudies.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('caseStudies.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500">
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">+300% Traffic</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('caseStudies.restaurant.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('caseStudies.restaurant.description')}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('caseStudies.restaurant.location')}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500">
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">+250% Sales</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('caseStudies.fashion.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('caseStudies.fashion.description')}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('caseStudies.fashion.location')}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-red-500">
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">+400% Visibility</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {t('caseStudies.corporate.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('caseStudies.corporate.description')}
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('caseStudies.corporate.location')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ messages={t.raw('faq')} />

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            
            <p className="text-blue-100 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-center hover:bg-blue-50 transition-colors font-medium">
                {t('cta.requestQuote')}
              </button>
              <a 
                href={getAlibabaUrl(locale)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-3 rounded-full text-center hover:bg-orange-600 transition-colors font-medium flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 17h16M7 13v-2a1 1 0 011-1h10a1 1 0 011 1v2M7 13h10m-5 8a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                {t('cta.shopAlibaba')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer messages={{ ...t.raw('footer'), nav: t.raw('nav') }} />
    </div>
  );
}