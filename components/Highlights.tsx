import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

const Highlights: React.FC = () => {
  // Get top 6 popular items
  const popularItems = MENU_ITEMS.filter(item => item.isPopular).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-4">
            Our Signature Dishes
          </h2>
          <div className="h-1 w-24 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience the most loved authentic Indian flavors, crafted with passion and traditional spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 font-serif">{item.name}</h3>
                  <span className="bg-brand-100 text-brand-800 text-sm font-bold px-2 py-1 rounded">
                    ₹{item.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-3 text-yellow-500 text-xs font-semibold uppercase tracking-wide">
                  <Star className="w-3 h-3 fill-current" /> Bestseller
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  {item.isVegetarian ? (
                    <span className="flex items-center text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                      <span className="w-2 h-2 rounded-full bg-green-600 mr-1"></span> Veg
                    </span>
                  ) : (
                    <span className="flex items-center text-red-700 bg-red-50 px-2 py-1 rounded-full border border-red-200">
                      <span className="w-2 h-2 rounded-full bg-red-600 mr-1"></span> Non-Veg
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="text-orange-600 bg-orange-50 px-2 py-1 rounded-full border border-orange-200">
                      Spicy
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-brand-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors"
          >
            Explore Full Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Highlights;