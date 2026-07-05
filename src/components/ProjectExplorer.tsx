"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { defaultProjectSlug, projects, tripkinFeatureIcons, type Project } from "@/data/profile";

function ProjectDetail({ project, openModal }: { project: Project; openModal: (index: number) => void }) {
  return (
    <motion.article
      key={project.slug}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
      className="soft-card h-full overflow-y-auto rounded-3xl p-4 md:p-5"
    >
      <div className="relative mb-4 rounded-2xl border border-[rgba(108,124,255,0.18)] bg-[linear-gradient(135deg,rgba(108,124,255,0.08),rgba(255,255,255,0.72))] px-5 py-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue">Selected Project</p>
        <h2 className="mt-1 text-xl font-semibold leading-tight text-[#101942] md:text-2xl">{project.title}</h2>
        <span className="absolute bottom-3 right-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-blue shadow-soft">
          {project.typeLabel}
        </span>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <div className="space-y-4">
          {[
            ["项目简介", project.projectIntro],
            ["我的角色", project.myRole]
          ].map(([label, value], index) => (
            <motion.section
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <h3 className="mb-1.5 text-base font-semibold text-blue">{label}</h3>
              <p className="body-copy max-w-[640px] text-sm leading-6">{value}</p>
            </motion.section>
          ))}
          <section>
            <h3 className="mb-2 text-base font-semibold text-[#1C1C1E]">核心功能</h3>
            <div className="grid gap-2 sm:grid-cols-3">
              {project.features.map((feature, index) => {
                const Icon = tripkinFeatureIcons[index % tripkinFeatureIcons.length];
                return (
                  <div key={feature} className="interactive-card flex min-h-[68px] flex-col justify-between rounded-xl border border-stroke bg-[#f7f7f8] p-2.5">
                    <Icon className="text-blue" size={15} />
                    <p className="mt-2 text-xs font-semibold leading-4 text-[#24204b]">{feature}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
        <section>
          <h3 className="mb-2 text-base font-semibold text-[#101942]">项目图片</h3>
          <div className="flex snap-x gap-4 overflow-x-auto pb-3">
            {project.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="group relative w-full min-w-[250px] snap-center overflow-hidden rounded-2xl border border-stroke bg-[#f8f6f3] p-2 shadow-soft"
                onClick={() => openModal(index)}
              >
                <span className="relative block h-[330px] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 280px, 80vw"
                    className="rounded-xl object-contain transition duration-300 group-hover:scale-[1.015]"
                  />
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-blue shadow-soft">
                  <Maximize2 size={14} />
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </motion.article>
  );
}

export function ProjectExplorer() {
  const [activeSlug, setActiveSlug] = useState(defaultProjectSlug);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeProject = projects.find((project) => project.slug === activeSlug) ?? projects.find((project) => project.slug === defaultProjectSlug) ?? projects[0];

  return (
    <div>
      <div className="grid gap-6 lg:h-[calc(100vh-210px)] lg:min-h-[560px] lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="soft-card h-full overflow-hidden rounded-3xl p-3">
            <div className="h-full space-y-3 overflow-y-auto pr-1">
              {projects.map((project) => {
                const Icon = project.icon;
                const active = project.slug === activeProject.slug;
                return (
                  <button
                    key={project.slug}
                    type="button"
                    onClick={() => setActiveSlug(project.slug)}
                    className={`flex h-[76px] w-full items-center gap-3 rounded-2xl border p-3 text-left ${
                      active
                        ? "border-stroke bg-white shadow-soft"
                        : "border-transparent bg-white/35 hover:border-l-[3px] hover:border-blue hover:bg-white/75"
                    }`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[rgba(108,124,255,0.1)] text-blue">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-[#101942]">{project.title}</span>
                      <span className="mt-0.5 block truncate text-sm leading-5 text-muted">{project.subtitle}</span>
                      <span className="mt-1 block text-xs text-blue">{project.role}</span>
                    </span>
                    {active ? <ChevronRight className="mr-1 shrink-0 text-blue" size={16} /> : null}
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
        <main className="h-full lg:col-span-8">
          <AnimatePresence mode="wait">
            <ProjectDetail project={activeProject} openModal={setModalIndex} />
          </AnimatePresence>
        </main>
      </div>

      <AnimatePresence>
        {modalIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-[#1c1c1e]/35 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalIndex(null)}
          >
            <button className="absolute right-6 top-6 rounded-full bg-white p-3 text-[#101942] shadow-soft" onClick={() => setModalIndex(null)}>
              <X size={18} />
            </button>
            <motion.div
              className="relative h-[80vh] w-[88vw] max-w-[1120px] overflow-hidden rounded-3xl border border-white/70 bg-white p-3 shadow-soft"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={activeProject.images[modalIndex]?.src ?? activeProject.images[0]?.src ?? "/project-images/tripkin.png"}
                alt={activeProject.images[modalIndex]?.alt ?? activeProject.title}
                fill
                sizes="88vw"
                className="p-3 object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
