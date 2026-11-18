import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  Menu, 
  X, 
  ShieldCheck, 
  MapPin, 
  ChevronRight,
  ExternalLink,
  Hammer
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Custom Decks', path: '/custom-decks' },
    { name: 'Screened Porches', path: '/screened-porches' },
    { name: 'Free Consultation', path: '/consultation' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. TOP UTILITY / TRUST STRIP */}
      <div className="bg-slate-950 text-slate-300 border-b border-slate-800/80 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Trust credentials (Left) */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Fully Insured &amp; NC Code Compliant</span>
            </span>
            <span className="hidden md:inline-block text-slate-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300 truncate">
              <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              <span>Fuquay-Varina • Holly Springs • Apex • Garner</span>
            </span>
          </div>

          {/* Quick Contact & Facebook (Right) */}
          <div className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs flex-shrink-0">
            <a 
              href="tel:9198882931" 
              className="flex items-center gap-1.5 font-bold text-white hover:text-amber-400 transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>(919) 888-2931</span>
            </a>
            <span className="hidden sm:inline-block text-slate-700">|</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors font-medium"
            >
              <span>Follow Builds on Facebook</span>
              <ExternalLink className="w-3 h-3 text-amber-500" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
          : 'bg-white border-b border-slate-100 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center flex-shrink-0">
              <Logo variant="dark" />
            </div>

            {/* Desktop Navigation Links (Centered/Balanced) */}
            <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 font-heading tracking-wide ${
                      isActive
                        ? 'text-amber-600 bg-amber-50 shadow-sm border border-amber-200/60 font-bold'
                        : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop Action Area (Right) */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:9198882931"
                className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-amber-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>(919) 888-2931</span>
              </a>

              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-md hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Schedule Free Estimate</span>
              </Link>
            </div>

            {/* Tablet & Mobile Right Action Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-sm transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Free Estimate</span>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-xl text-slate-800 hover:text-amber-600 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE & TABLET DRAWER WITH BACKDROP */}
      {isOpen && (
        <div className="fixed inset-0 top-[113px] z-50 lg:hidden">
          {/* Dimmed Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Menu Panel */}
          <div className="relative bg-white border-b border-slate-200 shadow-2xl px-5 pt-4 pb-8 max-h-[calc(100vh-113px)] overflow-y-auto animate-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 pt-1">
                Website Navigation
              </span>

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'text-amber-600 bg-amber-50 font-bold border-l-4 border-amber-500'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  to="/consultation"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md text-center"
                >
                  <Calendar className="w-5 h-5 text-slate-950" />
                  <span>Schedule Free In-Home Estimate</span>
                </Link>

                <a
                  href="tel:9198882931"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 text-center border border-slate-200"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call Direct: (919) 888-2931</span>
                </a>
              </div>

              {/* Trust Footer inside mobile menu */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center text-[11px] text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">Built to Code. Crafted to Last.</p>
                <p>Fully Insured • Wake County Permitted • $10k–$30k+ Projects</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
