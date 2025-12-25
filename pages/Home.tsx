import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';

const HomePage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Highlights />
      
      {/* Mini About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">
            A Culinary Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At <strong>The Saffron Table</strong>, we believe that food is more than just sustenance—it's an emotion. 
            From the bustling streets of Mumbai to the royal kitchens of Lucknow, our menu is a carefully curated 
            tapestry of India's diverse culinary heritage. We use fresh, locally-sourced ingredients and age-old 
            techniques to bring authentic flavors to your plate.
          </p>
          <div className="flex justify-center gap-4">
             <div className="w-16 h-1 bg-brand-500 rounded-full"></div>
             <div className="w-4 h-1 bg-brand-300 rounded-full"></div>
             <div className="w-4 h-1 bg-brand-200 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;