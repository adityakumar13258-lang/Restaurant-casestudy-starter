import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const StickyActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-brand-600 text-white rounded-full shadow-lg hover:bg-brand-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        aria-label="Call Restaurant"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default StickyActions;