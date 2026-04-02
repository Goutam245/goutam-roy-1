import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PageTransition from "@/components/PageTransition";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import CountUp from "@/components/CountUp";
import BackToTop from "@/components/BackToTop";
import { Atom, Globe, Paintbrush, Database, FileCode2, Layers, Wind, Figma, Target, Smartphone, Accessibility } from "lucide-react";
import alphaCoreSrc from "@/assets/alpha-core-solutions.jpg";
import qrewOnlySrc from "@/assets/qrew-only.jpg";

const projects: Project[] = [
  {
    title: "Alpha Core Solutions — Security Company Website",
    category: "Real Client Delivery 🏆",
    badgeColor: "gold",
    desc: "Professional corporate website built and delivered for a physical security solutions company in Saudi Arabia. Features bilingual support (Arabic/English), full services showcase, and government-grade presentation.",
    tech: ["React", "Tailwind CSS", "Bilingual (AR/EN)", "Corporate Design", "Client Delivered"],
    highlights: [
      "Real client project — delivered and live in production",
      "Bilingual — Arabic & English language support",
      "Services: Metal Detection, CCTV, X-Ray, Access Control",
      "Contact form with consultation request system",
      "Mobile-responsive, professional corporate design",
    ],
    tags: ["React", "Full Stack"],
    live: "https://alpha-core-solution.netlify.app/",
    github: "https://github.com/Goutam245/Alpha-Core-Solution",
    image: alphaCoreSrc,
    featured: true,
  },
  {
    title: "QREW ONLY — Premium Streetwear Brand",
    category: "Real Client Delivery 🏆",
    badgeColor: "gold",
    desc: "Premium streetwear brand website delivered to a US-based client. Features a unique terminal/hacker aesthetic, product catalogue with inventory system, members-only access, community features, and global shipping to 50+ countries.",
    tech: ["React", "Tailwind CSS", "E-commerce", "US Client", "Client Delivered"],
    highlights: [
      "Real client project — delivered to US-based client",
      "Unique terminal/CLI aesthetic — completely custom design language",
      "Full product catalogue with inventory, filters, and order system",
      "Members-only community with exclusive drop access",
      "Global reach — 50+ countries, 12K+ community members",
    ],
    tags: ["React", "Full Stack"],
    live: "https://qrew-only-1v.vercel.app/",
    github: "https://github.com/Goutam245/QREW-ONLY-",
    image: qrewOnlySrc,
    featured: true,
  },
  {
    title: "Professional CV Builder",
    category: "SaaS Tool",
    badgeColor: "mint",
    desc: "A Markdown-to-PDF resume generator built for developers. Features multiple templates, real-time preview, and instant PDF export.",
    tech: ["React", "PDF.js", "LocalStorage", "Template Engine", "Real-time Preview"],
    highlights: [
      "Multiple template system with real-time preview",
      "One-click PDF export with custom formatting",
      "Used by developers for professional CV creation",
    ],
    tags: ["React"],
    live: "https://resume-builder-web-site.vercel.app/",
    github: "https://github.com/Goutam245/Resume-Builder-Web-Site",
    image: "https://i.ibb.co/Mx4CYh0b/Cv.jpg",
  },
  {
    title: "Global Weather Intelligence",
    category: "Web App",
    badgeColor: "violet",
    desc: "Full-featured weather app with city search, geolocation, and a dynamic UI that adapts visually to weather conditions.",
    tech: ["JavaScript", "OpenWeather API", "Geolocation", "CSS3", "Responsive"],
    highlights: [
      "Real-time data from OpenWeather API",
      "Geolocation-based automatic city detection",
      "Dynamic UI adapts to weather conditions",
    ],
    tags: ["Vanilla JS"],
    live: "https://weather-app-fxjo.vercel.app/",
    github: "https://github.com/Goutam245/Weather-app",
    image: "https://i.ibb.co/Jw65vyQj/Weather.jpg",
  },
  {
    title: "Real Estate Marketplace",
    category: "Platform",
    badgeColor: "orange",
    desc: "Enterprise-scale property listing platform with advanced search, geolocation services, and a 95+ PageSpeed score.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Geolocation", "Advanced Routing"],
    highlights: [
      "Advanced search with price/location/type filters",
      "95+ Google PageSpeed score",
      "Mobile-first, SEO-optimized architecture",
    ],
    tags: ["Next.js", "Full Stack"],
    image: "https://i.ibb.co/bMLk8zPB/Screenshot-2025-07-27-190502.jpg",
  },
  {
    title: "Cryptocurrency Trading Dashboard",
    category: "Dashboard",
    badgeColor: "mint",
    desc: "Real-time cryptocurrency data visualization with WebSocket live price streams, candlestick charts, and advanced filtering.",
    tech: ["React", "TypeScript", "Chart.js", "WebSocket", "Real-time"],
    highlights: [
      "Live WebSocket price streams",
      "Candlestick charts with Chart.js",
      "Dark/light theme with smooth transition",
    ],
    tags: ["React"],
  },
  {
    title: "Global Translation Platform",
    category: "Web App",
    badgeColor: "violet",
    desc: "Multilingual communication tool supporting 25+ language pairs — built with vanilla JavaScript and browser-native Web APIs.",
    tech: ["Vanilla JS", "Web APIs", "PWA", "Offline-first", "25+ Languages"],
    highlights: [
      "25+ language pairs supported",
      "Zero backend — browser-native Web APIs only",
      "Offline-capable as Progressive Web App",
    ],
    tags: ["Vanilla JS"],
    image: "https://i.ibb.co/0jrRSgHh/Translator.jpg",
  },
  {
    title: "Ultimate Gaming Website",
    category: "Interactive",
    badgeColor: "orange",
    desc: "Modern gaming hub with Framer Motion animations, real-time search with autocomplete, and PWA capabilities.",
    tech: ["React", "Framer Motion", "PWA", "Real-time Search", "LocalStorage"],
    highlights: [
      "Framer Motion animations throughout",
      "Real-time search with autocomplete",
      "PWA with offline functionality",
    ],
    tags: ["React"],
    image: "https://i.ibb.co/sdVkCCvH/game.jpg",
  },
  {
    title: "Marketplace Platform (Fiverr Clone)",
    category: "Complex App",
    badgeColor: "mint",
    desc: "Full-featured multi-vendor marketplace with service listings, user auth, buyer/seller flows, and review system.",
    tech: ["React", "TypeScript", "User Auth", "Review System", "Multi-vendor"],
    highlights: [
      "Complete multi-vendor marketplace architecture",
      "User auth, service listings, review system",
      "Complex buyer-seller flow management",
    ],
    tags: ["React", "Full Stack"],
    image: "https://i.ibb.co/5hnxfnx1/fiver.jpg",
  },
  {
    title: "Seaside Stay Resort",
    category: "Hospitality",
    badgeColor: "violet",
    desc: "Premium luxury resort website with real-time room availability, virtual tour integration, and mobile-optimized UX.",
    tech: ["Next.js", "React", "TypeScript", "Real-time Booking", "Virtual Tours"],
    highlights: [
      "Real-time room availability system",
      "Virtual tour integration",
      "95+ PageSpeed, luxury UX design",
    ],
    tags: ["Next.js", "React"],
    image: "https://i.ibb.co/h1x0H7qL/res.jpg",
  },
];

