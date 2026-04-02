import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center glass-card border border-primary/25 text-primary hover:shadow-[0_0_20px_hsl(162_100%_50%/0.25)] transition-all duration-300 hover:scale-110"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
