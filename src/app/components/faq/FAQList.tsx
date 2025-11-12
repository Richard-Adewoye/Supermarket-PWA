'use client';
import React from 'react';
import AccordionItem from './AccordionItem';

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQList({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
