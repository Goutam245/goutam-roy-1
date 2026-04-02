import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import PageTransition from "@/components/PageTransition";
import { Mail, Phone, Linkedin, Github, Globe, Send, Copy, ExternalLink, ChevronDown, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "goutam.roy.421917@gmail.com", href: "mailto:goutam.roy.421917@gmail.com", copyable: true, action: "Send Email →" },
  { icon: Phone, label: "WhatsApp / Phone", value: "+880 174 759 3452", href: "https://wa.me/8801747593452", copyable: false, action: "Open WhatsApp →" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/goutam-roy-dev", href: "https://linkedin.com/in/goutam-roy-dev", copyable: false, action: "View Profile →" },
  { icon: Github, label: "GitHub", value: "github.com/Goutam245", href: "https://github.com/Goutam245", copyable: false, action: "View Projects →" },
  { icon: Globe, label: "Language & Location", value: "English C1 · IELTS 7.5 · Bengali Native\nDhaka, Bangladesh · Open to Relocate", href: undefined, copyable: false },
];

const faqs = [
  { q: "Are you available for remote work globally?", a: "Yes — I work with clients and teams worldwide. My IELTS 7.5 C1 English ensures clear communication, and I'm experienced working across US, European, and Asian timezones." },
  { q: "What technologies do you specialize in?", a: "My core stack is React, Next.js, and TypeScript for frontend. I'm also proficient with Node.js, MongoDB, and PostgreSQL for backend work. For UI, I use Figma and Tailwind CSS." },
  { q: "Do you need visa sponsorship?", a: "Yes, I'm currently based in Bangladesh and would need visa sponsorship for on-site roles abroad. I'm eligible for various visa types including H1-B (USA), EU Blue Card, and Canadian work permits. For remote roles, no sponsorship is needed." },
  { q: "What is your freelance availability?", a: "I'm currently available for new freelance projects. My typical availability is 20–40 hours per week depending on project requirements." },
  { q: "Can I see more of your work?", a: "Absolutely — all 8 of my projects are available on the Projects page with live demos and GitHub links. My full code is on github.com/Goutam245." },
  { q: "What's your development process like?", a: "I follow a clear process: requirements gathering → wireframes → development → testing → deployment → handoff. I provide regular updates and am available for calls to discuss progress." },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", subject: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:goutam.roy.421917@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})${form.company ? `%0ACompany: ${form.company}` : ""}${form.role ? `%0ARole: ${form.role}` : ""}`
    );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("goutam.roy.421917@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// contact</SectionLabel>
            <h1 className="font-display font-bold text-5xl sm:text-6xl leading-tight mb-4 text-foreground">
              Let's Build Something<br />
              <span className="text-primary">Great Together</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-base leading-relaxed">
              Open to freelance, full-time remote roles, and global relocation opportunities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left */}
            <div className="space-y-4">
              {/* Status */}
              <ScrollReveal>
                <div className="glass-card rounded-xl p-6" style={{ borderColor: "hsl(162 100% 50% / 0.15)" }}>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
                    ⚡ Current Status
                  </h3>
                  <div className="space-y-2.5">
                    {[
                      "🟢 Available for Freelance Projects",
                      "🟢 Open to Full-time Remote Roles",
                      "🌍 Open to Relocation (with sponsorship)",
                      "📅 Available to Start: Immediately",
                      "🕐 Response Time: Within 24 hours",
                    ].map((s) => (
                      <p key={s} className="text-muted-foreground text-sm">{s}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact cards */}
              {contactInfo.map((c, i) => (
                <ScrollReveal key={c.label} delay={0.05 + i * 0.05}>
                  <div className="glass-card rounded-xl p-4 flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <c.icon size={16} className="text-primary group-hover:scale-110 transition-transform duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-text-faint text-xs font-mono mb-0.5">{c.label}</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{c.value}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {c.copyable && (
                        <button onClick={copyEmail} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Copy email">
                          <Copy size={14} />
                        </button>
                      )}
                      {c.href && (
                        <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`Open ${c.label}`}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {copied && <p className="text-primary text-xs font-mono">✓ Email copied to clipboard</p>}

              {/* Map */}
              <ScrollReveal delay={0.2}>
                <p className="font-mono text-xs text-primary mb-2 flex items-center gap-1.5">
                  <MapPin size={12} /> Based in Gazipur, Dhaka — Bangladesh
                </p>
                <div className="rounded-xl overflow-hidden border border-primary/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3519891637!2d90.27923953984375!3d23.869144299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0bdef64b4d9%3A0x5e9aa0f2b0a2ee45!2sGazipur%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1709900000000!5m2!1sen!2sbd"
                    width="100%"
                    height="280"
                    style={{ border: 0, borderRadius: '12px', filter: 'invert(90%) hue-rotate(180deg)', opacity: 0.85 }}
                    allowFullScreen
                    loading="lazy"
                    title="Location — Gazipur, Dhaka, Bangladesh"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right — Form */}
            <ScrollReveal delay={0.15}>
              <form onSubmit={submit} className="glass-card rounded-xl p-6 space-y-4">
                <h3 className="font-display font-semibold text-foreground mb-2">Send a Message</h3>
                {[
                  { id: "name", label: "Full Name *", type: "text", placeholder: "Your name", required: true },
                  { id: "email", label: "Email *", type: "email", placeholder: "your@email.com", required: true },
                  { id: "company", label: "Company", type: "text", placeholder: "Company name (optional)", required: false },
                  { id: "role", label: "Role / Position", type: "text", placeholder: "Your role (optional)", required: false },
                  { id: "subject", label: "Subject *", type: "text", placeholder: "What's this about?", required: true },
                ].map((f) => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="text-xs font-mono text-muted-foreground mb-1 block">{f.label}</label>
                    <input
                      id={f.id} type={f.type} required={f.required}
                      value={form[f.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-faint focus:outline-none focus:border-primary/40 transition"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground mb-1 block">Message *</label>
                  <textarea
                    id="message" required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value.slice(0, 500) })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-muted/40 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-text-faint focus:outline-none focus:border-primary/40 transition resize-none"
                  />
                  <p className="text-right text-text-faint text-xs font-mono mt-1">{form.message.length}/500</p>
                </div>
                <button type="submit" className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={15} />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionLabel>// faq</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-foreground">
              Common <span className="text-primary">Questions</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <div className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left">
                    <span className="font-display font-semibold text-foreground text-sm pr-4">{faq.q}</span>
                    <ChevronDown size={16} className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                    <div className="px-5 pb-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
