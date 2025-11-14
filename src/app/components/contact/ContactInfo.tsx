import { Mail, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <p className="text-sm uppercase tracking-widest text-emerald-200 mb-4">
        WE'RE HERE TO HELP YOU
      </p>

      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
        Let us know what you want
      </h2>

      <p className="text-emerald-100 mb-10 leading-relaxed">
        Are you looking for the best and most affordable household products?
        Reach out to us.
      </p>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
            <Mail size={20} className="text-white" />
          </div>
          <a
            href="mailto:soluven****@gmail.com"
            className="text-lg font-medium hover:underline text-white/90"
          >
            supermarket@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg">
            <Phone size={20} className="text-white" />
          </div>
          <a
            href="tel:+1234567890"
            className="text-lg font-medium hover:underline text-white/90"
          >
            +2348107268468
          </a>
        </div>
      </div>
    </div>
  );
}
