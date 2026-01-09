import React from 'react';
import NumberFlow from '@number-flow/react';

export function AnimatedCounter({ 
  value, 
  prefix = '', 
  suffix = '',
  className = '',
  format = {}
}) {
  return (
    <span className={className}>
      {prefix}
      <NumberFlow
        value={value}
        format={format}
        transformTiming={{ duration: 500, easing: 'ease-out' }}
        spinTiming={{ duration: 500, easing: 'ease-out' }}
      />
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
