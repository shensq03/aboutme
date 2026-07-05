import { ImageIcon } from "lucide-react";
import type { Project } from "@/data/profile";

export function PhoneMock({ project, index }: { project: Project; index: number }) {
  const screenLabel = index === 0 ? "行程首页" : index === 1 ? "地图路线" : "旅行回忆";

  return (
    <div className="h-[230px] w-[112px] shrink-0 rounded-[24px] border border-[#d9d3ef] bg-[#f4f1ee] p-1.5 shadow-soft">
      <div className="grid h-full place-items-center rounded-[22px] border border-white bg-[#f8f6f3] p-3 text-center">
        <div className="mb-2 flex items-center justify-between text-[8px] font-semibold text-[#101942]">
          <span>9:41</span>
          <span>{project.title}</span>
          <span>●●</span>
        </div>
        <div className="grid flex-1 place-items-center rounded-2xl border border-dashed border-stroke bg-white/70 p-2">
          <ImageIcon className="mx-auto mb-2 text-tertiary" size={20} />
          <p className="text-[10px] font-semibold leading-4 text-[#3b365f]">UI 截图待补充</p>
          <p className="mt-1 text-[9px] leading-3 text-muted">{screenLabel}</p>
        </div>
      </div>
    </div>
  );
}
