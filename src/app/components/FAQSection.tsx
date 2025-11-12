// components/FAQSection.tsx
import React from 'react';
import FAQHeader from './faq/FAQHeader';
import FAQList from './faq/FAQList';
import { MOCK_FAQS } from '../lib/mockFaqs';

export default function FAQSection() {
  return (
    <section className="bg-[#f8f5ff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left column */}
        <FAQHeader />

        {/* Right column */}
        <FAQList faqs={MOCK_FAQS} />
      </div>
    </section>
  );
}
