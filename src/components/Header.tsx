import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from '../constants.ts';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on Left */}
          <a
            href="#"
            className="flex items-center focus-visible:outline-2 focus-visible:outline-[#1B2A5C] rounded-sm py-1"
            aria-label="360 Painting Solutions LLC Home"
          >
            <Logo variant="light" showTagline={false} size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-[#1B2A5C]">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="py-1 hover:text-[#D1202F] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D1202F] after:transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="py-1 hover:text-[#D1202F] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D1202F] after:transition-all"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="py-1 hover:text-[#D1202F] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D1202F] after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Action on Right (Call Now button showing phone number) */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={COMPANY_PHONE_TEL}
              className="inline-flex items-center gap-2 bg-[#D1202F] hover:bg-[#B01724] active:bg-[#96121E] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D1202F] whitespace-nowrap"
              aria-label={`Call now at ${COMPANY_PHONE_DISPLAY}`}
            >
              <Phone className="w-4 h-4 shrink-0 animate-pulse" />
              <span>Call Now: {COMPANY_PHONE_DISPLAY}</span>
            </a>

            {/* Mobile Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1B2A5C] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#1B2A5C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Collapse */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#1B2A5C]">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="px-3 py-2.5 rounded-md hover:bg-slate-50 hover:text-[#D1202F] transition-colors"
            >
              Our Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="px-3 py-2.5 rounded-md hover:bg-slate-50 hover:text-[#D1202F] transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="px-3 py-2.5 rounded-md hover:bg-slate-50 hover:text-[#D1202F] transition-colors"
            >
              Contact & Free Quote
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold border border-[#1B2A5C] text-[#1B2A5C] rounded-lg hover:bg-slate-50 transition-colors"
            >
              Request a Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
