import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ActionButtonProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  download?: boolean;
};

export function ActionButton({ href, label, icon: Icon, download }: ActionButtonProps) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-stroke bg-white px-4 text-sm font-medium text-[#292260] shadow-soft hover:bg-[rgba(108,124,255,0.08)] hover:shadow-glow"
    >
      <Icon size={16} />
      {label}
    </Link>
  );
}
