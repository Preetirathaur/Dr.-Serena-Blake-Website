'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-blue-900 text-lg font-light"
      >
        <span className="flex items-center">
          <ChevronDown
            className={`mr-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            size={20}
          />
          {question}
        </span>
      </button>
      {isOpen && <p className="text-gray-700 mt-2 ml-7 text-base font-light">{answer}</p>}
    </div>
  );
}
