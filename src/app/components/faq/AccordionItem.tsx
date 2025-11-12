'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-gray-200 rounded-xl bg-white shadow-sm transition-all ${
        isOpen ? 'ring-1 ring-purple-300' : ''
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-5 py-4 text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-purple-500 transition-transform" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="px-5 pb-4 text-sm text-gray-600 border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}
