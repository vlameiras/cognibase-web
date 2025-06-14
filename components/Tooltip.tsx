import React from 'react';
import { useTooltip } from '@/context/LanguageContext';
import { useLanguage } from '@/context/LanguageContext';

interface TooltipTriggerProps {
  tooltipKey: string;
  children: React.ReactNode;
  className?: string;
}

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ 
  tooltipKey, 
  children,
  className = ''
}) => {
  const { showTooltip, hideTooltip } = useTooltip();
  const { t } = useLanguage();
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    showTooltip(t(tooltipKey), x, y);
  };

  return (
    <div 
      className={`inline-flex items-center relative group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hideTooltip}
    >
      {children}
      <span className="ml-1.5 flex items-center justify-center w-5 h-5 bg-blue-500/20 rounded-full cursor-help text-blue-400 border border-blue-400/30 transition-all duration-200 group-hover:bg-blue-500/30 group-hover:text-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </span>
    </div>
  );
};
