import React from 'react';

interface LocationProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Location: React.FC<LocationProps> = ({
  width = '32px',
  height = '32px',
  color = '#101820',
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <defs>
        <style>{`.cls-1{fill:${color};}`}</style>
      </defs>
      <title />
      <g data-name="Layer 21" id="Layer_21">
        <path
          className="cls-1"
          d="M32,64a1,1,0,0,1-.59-.19C30.33,63,5,44.31,5,27a27,27,0,0,1,54,0c0,17.31-25.33,36-26.41,36.81A1,1,0,0,1,32,64ZM32,2A25,25,0,0,0,7,27C7,41.89,28.16,58.81,32,61.75,35.84,58.81,57,41.89,57,27A25,25,0,0,0,32,2Z"
        />
        <path
          className="cls-1"
          d="M32,40A14,14,0,1,1,46,26,14,14,0,0,1,32,40Zm0-26A12,12,0,1,0,44,26,12,12,0,0,0,32,14Z"
        />
      </g>
    </svg>
  );
};
