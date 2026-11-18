import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  AlertCircle,
  FileCheck,
  Building,
  ArrowRight
} from 'lucide-react';
import TrustBar from '../components/TrustBar';
import { faqData } from '../data/faqData';

export default function BookConsultationPage() {
  const [openFaq, setOpenFaq] = useState('insurance');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    zipCode: '',
    projectType: 'Custom Composite Deck (Trex)',
    budgetRange: '$15,000 – $25,000',
    timeframe: 'Ready to Start Within 30 Days',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const toggleFaq = (id) => {
    setOpenFaq(prev => prev === id ? null : id);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* SECTION 1: BOOKING HERO & PRE-QUALIFICATION */}
      <section className="relative py-16 lg:py-24 bg-slate-950 text-white overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-wood-slats opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT COLUMN: VALUE PROP, TRUST, CREDENTIALS */}
            <div className="lg:col-span-5 space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 backdrop-blur">
                  <Calendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Free In-Home Design Consultation</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-[1.12]">
                  Book Your Free In-Home Design Consultation
                </h1>
                <p className="mt-4 text-slate-300 text-base leading-relaxed">
                  Tell us a little about your project and pick a convenient time for an on-site visit. During your 45-minute consultation, we will measure your space, bring physical Trex® and lumber samples, discuss layout options, and answer your timeline questions.
                </p>
              </div>

              {/* What to Expect Callout */}
              <div className="bg-slate-900/90 rounded-2xl p-6 border-l-4 border-amber-500 border-y border-r border-slate-800 shadow-xl space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-heading uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>What to Expect:</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  No high-pressure sales tactics—just honest structural advice and a clear, itemized proposal within 48 hours of our visit.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5 font-semibold text-white">
                    <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" /> 45-Min On-Site
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 font-semibold text-white">
                    <FileCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" /> 48-Hr Written Quote
                  </span>
                </div>
              </div>

              {/* Service Areas */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Confirmed Wake County Service Area:
                </h3>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
                  {['Fuquay-Varina', 'Holly Springs', 'Apex', 'Garner', 'Willow Spring', 'Southern Wake County'].map((city, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-amber-300">
                      <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" /> {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credentials Badges */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contractor Credentials &amp; Standards:
                </h3>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Fully Insured:</strong> Comprehensive General Liability coverage verified on every proposal.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>NC Building Code Compliant:</strong> Permitted through Wake County inspections.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Transparent Proposals:</strong> Detailed material and labor itemization ($10k–$30k+ typical scope).</span>
                  </div>
                </div>
              </div>

              {/* Direct Phone Backup */}
              <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Prefer to schedule over the phone?</span>
                  <a href="tel:9198882931" className="text-base font-extrabold text-amber-400 hover:underline">
                    (919) 888-2931
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONSULTATION INTAKE FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
                {submitted ? (
                  <div className="py-12 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                        Appointment Request Received
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-950 mt-2">
                        Thank You, {formData.fullName || 'Homeowner'}!
                      </h2>
                      <p className="mt-2 text-slate-600 text-sm max-w-md mx-auto">
                        We have logged your design consultation request for <strong>{formData.address || 'your property'}</strong>.
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-200 text-xs sm:text-sm space-y-3 max-w-md mx-auto">
                      <p className="font-bold text-slate-900 border-b border-slate-200 pb-2">
                        Next Steps for Your In-Home Visit:
                      </p>
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>A team member will call/text <strong>{formData.phone}</strong> within 4 hours to confirm your preferred time slot.</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>We will bring sample boards of Trex® composite decking and lumber finishes to your home.</span>
                      </div>
                      <div className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>You will receive an itemized, fixed-price proposal within 48 hours of our visit.</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700"
                    >
                      <span>Need to adjust your details? Click here</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-2xl font-extrabold font-heading text-slate-950">
                        Project Details Form
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Please provide accurate details so we can bring the proper sample materials and evaluate your zoning setbacks.
                      </p>
                    </div>

                    {/* Row 1: Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Michael Smith"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(919) 000-0000"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email Address & Zip Code */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="michael@example.com"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Zip Code (Wake County) *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleChange}
                          placeholder="e.g. 27526 (Fuquay-Varina)"
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 3: Property Street Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Property Street Address (Fuquay-Varina / Wake County) *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Street address where deck/porch will be built"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white"
                      />
                    </div>

                    {/* Row 4: Project Type & Estimated Budget Range */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Project Type (Dropdown) *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white cursor-pointer"
                        >
                          <option value="Custom Composite Deck (Trex)">Custom Composite Deck (Trex)</option>
                          <option value="Pressure-Treated Wood Deck">Pressure-Treated Wood Deck</option>
                          <option value="Screened Porch / Covered Patio">Screened Porch / Covered Patio</option>
                          <option value="Deck Resurfacing / Railing Upgrade">Deck Resurfacing / Railing Upgrade</option>
                          <option value="Custom Carpentry / Home Addition">Custom Carpentry / Home Addition</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Estimated Budget Range *
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white cursor-pointer"
                        >
                          <option value="$10,000 – $15,000">$10,000 – $15,000</option>
                          <option value="$15,000 – $25,000">$15,000 – $25,000</option>
                          <option value="$25,000 – $35,000+">$25,000 – $35,000+</option>
                          <option value="Not Sure Yet (Need Guidance)">Not Sure Yet (Need Guidance)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Start Timeframe & Preferred Time Window */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Target Start Timeframe *
                        </label>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white cursor-pointer"
                        >
                          <option value="Ready to Start Within 30 Days">Ready to Start Within 30 Days</option>
                          <option value="1–3 Months Out">1–3 Months Out</option>
                          <option value="Planning for Next Season">Planning for Next Season</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          Preferred On-Site Time Window
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full h-12 px-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white cursor-pointer"
                        >
                          <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                          <option value="Early Afternoon (12:00 PM - 3:00 PM)">Early Afternoon (12:00 PM – 3:00 PM)</option>
                          <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM – 6:00 PM)</option>
                          <option value="Saturday Morning (By Appointment)">Saturday Morning (By Appointment)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 6: Brief Project Notes */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Brief Project Notes (Text Area)
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us rough dimensions, whether you have an existing deck, or any specific features you'd like (e.g., Trex Havana Gold, black aluminum railing, vaulted pine ceiling)."
                        className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm text-slate-900 bg-white resize-none"
                      />
                    </div>

                    {/* Row 7: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full h-14 rounded-xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
                      >
                        <Calendar className="w-5 h-5 text-slate-950 flex-shrink-0" />
                        <span>Confirm My Free In-Home Consultation</span>
                      </button>
                      <p className="text-[11px] text-center text-slate-500 mt-2.5">
                        🔒 Fully confidential. Zero spam. We respect your time and never use aggressive sales tactics.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustBar variant="light" />

      {/* SECTION 3: FREQUENTLY ASKED QUESTIONS (OBJECTION HANDLING ACCORDION BLOCK) */}
      <section className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full mb-3">
              Common Questions Before We Meet
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Clear, transparent answers about our licensing, permits, pricing, and construction timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-amber-500 bg-amber-50/20 shadow-md'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="font-extrabold text-base sm:text-lg font-heading text-slate-950">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-amber-200/40">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom FAQ Help Box */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base font-heading">Have a specific zoning or lot question?</h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Call our direct office line to discuss your property setbacks in Fuquay-Varina or Wake County.
              </p>
            </div>
            <a
              href="tel:9198882931"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md whitespace-nowrap hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>(919) 888-2931</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
