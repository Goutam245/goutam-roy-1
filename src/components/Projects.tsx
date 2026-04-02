import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Code2, Trophy } from "lucide-react";
import alphaCoreSrc from "@/assets/alpha-core-solutions.jpg";
import qrewOnlySrc from "@/assets/qrew-only.jpg";

interface Project {
  title: string;
  category: string;
  desc: string;
  tech: string[];
  live?: string;
  github?: string;
  large?: boolean;
  image?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Alpha Core Solutions",
    category: "⭐ Client Delivered",
    desc: "Professional security company website built and delivered for a Saudi Arabia client. Bilingual Arabic/English corporate platform.",
    tech: ["React", "Tailwind CSS", "Client Project", "Arabic/EN"],
    live: "https://alpha-core-solution.netlify.app/",
    github: "https://github.com/Goutam245/Alpha-Core-Solution",
    image: alphaCoreSrc,
    featured: true,
    large: true,
  },
  {
    title: "QREW ONLY",
    category: "⭐ Client Delivered",
    desc: "Premium streetwear brand website delivered to a US-based client. Terminal/hacker aesthetic, product catalogue, members-only access, and global shipping.",
    tech: ["React", "Tailwind CSS", "E-commerce", "US Client"],
    live: "https://qrew-only-1v.vercel.app/",
    github: "https://github.com/Goutam245/QREW-ONLY-",
    image: qrewOnlySrc,
    featured: true,
  },
  {
    title: "Professional CV Builder",
    category: "SaaS Tool",
    desc: "Markdown-to-PDF resume generator adopted by developers for fast, clean CV formatting without manual effort.",
    tech: ["React", "PDF Generation", "LocalStorage", "Template System"],
    live: "https://resume-builder-web-site.vercel.app/",
    github: "https://github.com/Goutam245/Resume-Builder-Web-Site",
  },
  {
    title: "Real Estate Marketplace",
    category: "Platform",
    desc: "Property listing platform with advanced filtering, routing, and mobile-first design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Advanced Routing"],
    large: true,
  },
];

const ProjectCard = ({ project, delay }: { project: Project; delay: number }) => (
  <ScrollReveal delay={delay} className={project.large ? "sm:col-span-2" : ""}>
    <div
      className={`glass-card rounded-xl overflow-hidden h-full flex flex-col group relative ${
        project.featured ? "border-[rgba(245,200,66,0.35)] hover:shadow-[0_20px_60px_rgba(245,200,66,0.15)]" : ""
      }`}
    >
      {/* Image */}
      {project.image && (
        <div className="relative overflow-hidden h-44">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          {project.featured && (
            <span className="absolute top-3 left-3 text-[10px] font-mono px-2.5 py-1 rounded-md border border-[rgba(245,200,66,0.35)] bg-[rgba(245,200,66,0.15)] text-[#F5C842] backdrop-blur-sm">
              ⭐ Client Delivered
            </span>
          )}
        </div>
      )}

      {/* Header bar */}
      <div className="px-5 pt-5 pb-0 flex items-center justify-between">
        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
          project.featured ? "border-[rgba(245,200,66,0.35)] text-[#F5C842]" : "border-primary/25 text-primary"
        }`}>
          {project.category}
        </span>
        <div className="flex gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo – ${project.title}`}
              className="text-muted-foreground hover:text-primary hover:rotate-[15deg] transition-all duration-200">
              <ExternalLink size={14} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Source code – ${project.title}`}
              className="text-muted-foreground hover:text-primary hover:rotate-[15deg] transition-all duration-200">
              <Code2 size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
          {project.featured && <Trophy size={16} className="text-[#F5C842]" />}
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="skill-tag text-[10px]">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </ScrollReveal>
);

const Projects = () => (
  <section id="projects" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <p className="section-label">// 03 · projects</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14">
          Things I've <span className="text-primary">Built</span>
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i * 0.07} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
