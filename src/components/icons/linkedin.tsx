import React from "react";

interface IconProps {
  className?: string;
}

const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v16h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.3c0-2 0-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
  </svg>
);

export default LinkedInIcon;
