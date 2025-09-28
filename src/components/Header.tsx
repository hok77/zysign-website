'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';
import { getAlibabaUrl } from '@/utils/alibaba';

interface HeaderProps {
  messages: {
    home: string;
    products: string;
    about: string;
    caseStudies: string;
    faq: string;
    contact: string;
    alibabaStore: string;
    getQuote: string;
  };
}

export default function Header({ messages }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const changeLanguage = (newLocale: string) => {
    // Use next-intl's router to properly handle locale changes
    router.push(pathname, { locale: newLocale });
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2"
          >
            <img 
              src="/zy.logo.png" 
              alt="ZySign Logo" 
              className="h-20 w-auto select-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.home}
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.products}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.about}
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.caseStudies}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.faq}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark hover:text-primary transition-colors"
            >
              {messages.contact}
            </button>
            <a 
              href={getAlibabaUrl(locale)} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-orange-500 hover:text-orange-600 transition-colors"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {messages.alibabaStore}
            </a>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <select
                value={locale}
                onChange={(e) => changeLanguage(e.target.value)}
                className="appearance-none bg-white text-sm border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200"
              >
                {locales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
              <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              {messages.getQuote}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3 space-y-3">
              <button 
                onClick={() => scrollToSection('home')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.home}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.products}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.about}
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.caseStudies}
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.faq}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block py-2 text-dark hover:text-primary transition-colors w-full text-left"
              >
                {messages.contact}
              </button>
              <a 
                href={getAlibabaUrl(locale)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-2 text-orange-500 hover:text-orange-600 transition-colors"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {messages.alibabaStore}
              </a>
              
              {/* Mobile Language Selector */}
              <div className="pt-2 border-t">
                <div className="relative">
                  <select
                    value={locale}
                    onChange={(e) => changeLanguage(e.target.value)}
                    className="appearance-none bg-white text-sm border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none shadow-sm hover:border-gray-300 transition-all duration-200 w-full"
                  >
                    {locales.map((loc) => (
                      <option key={loc} value={loc}>
                        {localeNames[loc]}
                      </option>
                    ))}
                  </select>
                  <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="pt-2 border-t">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors"
                >
                  {messages.getQuote}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}