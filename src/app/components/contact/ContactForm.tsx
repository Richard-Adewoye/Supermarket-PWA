'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Form data logged to console.');
  };

  const inputClasses =
    'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Jane Smith"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          name="email"
          placeholder="jane@themes.com"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Home Address</label>
        <select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select...</option>
          <option value="manufacturing">Home Address</option>
          <option value="agriculture">Office Address</option>
          <option value="pharmaceuticals">Drop-off Location</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          placeholder="Type your message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition shadow-md hover:shadow-lg"
      >
        Get a Solution <ArrowRight size={18} />
      </button>
    </form>
  );
}
