"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import useSound from "@/hooks/sound";

interface SoundLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export default function SoundLink({
  children,
  className,
  onClick,
  target,
  rel,
  ...props
}: SoundLinkProps) {
  const playClick = useSound("/sound/smf.mp3"); // <-- fixed to smf.mp3

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    playClick();
    if (onClick) onClick(e);
  };

  return (
    <Link {...props} className={className} onClick={handleClick} target={target} rel={rel}>
      {children}
    </Link>
  );
}
