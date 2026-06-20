"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion } from "motion/react";

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="border-b border-[var(--color-border-subtle)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-[var(--color-text-primary)]"
      >
        <span className="text-[length:clamp(1.0625rem,0.5vw+0.9rem,1.25rem)] font-medium tracking-tight text-[var(--color-text-primary)]">
          {q}
        </span>
        <span
          className={`grid size-9 shrink-0 place-items-center rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface)] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          } group-hover:border-[var(--color-border-strong)]`}
          aria-hidden
        >
          <svg viewBox="0 0 16 16" className="size-3.5">
            <path
              d="M8 2v12M2 8h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pr-12 text-base leading-relaxed text-[var(--color-text-secondary)]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
