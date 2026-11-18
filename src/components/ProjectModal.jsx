import React from 'react';
import { X, MapPin, Calendar, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2">
              {project.badge}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {project.location}
              </span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-400" />
                {project.priceRange}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400" />
                {project.timeline}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-600 font-heading mb-1">
              Project Overview &amp; Scope
            </h3>
            <p className="text-slate-700 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase">Primary Material</span>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.material}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase">Location &amp; Code Area</span>
              <p className="font-bold text-slate-900 text-sm mt-0.5">{project.location} (Wake County)</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-heading mb-3">
              Craftsmanship Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="font-medium">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Want a similar custom deck or porch built for your home?
            </div>
            <Link
              to="/consultation"
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md transition-all"
            >
              <span>Schedule Estimate for Similar Build</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
