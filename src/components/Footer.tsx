import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logoSrc from "@/assets/logo.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const projectLinks = [
  { label: "CV Builder", href: "/projects" },
  { label: "Real Estate", href: "/projects" },
  { label: "Crypto Dashboard", href: "/projects" },
  { label: "Weather App", href: "/projects" },
  { label: "View All →", href: "/projects" },
];

const connectLinks = [
  { label: "GitHub", href: "https://github.com/Goutam245", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/goutam-roy-dev", external: true },
  { label: "Email", href: "mailto:goutam.roy.421917@gmail.com", external: true },
  { label: "WhatsApp", href: "https://wa.me/8801747593452", external: true },
];

const socials = [
  { icon: Github, href: "https://github.com/Goutam245", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/goutam-roy-dev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:goutam.roy.421917@gmail.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/8801747593452", label: "WhatsApp" },
];

const Footer = () => (
  <footer className="pt-20 pb-10 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      {/* Top section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logoSrc} alt="Goutam Roy Logo" className="h-12 w-auto mb-1" style={{ filter: 'drop-shadow(0 0 8px rgba(0,200,150,0.3))' }} />
          <p className="font-display font-bold text-foreground text-lg mb-1">Goutam Roy</p>
          <p className="text-muted-foreground text-sm mb-3">Frontend Developer & Full Stack Engineer</p>
          <p className="text-muted-foreground text-xs">Dhaka, Bangladesh → Available Worldwide</p>
          <div className="flex items-center gap-4 mt-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-display font-semibold text-foreground text-sm mb-4">Quick Links</p>
          <div className="space-y-2">
            {quickLinks.map((l) => (
              <Link key={l.href + l.label} to={l.href} className="block text-muted-foreground hover:text-primary text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <p className="font-display font-semibold text-foreground text-sm mb-4">Projects</p>
          <div className="space-y-2">
            {projectLinks.map((l) => (
              <Link key={l.label} to={l.href} className="block text-muted-foreground hover:text-primary text-xs transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="font-display font-semibold text-foreground text-sm mb-4">Connect</p>
          <div className="space-y-2">
            {connectLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-primary text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Availability banner */}
      <div className="border-t border-border pt-6 mb-6">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
          <span className="text-muted-foreground">Currently available for remote roles worldwide</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center space-y-1">
        <p className="text-text-faint text-xs font-mono">
          © {new Date().getFullYear()} Goutam Roy · Built with React & TypeScript
        </p>
        <p className="text-text-faint text-[10px] font-mono">
          Designed & developed by Goutam Roy
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
