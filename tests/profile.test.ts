import { describe, expect, it } from "vitest";
import { buildCapabilities, contactLinks, defaultProjectSlug, navItems, profile, projectCategories, projects, researchItems } from "@/data/profile";

describe("profile content model", () => {
  it("contains the required four-page navigation", () => {
    expect(navItems.map((item) => item.href)).toEqual(["/", "/projects", "/research", "/about"]);
  });

  it("uses the design draft project list and Tripkin as the default active project", () => {
    expect(defaultProjectSlug).toBe("tripkin");
    expect(projects.map((project) => project.title)).toEqual([
      "话到嘴边",
      "Tripkin",
      "今天吃什么",
      "纹载山河",
      "vibe-workflow",
      "怀化溆浦乡村振兴平台"
    ]);
    expect(projectCategories).toEqual(["AI 产品", "人与连接", "文化与场域", "工具与工程"]);
  });

  it("captures the planned personal positioning and research set", () => {
    expect(profile.name).toBe("沈思齐");
    expect(profile.keywords).toEqual(["深度学习", "时序预测", "全栈开发", "AI产品创造", "审美表达", "温度与连接"]);
    expect(profile.philosophy).toBe(
      "我用严谨的模型理解复杂世界，也希望技术在追求效率之外，能去看见具体的人，回应真实的情感与需求，建立更自然、更有温度的连接。"
    );
    expect(researchItems).toHaveLength(3);
  });

  it("uses the current about capability wording", () => {
    const aiProduct = buildCapabilities.find((item) => item.title === "AI 产品");
    const algorithm = buildCapabilities.find((item) => item.title === "算法研究");
    expect(aiProduct?.items).toContain("vibecoding");
    expect(aiProduct?.items).not.toContain("AI 集成");
    expect(algorithm?.items).toContain("神经网络");
    expect(algorithm?.items).not.toContain("图神经网络");
  });

  it("uses the corrected home contact links", () => {
    expect(profile.email).toBe("siqi_shen03@163.com");
    expect(contactLinks.map((link) => link.label)).toEqual(["Bonjour!", "Email", "GitHub"]);
    expect(contactLinks.find((link) => link.label === "Email")?.href).toBe("mailto:siqi_shen03@163.com");
    expect(contactLinks.find((link) => link.label === "Bonjour!")?.href).toBe("/bonjour");
  });

  it("uses the design draft copy for Tripkin and research cards", () => {
    const tripkin = projects.find((project) => project.slug === "tripkin");
    expect(tripkin?.typeLabel).toBe("旅行社交 / AI 行程匹配");
    expect(tripkin?.projectIntro).toContain("旅行人格");
    expect(tripkin?.myRole).toContain("产品负责人");
    expect(tripkin?.insight).toBe("旅行规划信息分散，决策成本高，许多美好体验因为繁琐的计划而被放弃。");
    expect(tripkin?.solution).toBe("构建AI驱动的行程规划与记录平台，让灵感到出发再到回忆都更轻松。");
    expect(tripkin?.roleDetail).toBe("产品负责人 & 全栈开发，需求调研、产品设计、算法集成、前后端开发");
    expect(tripkin?.features).toEqual(["智能行程生成", "个性化推荐", "地图路线规划", "预算与花费追踪", "多人协作", "图文记录&回忆册"]);

    expect(researchItems[0]).toMatchObject({
      description:
        "围绕交通流中的多尺度非平稳性开展时空预测研究，探索频域信息与时空状态之间的动态交互机制。目前已在完成所有的实验及论文写作，正在投递AAAI会议（CCF-A）",
      tags: ["PyTorch", "Transformer", "GNN", "Spatio-Temporal Forecasting", "Traffic Flow Prediction"]
    });
    expect(researchItems[1]).toMatchObject({
      description: "提出Few-shot计数框架，结合注意力机制与密度回归，在小样本条件下显著提升遥感林木计数精度。第一作者完成论文投递至CCFC会议",
      tags: ["PyTorch", "Few-shot", "Remote Sensing", "Density Regression", "Attention Mechanism"]
    });
    expect(researchItems[2]).toMatchObject({
      role: "算法及实验负责人",
      description: "构建轻量化检测模型，结合多尺度特征与数据增强策略，提升小目标检测效果。完成了多类检测器的统一实验与性能比较，绘制了损失和mAP变化曲线。",
      tags: ["PyTorch", "MMDetection", "YOLOv8", "Data Augmentation", "Loss Curve", "mAP Curve"]
    });
  });
});
