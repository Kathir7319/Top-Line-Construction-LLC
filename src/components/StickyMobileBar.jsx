import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:9198882931"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-800 text-white font-bold text-xs border border-slate-700 active:bg-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call (919) 888-2931</span>
        </a>
        <Link
          to="/consultation"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs shadow-md active:from-amber-500 active:to-amber-600"
        >
          <Calendar className="w-3.5 h-3.5 text-slate-950" />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
