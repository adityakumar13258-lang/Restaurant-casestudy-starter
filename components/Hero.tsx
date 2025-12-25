import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#f4f1ea] overflow-hidden min-h-[80vh] flex items-center">
      {/* Topographic Pattern Background (SVG) */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23a8a29e' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
           }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Circular Image with Decorative Elements */}
          <div className="relative order-2 md:order-1 flex justify-center md:justify-start">
             {/* Main Image Container */}
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
               <img
                 src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop"
                 alt="Delicious Indian Dish"
                 className="w-full h-full object-cover"
               />
             </div>
             
             {/* Decorative Background Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-stone-400 rounded-full animate-[spin_60s_linear_infinite]"></div>

             {/* 50% OFF Badge - Top Right of Image */}
             <div className="absolute -top-4 -right-4 md:right-10 z-20 bg-brand-500 text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-lg transform rotate-12">
               <span className="text-2xl sm:text-3xl font-bold leading-none">50%</span>
               <span className="text-sm sm:text-base font-medium uppercase">OFF</span>
             </div>
          </div>

          {/* Right Side: Typography & CTA */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-sans font-bold text-brand-500 uppercase leading-[0.85] tracking-tight mb-2">
              Taste <br />
              <span className="text-brand-500">Tradition</span>
            </h2>
            
            <p className="mt-6 text-stone-600 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience the authentic flavors of India. Fresh ingredients, organic spices, and recipes passed down through generations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              {/* Primary CTA: Call Now */}
              <a 
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center gap-2 bg-[#5d4037] text-white px-8 py-4 rounded-none uppercase font-bold tracking-widest hover:bg-[#4e342e] transition-all shadow-lg hover:shadow-xl group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Call Now</span>
              </a>
              
              {/* Secondary CTA: WhatsApp */}
              <a 
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-[#5d4037] text-[#5d4037] px-8 py-3.5 rounded-none uppercase font-bold tracking-widest hover:bg-[#5d4037] hover:text-white transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Vertical Line Decoration (Left) */}
      <div className="hidden lg:block absolute left-12 top-20 bottom-20 w-1 bg-[#5d4037] opacity-20"></div>
    </div>
  );
};

export default Hero;