import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Shield, Clock, ChevronRight, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Custom Decks', path: '/custom-decks' },
    { name: 'Screened Porches', path: '/screened-porches' },
    { name: 'Free Consultation', path: '/consultation' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility / Trust Banner */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Trust badges */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Fully Insured &amp; NC Code Compliant</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Fuquay-Varina • Holly Springs • Apex • Garner</span>
            </span>
          </div>

          {/* Quick Contact & Facebook */}
          <div className="flex items-center gap-4 ml-auto text-[11px] sm:text-xs">
            <a 
              href="tel:9198882931" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>(919) 888-2931</span>
            </a>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors font-medium"
            >
              <span>Follow Our Builds on Facebook</span>
              <ChevronRight className="w-3 h-3 text-amber-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200' 
          : 'bg-white py-4 border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 font-heading tracking-wide ${
                    isActive
                      ? 'text-amber-600 bg-amber-50 shadow-sm font-bold'
                      : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/consultation"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Schedule Free Estimate</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/consultation"
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-500 shadow-sm"
            >
              Estimate
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                      isActive
                        ? 'text-amber-600 bg-amber-50 font-bold border-l-4 border-amber-500'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <Link
                  to="/consultation"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md text-center"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Schedule Free Estimate</span>
                </Link>

                <a
                  href="tel:9198882931"
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 text-center"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call (919) 888-2931</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
