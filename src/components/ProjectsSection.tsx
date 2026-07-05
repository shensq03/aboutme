import { ProjectExplorer } from "@/components/ProjectExplorer";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 pt-4 pb-20 lg:min-h-screen">
      <div id="projects-start" className="mb-4 scroll-mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">Projects / 项目经历</p>
        <h2 className="page-title mt-2">Project Gallery / 项目经历</h2>
        <p className="body-copy mx-auto mt-2 max-w-[720px]">
          从具体的人、具体的困境与真实的情感出发，创造有温度的产品与连接。
        </p>
      </div>
      <ProjectExplorer />
    </section>
  );
}
