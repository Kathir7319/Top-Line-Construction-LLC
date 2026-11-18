import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '' }) {
  // variant: 'dark' (for light backgrounds) or 'light' (for dark backgrounds)
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`group inline-flex items-center gap-3.5 focus:outline-none ${className}`}>
      {/* Architectural Emblem Icon */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-[1.5px] shadow-md shadow-slate-950/20 group-hover:shadow-amber-500/20 group-hover:scale-105 transition-all duration-300">
        <div className="w-full h-full rounded-[10px] bg-slate-900/95 flex items-center justify-center p-1.5 border border-amber-500/30">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="goldGradLogo" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="60%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>

            {/* Gable Roofline / Porch Truss Peak */}
            <path
              d="M32 9L52 25L47.5 29L32 16.5L16.5 29L12 25L32 9Z"
              fill="url(#goldGradLogo)"
              className="drop-shadow-sm"
            />
            {/* Architectural Keystone Accent */}
            <polygon points="32,19 36,24 28,24" fill="#FDE68A" />

            {/* Deck Planks - Highlighted "Top Line" */}
            {/* Top Line Plank */}
            <rect x="14" y="31" width="36" height="5" rx="1.5" fill="url(#goldGradLogo)" />
            {/* Plank 2 */}
            <rect x="14" y="38" width="36" height="5" rx="1.5" fill="#E2E8F0" fillOpacity="0.9" />
            {/* Plank 3 */}
            <rect x="14" y="45" width="36" height="5" rx="1.5" fill="#94A3B8" fillOpacity="0.75" />

            {/* Substructure Foundation Post */}
            <rect x="30" y="52" width="4" height="4" rx="1" fill="#F59E0B" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black text-xl sm:text-2xl tracking-wider leading-none font-heading ${isLight ? 'text-white' : 'text-slate-950'}`}>
            TOP <span className="text-amber-500 group-hover:text-amber-400 transition-colors">LINE</span>
          </span>
        </div>
        
        {/* Subtle decorative gold line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-amber-400 to-transparent my-1 rounded-full opacity-80" />

        <div className="flex items-center justify-between gap-1">
          <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase leading-none ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
            CONSTRUCTION LLC
          </span>
        </div>
        <span className="text-[7.5px] sm:text-[8px] font-medium tracking-wider text-amber-500/90 uppercase mt-0.5 hidden xs:block">
          Fuquay-Varina, NC
        </span>
      </div>
    </Link>
  );
}
