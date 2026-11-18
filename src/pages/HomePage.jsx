import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  MapPin, 
  Calendar, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  Maximize2,
  Hammer,
  Clock,
  Sparkles,
  Phone
} from 'lucide-react';
import TrustBar from '../components/TrustBar';
import EstimateCalculator from '../components/EstimateCalculator';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projectsData';
import { testimonialsData } from '../data/testimonialsData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SECTION 1: HERO BANNER */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image & Rich Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=2000&q=85"
            alt="Finished Custom Screened Porch and Composite Deck in Fuquay-Varina, NC"
            className="w-full h-full object-cover object-center scale-105 transform animate-fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          <div className="absolute inset-0 bg-wood-slats opacity-20 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Fuquay-Varina &amp; Southern Wake County's Premier Builder</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.12] mb-6">
              Custom Decks &amp; Screened Porches Built for How <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Fuquay-Varina Lives.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              From low-maintenance Trex® composite decks to custom-framed screened porches and home additions, Top Line Construction LLC delivers structural precision, clean job sites, and lasting outdoor living spaces across Southern Wake County.
            </p>

            {/* Primary Action Buttons - Aligned Heights */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
                <span>Book Your Free In-Home Design Consultation</span>
              </Link>

              <a
                href="tel:9198882931"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 backdrop-blur-md transition-all text-center whitespace-nowrap"
              >
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>(919) 888-2931</span>
              </a>
            </div>

            {/* Quick Hero Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Fully Insured Liability</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>NC Code Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>$10k–$30k+ Turnkey Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST & CREDIBILITY BAR */}
      <TrustBar variant="light" />

      {/* SECTION 3: CORE SERVICES OVERVIEW */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              Craftsmanship &amp; Architectural Carpentry
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
              Outdoor Living Spaces Tailored to Your Home
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are replacing an aging builder-grade deck or adding a four-season screened retreat, we handle every phase from structural framing to final trim.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Card 1: Custom Composite & Wood Decks */}
            <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 h-full">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80"
                  alt="Custom Composite & Wood Decks in Fuquay-Varina"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-md shadow-md">
                  Custom Decks
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-semibold text-white/90 bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur">
                  $10k – $30k Builds
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    Custom Composite &amp; Wood Decks
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Multi-level decks, custom staircases, wrap-around porches, and architectural railings built with Trex® composite decking or #1 Southern Yellow Pine. Built with 12" on-center joist spacing and Simpson Strong-Tie® hardware.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Trex® Transcend, Enhance, &amp; Select Composite Options</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Powder-coated black aluminum baluster &amp; cable railings</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Low-voltage riser LEDs &amp; picture-frame border designs</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to="/custom-decks"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Explore Custom Decks</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">1–2 Weeks Build</span>
                </div>
              </div>
            </div>

            {/* Card 2: Screened Porches & Home Additions */}
            <div className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 h-full">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Custom Screened Porches & Home Additions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider rounded-md shadow-md">
                  Screened Porches
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-semibold text-white/90 bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur">
                  $18k – $35k+ Additions
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors">
                    Screened Porches &amp; Home Additions
                  </h3>
                  <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                    Vaulted ceilings, tongue-and-groove finishes, custom framing, and seamless roofline tie-ins that turn your backyard into bug-free living space. Engineered to withstand North Carolina heat and heavy rain.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Seamless gable &amp; shed roof tie-ins matching your home</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>Vaulted tongue-and-groove ceilings with fan pre-wiring</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>High-visibility &amp; pet-resistant screening systems</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                  <Link
                    to="/screened-porches"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Screened Porches</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-slate-500 font-medium">2–4 Weeks Build</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECT GALLERY PREVIEW */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-3">
                Visual Portfolio Grid
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
                Recent Builds Around Fuquay-Varina
              </h2>
              <p className="mt-2 text-slate-400 text-sm sm:text-base">
                Click any project to inspect materials, structural details, and scope.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 flex-shrink-0">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('decks')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === 'decks'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Custom Decks
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory('porches')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === 'porches'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Screened Porches
              </button>
            </div>
          </div>

          {/* Project Grid with Equal Height Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-slate-800 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                    {project.badge}
                  </span>

                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-950/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1.5 font-semibold text-amber-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                    <span className="bg-slate-900/80 px-2 py-0.5 rounded font-mono text-[11px] text-slate-300">
                      {project.priceRange}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-heading text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium truncate max-w-[70%]">
                      {project.material}
                    </span>
                    <span className="text-amber-400 font-bold group-hover:underline flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA below gallery */}
          <div className="mt-14 text-center">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl transition-all transform hover:scale-105"
            >
              <span>View Full Project Gallery &amp; Request Similar Build</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR WIDGET */}
      <section className="py-16 sm:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EstimateCalculator />
        </div>
      </section>

      {/* SECTION 5: VERIFIED HOMEOWNER REVIEWS */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              5-Star Client Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight">
              Why Local Homeowners Trust Top Line Construction
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Read real feedback from homeowners in Fuquay-Varina, Holly Springs, and Southern Wake County.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {testimonialsData.map((t) => (
              <div
                key={t.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-bold text-slate-700 bg-amber-100 px-2 py-0.5 rounded">
                      5.0 Verified
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 mb-3 leading-snug">
                    “{t.headline}”
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-slate-950 text-sm font-heading">
                        — {t.author}
                      </p>
                      <p className="text-xs text-amber-600 font-semibold flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-500" />
                        {t.location}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded">
                      {t.projectType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CONVERSION BANNER */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wide uppercase mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Zero-Pressure Design Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
            Ready to Plan Your Custom Deck or Porch?
          </h2>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free, no-pressure in-home consultation. We will measure your space, walk through material samples, and provide a clear project estimate within 48 hours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5 text-slate-950" />
              <span>Schedule Free In-Home Consultation</span>
            </Link>

            <a
              href="tel:9198882931"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 transition-all"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Call Direct: (919) 888-2931</span>
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              No Sales Pitch Pressure
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Physical Trex® &amp; Timber Samples
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Itemized Quote in 48 Hours
            </span>
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
