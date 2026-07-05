import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import ProjectsPage from "@/app/projects/page";
import ResearchPage from "@/app/research/page";
import BonjourPage from "@/app/bonjour/page";
import { SiteNav } from "@/components/SiteNav";

describe("site pages", () => {
  it("renders the home narrative", () => {
    render(<HomePage />);
    expect(screen.getByRole("heading", { name: "沈思齐" })).toBeInTheDocument();
    expect(screen.getByText(/时序预测领域/)).toBeInTheDocument();
    expect(screen.getByAltText("沈思齐个人照片")).toBeInTheDocument();
  });

  it("renders the primary site as vertical scroll sections with anchor navigation", () => {
    render(<HomePage />);
    expect(document.querySelector("#home")).toBeInTheDocument();
    expect(document.querySelector("#projects")).toBeInTheDocument();
    expect(document.querySelector("#projects-start")).toBeInTheDocument();
    expect(document.querySelector("#research")).toBeInTheDocument();
    expect(document.querySelector("#research-start")).toBeInTheDocument();
    expect(document.querySelector("#about")).toBeInTheDocument();
    expect(document.querySelector("#about-start")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Project Gallery/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Research Experience/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /About/ })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Portfolio/ })).not.toBeInTheDocument();
    expect(screen.queryByText("OBSERVE")).not.toBeInTheDocument();
    expect(screen.getByText(/学校/)).toBeInTheDocument();
    expect(screen.getByText(/专业和年级/)).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /^Email$/ }).some((link) => link.getAttribute("href") === "mailto:siqi_shen03@163.com")).toBe(true);
    expect(screen.getAllByRole("link", { name: /^GitHub$/ }).some((link) => link.getAttribute("href") === "https://github.com/shensq03")).toBe(true);
  });

  it("renders a centered anchor-only navigation without the logo inside the bar", () => {
    render(<SiteNav />);
    expect(screen.queryByText("Siqi")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /首页/ })).toHaveAttribute("href", "#home");
    expect(screen.getByRole("link", { name: /项目经历/ })).toHaveAttribute("href", "#projects-start");
    expect(screen.getByRole("link", { name: /科研经历/ })).toHaveAttribute("href", "#research-start");
    expect(screen.getByRole("link", { name: /能力与联系/ })).toHaveAttribute("href", "#about-start");
  });

  it("renders the Bonjour profile page", () => {
    render(<BonjourPage />);
    expect(screen.getByRole("heading", { name: "Siqi" })).toBeInTheDocument();
    expect(screen.getByText(/hi 我是Siqi/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /加好友/ })).toHaveAttribute("href", "mailto:siqi_shen03@163.com");
  });

  it("renders projects, research, and about pages", () => {
    render(<ProjectsPage />);
    expect(screen.getByRole("heading", { name: /Project Gallery/ })).toBeInTheDocument();
    expect(screen.getAllByText("Tripkin").length).toBeGreaterThan(0);
    expect(screen.getByText("话到嘴边")).toBeInTheDocument();
    expect(screen.getByText("怀化溆浦乡村振兴平台")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "文化与场域" })).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Tripkin" })).toBeInTheDocument();
    expect(screen.getByText("旅行社交 / AI 行程匹配")).toBeInTheDocument();
    expect(screen.getByText("项目简介")).toBeInTheDocument();
    expect(screen.getByText("我的角色")).toBeInTheDocument();
    expect(screen.getByText("项目图片")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Tripkin 作品图" }).getAttribute("src")).toContain("tripkin.png");
    fireEvent.click(screen.getByRole("button", { name: /纹载山河/ }));
    expect(screen.getAllByText("纹载山河").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: "纹载山河" })).toBeInTheDocument();
    expect(screen.getByText("数字文旅 / 非遗叙事")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "纹载山河作品图" }).getAttribute("src")).toContain("wen-zai-shan-he.png");

    cleanup();
    render(<ResearchPage />);
    expect(screen.getByRole("heading", { name: /Research Experience/ })).toBeInTheDocument();

    cleanup();
    render(<AboutPage />);
    expect(screen.getByRole("heading", { name: /About/ })).toBeInTheDocument();
    expect(screen.getByText(/看见/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Awards" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /What I’m Still Learning/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Education" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "GitHub" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Resume" })).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", "mailto:siqi_shen03@163.com");
    expect(screen.getByRole("link", { name: "Bonjour!" })).toHaveAttribute("href", "https://Bonjour/TrBvb84PBqTtzsG");
  });
});
