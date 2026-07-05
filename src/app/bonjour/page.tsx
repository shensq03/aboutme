import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, MoreHorizontal, Share2, UserPlus } from "lucide-react";
import { profile } from "@/data/profile";

export default function BonjourPage() {
  return (
    <main className="min-h-screen bg-white px-8 py-8 text-[#1f1f1f]">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[760px] flex-col">
        <header className="flex items-center justify-between">
          <Link href="/#home" className="grid h-16 w-16 place-items-center rounded-full border border-[#eeeeee] text-[#1f1f1f] hover:bg-[#f8f8f8]">
            <ArrowLeft size={34} />
          </Link>
          <div className="flex h-14 items-center gap-5 rounded-full border border-[#eeeeee] px-5">
            <MoreHorizontal size={30} />
            <span className="h-8 w-px bg-[#e5e5e5]" />
            <span className="h-2 w-8 rounded-full bg-[#1f1f1f]" />
            <span className="h-10 w-px bg-[#e5e5e5]" />
            <span className="grid h-9 w-9 place-items-center rounded-full border-[5px] border-[#1f1f1f]" />
          </div>
        </header>

        <section className="mt-28">
          <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
            <Image src="/profile-photo.jpg" alt="Siqi 头像" fill sizes="224px" className="object-cover object-center" priority />
          </div>

          <h1 className="mt-9 text-7xl font-semibold tracking-normal">Siqi</h1>
          <div className="mt-8 space-y-3 text-[28px] leading-[1.45]">
            <p>👋🏻hi 我是Siqi</p>
            <p>UESTC 计算机 研一</p>
            <p>致力于将算法、产品和审美结合的coder</p>
            <p>在技术追求效率之外，看见具体的人</p>
          </div>

          <p className="mt-10 text-[28px] leading-[1.5]">机器学习｜时序预测｜全栈开发｜AI产品</p>

          <div className="mt-8 grid max-w-[680px] grid-cols-2 gap-4 text-2xl">
            {["💻 UESTC 计算机研一", "🧙‍♀️ 乐队键盘手", "💡 探索AI改变世界的力量", "📍 中国·四川省·成都市"].map((item) => (
              <div key={item} className="rounded-full border border-[#eeeeee] px-6 py-4 shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-8 text-2xl font-semibold text-[#9a9a9a]">
            <span>
              <strong className="mr-2 text-[#3d7cff]">0</strong>好友
            </span>
            <span>
              <strong className="mr-2 text-[#3d7cff]">0</strong>夸夸
            </span>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-24 items-center gap-4 rounded-full bg-gradient-to-b from-[#3c78ff] to-[#a9c8ff] px-12 text-3xl font-semibold text-white shadow-[0_18px_42px_rgba(61,120,255,0.22)]"
            >
              <UserPlus size={36} />
              加好友
            </a>
            <a href={`mailto:${profile.email}`} className="grid h-24 w-24 place-items-center rounded-full border border-[#eeeeee] text-[#72c784]">
              <MessageCircle size={40} />
            </a>
            <span className="h-px flex-1 bg-[#eeeeee]" />
            <button className="grid h-24 w-24 place-items-center rounded-full border border-[#eeeeee] text-[#1f1f1f]">
              <MoreHorizontal size={36} />
            </button>
          </div>

          <div className="mt-[-20px] flex justify-end">
            <a href={`mailto:${profile.email}?subject=分享我的个人网页`} className="inline-flex h-24 items-center gap-4 rounded-full border border-[#eeeeee] bg-white px-12 text-3xl font-semibold text-[#3d7cff] shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
              <Share2 size={34} />
              分享我的
            </a>
          </div>
        </section>

        <footer className="mt-auto pt-12">
          <div className="rounded-[28px] border border-[#eeeeee] px-8 py-6 text-3xl text-[#6d6d6d] shadow-[0_8px_22px_rgba(0,0,0,0.04)]">
            <span className="mr-8 inline-block h-6 w-6 rounded-full bg-[#7b7b7b]" />
            Bonnie 正在想话题！
          </div>
        </footer>
      </div>
    </main>
  );
}
