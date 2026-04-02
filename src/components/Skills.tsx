import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    title: "Frontend Core",
    skills: ["JavaScript ES6+", "TypeScript", "React.js", "Next.js 14", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Vite", "Webpack", "Postman", "Swagger/OpenAPI", "VS Code"],
  },
  {
    title: "Design & UX",
    skills: ["Figma", "Adobe XD", "Responsive Design", "SEO Optimization", "Canva"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "Chrome DevTools"],
  },
];

const Skills = () => (
  <section id="skills" className="py-28 relative">
    <div className="max-w-6xl mx-auto px-6">
      <ScrollReveal>
        <p className="section-label">// 02 · tech stack</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-14">
          Tools I <span className="text-primary">Build</span> With
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.08} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <div className="glass-card rounded-xl p-6 h-full">
              <h3 className="font-display font-semibold text-foreground text-sm mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <ScrollReveal key={s} delay={i * 0.08 + j * 0.03}>
                    <span className="skill-tag">{s}</span>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
