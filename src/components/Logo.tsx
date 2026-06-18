import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 36, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield base */}
      <path
        d="M20 3L5 9V20C5 28.5 11.5 36.3 20 38.5C28.5 36.3 35 28.5 35 20V9L20 3Z"
        fill="white"
        fillOpacity="0.08"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Chain links inside shield */}
      <rect x="12" y="14" width="6" height="5" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="22" y="14" width="6" height="5" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="16.5" x2="22" y2="16.5" stroke="white" strokeWidth="1.5" />
      <rect x="12" y="22" width="6" height="5" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="22" y="22" width="6" height="5" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="24.5" x2="22" y2="24.5" stroke="white" strokeWidth="1.5" />
      <line x1="15" y1="19" x2="15" y2="22" stroke="white" strokeWidth="1.5" />
      <line x1="25" y1="19" x2="25" y2="22" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
