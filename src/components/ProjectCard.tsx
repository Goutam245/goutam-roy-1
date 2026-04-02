import { ExternalLink, Code2, Atom } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export interface Project {
  title: string;
  category: string;
  badgeColor: "mint" | "violet" | "orange" | "gold";
  desc: string;
  tech: string[];
  highlights: string[];
  live?: string;
  github?: string;
  image?: string;
  large?: boolean;
  tags?: string[];
  featured?: boolean;
}

const badgeClass = {
  mint: "badge-mint",
  violet: "badge-violet",
  orange: "badge-orange",
  gold: "badge-gold",
};

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div
      className={`project-card glass-card rounded-xl overflow-hidden h-full flex flex-col group relative ${project.featured ? "ring-1 ring-[hsl(44,92%,61%,0.4)] shadow-[0_0_30px_rgba(245,200,66,0.15)]" : ""}`}
      style={{ minHeight: project.featured ? 620 : 580 }}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-10 text-[10px] font-mono px-2.5 py-1 rounded-md border backdrop-blur-sm badge-gold bg-[hsl(44,92%,61%,0.1)]">
          ⭐ Real Client Project
        </div>
      )}
      {/* Image */}
      {project.image ? (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <span className={`category-badge absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-md border backdrop-blur-sm ${badgeClass[project.badgeColor]}`}>
            {project.category}
          </span>
        </div>
      ) : (
        <div className="relative overflow-hidden h-56 flex flex-col items-center justify-center gap-3 bg-elevated">
          <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            <Atom size={60} className="text-primary" />
          </motion.div>
          <span className="text-muted-foreground font-mono text-xs">Interactive Dashboard</span>
          <span className={`category-badge absolute top-3 right-3 text-[10px] font-mono px-2.5 py-1 rounded-md border backdrop-blur-sm ${badgeClass[project.badgeColor]}`}>
            {project.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title row with links */}
        <div className="flex items-start justify-between mb-1">
          <span className={`text-[10px] font-mono ${badgeClass[project.badgeColor]}`}>{project.category}</span>
          <div className="flex gap-3 shrink-0">
            <a href={project.live || "#"} target="_blank" rel="noopener noreferrer" aria-label={`Live demo – ${project.title}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <ExternalLink size={14} />
            </a>
            <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" aria-label={`Source code – ${project.title}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Code2 size={14} />
            </a>
          </div>
        </div>

        <h3 className="font-display font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{project.desc}</p>

        {/* Divider */}
        <div className="h-px bg-border mb-3" />

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-primary mt-0.5 shrink-0">✓</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px bg-border mb-3" />

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag text-[10px]">{t}</span>
          ))}
        </div>

        {/* Action buttons — always both, pushed to bottom */}
        <div className="mt-auto flex gap-3">
          <a
            href={project.live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-mono py-2 rounded-lg border border-primary/25 text-primary hover:bg-primary/10 transition-all duration-200"
          >
            Live Demo ↗
          </a>
          <a
            href={project.github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-xs font-mono py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all duration-200"
          >
            View Code &lt;/&gt;
          </a>
        </div>
      </div>
    </div>
  </ScrollReveal>
);

export default ProjectCard;
