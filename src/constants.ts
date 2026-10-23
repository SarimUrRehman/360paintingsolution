/**
 * ============================================================================
 * 360 PAINTING SOLUTIONS LLC - CONFIGURATION & CONSTANTS
 * ============================================================================
 * 
 * TO UPDATE THE BUSINESS PHONE NUMBER:
 * Change the two constants below:
 *  1. COMPANY_PHONE_DISPLAY: The customer-facing formatted phone string.
 *  2. COMPANY_PHONE_TEL: The clean numbers only for the tel: link.
 */

export const COMPANY_PHONE_DISPLAY = "(000) 000-0000";
export const COMPANY_PHONE_TEL = "tel:0000000000";

export const COMPANY_NAME = "360 Painting Solutions LLC";
export const COMPANY_TAGLINE = "Feel your home with our colour";

export interface PaintingService {
  id: string;
  title: string;
  description: string;
  iconName: 'roller' | 'house' | 'building' | 'brush';
  highlights: string[];
}

export const SERVICES: PaintingService[] = [
  {
    id: "interior",
    title: "Interior Painting",
    description: "walls, ceilings, and trim for a fresh, clean look",
    iconName: "roller",
    highlights: ["Dustless sanding & floor protection", "Crisp straight lines on trim & baseboards", "Low-VOC premium washable paints"]
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description: "durable, weather-resistant finishes that protect your home",
    iconName: "house",
    highlights: ["Pressure wash & thorough surface prep", "UV & weather-resistant coatings", "Siding, stucco, brick, & trim sealing"]
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    description: "professional, on-schedule painting for offices and businesses",
    iconName: "building",
    highlights: ["Flexible scheduling & minimal disruption", "High-durability commercial grade coatings", "Fully licensed, insured & compliant"]
  },
  {
    id: "cabinets",
    title: "Cabinet & Trim Painting",
    description: "smooth, long-lasting refinishing for kitchens and detail work",
    iconName: "brush",
    highlights: ["Factory-smooth spray & lacquer finishes", "Hardware removal & deep degreasing", "Fraction of the cost of new cabinetry"]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Free Estimates",
    desc: "Detailed, transparent written proposals with zero hidden fees or obligations."
  },
  {
    title: "Quality Paints & Materials",
    desc: "We use only premium, proven paint formulations for rich color depth and longevity."
  },
  {
    title: "Clean & Professional Crew",
    desc: "Respectful painters who protect your furnishings and leave your space spotless daily."
  },
  {
    title: "Satisfaction Guaranteed",
    desc: "Rigorous final walkthrough with you to ensure every line and corner is flawless."
  }
];
