'use client';

import { useState } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { useLocale } from 'next-intl';
import { getAlibabaUrl } from '@/utils/alibaba';
import { Locale } from '@/i18n/config';
import Image from 'next/image';

interface ProductsProps {
  messages: {
    title: string;
    subtitle: string;
    filters: {
      global: string;
      northAmerica: string;
      europe: string;
      mena: string;
    };
    ledSigns: {
      title: string;
      description: string;
      customizable: string;
    };
    neonSigns: {
      title: string;
      description: string;
      customDesigns: string;
    };
    outdoorSigns: {
      title: string;
      description: string;
      weatherproof: string;
    };
    viewDetails: string;
    viewAllProducts: string;
  };
}

const products = [
  {
    id: 'led',
    image: 'https://picsum.photos/id/1060/600/400',
    price: '$199 - $1,299',
    regions: ['global', 'na', 'eu', 'mena']
  },
  {
    id: 'neon',
    image: 'https://picsum.photos/id/1062/600/400',
    price: '$149 - $899',
    regions: ['global', 'na', 'eu', 'mena']
  },
  {
    id: 'outdoor',
    image: 'https://picsum.photos/id/1068/600/400',
    price: '$249 - $1,599',
    regions: ['global', 'na', 'eu', 'mena']
  }
];

export default function Products({ messages }: ProductsProps) {
  const [activeFilter, setActiveFilter] = useState('global');
  const locale = useLocale() as Locale;

  const filters = [
    { id: 'global', label: messages.filters.global },
    { id: 'na', label: messages.filters.northAmerica },
    { id: 'eu', label: messages.filters.europe },
    { id: 'mena', label: messages.filters.mena }
  ];

  const getProductInfo = (productId: string) => {
    switch (productId) {
      case 'led':
        return {
          title: messages.ledSigns.title,
          description: messages.ledSigns.description,
          feature: messages.ledSigns.customizable
        };
      case 'neon':
        return {
          title: messages.neonSigns.title,
          description: messages.neonSigns.description,
          feature: messages.neonSigns.customDesigns
        };
      case 'outdoor':
        return {
          title: messages.outdoorSigns.title,
          description: messages.outdoorSigns.description,
          feature: messages.outdoorSigns.weatherproof
        };
      default:
        return { title: '', description: '', feature: '' };
    }
  };

  const filteredProducts = products.filter(product => 
    activeFilter === 'global' || product.regions.includes(activeFilter)
  );

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {messages.title}
          </h2>
          
          <p className="text-gray-600 text-lg mb-8">
            {messages.subtitle}
          </p>
          
          {/* Filter Buttons */}
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productInfo = getProductInfo(product.id);
            
            return (
              <div 
                key={product.id}
                className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={product.image}
                    alt={`${productInfo.title} signage`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <button className="text-white inline-flex items-center hover:underline">
                        {messages.viewDetails}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {productInfo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {productInfo.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{product.price}</span>
                    <div className="flex items-center text-sm text-gray-600">
                      <Check className="w-4 h-4 mr-1 text-green-500" />
                      {productInfo.feature}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href={getAlibabaUrl(locale)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-500 font-medium hover:underline"
          >
            {messages.viewAllProducts}
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}