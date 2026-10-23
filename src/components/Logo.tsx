import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for white backgrounds (navy text), 'dark' for dark backgrounds (white text)
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showTagline = false,
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const navyColor = isDark ? '#FFFFFF' : '#1B2A5C';
  const grayColor = isDark ? '#4B556D' : '#8A94A6';
  const accentRed = isDark ? '#FF4D5A' : '#D1202F';

  // Responsive scale dimensions
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  const width = 230 * scale;
  const height = (showTagline ? 88 : 64) * scale;

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 250 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label="360 Painting Solutions LLC Logo"
      >
        <defs>
          <linearGradient id={`swooshGrad-${variant}`} x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor={navyColor} stopOpacity="0.2" />
            <stop offset="60%" stopColor={navyColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={navyColor} stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Faint building silhouette motif in the background */}
        <g opacity={isDark ? 0.35 : 0.28} fill={grayColor}>
          {/* Building silhouettes */}
          <rect x="58" y="14" width="14" height="32" rx="1" />
          <rect x="74" y="8" width="16" height="38" rx="1" />
          <rect x="92" y="16" width="13" height="30" rx="1" />
          <rect x="107" y="20" width="12" height="26" rx="1" />
          {/* Roof peaks / architectural details */}
          <polygon points="58,14 65,8 72,14" />
          <polygon points="74,8 82,3 90,8" />
          {/* Subtle window grid punchouts */}
          <rect x="77" y="12" width="3" height="4" fill={isDark ? '#121C40' : '#FFFFFF'} opacity="0.6" />
          <rect x="83" y="12" width="3" height="4" fill={isDark ? '#121C40' : '#FFFFFF'} opacity="0.6" />
          <rect x="77" y="19" width="3" height="4" fill={isDark ? '#121C40' : '#FFFFFF'} opacity="0.6" />
          <rect x="83" y="19" width="3" height="4" fill={isDark ? '#121C40' : '#FFFFFF'} opacity="0.6" />
        </g>

        {/* Bold 360° Text */}
        <text
          x="34"
          y="42"
          fill={navyColor}
          fontFamily="'Montserrat', sans-serif"
          fontWeight="800"
          fontSize="36"
          letterSpacing="-0.04em"
        >
          360°
        </text>

        {/* PAINTING SOLUTION text beneath */}
        <text
          x="35"
          y="56"
          fill={navyColor}
          fontFamily="'Montserrat', sans-serif"
          fontWeight="700"
          fontSize="10"
          letterSpacing="0.18em"
        >
          PAINTING SOLUTION
        </text>

        {/* Circular / Orbital Swoosh wrapping around and ending in a paint roller */}
        {/* Arc path starting bottom-left, curving under, looping up over the top, ending at top-right */}
        <path
          d="M 28 54 C 12 52 8 36 12 24 C 16 10 35 4 70 3 C 115 2 142 8 152 20 C 158 27 156 36 148 42"
          stroke={`url(#swooshGrad-${variant})`}
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small Paint Roller at the end of the swoosh */}
        <g transform="translate(142, 38) rotate(18)">
          {/* Roller handle / wire arm */}
          <path
            d="M 0 0 L 8 4 L 8 10 L 6 12"
            stroke={navyColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Handle grip */}
          <rect x="4.5" y="11" width="3.5" height="7" rx="1.2" fill={accentRed} />
          {/* Roller cylinder */}
          <rect x="-3" y="-6" width="18" height="7" rx="2.5" fill={navyColor} />
          {/* Paint edge highlight on roller cylinder */}
          <rect x="1" y="-5" width="10" height="2" rx="0.5" fill={accentRed} opacity="0.9" />
        </g>

        {/* Optional Tagline: "Feel your home with our colour" in Caveat script */}
        {showTagline && (
          <text
            x="36"
            y="76"
            fill={accentRed}
            fontFamily="'Caveat', cursive"
            fontWeight="700"
            fontSize="18"
            fontStyle="italic"
            letterSpacing="0.02em"
          >
            Feel your home with our colour
          </text>
        )}
      </svg>
    </div>
  );
};
