import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle, MapPin, CheckCircle2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PageTransition from "@/components/PageTransition";
import profilePhoto from "@/assets/profile-photo.png";

const roles = [
  "Frontend Developer",
  "React & Next.js Engineer",
  "Open Source Builder",
  "Remote-Ready Developer",
];

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.45 + i * 0.03, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const featuredProjects = [
  {
    title: "Alpha Core Solutions",
    desc: "Professional corporate website built and delivered for a physical security solutions company in Saudi Arabia. Features bilingual support (Arabic/English), full services showcase, and government-grade presentation.",
    tech: ["React", "Tailwind CSS", "Bilingual (AR/EN)", "Corporate Design", "Client Delivered"],
    badge: "Real Client Delivery 🏆",
    badgeColor: "badge-mint" as const,
    image: "https://i.ibb.co.com/ynYS2BXC/Screenshot-2-4-2026-192538-alpha-core-solution-netlify-app.jpg",
    large: true,
  },
  {
    title: "Premium Streetwear Brand",
    desc: "Premium streetwear brand website delivered to a US-based client. Features a unique terminal/hacker aesthetic, product catalogue with inventory system, members-only access, community features, and global shipping to 50+ countries.",
    tech: ["React", "Tailwind CSS", "E-commerce", "US Client", "Client Delivered"],
    badge: "Real Client Delivery 🏆",
    badgeColor: "badge-mint" as const,
    image: "https://i.ibb.co.com/Xr7W1VHr/Screenshot-2-4-2026-194156-qrew-only-1v-vercel-app.jpg",
    large: true,
  },
   {
    title: "Professional CV Builder",
    desc: "A Markdown-to-PDF resume generator built for developers. Features multiple templates, real-time preview, and instant PDF export.",
    tech: ["React", "PDF.js", "LocalStorage", "Template Engine", "Real-time Preview"],
    badge: "SaaS Tool",
    badgeColor: "badge-mint" as const,
    image: "https://i.ibb.co/Mx4CYh0b/Cv.jpg",
    large: true,
  },
];

const coreSkills = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "GraphQL",
  "Figma", "Docker", "Git", "REST APIs", "Framer Motion",
];

const statItems = [
  "📁 10+ Projects Shipped",
  "💼 3+ Years Freelancing",
  "🌍 IELTS 7.5 C1",
  "⚛️ React & Next.js",
  "🌐 Available for Remote Worldwide",
  "🎓 Full Stack Certified",
];

const experienceHighlights = [
  {
    title: "Freelance Frontend Developer",
    company: "Upwork & Fiverr · Remote",
    period: "2023 – Present",
    desc: "International clients · React/Next.js projects · API documentation",
    ongoing: true,
  },
  {
    title: "MilkWay — Full Stack Intern",
    company: "Dhaka, Bangladesh · Jan–May 2024",
    period: "Official Certificate",
    desc: "6-month certified program · Full-stack development · Real projects",
    ongoing: false,
  },
];

const certifications = [
  { title: "Full Stack Development", org: "MilkWay · 2024", emoji: "🏆" },
  { title: "Full Stack (React/Node)", org: "Programming Hero · 2024", emoji: "🏆" },
  { title: "IELTS Academic 7.5", org: "British Council · 2024", emoji: "🏆" },
];

