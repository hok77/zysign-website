'use client';

import { ShoppingCart, Facebook, Instagram, Twitter, Linkedin, MapPin } from 'lucide-react';
import { useLocale } from 'next-intl';
import { getAlibabaUrl } from '@/utils/alibaba';
import { Locale } from '@/i18n/config';

interface FooterProps {
  messages: {
    description: string;
    quickLinks: string;
    shoppingOptions: string;
    regionalOffices: string;
    locations: {
      usa: string;
      eu: string;
      mena: string;
    };
    legal: {
      privacyPolicy: string;
      termsOfService: string;
      shippingInfo: string;
    };
    copyright: string;
    nav: {
      home: string;
      products: string;
      about: string;
      faq: string;
      alibabaStore: string;
      getQuote: string;
    };
  };
}

export default function Footer({ messages }: FooterProps) {
  const locale = useLocale() as Locale;
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold mb-6 inline-block hover:text-blue-400 transition-colors"
            >
              ZySign
            </button>
            <p className="text-gray-400 mb-6">
              {messages.description}
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {messages.quickLinks}
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.nav.products}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.nav.faq}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Shopping Options */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {messages.shoppingOptions}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={getAlibabaUrl(locale)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <ShoppingCart className="w-4 h-4 mr-2 text-orange-500" />
                  {messages.nav.alibabaStore}
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {messages.nav.getQuote}
                </button>
              </li>
            </ul>
          </div>
          
          {/* Regional Offices */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              {messages.regionalOffices}
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                {messages.locations.usa}
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                {messages.locations.eu}
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-blue-600 flex-shrink-0" />
                {messages.locations.mena}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              {messages.copyright}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {messages.legal.privacyPolicy}
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {messages.legal.termsOfService}
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                {messages.legal.shippingInfo}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}