const filters = ["All", "React", "Next.js", "Vanilla JS", "Full Stack"];

const stats = [
  { emoji: "📁", value: 9, suffix: "", label: "Projects Shipped" },
  { emoji: "⚛️", value: 5, suffix: "", label: "React/Next Projects" },
  { emoji: "🌐", value: 0, suffix: "All", label: "Projects Live" },
  { emoji: "🔗", value: 0, suffix: "All", label: "Code on GitHub" },
];

const techStack = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "TypeScript", icon: FileCode2 },
  { name: "JavaScript", icon: FileCode2 },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Node.js", icon: Layers },
  { name: "MongoDB", icon: Database },
  { name: "Figma", icon: Paintbrush },
];

const approaches = [
  { emoji: "🎯", title: "Performance First", desc: "Fast load times, optimized assets, 90+ Lighthouse scores" },
  { emoji: "📱", title: "Mobile First", desc: "Every project responsive from 320px to 1920px" },
  { emoji: "♿", title: "Accessible", desc: "Semantic HTML, ARIA labels, keyboard navigation" },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags?.includes(activeFilter));

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// projects</SectionLabel>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 text-foreground">
              Things I've <span className="text-primary">Built</span>
            </h1>
            <p className="text-muted-foreground text-[15px] mb-8 max-w-xl">
              9 production-ready projects · React · Next.js · TypeScript · Vanilla JS
            </p>
          </ScrollReveal>

          {/* Stats bar — moved to top */}
          <ScrollReveal delay={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((s, i) => (
                <div key={s.label} className="glass-card rounded-xl p-5 text-center group">
                  <span className="text-2xl mb-2 block">{s.emoji}</span>
                  <p className="font-display font-bold text-3xl sm:text-4xl text-primary mb-1">
                    {s.value > 0 ? <CountUp end={s.value} suffix={s.suffix} /> : s.suffix}
                  </p>
                  <p className="text-muted-foreground text-xs font-mono">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Filter tabs */}
          <ScrollReveal delay={0.12}>
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`filter-tab ${activeFilter === f ? "active" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Tech */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h3 className="font-mono text-xs text-muted-foreground mb-4 tracking-wider uppercase">Built With These Technologies</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {techStack.map((t) => (
                <div key={t.name} className="glass-card rounded-lg px-4 py-2.5 flex items-center gap-2 shrink-0 hover:border-primary/25 transition-colors">
                  <t.icon size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-mono text-foreground whitespace-nowrap">{t.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* My Approach */}
      <section className="pb-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {approaches.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-5 text-center">
                  <span className="text-2xl mb-2 block">{a.emoji}</span>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-1">{a.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid — uniform 2-column */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {filtered.map((p, i) => (
                <ProjectCard key={p.title} project={p} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <BackToTop />
    </PageTransition>
  );
};

export default ProjectsPage;
