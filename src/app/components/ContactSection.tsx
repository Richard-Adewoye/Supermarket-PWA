'use client';

import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto rounded-3xl shadow-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Information Panel */}
        <div className="p-10 sm:p-14 lg:p-16 bg-gradient-to-br from-emerald-500 via-green-600 to-green-700 text-white flex flex-col justify-center">
          <ContactInfo />
        </div>

        {/* Right Contact Form */}
        <div className="p-10 sm:p-14 lg:p-16 bg-white rounded-r-3xl shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}   
