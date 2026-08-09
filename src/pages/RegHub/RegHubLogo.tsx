import React from 'react';

interface RegHubLogoProps {
  className?: string;
  height?: number;
}

export const RegHubLogo: React.FC<RegHubLogoProps> = ({ className = '', height = 40 }) => {
  return (
    <img
      src="/images/reghub.png"
      alt="Aumyaa RegHub"
      style={{ height }}
      className={`w-auto object-contain ${className}`}
    />
  );
};
