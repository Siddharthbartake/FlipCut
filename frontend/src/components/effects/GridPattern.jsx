import React from 'react';
import { cn } from '@/lib/utils';

export function GridPattern({
  width = 40,
  height = 40,
  className,
  strokeDasharray = '0',
  ...props
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-white/[0.01] stroke-white/[0.05]',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M${height} 0L0 0 0 ${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${id})`} />
    </svg>
  );
}

export function DotPattern({
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-white/[0.03]',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={16}
          height={16}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${id})`} />
    </svg>
  );
}

export default GridPattern;
