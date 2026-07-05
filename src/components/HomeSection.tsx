"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { SiteNav } from "@/components/SiteNav";
import { profile } from "@/data/profile";

const introVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.09 }
  }
};

const introItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export function HomeSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="grid min-h-screen scroll-mt-28 items-start gap-6 pt-2 lg:grid-cols-12 lg:gap-12">
      <div className="col-span-full mb-4 flex justify-center">
        <SiteNav />
      </div>
      <motion.div
        className="lg:col-span-7 lg:translate-x-[166px] lg:translate-y-10"
        variants={reduceMotion ? undefined : introVariants}
        initial={reduceMotion ? undefined : "hidden"}
        animate={reduceMotion ? undefined : "show"}
      >
        <motion.p variants={introItemVariants} className="serif-mark mb-[-18px] text-6xl md:text-8xl">
          Siqi
        </motion.p>
        <motion.h1 variants={introItemVariants} className="section-title">
          {profile.name}
        </motion.h1>
        <motion.p variants={introItemVariants} className="mt-6 max-w-[560px] text-xl font-semibold leading-9 text-[#101942]">
          我是一名时序预测领域的计算机研究生
          <br />
          也是一个致力于将算法、产品与审美结合的 coder。
        </motion.p>
        <motion.p variants={introItemVariants} className="body-copy mt-6 max-w-[600px]">
          {profile.philosophy}
        </motion.p>
        <motion.div variants={introItemVariants} className="mt-10 space-y-3">
          <div className="flex flex-wrap gap-2">
            {profile.keywords.slice(0, 4).map((keyword) => (
              <motion.span key={keyword} variants={introItemVariants} className="chip cursor-default">
                <Sparkles size={13} />
                {keyword}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.keywords.slice(4, 6).map((keyword) => (
              <motion.span key={keyword} variants={introItemVariants} className="chip cursor-default">
                <Sparkles size={13} />
                {keyword}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <div className="lg:col-span-5 lg:self-start">
        <HeroVisual />
      </div>
    </section>
  );
}
