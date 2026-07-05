import {
  Binary,
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  Hand,
  ImageIcon,
  PiggyBank,
  Plane,
  Route,
  Github,
  Leaf,
  Mail,
  MessageSquareText,
  Sparkles,
  Sprout,
  Users,
  Utensils
} from "lucide-react";

export type ProjectCategory = "AI 产品" | "人与连接" | "文化与场域" | "工具与工程";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  role: string;
  status: string;
  icon: typeof Bot;
  typeLabel: string;
  projectIntro: string;
  myRole: string;
  insight: string;
  solution: string;
  roleDetail: string;
  tags: string[];
  features: string[];
  images: { src: string; alt: string }[];
  reflection: string;
  palette: "blue" | "green" | "orange" | "mint";
};

export type ResearchItem = {
  title: string;
  role: string;
  description: string;
  tags: string[];
};

export const navItems = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目经历" },
  { href: "/research", label: "科研经历" },
  { href: "/about", label: "能力与联系" }
];

export const profile = {
  name: "沈思齐",
  title: "AI 产品创造 / 全栈开发 / 深度学习 / 时空预测",
  email: "siqi_shen03@163.com",
  phone: "15200273932",
  github: "https://github.com/shensq03",
  school: "电子科技大学",
  degree: "计算机技术 · 研一",
  keywords: ["深度学习", "时序预测", "全栈开发", "AI产品创造", "审美表达", "温度与连接"],
  intro:
    "我是一名时序预测领域的计算机研究生，也是一个致力于将算法、产品与审美结合的 coder。",
  philosophy:
    "我用严谨的模型理解复杂世界，也希望技术在追求效率之外，能去看见具体的人，回应真实的情感与需求，建立更自然、更有温度的连接。"
};

export const projectCategories: ProjectCategory[] = ["AI 产品", "人与连接", "文化与场域", "工具与工程"];
export const defaultProjectSlug = "tripkin";

