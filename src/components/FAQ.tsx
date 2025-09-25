'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  messages: {
    title: string;
    subtitle: string;
    questions: {
      customDesign: {
        question: string;
        answer: string;
      };
      productionTime: {
        question: string;
        answer: string;
      };
      middleEast: {
        question: string;
        answer: string;
      };
    };
  };
}

export default function FAQ({ messages }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (item: string) => {
    setOpenItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const faqItems = [
    {
      id: 'customDesign',
      question: messages.questions.customDesign.question,
      answer: messages.questions.customDesign.answer
    },
    {
      id: 'productionTime',
      question: messages.questions.productionTime.question,
      answer: messages.questions.productionTime.answer
    },
    {
      id: 'middleEast',
      question: messages.questions.middleEast.question,
      answer: messages.questions.middleEast.answer
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {messages.title}
          </h2>
          
          <p className="text-gray-600 text-lg">
            {messages.subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item) => {
              const isOpen = openItems.includes(item.id);
              
              return (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex justify-between items-center focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-medium pr-8">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`mt-4 text-gray-600 transition-all duration-300 ${
                      isOpen 
                        ? 'opacity-100 max-h-96' 
                        : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}