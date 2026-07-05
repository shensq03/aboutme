import { ResearchCard } from "@/components/ResearchCard";
import { ResearchGraph } from "@/components/ResearchGraph";
import { researchItems } from "@/data/profile";

export function ResearchSection() {
  return (
    <section id="research" className="relative z-10 overflow-hidden pt-6 pb-20 lg:min-h-screen">
      <div id="research-start" className="mb-5 scroll-mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">Research / 科研经历</p>
        <h2 className="page-title mt-2">Research Experience / 科研经历</h2>
        <p className="body-copy mx-auto mt-2 max-w-[720px]">
          在时序与时空数据中，寻找规律，预判未来，服务真实世界。
        </p>
      </div>
      <div className="grid items-stretch gap-5 lg:h-[calc(100vh-210px)] lg:min-h-[560px] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ResearchGraph />
        </div>
        <div className="grid gap-4 lg:col-span-7 lg:grid-rows-3">
          {researchItems.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </div>
      <svg className="section-wave" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 74 C180 18 325 112 520 54 C760 -16 850 112 1080 58 C1240 20 1350 34 1440 60" stroke="#6C7CFF" strokeWidth="2" />
        <path d="M0 94 C220 42 360 130 580 76 C820 18 930 132 1160 78 C1300 46 1380 58 1440 82" stroke="#7DE2D1" strokeWidth="1" />
      </svg>
    </section>
  );
}
