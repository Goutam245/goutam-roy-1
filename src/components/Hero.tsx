import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import logoSrc from "@/assets/logo.png";

const roles = [
  "Frontend Developer",
  "React & Next.js Engineer",
  "Open Source Builder",
  "Available for Remote Work",
];

const letterVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.45 + i * 0.03, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Hero = () => {
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

  const nameWord = "GOUTAM ROY";

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-center py-20">
        {/* ── Left Column ── */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="font-sans text-lg font-semibold uppercase tracking-[6px] mb-4"
            style={{ color: '#FFFFFF' }}
          >
            Hi, I'm
          </motion.p>

          {/* Name — letter by letter */}
          <h1 className="font-display font-bold text-[clamp(3rem,8vw,6rem)] leading-[0.95] mb-4 select-none">
            {nameWord.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className={i >= 7 ? "text-primary" : "text-foreground"}
                style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Mint line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="h-px w-40 bg-primary origin-left mb-5"
          />

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-7 mb-6"
          >
            <span className="font-mono text-base text-primary">
              {roles[roleIdx].slice(0, charIdx)}
            </span>
            <span className="caret" />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="max-w-md mb-8 text-base leading-[1.8]"
            style={{ color: '#BBBBCC' }}
          >
            I craft fast, accessible interfaces with React and Next.js.
            BSc CS student shipping real products from Dhaka, Bangladesh.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all flex items-center gap-2"
            >
              View My Projects <ArrowRight size={15} />
            </button>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-all flex items-center gap-2"
            >
              <Download size={15} className="text-primary" /> Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <TooltipProvider delayDuration={200}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.05 }}
              className="flex gap-3"
            >
              {[
                { icon: Github, href: "https://github.com/Goutam245", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/goutam-roy-dev", label: "LinkedIn" },
                { icon: Mail, href: "mailto:goutam.roy.421917@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/8801747593452", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      whileTap={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="social-icon-box"
                    >
                      <Icon size={20} />
                    </motion.a>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="bg-primary text-primary-foreground text-xs font-mono px-3 py-1 rounded-md border-0"
                  >
                    {label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </TooltipProvider>
        </div>

        {/* ── Right Column — Profile Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="glass-card rounded-2xl p-5 w-full max-w-[300px] text-center">
            <div className="flex justify-center mb-4">
              <img
                src={logoSrc}
                alt="Goutam Roy Logo"
                className="h-20 w-auto"
                style={{ filter: 'drop-shadow(0 0 12px rgba(0,200,150,0.35))' }}
              />
            </div>
            <h2 className="font-display font-bold text-lg text-foreground">Goutam Roy</h2>
            <p className="text-sm mb-4 text-muted-foreground">Frontend Developer</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["📁 10+ Projects", "🌍 IELTS 7.5", "🎓 BSc CS", "💼 3+ Years"].map((s) => (
                <span
                  key={s}
                  className="text-[13px] font-mono px-2 py-1 rounded-md border border-border text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-muted-foreground">
              <MapPin size={12} className="text-primary" />
              Dhaka, BD → Remote
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background code snippet (atmosphere) */}
      <div className="absolute right-0 top-1/3 -z-10 hidden lg:block pointer-events-none select-none">
        <pre className="text-[11px] font-mono text-foreground/[0.04] leading-relaxed whitespace-pre">
{`const portfolio = {
  name: "Goutam Roy",
  role: "Frontend Developer",
  stack: ["React", "Next.js", "TS"],
  location: "Dhaka, BD",
  available: true,
  
  build: async (project) => {
    const ui = await design(project);
    const code = implement(ui);
    return deploy(code);
  }
};`}
        </pre>
      </div>
    </section>
  );
};

export default Hero;
