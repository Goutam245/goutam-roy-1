import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PageTransition from "@/components/PageTransition";
import { GraduationCap, Briefcase, BookOpen, Award, Globe, Code2, Palette, TestTube2, Server, Wrench, MapPin } from "lucide-react";

const skills = [
  {
    title: "Frontend Engineering",
    emoji: "⚛️",
    icon: Code2,
    items: ["JavaScript ES6+", "TypeScript", "React.js 18", "Next.js 14", "Redux Toolkit", "Zustand", "Tailwind CSS", "CSS3", "HTML5", "Framer Motion", "GSAP", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    emoji: "🗄️",
    icon: Server,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "REST APIs", "GraphQL", "JWT Auth", "Firebase", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Vite", "Webpack", "Postman", "Swagger/OpenAPI", "VS Code", "Linux", "CI/CD"],
  },
  {
    title: "Design & UX",
    emoji: "🎨",
    icon: Palette,
    items: ["Figma", "Adobe XD", "Canva", "Wireframing", "Prototyping", "Design Systems", "Mobile-First", "SEO Optimization", "Web Accessibility"],
  },
  {
    title: "Testing & Quality",
    emoji: "✅",
    icon: TestTube2,
    items: ["Jest", "Cypress", "React Testing Library", "Chrome DevTools", "Lighthouse", "Web Vitals", "Cross-browser Testing"],
  },
];

const certifications = [
  { title: "Full Stack Web Development", org: "MilkWay · 2024", note: "Official Internship Certificate · 6-month program · React, Node.js, MongoDB" },
  { title: "Full Stack Development (React, Node.js, MongoDB)", org: "Programming Hero · 2024", note: "Full-stack curriculum with projects" },
  { title: "Advanced React & Performance Optimization", org: "Google · 2023", note: "Performance, optimization, best practices" },
  { title: "UI/UX Design Fundamentals", org: "Udemy · 2023", note: "Design systems, Figma, prototyping" },
  { title: "IELTS Academic — Score 7.5/9.0", org: "British Council · 2024", note: "C1 English Proficiency · Verified" },
];

const values = [
  { emoji: "💡", title: "Curiosity First", desc: "I'm always learning. Whether it's a new framework, a design pattern, or a client's industry — I invest time to understand deeply before I build." },
  { emoji: "🎯", title: "Precision & Craft", desc: "I care about the details — pixel-perfect layouts, clean component architecture, accessible markup. Good enough is never good enough." },
  { emoji: "🤝", title: "Communication", desc: "Remote work lives and dies by communication. I document clearly, update proactively, and ask the right questions before they become problems." },
  { emoji: "📈", title: "Continuous Growth", desc: "I track my progress, take feedback seriously, and constantly push to improve — in code quality, design sense, and professional skills." },
];

const AboutPage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// about me</SectionLabel>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-tight mb-4 text-foreground">
            Developer. Builder.
            <br />
            <span className="text-primary">Lifelong Learner.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg">
            Turning complex problems into clean, fast web experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Bio + Cards */}
    <section className="pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14">
          <ScrollReveal delay={0.1}>
            <div className="space-y-5 text-muted-foreground text-[15px] leading-[1.8] font-body">
              <p>I'm Goutam Roy, a Frontend Developer based in Dhaka, Bangladesh. My journey into web development began during my Diploma in Computer Science & Engineering at Tangail Polytechnic Institute (2021–2024), where I built a strong foundation in algorithms, data structures, and software architecture.</p>
              <p>In 2024, I took two major steps forward: a 6-month official Full Stack Web Development internship at MilkWay (January–May 2024), and a complete Full Stack course at Programming Hero (June–December 2024). These programs gave me hands-on experience building real applications with React, Node.js, MongoDB, and PostgreSQL.</p>
              <p>I'm currently in my second semester of a Bachelor of Computer Science at City University Bangladesh (2025–2028), deepening my knowledge in Artificial Intelligence, Machine Learning, and Software Engineering.</p>
              <p>Alongside my studies, I've been freelancing on Upwork and Fiverr for 3+ years — working with clients from the United States, Canada, and Europe. I've built SaaS dashboards, REST API integrations, and responsive web applications. Real projects. Real deadlines. Real feedback.</p>
              <p>My English is C1 level (IELTS Academic 7.5, scored in 2024). I'm actively preparing for global remote roles and relocation opportunities. I believe that strong code, honest communication, and consistent delivery are what separate good developers from great ones.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {/* Education */}
            {[
              { icon: GraduationCap, title: "Bachelor of Computer Science", sub: "City University Bangladesh · 2025–2028 · In Progress", detail: "AI, Machine Learning, Data Structures, Networking, Software Engineering", border: "mint" },
              { icon: GraduationCap, title: "Diploma in Computer Science & Engineering", sub: "Tangail Polytechnic Institute · 2021–2024 · Completed", detail: "Algorithms, Web Development, Software Architecture, Data Structures, OOP", border: "mint" },
            ].map((ed, i) => (
              <ScrollReveal key={ed.title} delay={0.15 + i * 0.08}>
                <div className={`glass-card rounded-xl p-5 ${ed.border === "mint" ? "mint-left-border" : "violet-left-border"} pl-6`}>
                  <div className="flex items-start gap-3">
                    <ed.icon className="text-primary mt-0.5 shrink-0" size={18} />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{ed.title}</h3>
                      <p className="text-muted-foreground text-xs">{ed.sub}</p>
                      <p className="text-text-faint text-xs mt-1">{ed.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Training */}
            {[
              { icon: Briefcase, title: "Full Stack Web Dev Internship", sub: "MilkWay · January 2024 – May 2024", detail: "Duration: 6 months · Official Certificate\nStack: React, Node.js, MongoDB, Express.js" },
              { icon: BookOpen, title: "Full Stack Web Development Course", sub: "Programming Hero · June 2024 – December 2024", detail: "Duration: 6 months · Completed\nStack: React, Node.js, MongoDB, JWT, REST APIs" },
            ].map((tr, i) => (
              <ScrollReveal key={tr.title} delay={0.3 + i * 0.08}>
                <div className="glass-card rounded-xl p-5 violet-left-border pl-6">
                  <div className="flex items-start gap-3">
                    <tr.icon className="text-secondary mt-0.5 shrink-0" size={18} />
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm">{tr.title}</h3>
                      <p className="text-muted-foreground text-xs">{tr.sub}</p>
                      <p className="text-text-faint text-xs mt-1 whitespace-pre-line">{tr.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Skills */}
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// tech stack</SectionLabel>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-3 text-foreground">
            Tools I <span className="text-primary">Build</span> With
          </h2>
          <p className="text-muted-foreground mb-14">Technologies I use to bring ideas to life</p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {skills.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08} className={i === 4 ? "sm:col-span-2" : ""}>
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{cat.emoji}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// certifications</SectionLabel>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14 text-foreground">
            Verified <span className="text-primary">Learning</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.07} className={i >= 3 ? "" : ""}>
              <div className="glass-card rounded-xl p-6 h-full gold-left-border pl-7">
                <Award className="text-gold mb-3" size={20} />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-xs mb-2">{c.org}</p>
                {c.note && <p className="text-text-faint text-xs font-mono">{c.note}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// values</SectionLabel>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14 text-foreground">
            How I <span className="text-primary">Work</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
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

    {/* Language & Location */}
    <section className="pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-5">
          <ScrollReveal>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="text-primary" size={18} />
                <h3 className="font-display font-semibold text-foreground text-sm">Languages</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">🇬🇧 English: C1 · IELTS Academic 7.5 (British Council, 2024)</p>
                <p className="text-muted-foreground text-sm">🇧🇩 Bengali: Native Speaker</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-xl p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-primary" size={18} />
                <h3 className="font-display font-semibold text-foreground text-sm">Location & Availability</h3>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground text-sm">Based in Dhaka, Bangladesh</p>
                <p className="text-muted-foreground text-sm">Open to: Remote Worldwide · Relocation with Sponsorship</p>
                <p className="text-muted-foreground text-sm">Timezones: Comfortable working UTC-8 to UTC+5</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default AboutPage;
