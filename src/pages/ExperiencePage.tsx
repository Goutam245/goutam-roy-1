import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PageTransition from "@/components/PageTransition";
import { GraduationCap, Briefcase, BookOpen, Award, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    title: "Freelance Frontend Developer",
    company: "Upwork & Fiverr · Remote · Global",
    period: "June 2023 – Present · 3+ Years",
    ongoing: true,
    desc: "For over three years, I've been building web applications for international clients on Upwork and Fiverr. Projects range from responsive landing pages and SaaS dashboards to full React/Next.js applications with REST API integrations.\n\nWorking with clients from the United States, Canada, and Europe taught me the professional skills that classroom training can't provide — clear communication, deadline discipline, and the ability to translate business requirements into technical solutions.",
    highlights: [
      "6+ responsive web applications built for international clients",
      "REST API documentation using Swagger/OpenAPI",
      "Consistent on-time delivery across US, EU, Canadian timezones",
      "Specialized in React, Next.js, TypeScript frontend solutions",
      "Built full-stack projects with Node.js and MongoDB backends",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Node.js", "API Documentation", "Client Communication", "Remote Work"],
  },
  {
    title: "Junior Frontend Developer",
    company: "Tech Solutions Ltd – Dhaka, Bangladesh",
    period: "Dec 2024 – Jun 2025",
    ongoing: false,
    desc: "Worked as a Junior Frontend Developer at Tech Solutions Ltd, Dhaka for 7 months, building responsive enterprise web applications using React.js, Next.js, and TypeScript. Contributed to API documentation with Swagger/OpenAPI and actively focused on performance optimization to enhance user experience.\n\nGained strong real-world exposure to modern frontend development practices within a professional team environment, strengthening both technical skills and collaborative work habits.",
    highlights: [
      "Built 8+ scalable enterprise web apps using React.js, Next.js, and TypeScript",
      "Documented 20+ RESTful APIs with Swagger/OpenAPI for seamless integration",
      "Reduced developer onboarding time by 35% through clear API documentation",
      "Optimized app startup by 40%, boosting Lighthouse scores and user experience",
    ],
    tags: [ "JavaScript","React.js", "Next.js", "TypeScript", "Node.js", "Swagger/OpenAPI", "Performance Optimization"],
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "MilkWay · Dhaka, Bangladesh",
    period: "January 2024 – May 2024 · 6 Months · Official Certificate",
    ongoing: false,
    desc: "Completed an official 6-month Full Stack Web Development internship at MilkWay. This program provided structured, professional training in modern full-stack development — working on real application features under senior developer mentorship.\n\nThis experience bridged the gap between theoretical knowledge and professional software development practice, giving me exposure to production codebases, code review processes, and team collaboration workflows.",
    highlights: [
      "Completed official 6-month certified internship program",
      "Built and deployed full-stack web applications with React and Node.js",
      "Worked with PostgreSQL and MongoDB database architectures",
      "Participated in code reviews and agile development workflows",
      "Received official internship completion certificate",
    ],
    tags: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Git", "Agile"],
  },
  {
    title: "UI/UX Design Intern",
    company: "CreativeCode Studio · Dhaka, Bangladesh",
    period: "May 2023 – July 2023 · 3 Months",
    ongoing: false,
    desc: "Joined CreativeCode Studio as a UI/UX Design Intern, working on web and mobile UI assets for multiple client projects. Collaborated with development teams on design handoff, component libraries, and brand consistency guidelines.",
    highlights: [
      "Designed UI screens and component libraries in Figma for 3+ client projects",
      "Improved developer handoff process, reducing revision cycles",
      "Created responsive design systems for cross-platform applications",
      "Aligned brand guidelines with development team standards",
    ],
    tags: ["Figma", "Adobe XD", "Design Systems", "Prototyping", "Responsive Design"],
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Computer Science",
    sub: "City University Bangladesh · 2025–2028 · In Progress",
    detail: "Second semester · Full-time\nCoursework: Artificial Intelligence, Machine Learning, Data Structures, Networking, Software Engineering, Data Visualization\nExpected Graduation: 2028",
  },
  {
    icon: GraduationCap,
    title: "Diploma in CSE",
    sub: "Tangail Polytechnic Institute · 2021–2024 · Completed",
    detail: "4-year program · Government polytechnic\nCoursework: Algorithms, Web Development, Software Architecture, Data Structures, OOP, Database Management\nGraduated: 2024",
  },
  {
    icon: BookOpen,
    title: "Full Stack Web Development",
    sub: "Programming Hero · Jun–Dec 2024 · Completed",
    detail: "6-month intensive course\nStack: React, Node.js, Express.js, MongoDB, JWT, REST APIs, Mongoose\nCertificate: Issued on completion",
  },
  {
    icon: Briefcase,
    title: "Full Stack Internship",
    sub: "MilkWay · Jan–May 2024 · Certified",
    detail: "6-month official program\nStack: JavaScript, React, Node.js, MongoDB, PostgreSQL\nCertificate: Official · Available on request",
  },
];

const certifications = [
  { title: "Full Stack Development", org: "MilkWay · 2024", note: "Official 6-month internship certificate · React, Node.js, MongoDB" },
  { title: "Full Stack Development", org: "Programming Hero · 2024", note: "Course completion certificate · React, Node.js, MongoDB, JWT" },
  { title: "Advanced React & Performance Optimization", org: "Google · 2023", note: "Performance optimization, bundle splitting, lazy loading" },
  { title: "UI/UX Design Fundamentals", org: "Udemy · 2023", note: "Design systems, Figma, Adobe XD, prototyping" },
  { title: "IELTS Academic 7.5", org: "British Council · 2024", note: "C1 English Proficiency · Overall 7.5/9.0" },
];

const ExperiencePage = () => (
  <PageTransition>
    {/* Hero */}
    <section className="pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// experience</SectionLabel>
          <h1 className="font-display font-bold text-5xl sm:text-6xl leading-tight mb-4 text-foreground">
            The Journey <span className="text-primary">So Far</span>
          </h1>
          <p className="text-muted-foreground text-lg">Internships · Freelance · Continuous learning</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Timeline */}
    <section className="pb-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative max-w-3xl pl-10">
          <div className="timeline-line" />
          <div className="space-y-10">
            {timeline.map((e, i) => (
              <ScrollReveal key={e.title + e.company} delay={i * 0.12}>
                <div className="relative">
                  <div className="absolute -left-10 top-1.5">
                    <div className="timeline-dot" />
                  </div>
                  <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display font-semibold text-foreground text-lg">{e.title}</h3>
                      {e.ongoing && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-primary/25 text-primary flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-dot" />
                          Ongoing
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{e.company}</p>
                    <p className="font-mono text-xs text-primary/70 mb-4">{e.period}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 whitespace-pre-line">{e.desc}</p>
                    <div className="space-y-2 mb-5">
                      {e.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{h}</span>
                        </div>
                      ))}
                    </div>
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

    {/* Education */}
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>// education</SectionLabel>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14 text-foreground">
            Academic <span className="text-primary">Foundation</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <ScrollReveal key={ed.title + ed.sub} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-6 h-full">
                <ed.icon className="text-primary mb-3" size={20} />
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{ed.title}</h3>
                <p className="text-muted-foreground text-xs mb-3">{ed.sub}</p>
                <p className="text-text-faint text-xs font-mono whitespace-pre-line leading-relaxed">{ed.detail}</p>
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
            Verified <span className="text-primary">Credentials</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <ScrollReveal key={c.title + c.org} delay={i * 0.07}>
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
  </PageTransition>
);

export default ExperiencePage;
