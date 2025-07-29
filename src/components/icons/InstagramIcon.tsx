import React from "react";

interface IconProps {
  className?: string;
}

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0-2h10c3.87 0 7 3.13 7 7v10c0 3.87-3.13 7-7 7H7c-3.87 0-7-3.13-7-7V7c0-3.87 3.13-7 7-7zm5 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.5-1a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

export default InstagramIcon;
