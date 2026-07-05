import Link from "next/link";
import { Home } from "lucide-react";

export function FloatingHomeButton() {
  return (
    <Link
      href="/"
      aria-label="回到首页"
      className="fixed right-5 top-1/2 z-50 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-stroke bg-white/86 text-blue shadow-soft backdrop-blur transition duration-200 hover:-translate-y-[calc(50%+2px)] hover:border-blue/30 hover:bg-white hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue md:right-7"
    >
      <Home size={18} />
    </Link>
  );
}
