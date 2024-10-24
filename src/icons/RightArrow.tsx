import React from 'react';

interface RightArrowProps {
  width?: string;
  height?: string;
  color?: string;
}

export const RightArrow: React.FC<RightArrowProps> = ({
  width = '32px',
  height = '32px',
  color = '#000',
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <defs>
        <style>
          {`.cls-1{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
        </style>
      </defs>
      <title />
      <g id="arrow-right">
        <line className="cls-1" x1="29.08" x2="3.08" y1="16" y2="16" />
        <line className="cls-1" x1="29.08" x2="25.08" y1="16" y2="21" />
        <line className="cls-1" x1="29.08" x2="25.08" y1="16" y2="11" />
      </g>
    </svg>
  );
};
