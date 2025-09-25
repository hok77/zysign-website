'use client';

import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  messages: {
    title: string;
    subtitle: string;
    shortAnswer: string;
    exploreProducts: string;
    shopOnAlibaba: string;
    trustedBy: string;
  };
}

export default function Hero({ messages }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Short Answer */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">
                {messages.shortAnswer}
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span 
                dangerouslySetInnerHTML={{
                  __html: messages.title.replace(
                    '<highlight>',
                    '<span class="text-primary">'
                  ).replace('</highlight>', '</span>')
                }}
              />
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {messages.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="bg-primary text-white px-8 py-3 rounded-full text-center hover:bg-primary/90 transition-colors"
              >
                {messages.exploreProducts}
              </button>
              <a 
                href="https://zysign.alibaba.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-3 rounded-full text-center hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {messages.shopOnAlibaba}
              </a>
            </div>
            
            <div className="mt-12 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-green-600"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-pink-600"></div>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-2 font-medium">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">
                  {messages.trustedBy}
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/id/1076/800/600" 
                alt="Modern signage display for retail store"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-teal-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}