import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50 py-3 border-b border-stone-100 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Logo + Divider + Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
                <h1 className="text-2xl md:text-3xl font-bold text-brand-500 uppercase tracking-tighter font-sans group-hover:text-brand-600 transition-colors">
                  {RESTAURANT_INFO.name.toUpperCase()}
                </h1>
            </Link>

            {/* Vertical Divider (Desktop only) */}
            <div className="hidden md:block h-8 w-px bg-stone-800 mx-8 opacity-80"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-stone-800'
                      : 'text-stone-400 hover:text-brand-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: CTAs */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Secondary CTA: WhatsApp */}
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500 hover:text-green-600 font-bold uppercase tracking-wider text-xs lg:text-sm transition-colors"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">WhatsApp Us</span>
            </a>

            {/* Primary CTA: Call Now */}
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full font-bold uppercase tracking-wide text-xs lg:text-sm hover:bg-brand-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone size={16} fill="currentColor" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-600 hover:bg-brand-50 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl left-0 top-full pb-4">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-lg font-bold uppercase tracking-wide border-b border-gray-50 last:border-0 ${
                  isActive(link.path)
                    ? 'text-brand-600'
                    : 'text-stone-500 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile CTAs */}
          <div className="px-6 space-y-3 mt-4">
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full bg-brand-500 text-white py-3 rounded-md font-bold uppercase tracking-wide shadow-sm"
            >
              <Phone size={20} fill="currentColor" /> Call Now
            </a>
            <a 
              href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-50 text-green-700 py-3 rounded-md font-bold uppercase tracking-wide border border-green-200"
            >
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;