export const projects: Project[] = [
  {
    slug: "zuiti",
    title: "话到嘴边",
    subtitle: "社交焦虑辅助对话应用",
    category: "人与连接",
    role: "AI 聊天与表达转换",
    status: "已上线",
    icon: MessageSquareText,
    typeLabel: "AI 表达辅助 / 移动端产品",
    projectIntro:
      "面向年轻人在导师、领导、同事等关系中的真实表达困境，构建能够理解沟通对象、场景和表达目的的场景表达转换器。",
    myRole:
      "项目发起人、产品负责人及核心开发者，负责痛点分析、功能体系、移动端交互、视觉体系、AI 能力接入和路演叙事。",
    insight:
      "年轻人在导师、领导、同事等关系中，常常不是不会说，而是不知道怎样把真实想法表达得清楚又不伤害关系。",
    solution:
      "设计场景表达转换器，把混乱、直接或难以启齿的想法转化为可发送、可解释、可争取权益的表达版本。",
    roleDetail: "项目发起人 & 核心开发，产品定义、移动端交互、视觉体系、AI能力接入",
    tags: ["大模型应用", "表达转换", "移动端", "语气仪表盘", "关系沟通"],
    features: ["场景识别", "表达风格", "语气调节", "多版本输出", "结果对比", "输入法扩展"],
    images: [{ src: "/project-images/zuiti.png", alt: "话到嘴边作品图" }],
    reflection: "表达辅助不是替用户说话，而是帮用户在复杂关系里保留清晰、边界和行动可能。",
    palette: "green"
  },
  {
    slug: "tripkin",
    title: "Tripkin",
    subtitle: "AI 旅行规划与记录平台",
    category: "AI 产品",
    role: "产品负责人 / 全栈开发",
    status: "进行中",
    icon: Compass,
    typeLabel: "旅行社交 / AI 行程匹配",
    projectIntro:
      "以旅行人格为社交表达、以目的地地图为发现入口、以真实行程重合为匹配基础，帮助年轻人更高效、更安全地寻找旅行搭子。",
    myRole:
      "产品负责人及核心功能开发，提出旅行人格与行程匹配创意，主导需求分析、产品定位、功能架构和旅行地图模块 MVP 设计。",
    insight: "旅行规划信息分散，决策成本高，许多美好体验因为繁琐的计划而被放弃。",
    solution: "构建AI驱动的行程规划与记录平台，让灵感到出发再到回忆都更轻松。",
    roleDetail: "产品负责人 & 全栈开发，需求调研、产品设计、算法集成、前后端开发",
    tags: ["AI 产品", "旅行规划", "地图路线", "移动端", "多人协作"],
    features: ["智能行程生成", "个性化推荐", "地图路线规划", "预算与花费追踪", "多人协作", "图文记录&回忆册"],
    images: [{ src: "/project-images/tripkin.png", alt: "Tripkin 作品图" }],
    reflection: "Tripkin 的核心不是生成更多路线，而是把灵感、计划、协作和回忆串成一个更轻的旅行系统。",
    palette: "blue"
  },
  {
    slug: "mealmuse",
    title: "今天吃什么",
    subtitle: "智能饮食推荐小程序",
    category: "AI 产品",
    role: "智能饮食推荐",
    status: "2026",
    icon: Utensils,
    typeLabel: "AI 决策助手 / 小程序",
    projectIntro:
      "将“今天吃什么”从信息搜索问题重构为可执行的 AI 决策流程，围绕预算、距离、关系、口味和用餐目的给出推荐。",
    myRole:
      "核心产品与开发成员，负责 AI 竞品调研、用户场景分析、推荐逻辑、单人与多人决策流程、页面交互和视觉迭代。",
    insight:
      "吃饭选择困难往往不是缺少餐厅，而是预算、距离、关系、口味和用餐目的交织后的决策疲劳。",
    solution:
      "把餐厅推荐重构为 AI 决策工具，单人三问快速给出主推荐，多人模式综合偏好并消解冲突。",
    roleDetail:
      "负责 AI 竞品调研、用户场景分析、推荐逻辑、单人与多人流程设计、页面交互、视觉迭代和 AI 辅助开发。",
    tags: ["AI 决策", "用户洞察", "全栈开发", "多人偏好", "推荐解释"],
    features: ["单人三问", "主推荐与备选", "多人偏好收集", "吃饭盲盒", "反向推荐", "历史偏好"],
    images: [{ src: "/project-images/mealmuse.png", alt: "今天吃什么 MealMuse 作品图" }],
    reflection: "真正的推荐不是给更多选项，而是把一个模糊问题转化为用户能立即执行的决定。",
    palette: "orange"
  },
  {
    slug: "wen-zai-shan-he",
    title: "纹载山河",
    subtitle: "数字纹样与文化设计平台",
    category: "文化与场域",
    role: "数字文旅与文化设计",
    status: "2025",
    icon: Leaf,
    typeLabel: "数字文旅 / 非遗叙事",
    projectIntro:
      "以新疆和田艾德莱斯丝绸植物纹样为切入点，连接非遗文化、自然景观和旅游服务，形成“一纹一景”的生态叙事。",
    myRole:
      "前期调研成员、代码与技术负责人，参与文化与生态调研，负责技术方案、旅游网站、小程序功能实现和模块整合。",
    insight:
      "非遗展示常停留在静态图文，年轻用户缺少主动参与入口，文化、自然生态与旅游服务也彼此割裂。",
    solution:
      "以艾德莱斯丝绸植物纹样连接昆仑山、大漠胡杨等自然景观，形成一纹一景的生态叙事和个性化路线。",
    roleDetail:
      "参与文化与生态调研，负责技术方案、网站和小程序功能实现、模块整合与开发协调。",
    tags: ["跨界创作", "生成式 AI", "文旅产品", "数字叙事", "小程序"],
    features: ["生态纹样", "个性路线", "生成式创作", "丝路植物宝宝", "文化地图", "旅游服务"],
    images: [{ src: "/project-images/wen-zai-shan-he.png", alt: "纹载山河作品图" }],
    reflection: "技术承载文化记忆时，需要让用户从观看者变成参与者，让传统在互动里重新生长。",
    palette: "green"
  },
  {
    slug: "vibe-workflow",
    title: "vibe-workflow",
    subtitle: "AI工作流编排工具",
    category: "工具与工程",
    role: "AI 工作流编排工具",
    status: "已发布 npm",
    icon: Code2,
    typeLabel: "MCP 工具 / 开源工程",
    projectIntro:
      "基于 TypeScript 和 Model Context Protocol，将需求分析、任务拆分、代码生成、调试和复盘封装为可复用 AI 编程工作流。",
    myRole:
      "项目发起人及独立开发者，完成需求定义、MCP 调研、架构设计、TypeScript 开发、测试、文档、npm 封装和发布。",
    insight:
      "AI 编程经验经常散落在对话中，提示词、调试步骤和协作方法难以复用，也难以沉淀成工程资产。",
    solution:
      "用 TypeScript 和 MCP 封装提示词模板、动态参数与工作流调用，让验证过的人机协作流程可配置、可共享。",
    roleDetail:
      "独立完成需求定义、MCP 调研、系统架构、TypeScript 开发、测试、文档、npm 封装和开源发布。",
    tags: ["MCP", "TypeScript", "npm", "AI 编程", "工作流"],
    features: ["模板管理", "动态参数", "工作流调用", "一键安装", "配置复用", "文档化沉淀"],
    images: [{ src: "/project-images/vibe-workflow.png", alt: "vibe-workflow 作品图" }],
    reflection: "AI 编程能力的增长不只来自模型，也来自把成功协作路径变成可以被再次调用的系统。",
    palette: "mint"
  },
  {
    slug: "xupu-platform",
    title: "怀化溆浦乡村振兴平台",
    subtitle: "乡村治理与产业数据平台",
    category: "工具与工程",
    role: "乡村治理与产业数据",
    status: "已部署",
    icon: Sprout,
    typeLabel: "乡村振兴 / 数据平台",
    projectIntro:
      "面向乡村振兴工作站的成果展示、内容维护和信息交互需求，建设可持续更新、传播和管理的数字化宣传平台。",
    myRole:
      "前端代码负责人，负责 Vue 页面架构、组件开发、交互实现、前后端接口联调、页面适配、功能测试和部署推进。",
    insight:
      "基层实践产生的大量调研、产业和活动成果常分散在文档中，项目结束后难以持续更新、传播和利用。",
    solution:
      "用 Vue、Spring Boot 和 RESTful API 构建可维护的数字窗口，支持内容展示、后台管理和 AI 服务集成。",
    roleDetail:
      "负责前端页面架构、组件开发、交互实现、前后端接口联调、页面适配、功能测试和部署推进。",
    tags: ["Vue", "Spring Boot", "RESTful API", "内容管理", "实际部署"],
    features: ["成果展示", "动态管理", "信息交互", "AI 服务", "接口联调", "部署上线"],
    images: [{ src: "/project-images/xupu-platform.png", alt: "怀化溆浦乡村振兴平台作品图" }],
    reflection: "工程在真实场域中的价值，是把阶段性实践转化为一个能够持续被维护和访问的公共入口。",
    palette: "orange"
  }
];

