// components/faq/FAQHeader.tsx
import React from 'react';
import ContactCTA from './ContactCTA';

export default function FAQHeader() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-purple-500"></span>
          <span className="text-sm text-purple-600 font-medium">Ontology best: SaaS analytics</span>
        </div>
        <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
          Frequently asked questions
        </h2>
      </div>

      <ContactCTA />
    </div>
  );
}
