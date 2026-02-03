"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}: AnimatedTextProps) {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      style={{ perspective: "1000px" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block origin-bottom"
          style={{ transformStyle: "preserve-3d" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
