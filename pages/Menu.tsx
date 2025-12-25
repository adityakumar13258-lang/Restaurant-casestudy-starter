import React, { useState } from 'react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../constants';
import { MenuCategory } from '../types';

const MenuPage: React.FC = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories
  const categories = ['All', ...Object.values(MenuCategory)];

  // Filter items based on active category
  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Group items by category for the 'All' view to maintain structure
  const groupedItems = activeCategory === 'All'
    ? Object.values(MenuCategory).map(cat => ({
        category: cat,
        items: filteredItems.filter(item => item.category === cat)
      })).filter(group => group.items.length > 0)
    : [{ category: activeCategory, items: filteredItems }];

  return (
    <div className="min-h-screen bg-stone-50 animate-in slide-in-from-bottom-4 duration-500">
      {/* Menu Header */}
      <div className="bg-brand-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Menu</h1>
        <p className="text-brand-100 max-w-2xl mx-auto">
          Explore our wide range of authentic delicacies prepared with love and tradition.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white border-brand-600 shadow-md'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items List */}
        <div className="space-y-12">
          {groupedItems.map((group) => (
            <div key={group.category} className="scroll-mt-24">
              <h2 className="text-2xl font-serif font-bold text-brand-900 mb-6 border-b-2 border-brand-100 pb-2 inline-block pr-8">
                {group.category}
              </h2>
              
              <div className="grid gap-6">
                {group.items.map((item) => (
                  <div 
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-between sm:items-start bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-grow pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        {/* Veg/Non-Veg Indicator */}
                        <span className={`flex-shrink-0 w-4 h-4 border ${item.isVegetarian ? 'border-green-600' : 'border-red-600'} p-0.5 flex items-center justify-center`}>
                           <span className={`w-2 h-2 rounded-full ${item.isVegetarian ? 'bg-green-600' : 'bg-red-600'}`}></span>
                        </span>
                        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                        {item.isSpicy && (
                           <span className="text-[10px] uppercase font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-100">Spicy</span>
                        )}
                        {item.isPopular && (
                           <span className="text-[10px] uppercase font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">Star</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm leading-snug">{item.description}</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex-shrink-0 flex items-center justify-between sm:flex-col sm:items-end w-full sm:w-auto">
                      <span className="text-lg font-bold text-brand-700">₹{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
             <div className="text-center py-12 text-gray-500">
               No items found in this category.
             </div>
          )}
        </div>

        {/* Download / Contact CTA at bottom of menu */}
        <div className="mt-16 text-center bg-brand-50 rounded-xl p-8 border border-brand-100">
          <p className="text-gray-800 font-medium mb-4">Have allergies or special requests?</p>
          <a
             href={`tel:${RESTAURANT_INFO.phone}`}
             className="inline-block bg-white border border-brand-300 text-brand-800 px-6 py-2 rounded-full font-semibold hover:bg-brand-50 transition-colors"
          >
            Call us at {RESTAURANT_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;