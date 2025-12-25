import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Contact Us</h3>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-brand-500 shrink-0 mt-1" />
              <p className="leading-relaxed">{RESTAURANT_INFO.address}</p>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-500 shrink-0" />
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-brand-500 shrink-0" />
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                className="hover:text-white transition-colors"
              >
                {RESTAURANT_INFO.whatsapp}
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Opening Hours</h3>
            <div className="space-y-4">
              {RESTAURANT_INFO.hours.map((hour, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hour}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="h-64 rounded-lg overflow-hidden bg-stone-800 border border-stone-700">
             <iframe 
               src={RESTAURANT_INFO.mapsUrl}
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               title="Restaurant Location"
             ></iframe>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone-800 py-6 text-center text-sm text-stone-500">
        <p>&copy; {new Date().getFullYear()} {RESTAURANT_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;