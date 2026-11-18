import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Hammer, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 relative border-t-2 border-amber-500/40">
      {/* Top Banner / Callout Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-950/10 flex items-center justify-center flex-shrink-0">
              <Hammer className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <p className="font-extrabold text-base sm:text-lg font-heading tracking-tight leading-tight">
                Built to Code. Crafted to Last.
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-900/90">
                Transforming Fuquay-Varina &amp; Southern Wake County Backyards with $10k–$30k+ Custom Builds.
              </p>
            </div>
          </div>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 text-amber-400 hover:text-white hover:bg-slate-900 text-xs sm:text-sm font-bold shadow-lg transition-all transform hover:scale-105 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Book Your Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Credentials */}
          <div className="flex flex-col space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Top Line Construction LLC designs and frames premier residential Trex® composite decks, pressure-treated timber decks, and screened porches tailored to your home's roofline.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Fully Insured (General Liability)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>NC Residential Building Code Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Free In-Home Design Consultations</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold font-heading uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Explore Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/custom-decks" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Custom Composite &amp; Wood Decks</span>
                </Link>
              </li>
              <li>
                <Link to="/screened-porches" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Screened Porches &amp; Additions</span>
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Book Free In-Home Consultation</span>
                </Link>
              </li>
              <li>
                <Link to="/custom-decks#compare" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>Trex vs. Pressure-Treated Guide</span>
                </Link>
              </li>
              <li>
                <Link to="/screened-porches#timeline" className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>5-Step Porch Build Timeline</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas */}
          <div>
            <h3 className="text-white text-base font-bold font-heading uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Service Areas
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Proudly serving homeowners across Southern Wake County:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Fuquay-Varina
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Holly Springs
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Apex, NC
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Garner, NC
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Willow Spring
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1.5 rounded border border-slate-800">
                <MapPin className="w-3 h-3 text-amber-500" /> Angier / S. Wake
              </span>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
              ⚡ Typical Project Scope: $10,000 – $30,000+ Custom Outdoor Carpentry.
            </div>
          </div>

          {/* Col 4: Contact & Social */}
          <div>
            <h3 className="text-white text-base font-bold font-heading uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="tel:9198882931" 
                  className="flex items-start gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Phone Consultation:</span>
                    <span className="font-bold text-white text-sm">(919) 888-2931</span>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="mailto:info@toplineconstructionnc.com" 
                  className="flex items-start gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Email Address:</span>
                    <span className="font-semibold text-white text-xs sm:text-sm">info@toplineconstructionnc.com</span>
                  </div>
                </a>
              </li>

              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 text-slate-300 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Facebook Portfolio:</span>
                    <span className="font-medium text-amber-400 text-xs">Follow Our Latest Builds &rarr;</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footer & Trust Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="font-medium text-slate-300">
              © {currentYear} Top Line Construction LLC. All rights reserved. | Fuquay-Varina, NC.
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Credentials: Fully Insured (General Liability) • NC Residential Building Code Compliant • Free In-Home Design Consultations
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Trex® Certified Pro Specs</span>
            <span>•</span>
            <span>Wake County Permitted</span>
            <span>•</span>
            <Link to="/consultation" className="text-amber-400 hover:underline">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
