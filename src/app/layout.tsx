import type { Metadata } from "next";
import "./globals.css";
import { BackgroundSystem } from "@/components/BackgroundSystem";

export const metadata: Metadata = {
  title: "沈思齐 | AI 产品与时空预测",
  description: "沈思齐的交互式个人叙事系统：AI 产品、全栈开发、算法研究与审美表达。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="page-shell">
          <BackgroundSystem />
          {children}
        </div>
      </body>
    </html>
  );
}
