import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "onLight" | "whatsapp";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
