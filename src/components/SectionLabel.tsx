import { useState } from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

const SectionLabel = ({ children, className = "" }: SectionLabelProps) => {
  const [fireOff, setFireOff] = useState(false);

  return (
    <p
      className={`section-label ${fireOff ? "fire-off" : ""} ${className}`}
      onClick={() => setFireOff((v) => !v)}
    >
      {children}
    </p>
  );
};

export default SectionLabel;