export const researchItems: ResearchItem[] = [
  {
    title: "交通流时空预测研究",
    role: "第一作者 / 核心研究者",
    description:
      "围绕交通流中的多尺度非平稳性开展时空预测研究，探索频域信息与时空状态之间的动态交互机制。目前已在完成所有的实验及论文写作，正在投递AAAI会议（CCF-A）",
    tags: ["PyTorch", "Transformer", "GNN", "Spatio-Temporal Forecasting", "Traffic Flow Prediction"]
  },
  {
    title: "基于小样本的遥感林木计数模型",
    role: "第一作者 / 算法负责人",
    description:
      "提出Few-shot计数框架，结合注意力机制与密度回归，在小样本条件下显著提升遥感林木计数精度。第一作者完成论文投递至CCFC会议",
    tags: ["PyTorch", "Few-shot", "Remote Sensing", "Density Regression", "Attention Mechanism"]
  },
  {
    title: "植物病虫害目标检测模型",
    role: "算法及实验负责人",
    description:
      "构建轻量化检测模型，结合多尺度特征与数据增强策略，提升小目标检测效果。完成了多类检测器的统一实验与性能比较，绘制了损失和mAP变化曲线。",
    tags: ["PyTorch", "MMDetection", "YOLOv8", "Data Augmentation", "Loss Curve", "mAP Curve"]
  }
];

export const buildCapabilities = [
  { title: "AI 产品", icon: Bot, items: ["产品设计", "用户研究", "vibecoding", "数据分析"] },
  { title: "全栈开发", icon: Binary, items: ["React / Next.js", "Node.js / Python", "数据库 / API", "Docker / 部署"] },
  { title: "算法研究", icon: BrainCircuit, items: ["深度学习", "时序预测", "神经网络", "模型优化"] },
  { title: "跨界表达", icon: Sparkles, items: ["视觉设计", "交互设计", "数字内容", "叙事表达"] }
];

export const learningItems = [
  { title: "领导力与团队协作", description: "更好地协同分工、推动团队从想法到成品。" },
  { title: "故事力 Storytelling", description: "用更清晰的叙事传达产品与研究价值。" },
  { title: "UI / 交互设计", description: "让产品更易用、更有温度，也更接近真实用户。" },
  { title: "跨专业融合能力", description: "在不同学科中寻找连接点和新的问题意识。" }
];

export const contactLinks = [
  { label: "Bonjour!", href: "/bonjour", icon: Hand },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.github, icon: Github }
];

export const researchNodes = [
  { en: "Time Series Forecasting", zh: "时序预测" },
  { en: "Spatio-Temporal Modeling", zh: "时空建模" },
  { en: "GNN", zh: "图神经网络" },
  { en: "Few-shot Learning", zh: "小样本学习" },
  { en: "Remote Sensing", zh: "遥感影像" },
  { en: "Transformer", zh: "架构模型" }
];

export const tripkinFeatureIcons = [Plane, Sparkles, Route, PiggyBank, Users, ImageIcon];

export const education = [
  { school: "电子科技大学", period: "2025.09 - 至今", major: "计算机技术（硕士）", note: "研究方向：深度学习 / 时序预测" },
  { school: "南京林业大学", period: "2021.09 - 2025.06", major: "软件工程（本科）", note: "GPA 3.89 | 2/69 | 推免" }
];

export const awards = ["蓝桥杯 C/C++ 组江苏赛区一等奖", "全国大学生英语竞赛二等奖", "MathorCup 数学应用挑战赛二等奖", "全国软件测试大赛省赛三等奖", "连续获校三好学生及奖学金"];
