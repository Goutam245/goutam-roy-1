import { useEffect, useRef, useState } from "react";

const CountUp = ({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const inc = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default CountUp;
