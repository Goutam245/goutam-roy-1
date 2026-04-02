import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoSrc from "@/assets/logo.png";


const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "navbar-frosted" : ""}`}
      >
        <nav className="relative px-12 h-16 flex items-center justify-between">
          <Link to="/" className="relative z-10">
            <img src={logoSrc} alt="Goutam Roy Logo" className="h-11 w-auto" style={{ filter: 'drop-shadow(0 0 8px rgba(0,200,150,0.3))' }} />
          </Link>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <Link
                  to={l.href}
                  className={`nav-link text-[15px] font-medium transition-colors duration-200 ${
                    location.pathname === l.href
                      ? "active text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-primary/25 text-xs font-mono text-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              Available for Remote
            </motion.div>

            <button onClick={() => setOpen(true)} className="md:hidden text-foreground" aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-10"
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-foreground" aria-label="Close menu">
              <X size={26} />
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={l.href}
                  className={`text-3xl font-display font-bold transition-colors ${
                    location.pathname === l.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
