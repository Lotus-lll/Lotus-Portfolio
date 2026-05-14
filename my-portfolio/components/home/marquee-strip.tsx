"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MarqueeStripProps = {
  text: string;
};

export function MarqueeStrip({ text }: MarqueeStripProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const repeated = Array.from({ length: 10 }, () => text);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (prefersReducedMotion || isMobile) {
    return (
      <div className="overflow-hidden border-y border-neutral-200 py-3">
        <div className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-neutral-500">
          {repeated.join(" · ")}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-y border-neutral-200 py-3">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-neutral-500"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {repeated.concat(repeated).map((item, idx) => (
          <span key={`${item}-${idx}`}>{item}</span>
        ))}
      </motion.div>
    </div>
  );
}
