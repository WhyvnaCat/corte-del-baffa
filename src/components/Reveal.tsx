import { createElement } from "react";
import type { ElementType, ReactNode } from "react";
import { useReveal } from "../utils/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

export function Reveal({ children, as = "div", className = "", delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
