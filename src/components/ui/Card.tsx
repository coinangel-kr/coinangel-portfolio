"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface CardProps {
  project: Project;
  index: number;
}

export function Card({ project, index }: CardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-card border border-border",
          "card-hover"
        )}
      >
        {/* Image placeholder with gradient */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-gradient" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-accent text-background"
                aria-label="View live site"
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-foreground text-background dark:bg-foreground dark:text-background"
                aria-label="View GitHub repository"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-muted text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Border glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-secondary/20 to-accent/20 blur-sm" />
        </div>
      </div>
    </motion.article>
  );
}
