/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * 360 Painting Solutions LLC - Official Responsive Website
 * 
 * NOTE TO DEVELOPER / OWNER:
 * To customize the business phone number, update COMPANY_PHONE_DISPLAY and 
 * COMPANY_PHONE_TEL in `/src/constants.ts`. All links and buttons across the
 * entire application will automatically reflect the change.
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesAndAbout } from './components/ServicesAndAbout.tsx';
import { ContactAndFooter } from './components/ContactAndFooter.tsx';
import { FloatingCallButton } from './components/FloatingCallButton.tsx';

export default function App() {
  const [selectedServicePreset, setSelectedServicePreset] = useState<string>('');

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreset(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2330] selection:bg-[#D1202F] selection:text-white">
      {/* 1. Sticky Header */}
      <Header onQuoteClick={() => scrollToQuote()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onQuoteClick={() => scrollToQuote()} />

        {/* 3. Services + About Section */}
        <ServicesAndAbout onSelectService={(service) => scrollToQuote(service)} />

        {/* 4. Contact + Footer Section */}
        <ContactAndFooter selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Mobile Floating Red Call Button */}
      <FloatingCallButton />
    </div>
  );
}
