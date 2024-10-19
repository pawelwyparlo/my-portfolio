import React from 'react';

interface BurgerMenuProps {
  width?: string;
  height?: string;
  strokeColor?: string;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  width = '24px',
  height = '24px',
  strokeColor = 'black',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 9H21"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 16H26.3333"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 23H15.6667"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
