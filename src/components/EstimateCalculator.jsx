import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EstimateCalculator() {
  const [projectType, setProjectType] = useState('composite-deck');
  const [sqft, setSqft] = useState(300);
  const [railing, setRailing] = useState('aluminum'); // 'aluminum', 'wood', 'composite'
  const [includeRoof, setIncludeRoof] = useState(false);
  const [includeLighting, setIncludeLighting] = useState(true);

  // Dynamic pricing calculation
  const calculateEstimate = () => {
    let baseRate = 0;
    if (projectType === 'wood-deck') {
      baseRate = 38; // per sqft
    } else if (projectType === 'composite-deck') {
      baseRate = 62; // per sqft
    } else if (projectType === 'screened-porch') {
      baseRate = 95; // per sqft with framing & screen
    }

    let subtotal = sqft * baseRate;

    if (railing === 'aluminum') subtotal += 1800;
    if (railing === 'composite') subtotal += 2400;
    if (includeLighting) subtotal += 1200;
    if (includeRoof && projectType !== 'screened-porch') subtotal += 7500;

    const min = Math.round(subtotal * 0.92 / 500) * 500;
    const max = Math.round(subtotal * 1.08 / 500) * 500;

    return { min, max };
  };

  const { min, max } = calculateEstimate();

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Interactive Planning Tool
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Instant Project Budget Estimator
            </h3>
          </div>
        </div>
        <p className="text-sm text-slate-300 max-w-2xl mb-8">
          Get a realistic ballpark range for your Wake County custom deck or screened porch based on our transparent $10k–$30k+ project pricing standards.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            {/* Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                1. Select Outdoor Living Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'composite-deck', label: 'Trex® Composite', sub: 'Low maintenance' },
                  { id: 'wood-deck', label: 'Treated Lumber', sub: '#1 Southern Pine' },
                  { id: 'screened-porch', label: 'Screened Porch', sub: 'Roof tie-in + screen' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      projectType === type.id
                        ? 'border-amber-500 bg-amber-500/15 text-white shadow-sm ring-1 ring-amber-500'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-sm font-bold text-white leading-tight">{type.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{type.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Approximate Square Footage Slider */}
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Approximate Size
                </label>
                <span className="text-sm font-extrabold text-amber-400 font-heading">
                  {sqft} sq. ft. <span className="text-xs text-slate-400 font-normal">(approx. {Math.round(Math.sqrt(sqft * 1.3))}x{Math.round(Math.sqrt(sqft * 0.77))} ft)</span>
                </span>
              </div>
              <input
                type="range"
                min="140"
                max="650"
                step="20"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1.5">
                <span>140 sq ft (Compact)</span>
                <span>300 sq ft (Standard)</span>
                <span>650 sq ft (Multi-Tier)</span>
              </div>
            </div>

            {/* Custom Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Railing Upgrade
                </label>
                <select
                  value={railing}
                  onChange={(e) => setRailing(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="aluminum">Black Aluminum Balusters (Popular)</option>
                  <option value="composite">Trex Composite Post Sleeves</option>
                  <option value="wood">Classic Treated Pine Balusters</option>
                </select>
              </div>

              <div className="space-y-2.5 flex flex-col justify-end">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  Integrated Enhancements
                </label>
                <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeLighting}
                    onChange={(e) => setIncludeLighting(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 bg-slate-950"
                  />
                  <span>Low-Voltage LED Post &amp; Riser Lights</span>
                </label>
                {projectType !== 'screened-porch' && (
                  <label className="flex items-center gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={includeRoof}
                      onChange={(e) => setIncludeRoof(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 text-amber-500 focus:ring-amber-500 bg-slate-950"
                    />
                    <span>Add Covered Pavilion / Gable Roof</span>
                  </label>
                )}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-7 rounded-2xl border-2 border-amber-500/50 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Turnkey Investment</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-heading text-white tracking-tight">
                ${min.toLocaleString()} – ${max.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                *Includes complete structural framing, Wake County code engineering, materials, clean tear-out, and final municipal inspection walkthrough.
              </p>
            </div>

            <div className="my-6 border-t border-slate-800 pt-5 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>100% Itemized proposal with zero hidden fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Physical Trex® color samples brought to your home</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Structural ledger flashing &amp; concrete footings</span>
              </div>
            </div>

            <Link
              to="/consultation"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:from-amber-300 hover:to-amber-500 transition-all shadow-md group text-center"
            >
              <span>Lock In Exact Written Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
