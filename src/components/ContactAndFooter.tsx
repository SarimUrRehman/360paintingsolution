import React, { useState, useEffect } from 'react';
import { Phone, Mail, User, MessageSquare, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_NAME, COMPANY_TAGLINE, SERVICES } from '../constants.ts';

interface ContactAndFooterProps {
  selectedServicePreset: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: selectedServicePreset || '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Sync selected service when user clicks a card from Services section
  useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    // Phone validation
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (cleanPhone.length < 7) {
      errs.phone = 'Please enter a valid phone number (at least 7 digits).';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      errs.service = 'Please select the service you are interested in.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    });
    setErrors({});
    setSubmittedSuccess(false);
  };

  return (
    <div id="contact" className="scroll-mt-20">
      {/* Contact Section */}
      <section className="bg-white py-16 sm:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading & Large Clickable Phone Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#8A94A6]">Get In Touch</span>
                <h2 className="mt-1 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B2A5C] tracking-tight">
                  Ready to Add Some{' '}
                  <span
                    className="font-script text-[#D1202F] italic inline-block text-4xl sm:text-5xl"
                    style={{ fontFamily: "'Caveat', cursive" }}
                  >
                    Colour?
                  </span>
                </h2>
                <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
                  Whether you are planning a fresh interior makeover, complete exterior protection, or custom cabinet refinishing, our friendly specialists are ready to help.
                </p>
              </div>

              {/* Large Clickable Phone Number Card */}
              <a
                href={COMPANY_PHONE_TEL}
                className="group block p-6 sm:p-7 rounded-xl bg-[#1B2A5C] text-white hover:bg-[#121C40] transition-all duration-200 shadow-md hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2A5C]"
                aria-label={`Call us directly at ${COMPANY_PHONE_DISPLAY}`}
              >
                <div className="flex items-center justify-between text-slate-300 text-xs sm:text-sm font-medium mb-2">
                  <span>Direct Estimates Hotline</span>
                  <ArrowUpRight className="w-5 h-5 text-[#FF4D5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-lg bg-white/10 text-[#FF4D5A]">
                    <Phone className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300">Tap to call our crew:</div>
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#FF4D5A] transition-colors">
                      {COMPANY_PHONE_DISPLAY}
                    </div>
                  </div>
                </div>
                <p className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF4D5A]" />
                  <span>Free consultation & rapid quote turnaround</span>
                </p>
              </a>

              {/* Service Highlights List */}
              <div className="p-6 rounded-xl bg-[#F4F6FA] border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-[#1B2A5C] uppercase tracking-wide">
                  What Happens Next:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D1202F]" />
                    <span>1. We review your project scope and schedule an estimate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D1202F]" />
                    <span>2. You receive an itemized, transparent fixed-price proposal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D1202F]" />
                    <span>3. Work begins on-time with clean, guaranteed results</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#F4F6FA] rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs">
              {submittedSuccess ? (
                /* Success Message State */
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A5C]">
                    Thank You, {formData.name || 'Friend'}!
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                    We received your request for <strong className="text-[#1B2A5C]">{formData.service}</strong>. A 360 Painting Solutions specialist will follow up with you at{' '}
                    <strong className="text-[#1B2A5C]">{formData.phone}</strong> shortly to discuss your estimate.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={COMPANY_PHONE_TEL}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D1202F] hover:bg-[#B01724] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now: {COMPANY_PHONE_DISPLAY}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-[#1B2A5C] hover:bg-white rounded-lg border border-slate-300 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Quote Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A5C]">
                      Request a Free Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below and we will get back to you promptly with pricing and scheduling.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1B2A5C] mb-1.5">
                      Your Name <span className="text-[#D1202F]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-lg text-sm text-[#1B2330] placeholder-slate-400 focus:outline-none focus:border-[#1B2A5C] focus:ring-1 focus:ring-[#1B2A5C] transition-colors`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Two-Column Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1B2A5C] mb-1.5">
                        Phone Number <span className="text-[#D1202F]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="(555) 000-0000"
                          className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-lg text-sm text-[#1B2330] placeholder-slate-400 focus:outline-none focus:border-[#1B2A5C] focus:ring-1 focus:ring-[#1B2A5C] transition-colors`}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                      </div>
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1B2A5C] mb-1.5">
                        Email Address <span className="text-[#D1202F]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="sarah@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 bg-white border ${errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-lg text-sm text-[#1B2330] placeholder-slate-400 focus:outline-none focus:border-[#1B2A5C] focus:ring-1 focus:ring-[#1B2A5C] transition-colors`}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#1B2A5C] mb-1.5">
                      Service Required <span className="text-[#D1202F]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => {
                        setFormData({ ...formData, service: e.target.value });
                        if (errors.service) setErrors({ ...errors, service: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-white border ${errors.service ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'} rounded-lg text-sm text-[#1B2330] focus:outline-none focus:border-[#1B2A5C] focus:ring-1 focus:ring-[#1B2A5C] transition-colors`}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="">Select a Painting Service...</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1B2A5C] mb-1.5">
                      Project Details or Questions <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the number of rooms, exterior square footage, timing, or colors you have in mind..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-[#1B2330] placeholder-slate-400 focus:outline-none focus:border-[#1B2A5C] focus:ring-1 focus:ring-[#1B2A5C] transition-colors resize-y"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#D1202F] hover:bg-[#B01724] active:bg-[#96121E] text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1202F] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending Request...
                        </span>
                      ) : (
                        <span>Request Free Quote</span>
                      )}
                    </button>
                    <p className="mt-2 text-center text-xs text-slate-500">
                      Zero commitment. We respect your privacy and will never share your contact details.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Slim Dark Navy Footer */}
      <footer className="bg-[#121C40] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left: Recreated Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Logo variant="dark" showTagline={true} size="md" />
              <p className="text-slate-400 text-xs mt-2 font-medium">
                {COMPANY_NAME} · Licensed & Insured Contractor
              </p>
            </div>

            {/* Middle: Fast Navigation Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
              <a href="#services" className="hover:text-white hover:underline transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-white hover:underline transition-colors">
                Why Choose Us
              </a>
              <a href="#contact" className="hover:text-white hover:underline transition-colors">
                Free Quote
              </a>
            </div>

            {/* Right: Phone & Call CTA */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <div className="text-xs text-slate-400">Call our painters anytime:</div>
              <a
                href={COMPANY_PHONE_TEL}
                className="mt-1 text-lg sm:text-xl font-extrabold text-[#FF4D5A] hover:text-white transition-colors flex items-center gap-2"
                aria-label={`Call ${COMPANY_PHONE_DISPLAY}`}
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_PHONE_DISPLAY}</span>
              </a>
            </div>

          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-800 text-center md:flex md:justify-between text-xs text-slate-400">
            <p>© {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Tagline: <span className="font-script text-[#FF4D5A] italic text-base ml-1" style={{ fontFamily: "'Caveat', cursive" }}>"{COMPANY_TAGLINE}"</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};
