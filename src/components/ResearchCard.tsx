import type { ResearchItem } from "@/data/profile";

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="interactive-card rounded-3xl border border-stroke bg-white p-5 shadow-soft">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <h2 className="text-lg font-semibold text-[#101942]">{item.title}</h2>
        <span className="text-sm font-semibold text-blue">{item.role}</span>
      </div>
      <p className="body-copy text-sm leading-6">{item.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="chip text-xs">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
