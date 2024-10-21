import React from 'react';

interface CommunicationProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Communication: React.FC<CommunicationProps> = ({
  width = '64px',
  height = '64px',
  color = '#2C3E50',
}) => {
  return (
    <svg
      enableBackground="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M37,24.5v-8.7c0-2.2-2.2-3.9-4.4-3.9H16.1c-2.2,0-4.1,1.6-4.1,3.9v8.7c0,2.2,1.9,4.5,4.1,4.5H18v5l6.3-5h8.3
        C34.8,29,37,26.7,37,24.5z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M27.8,8.9c0-2.2,2.3-3.9,4.5-3.9h16.5C51.1,5,53,6.6,53,8.9v8.7c0,2.2-1.9,4.5-4.1,4.5H47v5l-6.3-5"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="25"
        cy="20.7"
        fill="none"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="32"
        cy="20.7"
        fill="none"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="18"
        cy="20.7"
        fill="none"
        r="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M56,53v-3.9c0,0,4.4-2.5,6-9c1.1-4.6-0.3-8-3.2-10.1c-1.5-1-3.4-1.3-5.1-1.3c-1.3,0-2.5,0.2-3.4,0.4
        c-2.7,0.8-4.9,3.2-6.7,8.8c-0.6,1.8-2.5,3.1-2,3.7c0.5,0.6,1.3,0.6,1.3,0.6s0.8,1.3-0.6,4.3c-0.8,1.6,4.8,3,4.8,3V53"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M9,60v-3.9c0,0-4.5-2.5-6-9c-1.1-4.6,0.2-8,3.2-10.1c1.5-1,3.4-1.3,5-1.3c1.3,0,2.5,0.2,3.4,0.4
        c2.7,0.8,4.9,3.2,6.7,8.8c0.6,1.8,2.5,3.1,2,3.7c-0.5,0.6-1.3,0.6-1.3,0.6s-0.7,1.3,0.7,4.3c0.8,1.6-4.7,3-4.7,3V60"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
