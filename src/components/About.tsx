import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Award, Globe } from "lucide-react";

const About = () => (
  <section id="about" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <p className="section-label">// 01 · about</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-14">
          Building the Web,
          <br />
          <span className="text-primary">One Component</span> at a Time
        </h2>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-14">
        {/* Prose */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-5 text-muted-foreground text-[15px] leading-relaxed">
            <p>
              I'm a Frontend Developer based in Dhaka, passionate about pixel-perfect interfaces
              with React, Next.js, and TypeScript. Currently in my second semester of BSc Computer
              Science at City University Bangladesh, with a Diploma in CSE from Tangail Polytechnic
              Institute (2021–2024).
            </p>
            <p>
              I've completed freelance projects for international clients on Upwork and Fiverr,
              building real products and learning from real feedback. My English is C1 level (IELTS
              7.5), and I'm actively building toward a global remote career.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="space-y-4">
          {[
            { icon: GraduationCap, title: "Bachelor of Computer Science", sub: "City University Bangladesh · 2025–2028 · In Progress" },
            { icon: GraduationCap, title: "Diploma in CSE", sub: "Tangail Polytechnic Institute · 2021–2024 · Completed" },
          ].map((ed, i) => (
            <ScrollReveal key={ed.title} delay={0.15 + i * 0.08}>
              <div className="glass-card rounded-xl p-5 mint-left-border pl-6">
                <div className="flex items-start gap-3">
                  <ed.icon className="text-primary mt-0.5 shrink-0" size={18} />
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">{ed.title}</h3>
                    <p className="text-muted-foreground text-xs mt-0.5">{ed.sub}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Certifications */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Award className="text-secondary mt-0.5 shrink-0" size={18} />
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programming Hero — Full Stack 2024",
                      "Google — Advanced React 2023",
                      "Udemy — UI/UX Design 2023",
                    ].map((c) => (
                      <span key={c} className="text-[10px] font-mono px-2 py-1 rounded border border-border text-muted-foreground">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.35}>
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Globe className="text-accent mt-0.5 shrink-0" size={18} />
                <div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">Languages</h3>
                  <p className="text-muted-foreground text-xs">
                    🇬🇧 English · C1 · IELTS 7.5 &nbsp;&nbsp; 🇧🇩 Bengali · Native
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
