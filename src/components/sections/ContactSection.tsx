"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedText } from "@/components/animations/AnimatedText";
import { Button } from "@/components/ui/Button";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/constants";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-mesh bg-noise relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 border border-accent/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 border border-secondary/10 rounded-full"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <FadeIn>
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              Get in Touch
            </span>
          </FadeIn>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mt-4 mb-6">
            <AnimatedText
              text="Let's Work Together"
              className="gradient-text"
              delay={0.2}
            />
          </h2>

          <FadeIn delay={0.4}>
            <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면
              언제든지 연락주세요. 함께 멋진 것을 만들어봐요!
            </p>
          </FadeIn>

          {/* Email CTA */}
          <FadeIn delay={0.6}>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-4 px-8 py-6 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 mb-12"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted">Send me an email</p>
                <p className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-4"
              >
                <Send className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
              </motion.div>
            </motion.a>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col items-center gap-6">
              <p className="text-sm text-muted">Or find me on</p>
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((link, index) => {
                  const Icon = iconMap[link.icon] || Github;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-all duration-300 card-hover"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          {/* Availability Badge */}
          <FadeIn delay={1}>
            <div className="mt-16">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-accent/30"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                </span>
                <span className="text-sm font-medium">
                  Currently available for new projects
                </span>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
