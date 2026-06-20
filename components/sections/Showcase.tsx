"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FadeUp } from "@/components/motion/FadeUp";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { SITE_PATH } from "@/lib/constants";

const BULLETS = [
  {
    t: "Recognize at a glance",
    d: "Real product photos make it easy to spot something you actually own.",
  },
  {
    t: "Straight to the agency",
    d: "Every claim opens the official CPSC, FDA, USDA, or NHTSA page. No middleman.",
  },
  {
    t: "Never miss the money",
    d: "New-recall alerts catch the notice that would have slipped right past you.",
  },
];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yShift = useTransform(scrollYProgress, [0, 1], [32, -32]);

  return (
    <Section spacing="loose">
      <Container>
        <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left: copy */}
          <div>
            <FadeUp>
              <Eyebrow>Every recall, one screen</Eyebrow>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-6 text-balance text-[length:var(--text-h2)] font-semibold leading-[1.05] tracking-[-0.03em]">
                Designed to{" "}
                <span className="font-serif italic font-normal text-[var(--color-accent)]">
                  disappear
                </span>{" "}
                between you and your money.
              </h2>
            </FadeUp>

            <FadeUp delay={0.12}>
              <ul className="mt-10 space-y-6">
                {BULLETS.map((b) => (
                  <li key={b.t} className="flex gap-5">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-tint)]"
                    >
                      <svg viewBox="0 0 12 12" className="size-3 text-[var(--color-accent)]" fill="none">
                        <path d="M2 6.5l2.5 2.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-[var(--color-text-primary)]">{b.t}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">{b.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          {/* Right: single dominant screenshot */}
          <FadeUp delay={0.08}>
            <motion.div
              style={reduce ? undefined : { y: yShift }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Layered ambient glow */}
              <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.12] blur-[100px]" />
              <div aria-hidden className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)] opacity-[0.18] blur-[50px]" />

              <Image
                src={`${SITE_PATH}/screenshots/showcase.png`}
                alt="Browse every recall in one place"
                width={382}
                height={767}
                className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]"
                style={{
                  filter: "drop-shadow(0 48px 80px rgba(0,0,0,0.75))",
                }}
                unoptimized
                priority
              />
            </motion.div>
          </FadeUp>

        </div>
      </Container>
    </Section>
  );
}
