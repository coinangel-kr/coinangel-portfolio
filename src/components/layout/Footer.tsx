"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/lib/constants";

const iconMap: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold font-[var(--font-display)]">
              <span className="gradient-text">Coin</span>
              <span className="text-foreground">angel</span>
            </span>
            <p className="text-sm text-muted flex items-center gap-1">
              © {currentYear} {PERSONAL_INFO.name}. Made with
              <Heart className="w-4 h-4 text-secondary inline animate-pulse" />
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.icon] || Github;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-card border border-border hover:border-accent hover:text-accent transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Built with badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-border/50 text-center"
        >
          <p className="text-xs text-muted">
            Built with{" "}
            <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent">Tailwind CSS</span>, and{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
