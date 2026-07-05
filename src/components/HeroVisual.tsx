"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

const profileRows = [
  { label: "学校", value: profile.school },
  { label: "专业和年级", value: profile.degree },
  { label: "邮箱", value: profile.email, href: `mailto:${profile.email}`, ariaLabel: "Email" },
  { label: "GitHub", value: "github.com/shensq03", href: profile.github, ariaLabel: "GitHub" }
];

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="space-y-2"
      initial={reduceMotion ? undefined : { opacity: 0, y: 26, scale: 0.985 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
    >
      <motion.div
        className="kinetic-card soft-card interactive-card relative h-[300px] overflow-hidden rounded-3xl p-5 md:h-[330px] lg:h-[340px]"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(185,167,255,0.46),transparent_32%),radial-gradient(circle_at_38%_66%,rgba(125,226,209,0.22),transparent_34%)] opacity-90" />
        <div className="absolute inset-0 opacity-80">
          <div className="absolute left-1/2 top-14 h-60 w-60 -translate-x-1/2 rounded-full border border-white/70" />
          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full border border-blue/20" />
          <div className="absolute bottom-[-60px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[rgba(185,167,255,0.32)] blur-3xl" />
        </div>
        <motion.div
          className="absolute inset-5 overflow-hidden rounded-[22px] border border-white/70 bg-white/35 shadow-soft"
          animate={reduceMotion ? undefined : { scale: [1, 1.018, 1] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src="/profile-photo.jpg"
            alt="沈思齐个人照片"
            fill
            priority
            sizes="(min-width: 1024px) 420px, 90vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(185,167,255,0.05),rgba(108,124,255,0.18))]" />
        </motion.div>
        <div className="motion-line absolute left-10 top-16 h-px w-64 rotate-[-12deg] bg-white/70" />
        <div className="motion-line motion-line-delayed absolute right-10 top-32 h-px w-56 rotate-[18deg] bg-blue/30" />
      </motion.div>
      <motion.div
        className="soft-card rounded-3xl p-3.5"
        initial={reduceMotion ? undefined : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.34 }}
      >
        <div className="space-y-1.5">
          {profileRows.map((row, index) => (
            <motion.div
              key={row.label}
              className="grid grid-cols-[92px_minmax(0,1fr)] items-center gap-3"
              initial={reduceMotion ? undefined : { opacity: 0, x: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.44 + index * 0.07 }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">→ {row.label}</p>
              {row.href ? (
                <a
                  href={row.href}
                  aria-label={row.ariaLabel}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noreferrer" : undefined}
                  className="min-w-0 rounded-2xl bg-[#f4f0ff] px-4 py-2 text-sm font-semibold text-[#101942] shadow-[inset_0_0_0_1px_rgba(108,124,255,0.08)] transition duration-200 hover:bg-[#ece6ff] hover:text-blue"
                >
                  <span className="block truncate">{row.value}</span>
                </a>
              ) : (
                <p className="min-w-0 rounded-2xl bg-[#f4f0ff] px-4 py-2 text-sm font-semibold text-[#101942] shadow-[inset_0_0_0_1px_rgba(108,124,255,0.08)]">
                  <span className="block truncate">{row.value}</span>
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
