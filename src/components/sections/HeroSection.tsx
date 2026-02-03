"use client";

import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-mesh bg-noise overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <FadeIn delay={0.2}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
              👋 Welcome to my portfolio
            </span>
          </FadeIn>

          {/* Main Title with Animated Text */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[var(--font-display)] mb-6">
            <AnimatedText
              text="Coinangel"
              className="gradient-text glow-text"
              delay={0.3}
              staggerDelay={0.05}
            />
          </h1>

          {/* Subtitle */}
          <FadeIn delay={0.8}>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted font-medium mb-6">
              {PERSONAL_INFO.title}
            </h2>
          </FadeIn>

          {/* Bio */}
          <FadeIn delay={1}>
            <p className="text-base sm:text-lg text-muted max-w-2xl mb-10 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={1.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button href="#projects" size="lg">
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={1.4}>
            <div className="flex items-center gap-4 mt-12">
              {SOCIAL_LINKS.slice(0, 2).map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass hover:bg-accent/20 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === "github" && <Github className="w-5 h-5" />}
                  {link.icon === "linkedin" && <Linkedin className="w-5 h-5" />}
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
