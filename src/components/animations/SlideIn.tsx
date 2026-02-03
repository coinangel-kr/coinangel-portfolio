"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right";
  once?: boolean;
}

export function SlideIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "left",
  once = true,
}: SlideInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
