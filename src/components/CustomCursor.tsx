import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const move = useCallback((e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", () => setVisible(false));

    // Detect hovering on interactive elements
    const handleOver = (e: Event) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      }
    };
    const handleOut = () => setHovering(false);

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [move]);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[70]"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.3 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-primary/30 pointer-events-none z-[70]"
        animate={{
          x: pos.x - (hovering ? 24 : 16),
          y: pos.y - (hovering ? 24 : 16),
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
