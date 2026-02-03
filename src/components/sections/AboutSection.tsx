"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { TECH_STACK } from "@/lib/constants";

// Tech icons as simple SVG components
const techIcons: Record<string, ReactNode> = {
  react: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path fillRule="evenodd" d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm0-2a7 7 0 100-14 7 7 0 000 14z" />
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5L7 11l1.5-1.5 2 2 5-5L17 8l-6.5 8.5z" />
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3zm10.5 10.5v-1.5H9v1.5h1.5v4.5h1.5v-4.5h1.5zm3 0v4.5H18v-6h-4.5v1.5h3z" />
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z" />
    </svg>
  ),
  javascript: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M3 3h18v18H3V3zm12.5 14.5c0-1.5-1-2-2-2.5-1-.5-1.5-.5-1.5-1s.5-1 1-1 1 .5 1 1h1.5c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5c0 1.5 1 2 2 2.5 1 .5 1.5.5 1.5 1s-.5 1-1 1-1-.5-1-1H10c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5z" />
    </svg>
  ),
  html: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm13 6H8l.25 2.5h8.5l-.75 8-4 1.25-4-1.25-.25-3h2l.12 1.5 2.13.5 2.13-.5.25-3H7.5L7 6h10l-.25 2z" />
    </svg>
  ),
  css: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm12.5 5l-.5 2H8.5l.25 2h7l-.75 7.5-3 1-3-1-.25-2.5h2l.12 1.25 1.13.25 1.13-.25.12-1.75H7.5l-.5-5.5h9z" />
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.5 3.64v7.36L12 18.82l-6.5-3.64V7.82L12 4.18z" />
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.84 0L9.2 4.22l2.33 2.33a1.55 1.55 0 011.96 1.96l2.25 2.25a1.55 1.55 0 11-.93.93l-2.09-2.1v5.51a1.55 1.55 0 11-1.28-.07V9.4a1.55 1.55 0 01-.84-2.03L8.3 5.05l-5.93 5.93a1.3 1.3 0 000 1.84l8.73 8.73a1.3 1.3 0 001.84 0l8.68-8.68a1.3 1.3 0 000-1.84v.08z" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-20H4c0 2.21 1.79 4 4 4h4V4c0-2.21-1.79-4-4-4zm4 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8-4c0-2.21-1.79-4-4-4h-4v8h4c2.21 0 4-1.79 4-4zm-4 8h-4v8c2.21 0 4-1.79 4-4v-4z" />
    </svg>
  ),
  vercel: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M12 2L2 19.5h20L12 2z" />
    </svg>
  ),
  vscode: (
    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
      <path d="M17.5 2L10 8.5 5 5l-3 2v10l3 2 5-3.5L17.5 22l4.5-2V4l-4.5-2zM5 14.5v-5l2.5 2.5L5 14.5zm12.5 2L10 12l7.5-4.5v9z" />
    </svg>
  ),
};

export function AboutSection() {
  const frontendTech = TECH_STACK.filter((t) => t.category === "frontend");
  const otherTech = TECH_STACK.filter((t) => t.category !== "frontend");

  return (
    <section id="about" className="py-24 md:py-32 bg-noise relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mt-4">
              Who I Am
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image / Visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  {/* Placeholder avatar */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-accent to-secondary opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl font-bold gradient-text font-[var(--font-display)]">
                      C
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-secondary/20 backdrop-blur-sm border border-secondary/30"
              />
            </div>
          </FadeIn>

          {/* Bio Content */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                안녕하세요, <span className="gradient-text">Coinangel</span>입니다
              </h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
                  모던 웹 기술과 세련된 인터랙션을 통해 기억에 남는 디지털 경험을
                  만들어가는 것에 열정을 가지고 있습니다.
                </p>
                <p>
                  React, Next.js, TypeScript를 주력으로 사용하며,
                  최신 웹 표준과 접근성을 준수하는 고품질 코드를 작성합니다.
                  지속적인 학습과 성장을 추구하며, 팀과의 협업을 통해
                  더 나은 결과물을 만들어냅니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Tech Stack */}
        <div className="mt-24">
          <FadeIn>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-12">
              Tech Stack
            </h3>
          </FadeIn>

          {/* Frontend Technologies */}
          <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 mb-8">
            {frontendTech.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-accent/50 transition-colors card-hover"
                >
                  <div className="text-accent">
                    {techIcons[tech.icon] || (
                      <div className="w-8 h-8 rounded-full bg-accent/20" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted">
                    {tech.name}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Other Technologies */}
          <StaggerContainer
            delay={0.3}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6"
          >
            {otherTech.map((tech) => (
              <StaggerItem key={tech.name}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-colors card-hover"
                >
                  <div className="text-secondary">
                    {techIcons[tech.icon] || (
                      <div className="w-8 h-8 rounded-full bg-secondary/20" />
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted">
                    {tech.name}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
