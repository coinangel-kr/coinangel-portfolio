"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent-hover glow",
  secondary:
    "bg-secondary text-white hover:opacity-90",
  outline:
    "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-background",
  ghost:
    "bg-transparent text-foreground hover:bg-card",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
    variants[variant],
    sizes[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={baseStyles}
    >
      {children}
    </MotionComponent>
  );
}
