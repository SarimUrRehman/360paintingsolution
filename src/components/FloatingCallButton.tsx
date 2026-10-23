import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from '../constants.ts';

export const FloatingCallButton: React.FC = () => {
  return (
    <aside
      aria-label="Quick Phone Call"
      className="md:hidden fixed bottom-4 right-4 z-50 print:hidden"
    >
      <a
        href={COMPANY_PHONE_TEL}
        className="flex items-center gap-2.5 bg-[#D1202F] hover:bg-[#B01724] active:bg-[#96121E] text-white font-bold text-sm px-4 py-3 rounded-full shadow-2xl transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1202F] border-2 border-white/20"
        aria-label={`Call 360 Painting Solutions at ${COMPANY_PHONE_DISPLAY}`}
      >
        <span className="p-1 rounded-full bg-white/20">
          <Phone className="w-4 h-4 text-white animate-bounce" />
        </span>
        <span className="tracking-wide">Call {COMPANY_PHONE_DISPLAY}</span>
      </a>
    </aside>
  );
};
