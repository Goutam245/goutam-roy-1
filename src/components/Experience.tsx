import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const entries = [
  {
    title: "Freelance Frontend Developer",
    company: "Upwork & Fiverr · Remote",
    period: "June 2023 – Present",
    ongoing: true,
    desc: "Built responsive web applications and SaaS dashboards for international clients across the US, Canada, and Europe. Documented REST APIs using Swagger/OpenAPI and maintained consistent on-time delivery with strong client satisfaction.",
    tags: ["React.js", "Next.js", "TypeScript", "API Documentation", "Client Relations"],
  },
  {
    title: "UI/UX Design Intern",
    company: "CreativeCode Studio · Dhaka, Bangladesh",
    period: "May 2023 – July 2023",
    ongoing: false,
    desc: "Designed and prototyped web-ready UI assets in Figma for cross-platform applications. Improved developer handoff standards and brand consistency.",
    tags: ["Figma", "Adobe XD", "Prototyping", "Design Systems", "Responsive Design"],
  },
];

const Experience = () => (
  <section id="experience" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <p className="section-label">// 04 · experience</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14">
          Professional <span className="text-primary">Experience</span>
        </h2>
      </ScrollReveal>

      <div className="relative max-w-2xl pl-10">
        {/* Vertical line */}
        <div className="timeline-line" />

        <div className="space-y-10">
          {entries.map((e, i) => (
            <ScrollReveal key={e.title} delay={i * 0.12}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-10 top-1">
                  <div className="timeline-dot" />
                </div>

                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display font-semibold text-foreground">{e.title}</h3>
                    {e.ongoing && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-primary/25 text-primary">
                        ongoing
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{e.company}</p>
                  <p className="font-mono text-xs text-primary/70 mb-3">{e.period}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span key={t} className="skill-tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
