"use client";

import { motion, useReducedMotion } from "framer-motion";

type NoticeTickerProps = {
  text: string;
  href?: string;
};

export function NoticeTicker({ text, href = "#" }: NoticeTickerProps) {
  const prefersReducedMotion = useReducedMotion();
  const items = Array.from({ length: 8 }, () => text);

  if (prefersReducedMotion) {
    return (
      <div className="border-b border-neutral-900 bg-[#f4f4f2] py-2">
        <a
          href={href}
          className="mx-auto block w-full max-w-[1665px] px-5 text-center text-xs md:px-10"
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-b border-neutral-900 bg-[#f4f4f2] py-2">
      <motion.a
        href={href}
        className="flex w-max gap-12 whitespace-nowrap px-2 text-xs font-medium tracking-[0.04em] text-neutral-900"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 42, ease: "linear" }}
      >
        {items.concat(items).map((item, idx) => (
          <span key={`${item}-${idx}`}>{item}</span>
        ))}
      </motion.a>
    </div>
  );
}
