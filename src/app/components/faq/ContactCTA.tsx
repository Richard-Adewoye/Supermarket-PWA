'use client';
import React from 'react';

export default function ContactCTA() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:support@ontology.com';
  };

  return (
    <div className="bg-purple-50 rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Still have a question?
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        We’re here to help! Reach out to our team and we’ll get back to you soon.
      </p>
      <button
        onClick={handleEmailClick}
        className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
      >
        Send email
      </button>
    </div>
  );
}
