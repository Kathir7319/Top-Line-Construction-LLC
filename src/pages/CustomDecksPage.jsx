import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  ArrowRight, 
  Hammer, 
  Layers, 
  Sparkles, 
  Ruler, 
  Sun, 
  Umbrella,
  Zap,
  HelpCircle,
  Clock
} from 'lucide-react';
import TrustBar from '../components/TrustBar';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';

export default function CustomDecksPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const deckProjects = projectsData.filter(p => p.category === 'decks' || p.id === 4);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SECTION 1: PAGE HERO */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=2000&q=85"
            alt="Custom Decks Built for Strength in Fuquay-Varina, NC"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-wood-slats opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur">
              <Hammer className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Architectural Deck Builders • Fuquay-Varina, NC</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12] mb-6">
              Custom Decks Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Strength, Style &amp; Decades</span> of Use
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              We design and build custom residential decks engineered for North Carolina's heat, humidity, and heavy seasonal rain—combining rock-solid substructure framing with clean architectural finishes.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 text-center"
              >
                <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
                <span>Request a Deck Estimate</span>
              </Link>

              <a
                href="#compare"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 backdrop-blur transition-all text-center"
              >
                <span>Compare Trex vs. Wood</span>
                <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0" />
              </a>
            </div>

            {/* Quick Specs */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>12" On-Center Framing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Simpson Strong-Tie® Hardware</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Rot-Proof Flashing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar variant="light" />

      {/* SECTION 2: MATERIAL COMPARISON GUIDE (TREX COMPOSITE VS PRESSURE-TREATED LUMBER) */}
      <section id="compare" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              Homeowner Material Guide
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
              Trex® Composite Decking vs. Pressure-Treated Lumber
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Not sure which decking material fits your budget and maintenance goals? Here is how our two most popular options compare:
            </p>
          </div>

          {/* Desktop & Tablet Table with Fixed Accurate Column Widths */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-slate-950 text-white border-b border-slate-800">
                  <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider font-bold w-1/4">
                    Feature / Specification
                  </th>
                  <th className="py-5 px-6 font-heading text-base font-extrabold text-amber-400 bg-slate-900 border-x border-slate-800 w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Trex® Composite Decking</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 font-heading text-base font-extrabold text-slate-200 w-[37.5%]">
                    Pressure-Treated Lumber
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 align-top">
                    Lifespan &amp; Durability
                  </td>
                  <td className="py-5 px-6 text-slate-800 bg-amber-50/40 border-x border-slate-200/60 font-medium align-top">
                    <span className="font-bold text-amber-900 block mb-1">25–50+ Years</span>
                    Resists rot, warping, splintering, and termites. Won't crack or warp under North Carolina summer heat and high humidity.
                  </td>
                  <td className="py-5 px-6 text-slate-600 align-top">
                    <span className="font-bold text-slate-900 block mb-1">15–20 Years</span>
                    Durable when maintained, but vulnerable to seasonal humidity, cupping, and wood-boring insects over time.
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 align-top">
                    Annual Maintenance
                  </td>
                  <td className="py-5 px-6 text-slate-800 bg-amber-50/40 border-x border-slate-200/60 font-medium align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-green-100 text-green-800 font-bold text-xs mb-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" /> Soap &amp; Water Wash Only
                    </span>
                    <p>Never needs staining, sealing, power-sanding, or protective painting.</p>
                  </td>
                  <td className="py-5 px-6 text-slate-600 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-bold text-xs mb-1.5">
                      Regular Upkeep Required
                    </span>
                    <p>Requires power washing and re-staining/sealing every 2–3 years to prevent moisture rot and cracking.</p>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 align-top">
                    Upfront Investment
                  </td>
                  <td className="py-5 px-6 text-slate-800 bg-amber-50/40 border-x border-slate-200/60 font-medium align-top">
                    <span className="font-extrabold text-amber-700 text-base block mb-0.5">$15k – $30k+</span>
                    Higher initial material cost, offset by zero maintenance costs and highest home resale return.
                  </td>
                  <td className="py-5 px-6 text-slate-600 align-top">
                    <span className="font-extrabold text-slate-900 text-base block mb-0.5">$10k – $20k</span>
                    Lower upfront material cost; ideal for budget-conscious immediate expansion.
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 align-top">
                    Appearance &amp; Color
                  </td>
                  <td className="py-5 px-6 text-slate-800 bg-amber-50/40 border-x border-slate-200/60 font-medium align-top">
                    Consistent authentic wood-grain finishes, concealed fasteners (no visible screws), and UV-stabilized fade resistance.
                  </td>
                  <td className="py-5 px-6 text-slate-600 align-top">
                    Natural real-wood grain and rustic character; can be painted or stained in any custom shade over time.
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-5 px-6 font-bold text-slate-900 align-top">
                    Best For Homeowners Who...
                  </td>
                  <td className="py-5 px-6 text-slate-800 bg-amber-50/40 border-x border-slate-200/60 font-semibold align-top">
                    Want a long-term, maintenance-free backyard showcase and bare-foot friendly entertaining.
                  </td>
                  <td className="py-5 px-6 text-slate-600 align-top">
                    Prefer classic natural wood feel, lower initial cost, and don't mind periodic weekend maintenance.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card-Based Comparison */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {/* Trex Card */}
            <div className="bg-amber-50/50 rounded-2xl p-6 border-2 border-amber-500/40 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <h3 className="text-xl font-bold font-heading text-slate-950">
                  Trex® Composite Decking
                </h3>
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase block">Lifespan &amp; Durability:</span>
                  <p className="font-medium text-slate-900 mt-0.5">25–50+ years; resists rot, warping, splintering, and termites.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase block">Annual Maintenance:</span>
                  <p className="font-medium text-slate-900 mt-0.5">Soap-and-water wash only. Never needs staining, sealing, or sanding.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase block">Upfront Investment:</span>
                  <p className="font-extrabold text-amber-700 text-base mt-0.5">$15k – $30k+ typical custom build.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase block">Appearance:</span>
                  <p className="font-medium text-slate-900 mt-0.5">Consistent wood-grain finishes and fade-resistant colors.</p>
                </div>
                <div className="pt-3 border-t border-amber-200">
                  <span className="text-xs font-bold text-amber-900 uppercase block">Best For:</span>
                  <p className="font-semibold text-slate-950 mt-0.5">Homeowners wanting a long-term, maintenance-free backyard showcase.</p>
                </div>
              </div>
            </div>

            {/* Wood Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold font-heading text-slate-950 mb-4">
                Pressure-Treated Lumber
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Lifespan &amp; Durability:</span>
                  <p className="font-medium text-slate-800 mt-0.5">15–20 years with consistent sealing and upkeep.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Annual Maintenance:</span>
                  <p className="font-medium text-slate-800 mt-0.5">Requires cleaning and re-staining/sealing every 2–3 years.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Upfront Investment:</span>
                  <p className="font-extrabold text-slate-900 text-base mt-0.5">$10k – $20k typical custom build.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase block">Appearance:</span>
                  <p className="font-medium text-slate-800 mt-0.5">Natural real-wood grain; can be stained any shade over time.</p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs font-bold text-slate-700 uppercase block">Best For:</span>
                  <p className="font-semibold text-slate-950 mt-0.5">Homeowners preferring classic natural wood look and lower initial cost.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Material Samples CTA */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg font-heading text-white">
                  Want to Touch &amp; Compare Real Samples?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  We bring manufacturer sample boards of Trex® Transcend, Trex® Enhance, and #1 Pine directly to your in-home consultation.
                </p>
              </div>
            </div>
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-md whitespace-nowrap"
            >
              <span>Compare Options at Your Free Consult</span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRUCTURAL STANDARDS & CUSTOM UPGRADES */}
      <section className="py-20 lg:py-24 bg-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              Uncompromising Quality
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
              What Sets a Top Line Deck Apart
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              A deck is only as strong as the framing beneath the boards. Every Top Line Construction build includes structural standards engineered beyond minimum code:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Heavy-Duty Substructure Framing
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Properly sized joist spacing (12" on-center for composite to prevent bounce or sag), copper-treated joist tape to prevent wood rot, multi-ply structural ledger flashing, and Simpson Strong-Tie® tension ties and hurricane clips on every connection.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-100">
                <span className="bg-slate-100 px-2.5 py-1 rounded">12" Joist Spacing</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Simpson Strong-Tie®</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Rot-Resistant Ledger Tape</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Custom Railing Systems
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Powder-coated black aluminum balusters, composite rail sleeves, modern horizontal cable railings, or custom cedar and pine architectural woodwork. Engineered to stay rigid and resist wobbling for decades.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-100">
                <span className="bg-slate-100 px-2.5 py-1 rounded">Black Aluminum Balusters</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Cable Railings</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Trex Rail Sleeves</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Integrated Lighting &amp; Stairs
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Low-voltage post cap lights, stair riser LEDs, picture-frame border boards, and wide wrap-around cascading steps. Transform your outdoor space into an ambient evening retreat while ensuring nighttime safety.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-100">
                <span className="bg-slate-100 px-2.5 py-1 rounded">LED Riser Lights</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Post Cap Illumination</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Picture-Frame Borders</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Deck Resurfacing &amp; Structural Upgrades
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  If your existing deck framing passes our thorough structural inspection, we can keep your solid subframe and upgrade worn wood boards to modern Trex® composite decking and new architectural railings—saving you thousands.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-100">
                <span className="bg-slate-100 px-2.5 py-1 rounded">Framing Integrity Check</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Trex Re-decking</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded">Cost-Saving Upgrade</span>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-14 text-center">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
              <span>Compare Options at Your Free In-Home Consult</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT DECK BUILDS GALLERY */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              Featured Custom Deck Builds
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Explore recent projects completed in Fuquay-Varina, Holly Springs, and Apex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {deckProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500 transition-all flex flex-col justify-between h-full"
              >
                <div className="relative h-60 overflow-hidden bg-slate-900 flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent" />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded text-xs font-bold uppercase">
                    {p.badge}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-amber-400 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-amber-400 font-bold">{p.priceRange}</span>
                    <span className="text-slate-400 font-medium">{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
