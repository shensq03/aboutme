"use client";

import Link from "next/link";
import { Home, Network, NotebookTabs, Sparkles } from "lucide-react";
import { navItems } from "@/data/profile";

const icons = [Home, NotebookTabs, Network, Sparkles];
const sectionAnchors: Record<string, string> = {
  "/": "#home",
  "/projects": "#projects-start",
  "/research": "#research-start",
  "/about": "#about-start"
};

export function SiteNav() {
  return (
    <header className="relative z-30">
      <nav className="soft-card flex min-h-12 w-max max-w-[calc(100vw-32px)] items-center justify-center gap-1 overflow-x-auto rounded-full px-2 py-1">
        {navItems.map((item, index) => {
          const Icon = icons[index];
          const sectionHref = sectionAnchors[item.href] ?? "#home";
          return (
            <Link
              key={item.href}
              href={sectionHref}
              className="flex h-10 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-medium text-[#464052] hover:bg-white hover:text-blue hover:shadow-soft md:px-5"
            >
              <Icon size={15} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
