import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Home, 
  Sun, 
  Wind, 
  Sparkles, 
  Layers, 
  FileCheck, 
  Hammer, 
  Clock, 
  ChevronRight,
  ShieldAlert,
  Compass
} from 'lucide-react';
import TrustBar from '../components/TrustBar';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';

export default function ScreenedPorchesPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStep, setActiveStep] = useState(1);

  const porchProjects = projectsData.filter(p => p.category === 'porches');

  const steps = [
    {
      step: 1,
      title: "In-Home Design & Measurement",
      timeframe: "Week 1",
      tagline: "Consultation & Scope Definition",
      description: "We evaluate your patio/deck footprint, inspect roofline tie-in points, review finishes, and deliver an itemized written quote.",
      details: [
        "45-minute on-site measurement & roofline assessment",
        "Physical finish samples (pine, cedar, beadboard, screens)",
        "Discussion of electrical needs (fans, recessed LEDs, heaters)",
        "Guaranteed written itemized proposal delivered in 48 hours"
      ],
      icon: Compass
    },
    {
      step: 2,
      title: "HOA & Municipal Permitting",
      timeframe: "Weeks 2–4",
      tagline: "Zero Stress Paperwork Handling",
      description: "We provide architectural drawings and structural specs needed for Wake County/Fuquay-Varina building permits and HOA approval.",
      details: [
        "Preparation of architectural elevations & framing blueprints",
        "Submission to Wake County or Fuquay-Varina inspectors",
        "Complete submission package formatted for HOA review boards",
        "Handling all regulatory compliance and structural calculations"
      ],
      icon: FileCheck
    },
    {
      step: 3,
      title: "Footings & Structural Framing",
      timeframe: "Weeks 5–6",
      tagline: "Rock-Solid Substructure & Roof Tie-In",
      description: "Pouring code-compliant concrete footings, setting structural posts, framing the floor system, and tying in the roof structure.",
      details: [
        "Excavating & pouring deep frost-line concrete footings",
        "Setting heavy-duty 6x6 pressure-treated structural posts",
        "Framing floor joists and subfloor platform",
        "Precision roof rafters tie-in directly into home’s ridge/fascia"
      ],
      icon: Hammer
    },
    {
      step: 4,
      title: "Roofing, Ceiling, Screening & Trim",
      timeframe: "Weeks 7–8",
      tagline: "Architectural Finishes & Weatherproofing",
      description: "Installing shingles, tongue-and-groove ceiling finishes, electrical rough-in, decking boards, and tight-frame screening.",
      details: [
        "Roofing felt, ice/water barrier, and matched shingles",
        "Vaulted tongue-and-groove stained pine or beadboard installation",
        "Licensed electrician rough-in for ceiling fans and lights",
        "Pollen-resistant, pet-tough tight-spline screening installed"
      ],
      icon: Layers
    },
    {
      step: 5,
      title: "Final Inspection & Walkthrough",
      timeframe: "Week 8+",
      tagline: "100% Satisfaction & Handover",
      description: "Passing final municipal building inspection and walking the finished space with you to ensure 100% satisfaction.",
      details: [
        "Wake County final building and electrical sign-off",
        "Thorough job site magnetic sweep & post-build cleanup",
        "Detailed punch-list walkthrough with the homeowner",
        "Handover of manufacturer warranties & craftsmanship pledge"
      ],
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SECTION 1: PAGE HERO */}
      <section className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Screened Porch Addition in Fuquay-Varina, NC"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
          <div className="absolute inset-0 bg-wood-slats opacity-25 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur">
              <Home className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Covered Living &amp; Additions • $20k–$35k+ Specialists</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.12] mb-6">
              Custom Screened Porches &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Covered Outdoor Living</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              Enjoy North Carolina evenings without mosquitoes, pollen, or summer heat. We design and frame custom screened porches that blend seamlessly with your home's existing roofline and siding.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 text-center"
              >
                <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
                <span>Plan Your Screened Porch</span>
              </Link>

              <a
                href="#timeline"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 backdrop-blur transition-all text-center"
              >
                <span>See Our 5-Step Build Timeline</span>
                <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Seamless Roof Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Vaulted T&amp;G Ceilings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Eze-Breeze® Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <TrustBar variant="light" />

      {/* SECTION 2: CUSTOM PORCH FEATURES & FINISHES */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              Architectural Refinement
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
              Architectural Details That Elevate Your Home's Value
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We don't build tacked-on boxes. Every screened porch is engineered as a seamless architectural extension of your house:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Seamless Roofline Tie-Ins
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Gable, shed, or hip roof structures engineered to match your home's existing roof pitch, shingles, soffits, and gutters. Water-tight valley flashing prevents leaks and preserves existing siding integrity.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200/70">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Gable &amp; Shed Rooflines</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Matching Shingles</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Integrated Gutters</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Vaulted Tongue-and-Groove Ceilings
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Rich stained pine, cedar, or bright white beadboard ceilings pre-wired for outdoor ceiling fans, dimmable recessed lighting, sound systems, and wall-mounted infrared patio heaters.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200/70">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Stained Pine &amp; Cedar</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Pre-Wired Fan Boxes</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Recessed LED Fixtures</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Durable Screening Systems
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  High-visibility fiberglass screen mesh that optimizes backyard views while keeping gnats and mosquitoes out, plus heavy-duty pet-resistant options installed in tight, clean extruded trim frames.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200/70">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Tight-Spline Framing</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Pet-Tear Resistant</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">High-Clarity Views</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-md hover:shadow-xl transition-all group flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-950 mb-3">
                  Custom Carpentry &amp; Trim Work
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Wrapped structural posts, knee walls, exterior-grade composite trim, and Eze-Breeze® sliding window panel compatibility for turning your screened porch into a four-season room whenever you desire.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 pt-4 border-t border-slate-200/70">
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Post Wraps &amp; Knee Walls</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Eze-Breeze® Compatible</span>
                <span className="bg-white border border-slate-200 px-2.5 py-1 rounded">Exterior Siding Blend</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR 5-STEP PROJECT TIMELINE BREAKDOWN */}
      <section id="timeline" className="py-20 lg:py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-3">
              Transparency &amp; Predictability
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
              How We Take Your Porch From Idea to Final Walkthrough
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We remove the guesswork from major home improvements with a structured, transparent build schedule:
            </p>
          </div>

          {/* Interactive Step Navigation - Balanced Grid & Equal Sizing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {steps.map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setActiveStep(s.step)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  s.step === 5 ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  activeStep === s.step
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg ring-2 ring-amber-300 transform scale-[1.02]'
                    : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-black uppercase tracking-wider ${activeStep === s.step ? 'text-slate-950' : 'text-amber-400'}`}>
                    Step {s.step}
                  </span>
                  <span className={`text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded ${activeStep === s.step ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {s.timeframe}
                  </span>
                </div>
                <div className={`text-xs sm:text-sm font-bold truncate ${activeStep === s.step ? 'text-slate-950' : 'text-white'}`}>
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Detailed Card */}
          {(() => {
            const current = steps.find(s => s.step === activeStep) || steps[0];
            const StepIcon = current.icon;

            return (
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg flex-shrink-0">
                      <StepIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded">
                          Phase {current.step} of 5
                        </span>
                        <span className="text-xs text-slate-400 font-bold">
                          {current.timeframe}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-3xl font-extrabold font-heading text-white mt-1">
                        {current.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-amber-300 font-medium">
                        {current.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={activeStep === 1}
                      onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                      className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 text-xs font-bold transition-all"
                    >
                      &larr; Previous Step
                    </button>
                    <button
                      type="button"
                      disabled={activeStep === 5}
                      onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-40 text-xs font-bold transition-all"
                    >
                      Next Step &rarr;
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Core Objective &amp; Timeline Execution
                      </h4>
                      <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6">
                        {current.description}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 italic">
                      *Top Line Construction manages 100% of the inspections, permits, and construction coordination so your routine is never disrupted.
                    </p>
                  </div>

                  <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                      What Gets Completed During {current.timeframe}:
                    </h4>
                    {current.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Primary CTA Button */}
          <div className="mt-14 text-center">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
              <span>Book Your Step 1 In-Home Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED SCREENED PORCHES GALLERY */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950">
              Porch Inspiration &amp; Additions
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Completed projects showcasing gable roof tie-ins, cathedral ceilings, and screened living spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {porchProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between h-full"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 flex-shrink-0">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
                  <span className="absolute top-3.5 left-3.5 bg-amber-500 text-slate-950 px-2.5 py-1 rounded text-xs font-bold uppercase">
                    {p.badge}
                  </span>
                  <span className="absolute bottom-3.5 right-3.5 text-xs font-semibold text-white bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur">
                    {p.timeline}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950 text-lg group-hover:text-amber-600 transition-colors leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-amber-600 font-extrabold text-sm">{p.priceRange}</span>
                    <span className="text-slate-500 font-medium">{p.location}</span>
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
