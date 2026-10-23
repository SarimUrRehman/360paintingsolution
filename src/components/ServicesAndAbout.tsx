import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, WHY_CHOOSE_US, PaintingService } from '../constants.ts';

interface ServicesAndAboutProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesAndAbout: React.FC<ServicesAndAboutProps> = ({ onSelectService }) => {
  // Render clean line icon for each service
  const renderIcon = (iconName: PaintingService['iconName']) => {
    switch (iconName) {
      case 'roller':
        return (
          <svg className="w-8 h-8 text-[#1B2A5C] group-hover:text-[#D1202F] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
            <path d="m5 2 5 5" />
            <path d="M2 13h15" />
            <path d="M22 20a2 2 0 1 1-4 0v-1a2 2 0 0 1 4 0v1Z" />
          </svg>
        );
      case 'house':
        return (
          <svg className="w-8 h-8 text-[#1B2A5C] group-hover:text-[#D1202F] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'building':
        return (
          <svg className="w-8 h-8 text-[#1B2A5C] group-hover:text-[#D1202F] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
          </svg>
        );
      case 'brush':
        return (
          <svg className="w-8 h-8 text-[#1B2A5C] group-hover:text-[#D1202F] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" />
            <path d="M18 11l-4-4" />
            <path d="M17 3a2.83 2.83 0 1 1 4 4L14 14l-4-4 7-7Z" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="bg-[#F4F6FA] py-16 sm:py-24 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8A94A6] mb-2">
            <span>Specialized Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A5C] tracking-tight">
            Our Painting Services
          </h2>
          {/* Subtle swoosh divider motif */}
          <div className="flex justify-center my-4" aria-hidden="true">
            <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-[#D1202F]">
              <path d="M2 6C35 12 85 0 118 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-slate-600 text-base sm:text-lg">
            From single-room transformations to complete commercial exterior revamps, our seasoned crew provides top-tier finishes that endure.
          </p>
        </div>

        {/* 4 Attractive Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-lg p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Line Icon Container with soft gray accent */}
                <div className="w-14 h-14 rounded-lg bg-[#F4F6FA] border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-[#1B2A5C]/5 transition-colors">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#1B2A5C] group-hover:text-[#D1202F] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed capitalize-first">
                  {service.description.charAt(0).toUpperCase() + service.description.slice(1)}.
                </p>

                {/* Specific Process Checklist */}
                <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-500">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D1202F] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Pre-selects service & navigates to quote form */}
              <button
                type="button"
                onClick={() => onSelectService(service.title)}
                className="mt-6 pt-3 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1B2A5C] hover:text-[#D1202F] transition-colors group-hover:translate-x-1 duration-150 cursor-pointer text-left"
              >
                <span>Request quote for this service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Strip */}
        <div id="about" className="mt-16 sm:mt-20 scroll-mt-28">
          <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#8A94A6]">The 360 Guarantee</span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1B2A5C]">
                Why Choose 360 Painting Solutions
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We handle every brushstroke with pride, treating your property with the utmost care from start to finish.
              </p>
            </div>

            {/* 4 Check-Icon Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {WHY_CHOOSE_US.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-[#1B2A5C]/5 text-[#D1202F] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1B2A5C]">
                      {point.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
