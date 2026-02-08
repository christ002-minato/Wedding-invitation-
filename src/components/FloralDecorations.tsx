import React from 'react';

const C = {
  bordeaux: '#6B1D2E',
  bordeauxLight: '#8B3A4F',
  or: '#C9A84C',
  orLight: '#E8D5A3',
  eucalyptus: '#5F7161',
  eucalyptusLight: '#8FA08F',
};

interface RoseBranchProps {
  side?: 'left' | 'right';
  scale?: number;
  opacity?: number;
}

export const RoseBranch: React.FC<RoseBranchProps> = ({ side = 'left', scale = 1, opacity = 1 }) => (
  <svg 
    width={320 * scale} 
    height={200 * scale} 
    viewBox="0 0 320 200" 
    style={{ 
      opacity, 
      transform: side === 'right' ? 'scaleX(-1)' : 'none' 
    }}
  >
    {/* Main branch */}
    <path 
      d="M20,180 Q80,140 140,100 Q180,70 220,50" 
      fill="none" 
      stroke="#4A5E4A" 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
    {/* Secondary branches */}
    <path d="M80,140 Q60,120 50,95" fill="none" stroke="#5F7161" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M140,100 Q120,75 115,55" fill="none" stroke="#5F7161" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M180,70 Q200,55 210,35" fill="none" stroke="#4A5E4A" strokeWidth="1.5" strokeLinecap="round"/>
    
    {/* Eucalyptus leaves */}
    <ellipse cx="55" cy="108" rx="12" ry="6" fill="#5F7161" transform="rotate(-30 55 108)" opacity="0.9"/>
    <ellipse cx="45" cy="118" rx="10" ry="5" fill="#8FA08F" transform="rotate(-50 45 118)" opacity="0.7"/>
    <ellipse cx="118" cy="62" rx="11" ry="5" fill="#5F7161" transform="rotate(-20 118 62)" opacity="0.85"/>
    <ellipse cx="112" cy="72" rx="9" ry="4.5" fill="#8FA08F" transform="rotate(-40 112 72)" opacity="0.7"/>
    <ellipse cx="208" cy="42" rx="10" ry="5" fill="#5F7161" transform="rotate(10 208 42)" opacity="0.85"/>
    <ellipse cx="215" cy="52" rx="8" ry="4" fill="#8FA08F" transform="rotate(-15 215 52)" opacity="0.6"/>
    <ellipse cx="95" cy="128" rx="9" ry="4.5" fill="#8FA08F" transform="rotate(-60 95 128)" opacity="0.6"/>
    
    {/* Large rose */}
    <g transform="translate(50,75)">
      <circle cx="0" cy="0" r="22" fill="#6B1D2E"/>
      <path d="M-15,-8 Q-5,-18 5,-10 Q2,-2 -8,2 Z" fill="#7D2538" opacity="0.9"/>
      <path d="M5,-12 Q15,-18 18,-6 Q10,0 2,-4 Z" fill="#5A1525" opacity="0.85"/>
      <path d="M-10,5 Q-18,12 -12,18 Q-2,14 2,6 Z" fill="#7D2538" opacity="0.8"/>
      <path d="M8,6 Q16,14 10,20 Q2,12 0,4 Z" fill="#5A1525" opacity="0.75"/>
      <circle cx="0" cy="0" r="8" fill="#8B3A4F" opacity="0.6"/>
    </g>
    
    {/* Medium rose */}
    <g transform="translate(115,45)">
      <circle cx="0" cy="0" r="16" fill="#6B1D2E"/>
      <path d="M-10,-5 Q-3,-13 4,-7 Q1,-1 -5,1 Z" fill="#7D2538" opacity="0.9"/>
      <path d="M4,-8 Q11,-12 12,-3 Q6,1 1,-2 Z" fill="#5A1525" opacity="0.85"/>
      <circle cx="0" cy="0" r="5" fill="#8B3A4F" opacity="0.6"/>
    </g>
    
    {/* Small rose */}
    <g transform="translate(210,28)">
      <circle cx="0" cy="0" r="10" fill="#6B1D2E"/>
      <path d="M-6,-3 Q-2,-8 3,-4 Q1,0 -3,1 Z" fill="#7D2538" opacity="0.85"/>
      <circle cx="0" cy="0" r="4" fill="#8B3A4F" opacity="0.5"/>
    </g>
    
    {/* Rose buds */}
    <circle cx="160" cy="52" r="5" fill="#6B1D2E" opacity="0.7"/>
    <circle cx="95" cy="122" r="4" fill="#6B1D2E" opacity="0.5"/>
  </svg>
);

