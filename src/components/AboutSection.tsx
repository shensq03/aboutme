import { Mail, Sparkles } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { awards, buildCapabilities, profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-6 pb-16 lg:min-h-screen">
      <svg className="leaf-sprig" viewBox="0 0 120 90" fill="none" aria-hidden="true">
        <path d="M12 76 C42 58 62 38 102 10" stroke="#4E7C6F" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 55 C29 51 26 39 36 32 C47 36 52 45 44 55Z" fill="#4E7C6F" />
        <path d="M67 36 C54 31 54 18 66 13 C76 21 78 31 67 36Z" fill="#4E7C6F" />
        <path d="M89 20 C78 15 81 5 93 3 C101 10 99 18 89 20Z" fill="#4E7C6F" />
      </svg>
      <div id="about-start" className="mb-5 scroll-mt-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue">About / 能力与联系</p>
        <h2 className="page-title mt-2">About / 能力与联系</h2>
        <p className="body-copy mx-auto mt-2 max-w-[720px]">持续构建，持续学习，持续连接。</p>
      </div>

      <div className="grid gap-5 lg:h-[calc(100vh-210px)] lg:min-h-[560px] lg:grid-cols-12">
        <div className="soft-card rounded-3xl p-5 lg:col-span-7">
          <h3 className="mb-4 text-2xl font-semibold text-[#101942]">What I Can Build / 我能构建什么</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {buildCapabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <article key={capability.title} className="interactive-card rounded-2xl border border-stroke bg-white p-4">
                  <div className="mb-3 flex min-h-8 items-center gap-3">
                    <Icon className="shrink-0 text-blue" size={26} />
                    <h4 className="font-semibold text-[#101942]">{capability.title}</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {capability.items.map((item) => (
                      <span key={item} className="chip justify-center text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 lg:col-span-5 lg:grid-rows-[0.85fr_1.15fr]">
          <div className="soft-card rounded-3xl p-5">
            <h3 className="mb-3 text-2xl font-semibold text-[#101942]">Awards</h3>
            <div className="flex flex-wrap gap-2">
              {awards.map((award) => (
                <span key={award} className="chip text-xs">
                  {award}
                </span>
              ))}
            </div>
          </div>

          <div className="soft-card rounded-3xl p-5">
            <h3 className="mb-4 text-2xl font-semibold text-[#101942]">Contact / 联系我</h3>
            <blockquote className="rounded-3xl border border-stroke bg-paper/70 p-5 text-lg leading-8 text-[#35304f]">
              我相信，看见本身就是一种力量。
              <br />
              而创造，始于看见，成于不完美的想法，
              <br />
              终于持续的探索。
            </blockquote>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionButton href={`mailto:${profile.email}`} label="Email" icon={Mail} />
              <ActionButton href="https://Bonjour/TrBvb84PBqTtzsG" label="Bonjour!" icon={Sparkles} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
