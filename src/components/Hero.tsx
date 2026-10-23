import React from 'react';
import { Phone, FileText } from 'lucide-react';
import heroBgImage from '../assets/images/painting_hero_bg_1792792556613.jpg';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_TAGLINE } from '../constants.ts';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#1B2A5C] text-white py-16 sm:py-24 lg:py-28 min-h-[560px] flex items-center">
      {/* Background Photography with High-Depth Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Immaculately painted modern interior living room"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105 motion-safe:transition-transform motion-safe:duration-1000"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121C40]/95 via-[#1B2A5C]/92 to-[#121C40]/90" />
      </div>

      {/* Decorative SVG: Subtle Building Silhouette behind hero content */}
      <div
        className="absolute bottom-0 right-0 left-0 h-48 pointer-events-none z-1 opacity-10 flex justify-center overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1200 200"
          className="w-full max-w-7xl h-full fill-current text-white"
          preserveAspectRatio="none"
        >
          <polygon points="50,200 50,110 70,80 90,110 90,200" />
          <rect x="105" y="60" width="80" height="140" />
          <polygon points="105,60 145,25 185,60" />
          <rect x="200" y="90" width="60" height="110" />
          <rect x="280" y="40" width="120" height="160" />
          <polygon points="280,40 340,10 400,40" />
          <rect x="420" y="80" width="90" height="120" />
          <rect x="530" y="50" width="140" height="150" />
          <polygon points="530,50 600,15 670,50" />
          <rect x="690" y="95" width="85" height="105" />
          <rect x="800" y="40" width="110" height="160" />
          <polygon points="800,40 855,10 910,40" />
          <rect x="930" y="70" width="95" height="130" />
          <rect x="1045" y="100" width="120" height="100" />
        </svg>
      </div>

      {/* Decorative Circular Orbit Swoosh Motif (SVG) */}
      <div
        className="absolute -right-20 -top-20 md:right-10 md:top-1/2 md:-translate-y-1/2 w-80 h-80 md:w-[480px] md:h-[480px] pointer-events-none z-1 opacity-20"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle
            cx="200"
            cy="200"
            r="160"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeDasharray="16 12"
            fill="none"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="#FF4D5A"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Curved swoosh arc */}
          <path
            d="M 60 200 C 60 110, 140 40, 240 50 C 320 60, 360 140, 340 220 C 320 300, 220 350, 140 330"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">

          {/* Red Handwritten Tagline: "Feel your home with our colour" */}
          <div className="mb-3">
            <span
              className="font-script text-2xl sm:text-3xl md:text-4xl text-[#FF4D5A] font-bold tracking-wide drop-shadow-sm inline-block"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              {COMPANY_TAGLINE}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none text-balance">
            A Complete Circle of <span className="text-white">Painting Solutions.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
            Interior, exterior, and commercial painting done right, from first color choice to final coat.
          </p>

          {/* Two Buttons: Solid Red "Call Now" and Outlined White "Request a Free Quote" */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Solid Red Call Button */}
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center justify-center gap-2.5 bg-[#D1202F] hover:bg-[#B01724] active:bg-[#96121E] text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1202F] text-center"
              aria-label={`Call now at ${COMPANY_PHONE_DISPLAY}`}
            >
              <Phone className="w-5 h-5 shrink-0" />
              <span>Call Now: {COMPANY_PHONE_DISPLAY}</span>
            </a>

            {/* Outlined White "Request a Free Quote" Button */}
            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-[#1B2A5C] text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer text-center"
            >
              <FileText className="w-5 h-5 shrink-0" />
              <span>Request a Free Quote</span>
            </button>
          </div>

          {/* Quiet Trust Points below hero buttons */}
          <div className="mt-8 pt-6 border-t border-slate-400/20 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4D5A]"></span>
              Free On-Site & Digital Estimates
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4D5A]"></span>
              Fully Insured & Guaranteed
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF4D5A]"></span>
              Premium Sherwin-Williams & Benjamin Moore Paints
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
