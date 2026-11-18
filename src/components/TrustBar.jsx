import React from 'react';
import { ShieldCheck, Award, FileSpreadsheet, MapPin } from 'lucide-react';

export default function TrustBar({ variant = 'default' }) {
  const items = [
    {
      icon: ShieldCheck,
      title: "Fully Insured Protection",
      description: "Carrying comprehensive General Liability insurance for complete homeowner peace of mind.",
      badge: "General Liability Covered"
    },
    {
      icon: Award,
      title: "NC Code Compliant",
      description: "Engineered to meet or exceed North Carolina residential structural and permitting standards.",
      badge: "Built Beyond Code"
    },
    {
      icon: FileSpreadsheet,
      title: "Transparent $10k–$30k+ Proposals",
      description: "Detailed, itemized material and labor quotes with zero surprise change orders.",
      badge: "Itemized Fixed Pricing"
    },
    {
      icon: MapPin,
      title: "Fuquay-Varina Local",
      description: "Proudly serving homeowners in Fuquay-Varina, Holly Springs, Apex, and Willow Spring.",
      badge: "Southern Wake County"
    }
  ];

  const isDark = variant === 'dark';

  return (
    <div className={`relative z-20 py-8 lg:py-10 border-y ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200/80 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 h-full"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-6 h-6" strokeWidth={2.2} />
                </div>

                {/* Content Block with Aligned Margin */}
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
