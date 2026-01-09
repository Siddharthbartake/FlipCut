import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function GlowButton({ children, className, glowColor = 'rgba(124, 58, 237, 0.5)', ...props }) {
  return (
    <button
      className={cn(
        'relative overflow-hidden rounded-full px-8 py-3 font-medium',
        'bg-[#7c3aed] text-white',
        'transition-all duration-300',
        'hover:shadow-[0_0_40px_rgba(124,58,237,0.5)]',
        'active:scale-95',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`
        }}
      />
    </button>
  );
}

export function BorderBeamButton({ children, className, ...props }) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500" />
      <button
        className={cn(
          'relative rounded-full px-8 py-3 font-medium',
          'bg-[#0a0a0f] text-white',
          'border border-white/10',
          'transition-all duration-300',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}

export default MagneticButton;
