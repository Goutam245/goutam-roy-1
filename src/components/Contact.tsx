import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, Linkedin, Github, Globe, Send } from "lucide-react";

const links = [
  { icon: Mail, label: "goutam.roy.421917@gmail.com", href: "mailto:goutam.roy.421917@gmail.com" },
  { icon: Phone, label: "+880 174 759 3452", href: "tel:+8801747593452" },
  { icon: Linkedin, label: "linkedin.com/in/goutam-roy-dev", href: "https://linkedin.com/in/goutam-roy-dev" },
  { icon: Github, label: "github.com/Goutam245", href: "https://github.com/Goutam245" },
  { icon: Globe, label: "English C1 · IELTS 7.5", href: undefined },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:goutam.roy.421917@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`
    );
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <p className="section-label">// 05 · contact</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-3">
            Let's Build Something <span className="text-primary">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mb-14 text-[15px]">
            Open to freelance projects, full-time remote roles, and global relocation opportunities.
            Drop me a line — I read every message.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — info */}
          <div className="space-y-3">
            {links.map((l, i) => {
              const Wrapper = l.href ? "a" : "div";
              return (
                <ScrollReveal key={l.label} delay={i * 0.06}>
                  <Wrapper
                    {...(l.href ? { href: l.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="glass-card rounded-xl p-4 flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <l.icon size={16} className="text-primary group-hover:rotate-[15deg] transition-transform duration-200" />
                    </div>
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors break-all">
                      {l.label}
                    </span>
                  </Wrapper>
                </ScrollReveal>
              );
            })}

            <ScrollReveal delay={0.35}>
              <div className="flex flex-wrap gap-2 mt-5">
                {["🟢 Available for Freelance", "🟢 Open to Remote Full-time", "🌍 Open to Relocation"].map((s) => (
                  <span key={s} className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <form onSubmit={submit} className="glass-card rounded-xl p-6 space-y-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-xs font-mono text-muted-foreground mb-1 block">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    placeholder={f.placeholder}
                    className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-faint focus:outline-none focus:border-primary/40 transition"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="text-xs font-mono text-muted-foreground mb-1 block">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-faint focus:outline-none focus:border-primary/40 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={15} />
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