interface FloralCornerProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
}

export const FloralCorner: React.FC<FloralCornerProps> = ({ position }) => {
  const rot = 
    position === 'tr' ? 'rotate(90deg)' : 
    position === 'bl' ? 'rotate(180deg)' : 
    position === 'br' ? 'rotate(270deg)' : 
    'rotate(0deg)';
  
  const positionStyles: React.CSSProperties = {
    position: 'absolute',
    [position === 'tl' || position === 'bl' ? 'left' : 'right']: 0,
    [position === 'tl' || position === 'tr' ? 'top' : 'bottom']: 0,
    transform: rot,
    pointerEvents: 'none'
  };
  
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" style={positionStyles}>
      <path d="M5,5 Q30,5 30,30" fill="none" stroke="#E8D5A3" strokeWidth="1.5" opacity="0.6"/>
      <path d="M5,5 Q5,30 30,30" fill="none" stroke="#E8D5A3" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="18" cy="18" r="6" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
      <circle cx="30" cy="8" r="3" fill="#E8D5A3" opacity="0.4"/>
      <circle cx="8" cy="30" r="3" fill="#E8D5A3" opacity="0.4"/>
      <ellipse cx="22" cy="10" rx="4" ry="2" fill="white" opacity="0.3" transform="rotate(-30 22 10)"/>
      <ellipse cx="10" cy="22" rx="2" ry="4" fill="white" opacity="0.3" transform="rotate(20 10 22)"/>
    </svg>
  );
};

export const GoldenKnot: React.FC = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8D5A3"/>
        <stop offset="50%" stopColor="#C9A84C"/>
        <stop offset="100%" stopColor="#A08030"/>
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="18" fill="none" stroke="url(#goldGrad)" strokeWidth="3"/>
    <path 
      d="M25,30 Q40,10 55,30 Q60,40 55,50 Q40,70 25,50 Q20,40 25,30 Z" 
      fill="none" 
      stroke="url(#goldGrad)" 
      strokeWidth="2.5" 
      strokeLinejoin="round"
    />
    <circle cx="40" cy="40" r="5" fill="url(#goldGrad)" opacity="0.8"/>
  </svg>
);

export const GoldLine: React.FC = () => (
  <div 
    style={{
      width: '60px',
      height: '2px',
      background: `linear-gradient(90deg, transparent, ${C.or}, transparent)`,
      margin: '0 auto'
    }}
  />
);

interface FloatingPetalsProps {
  count?: number;
}

export const FloatingPetals: React.FC<FloatingPetalsProps> = ({ count = 18 }) => {
  return (
    <>
      <style>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i} 
          className="absolute pointer-events-none" 
          style={{
            left: `${Math.random() * 100}%`,
            top: '-30px',
            width: '8px',
            height: '14px',
            borderRadius: '50% 50% 50% 0',
            background: i % 3 === 0 ? C.bordeaux : i % 3 === 1 ? '#E8D0DA' : C.eucalyptus,
            opacity: 0.5,
            animation: `fall ${4 + Math.random() * 4}s linear ${Math.random() * 3}s infinite`
          }}
        />
      ))}
    </>
  );
};

interface FloatingPetalsUpProps {
  count?: number;
}

export const FloatingPetalsUp: React.FC<FloatingPetalsUpProps> = ({ count = 12 }) => {
  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
      {[...Array(count)].map((_, i) => (
        <div 
          key={i} 
          className="fixed pointer-events-none z-0" 
          style={{
            left: `${(i * 8.3) + Math.random() * 5}%`,
            top: '0',
            width: i % 2 === 0 ? '10px' : '7px',
            height: i % 2 === 0 ? '16px' : '12px',
            borderRadius: '50% 50% 50% 0',
            background: i % 3 === 0 ? C.bordeaux : i % 3 === 1 ? '#E8D0DA' : C.eucalyptus,
            opacity: 0.25,
            animation: `floatUp ${7 + Math.random() * 6}s linear ${Math.random() * 4}s infinite`
          }}
        />
      ))}
    </>
  );
};
