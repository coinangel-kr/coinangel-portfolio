"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30 bg-noise relative">
      <div className="section-container">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium uppercase tracking-widest">
              My Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mt-4">
              Featured Projects
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for
              building exceptional digital experiences.
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-accent text-background glow"
                    : "bg-card border border-border text-muted hover:border-accent/50 hover:text-foreground"
                )}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.span
                    layoutId="categoryIndicator"
                    className="absolute inset-0 rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted">
              No projects found in this category yet.
            </p>
          </motion.div>
        )}

        {/* View More */}
        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/coinangel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-colors"
            >
              View More on GitHub
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