const values = [
  { emoji: "🧹", title: "Clean, Maintainable Code", desc: "I write structured, readable code with proper naming conventions and documentation — built for teams, not just for demos." },
  { emoji: "🚀", title: "Real Delivery Experience", desc: "Three years of freelancing taught me that communication and deadlines matter as much as code quality. I ship." },
  { emoji: "🌍", title: "Global Communication Ready", desc: "IELTS 7.5 C1 English. Experienced with international clients across US, EU, and Canadian timezones. Ready for any remote team." },
];

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const cur = roles[roleIdx];
    if (!deleting && charIdx < cur.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === cur.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), 28);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
  }, [charIdx, deleting, roleIdx]);

  const name = "GOUTAM ROY";

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-center py-20">
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="font-mono text-sm text-text-faint tracking-[3px] mb-4 uppercase"
            >
              Hi, I'm
            </motion.p>

            <h1 className="font-display font-bold text-[clamp(3.25rem,7.5vw,6rem)] leading-[0.95] mb-4 select-none whitespace-nowrap">
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className={i >= 7 ? "text-primary" : "text-foreground"}
                  style={{
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : undefined,
                    textShadow: i >= 7 ? "0 0 30px hsl(162 100% 50% / 0.3)" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="h-px w-40 bg-primary origin-left mb-5"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-7 mb-6"
            >
              <span className="font-mono text-lg text-primary">
                {roles[roleIdx].slice(0, charIdx)}
              </span>
              <span className="caret" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="text-muted-foreground max-w-[500px] leading-[1.7] mb-8 font-body text-base"
            >
              I craft fast, pixel-perfect web interfaces using React and Next.js.
              Full-stack trained, freelance-proven, and ready to bring real value
              to your team — from Dhaka, Bangladesh to anywhere in the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:scale-[1.03] transition-all flex items-center gap-2"
              >
                View My Work <ArrowRight size={15} />
              </Link>
              <a
                href="#"
                className="px-6 py-3 rounded-lg border border-primary/25 text-primary text-sm font-medium hover:bg-primary/5 transition-all flex items-center gap-2"
              >
                <Download size={15} /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="flex gap-5"
            >
              {[
                { icon: Github, href: "https://github.com/Goutam245", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/goutam-roy-dev", label: "LinkedIn" },
                { icon: Mail, href: "mailto:goutam.roy.421917@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/8801747593452", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-text-faint hover:text-primary transition-colors duration-200">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Profile Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="glass-card rounded-2xl p-6 w-full max-w-[320px]" style={{ borderColor: "hsl(162 100% 50% / 0.2)" }}>
              <img
                src={profilePhoto}
                alt="Goutam Roy — Frontend Developer"
                className="w-full aspect-square object-cover rounded-xl mb-5"
                loading="eager"
              />
              <h2 className="font-display font-bold text-xl text-foreground">Goutam Roy</h2>
              <p className="text-muted-foreground text-sm mb-4">Frontend Developer</p>

              <div className="border-t border-border pt-4 mb-4 space-y-2.5">
                {[
                  "📁 10+ Projects Built",
                  "🌍 IELTS 7.5 · C1 English",
                  "🎓 BSc CS · In Progress",
                  "💼 3+ Years Freelancing",
                ].map((s) => (
                  <p key={s} className="text-xs font-mono text-muted-foreground">{s}</p>
                ))}
              </div>

              <div className="border-t border-border pt-4 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                <MapPin size={12} className="text-primary" />
                Dhaka, BD → Remote 🌐
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-border bg-surface overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-4 hidden md:flex items-center justify-between">
          {statItems.map((s) => (
            <span key={s} className="text-xs font-mono text-muted-foreground">{s}</span>
          ))}
        </div>
        <div className="md:hidden py-4">
          <div className="ticker-track flex gap-12 whitespace-nowrap">
            {[...statItems, ...statItems].map((s, i) => (
              <span key={i} className="text-xs font-mono text-muted-foreground">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 02 · selected work</SectionLabel>
            <div className="flex items-end justify-between mb-14">
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
                Things I've <span className="text-primary">Built</span>
              </h2>
              <Link to="/projects" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                See All 8 Projects <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1} className={p.large ? "lg:col-span-1" : ""}>
                <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col group">
                  {p.image ? (
                    <div className="relative overflow-hidden">
                      <img src={p.image} alt={p.title} className="project-image group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded border ${p.badgeColor} bg-background/80 backdrop-blur-sm`}>
                        {p.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="h-56 bg-elevated flex items-center justify-center relative">
                      <span className="text-text-faint font-mono text-sm">Dashboard Preview</span>
                      <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded border ${p.badgeColor}`}>
                        {p.badge}
                      </span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-display font-semibold text-foreground text-lg group-hover:text-primary transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="skill-tag text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="sm:hidden mt-8 text-center">
            <Link to="/projects" className="text-sm text-primary font-medium inline-flex items-center gap-1">
              See All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 01 · about</SectionLabel>
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Developer by <span className="text-primary">Passion,</span><br />
                Engineer by Training
              </h2>
              <Link to="/about" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                Full Story <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-14">
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-muted-foreground text-[15px] leading-[1.7]">
                <p>
                  I'm Goutam Roy, a Frontend Developer from Dhaka with a strong foundation in React, Next.js, and TypeScript. I completed a Diploma in CSE (2021–2024) and a 6-month official internship at MilkWay, followed by a full-stack course at Programming Hero. I'm now pursuing my BSc in Computer Science at City University Bangladesh.
                </p>
                <p>
                  My freelance career spans 3+ years on Upwork and Fiverr — working with international clients, shipping products, and learning what professional delivery truly means.
                </p>
                <p>
                  I speak English at C1 level (IELTS 7.5) and I'm actively building toward global remote roles and relocation opportunities.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal delay={0.2}>
                <div className="glass-card rounded-xl p-5 mint-left-border pl-6">
                  <p className="text-xs font-mono text-primary mb-1">🎓 BSc Computer Science</p>
                  <p className="text-foreground text-sm font-display font-semibold">City University Bangladesh</p>
                  <p className="text-muted-foreground text-xs">In Progress · 2025–2028</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <div className="glass-card rounded-xl p-5 violet-left-border pl-6">
                  <p className="text-xs font-mono text-secondary mb-1">💼 Full Stack Internship</p>
                  <p className="text-foreground text-sm font-display font-semibold">MilkWay</p>
                  <p className="text-muted-foreground text-xs">6 months · Certified · 2024</p>
                </div>
              </ScrollReveal>
              <div className="sm:hidden">
                <Link to="/about" className="text-sm text-primary font-medium inline-flex items-center gap-1">
                  Full Story <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills Snapshot ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 03 · core stack</SectionLabel>
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Tools I <span className="text-primary">Build</span> With
              </h2>
              <Link to="/about" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                Full Tech Stack <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="skill-tag"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Experience Highlights ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 04 · experience</SectionLabel>
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
                Where I've <span className="text-primary">Worked</span>
              </h2>
              <Link to="/experience" className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                Full Experience <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="relative max-w-3xl pl-10">
            <div className="timeline-line" />
            <div className="space-y-6">
              {experienceHighlights.map((e, i) => (
                <ScrollReveal key={e.title} delay={i * 0.12}>
                  <div className="relative">
                    <div className="absolute -left-10 top-1.5">
                      <div className="timeline-dot" />
                    </div>
                    <div className="glass-card rounded-xl p-5">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-display font-semibold text-foreground">{e.title}</h3>
                        {e.ongoing && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-primary/25 text-primary">ongoing</span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">{e.company}</p>
                      <p className="font-mono text-xs text-primary/70 mb-2">{e.period}</p>
                      <p className="text-muted-foreground text-sm">{e.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 05 · certifications</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-10">
              Verified <span className="text-primary">Credentials</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-6 h-full gold-left-border pl-7">
                  <span className="text-xl mb-3 block">{c.emoji}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-xs">{c.org}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// 06 · what i bring</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-10">
              Why Work <span className="text-primary">With Me</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <span className="text-2xl mb-3 block">{v.emoji}</span>
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="glass-card rounded-2xl p-12 sm:p-16 text-center" style={{
              background: "linear-gradient(135deg, hsl(162 100% 50% / 0.06), hsl(246 94% 72% / 0.06))",
              borderColor: "hsl(162 100% 50% / 0.15)",
            }}>
              <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-foreground">
                Ready to Build Something <span className="text-primary">Great?</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-lg mx-auto">
                I'm available for freelance projects and full-time remote roles.
                Let's talk about how I can contribute to your team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:scale-[1.03] transition-all inline-flex items-center gap-2">
                  Get In Touch <ArrowRight size={15} />
                </Link>
                <Link to="/projects" className="px-8 py-3 rounded-lg border border-primary/25 text-primary text-sm font-medium hover:bg-primary/5 transition-all">
                  View Full Portfolio
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
